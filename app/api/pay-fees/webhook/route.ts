import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import paymentDB from '../../../../lib/payment-db'
import { generatePaymentReceipt } from '../../../../lib/receipt'
import { sendPaymentReceipt } from '../../../../lib/mailer'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function verifyWebhookSignature(rawBody: string, signature: string, secret: string): boolean {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex')
  return expected === signature
}

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET
  if (!webhookSecret) {
    return new NextResponse('Webhook secret not configured', { status: 500 })
  }

  // Read the raw body for signature verification
  const rawBody = await request.text()
  const signature = request.headers.get('x-razorpay-signature') || ''

  if (!signature || !verifyWebhookSignature(rawBody, signature, webhookSecret)) {
    return new NextResponse('Invalid signature', { status: 401 })
  }

  let event: any
  try {
    event = JSON.parse(rawBody)
  } catch {
    return new NextResponse('Invalid JSON', { status: 400 })
  }

  try {
    const type: string = event?.event || ''

    if (type === 'payment.captured' || type === 'payment.authorized') {
      const payment = event.payload?.payment?.entity
      const paymentId: string | undefined = payment?.id
      const orderId: string | undefined = payment?.order_id

      if (paymentId || orderId) {
        let record = paymentId ? paymentDB.getPaymentByPaymentId(paymentId) : null
        if (!record && orderId) {
          record = paymentDB.getPaymentByOrderId(orderId)
        }

        if (record) {
          const newStatus = type === 'payment.captured' ? 'captured' : 'authorized'
          const updated = paymentDB.updatePayment(record.id, {
            paymentId: paymentId || record.paymentId,
            status: newStatus,
            paymentDate: new Date().toISOString(),
          })

          // If captured and no receipt yet, generate and email
          if (updated && newStatus === 'captured' && !updated.receiptUrl) {
            try {
              const receiptBuffer = await generatePaymentReceipt(updated, updated.paymentId || 'PAYMENT')
              const receiptUrl = `/api/pay-fees/receipt/${updated.id}`
              const finalPayment = paymentDB.updatePayment(updated.id, { receiptUrl })

              await sendPaymentReceipt({
                paymentId: updated.paymentId || 'PAYMENT',
                orderId: updated.orderId,
                studentName: updated.studentName,
                studentEmail: updated.studentEmail,
                amount: updated.amount,
                course: updated.course,
                feeType: updated.feeType,
                paymentDate: updated.paymentDate || new Date().toISOString(),
                receiptPdf: receiptBuffer,
              })
            } catch (err) {
              console.error('Webhook receipt/email failed:', err)
            }
          }
        }
      }
    } else if (type === 'order.paid') {
      const order = event.payload?.order?.entity
      const orderId: string | undefined = order?.id
      if (orderId) {
        const record = paymentDB.getPaymentByOrderId(orderId)
        if (record) {
          paymentDB.updatePayment(record.id, {
            status: 'captured',
            paymentDate: new Date().toISOString(),
          })
        }
      }
    }
  } catch (e) {
    // Log but always acknowledge 200 to prevent repeated retries if our processing fails
    console.error('Webhook handling error:', e)
  }

  // Always acknowledge receipt to Razorpay
  return NextResponse.json({ ok: true })
}

// Optional convenience handler so the endpoint responds in a browser
export async function GET() {
  return NextResponse.json({
    ok: true,
    message: 'Razorpay webhook endpoint is up. Use POST with a valid X-Razorpay-Signature.'
  })
}

// Respond to HEAD requests (used by some health checks)
export async function HEAD() {
  return new NextResponse(null, { status: 200, headers: { 'Accept': 'application/json' } })
}

// Respond to OPTIONS for preflight or method discovery
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Allow': 'GET, POST, HEAD, OPTIONS',
      'Access-Control-Allow-Methods': 'GET, POST, HEAD, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-Razorpay-Signature'
    }
  })
}
