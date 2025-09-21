import { NextRequest, NextResponse } from 'next/server';
import paymentDB from '@/lib/payment-db';
import { generatePaymentReceipt } from '@/lib/receipt';

export async function GET(
  request: NextRequest, 
  { params }: { params: { id: string } }
) {
  try {
    const paymentId = params.id;
    
    // Get payment from database
    const payment = paymentDB.getPaymentById(paymentId);
    
    if (!payment) {
      return new NextResponse('Payment not found', { status: 404 });
    }
    
    // Check if payment is complete
    if (payment.status !== 'captured' && payment.status !== 'authorized') {
      return new NextResponse('Payment not completed', { status: 400 });
    }
    
    // Generate receipt PDF
    const receiptBuffer = await generatePaymentReceipt(
      payment,
      payment.paymentId || `MANUAL-${payment.id}`
    );
    
    // Set headers for PDF download
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', `attachment; filename="IHRC-Payment-Receipt-${payment.id}.pdf"`);
    
    // Return the PDF as response
    const bytes = new Uint8Array(receiptBuffer)
    return new Response(bytes, {
      status: 200,
      headers
    });
    
  } catch (error: any) {
    console.error('Error generating receipt:', error);
    return new NextResponse(
      `Failed to generate receipt: ${error.message}`,
      { status: 500 }
    );
  }
}