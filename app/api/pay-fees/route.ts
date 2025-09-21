import { NextResponse } from 'next/server'
import { validatePayFees } from '@/lib/validate'
import { v4 as uuidv4 } from 'uuid'
import { createOrder, generateReceiptId } from '@/lib/razorpay'
import paymentDB from '@/lib/payment-db'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null)
    const result = validatePayFees(body)
    
    if (!result.valid) {
      return NextResponse.json({ ok: false, errors: result.errors }, { status: 400 })
    }
    
    const data = result.data!
    
    // Generate unique payment ID
    const paymentId = uuidv4()
    
    // Convert amount to paise (Razorpay uses smallest currency unit)
    const amountInPaise = Math.round(data.amount * 100)
    
    // Generate receipt ID for Razorpay
    const receipt = generateReceiptId(paymentId)
    
    // Create metadata for the payment
    const notes = {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      program: data.programSlug,
      feeType: data.feeType
    }
    
    // Create Razorpay order
    const order = await createOrder(amountInPaise, receipt, notes)
    
    // Store payment record in database
    paymentDB.createPayment({
      id: paymentId,
      orderId: order.id,
      paymentId: null, // Will be updated after payment completion
      studentName: data.fullName,
      studentEmail: data.email,
      studentPhone: data.phone,
      amount: data.amount,
      course: data.programSlug,
      semester: data.feeType.includes('semester') ? data.feeType : '',
      feeType: data.feeType,
      status: 'created',
      paymentDate: null,
      receiptUrl: null,
      notes: data.notes || null
    })
    
    // Return order details and Razorpay key to client
    return NextResponse.json({
      ok: true,
      orderId: order.id,
      amount: amountInPaise,
      currency: 'INR',
      key: process.env.RAZORPAY_KEY_ID,
      paymentId: paymentId,
      studentName: data.fullName,
      email: data.email,
      contact: data.phone
    })
    
  } catch (error: any) {
    console.error('Payment initialization error:', error)
    return NextResponse.json(
      { ok: false, error: error.message || 'Payment initialization failed' },
      { status: 500 }
    )
  }
}
