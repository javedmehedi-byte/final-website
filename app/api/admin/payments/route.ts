export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/serverAuth';
import paymentDB from '@/lib/payment-db';

export async function GET(request: NextRequest) {
  try {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Get all payment records
    const payments = paymentDB.getAllPayments();
    
    // Sort by date (newest first)
    payments.sort((a, b) => {
      const dateA = a.paymentDate ? new Date(a.paymentDate).getTime() : new Date(a.createdAt).getTime();
      const dateB = b.paymentDate ? new Date(b.paymentDate).getTime() : new Date(b.createdAt).getTime();
      return dateB - dateA;
    });
    
    return NextResponse.json(payments);
  } catch (error: any) {
    console.error('Error fetching payment records:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch payment records' },
      { status: 500 }
    );
  }
}