import { NextRequest, NextResponse } from 'next/server';
import paymentDB from '@/lib/payment-db';

export async function GET(request: NextRequest) {
  try {
    // Get payment ID from query parameters
    const searchParams = request.nextUrl.searchParams;
    const paymentId = searchParams.get('id');
    
    if (!paymentId) {
      return NextResponse.json(
        { ok: false, error: 'Payment ID is required' },
        { status: 400 }
      );
    }
    
    // Get payment details from database
    const payment = paymentDB.getPaymentById(paymentId);
    
    if (!payment) {
      return NextResponse.json(
        { ok: false, error: 'Payment not found' },
        { status: 404 }
      );
    }
    
    // Return payment details (excluding sensitive info)
    return NextResponse.json({
      ok: true,
      payment: {
        id: payment.id,
        paymentId: payment.paymentId,
        studentName: payment.studentName,
        studentEmail: payment.studentEmail,
        amount: payment.amount,
        course: payment.course,
        feeType: payment.feeType,
        status: payment.status,
        paymentDate: payment.paymentDate,
        receiptUrl: payment.receiptUrl,
      }
    });
  } catch (error: any) {
    console.error('Error fetching payment details:', error);
    return NextResponse.json(
      { ok: false, error: error.message || 'Failed to fetch payment details' },
      { status: 500 }
    );
  }
}