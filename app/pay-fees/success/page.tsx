'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Layout from '@/components/Layout';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('id');
  
  const [paymentDetails, setPaymentDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (paymentId) {
      fetchPaymentDetails(paymentId);
    } else {
      setLoading(false);
      setError('Payment information not found');
    }
  }, [paymentId]);
  
  const fetchPaymentDetails = async (id: string) => {
    try {
      const response = await fetch(`/api/pay-fees/details?id=${id}`);
      const data = await response.json();
      
      if (!data.ok) {
        throw new Error(data.error || 'Failed to fetch payment details');
      }
      
      setPaymentDetails(data.payment);
    } catch (err: any) {
      console.error('Error fetching payment details:', err);
      setError(err.message || 'Failed to load payment information');
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading payment information...</p>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (error || !paymentDetails) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-red-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-3">Payment Information Unavailable</h1>
            <p className="text-gray-600 mb-6">{error || 'Could not retrieve payment details. Please contact support.'}</p>
            <div className="mt-6">
              <Link href="/pay-fees" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Return to Payment Page
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-800">Payment Successful!</h1>
              <p className="text-gray-600 mt-2">Your payment has been processed successfully.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl mb-6">
              <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Payment ID</p>
                  <p className="font-medium">{paymentDetails.paymentId || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Amount Paid</p>
                  <p className="font-medium">₹ {paymentDetails.amount?.toLocaleString('en-IN') || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-medium">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      paymentDetails.status === 'captured' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {paymentDetails.status === 'captured' ? 'PAID' : 'AUTHORIZED'}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">
                    {paymentDetails.paymentDate 
                      ? new Date(paymentDetails.paymentDate).toLocaleDateString('en-IN', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric',
                        })
                      : 'N/A'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-6 p-4 border border-blue-100 rounded-lg bg-blue-50">
              <div className="flex items-start">
                <div className="shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Receipt Information</h3>
                  <p className="text-sm text-blue-700 mt-1">
                    A copy of your receipt has been emailed to your registered email address. 
                    You can also download a copy of the receipt using the button below.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mt-8">
              <a
                href={`/api/pay-fees/receipt/${paymentDetails.id}`}
                download={`IHRC-Payment-Receipt-${paymentDetails.id}.pdf`}
                className="bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Download Receipt
              </a>
              <Link href="/"
                className="text-blue-600 border border-blue-200 bg-blue-50 text-center px-6 py-3 rounded-lg font-medium hover:bg-blue-100 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}