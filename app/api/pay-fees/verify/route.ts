import { NextRequest, NextResponse } from 'next/server';
import { verifyPayment, getPaymentDetails } from '@/lib/razorpay';
import paymentDB from '@/lib/payment-db';
import { generatePaymentReceipt } from '../../../../lib/receipt';
import { sendPaymentReceipt } from '@/lib/mailer';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Extract payment verification data
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, payment_id } = body;
    
    // Verify payment signature
    const isValidSignature = verifyPayment(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    );
    
    if (!isValidSignature) {
      return NextResponse.json(
        { ok: false, error: 'Invalid payment signature' },
        { status: 400 }
      );
    }
    
    // Get payment from database
    const payment = paymentDB.getPaymentById(payment_id);
    if (!payment) {
      return NextResponse.json(
        { ok: false, error: 'Payment record not found' },
        { status: 404 }
      );
    }
    
    // Get payment details from Razorpay
    const paymentDetails = await getPaymentDetails(razorpay_payment_id);
    
    // Update payment record in database
    const updatedPayment = paymentDB.updatePayment(payment_id, {
      paymentId: razorpay_payment_id,
      status: paymentDetails.status === 'captured' ? 'captured' : 'authorized',
      paymentDate: new Date().toISOString()
    });
    
    if (!updatedPayment) {
      return NextResponse.json(
        { ok: false, error: 'Failed to update payment record' },
        { status: 500 }
      );
    }
    
    // Generate payment receipt PDF
    const receiptBuffer = await generatePaymentReceipt(updatedPayment, razorpay_payment_id);
    
    // Generate receipt URL (this would normally save the PDF somewhere and return a URL)
    // For now, we'll just use a placeholder and handle actual receipt download separately
    const receiptUrl = `/api/pay-fees/receipt/${payment_id}`;
    
    // Update payment with receipt URL
    const finalPayment = paymentDB.updatePayment(payment_id, {
      receiptUrl
    });
    
    // Send payment receipt via email
    try {
      await sendPaymentReceipt({
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        studentName: updatedPayment.studentName,
        studentEmail: updatedPayment.studentEmail,
        amount: updatedPayment.amount,
        course: updatedPayment.course,
        feeType: updatedPayment.feeType,
        paymentDate: updatedPayment.paymentDate!,
        receiptPdf: receiptBuffer
      });
    } catch (emailError) {
      console.error('Failed to send receipt email:', emailError);
      // Continue processing even if email fails
    }
    
    // Return success response
    return NextResponse.json({
      ok: true,
      payment: {
        id: finalPayment?.id,
        status: finalPayment?.status,
        amount: finalPayment?.amount,
        receiptUrl: finalPayment?.receiptUrl,
      }
    });
    
  } catch (error: any) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { ok: false, error: error.message || 'Payment verification failed' },
      { status: 500 }
    );
  }
}