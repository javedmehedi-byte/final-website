"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AuthCheck from '@/components/AuthCheck'

export default function AdminPayments() {
  const [payments, setPayments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()
  
  // Load payments
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch('/api/admin/payments');
        
        if (!response.ok) {
          throw new Error('Failed to load payment records');
        }
        
        const data = await response.json();
        setPayments(data);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    
    fetchPayments();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth/logout', {
        method: 'POST',
      });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <AuthCheck>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Payment Records</h1>
            <div className="space-x-4">
              <Link
                href="/admin"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Applications
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          </div>
        
        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-md mb-6">
            {error}
          </div>
        )}
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : payments.length === 0 ? (
          <div className="bg-gray-100 p-6 rounded-md text-center">
            <p className="text-gray-600">No payment records found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Payment ID</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Student Name</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Course</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Fee Type</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Amount</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Date</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {payments.map((payment: any) => (
                  <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-700">{payment.paymentId || 'N/A'}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{payment.studentName}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{payment.course}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {payment.feeType === 'admission' ? 'Admission Fee' :
                       payment.feeType === 'exam' ? 'Examination Fee' :
                       payment.feeType.includes('semester') ? `Semester ${payment.feeType.replace('semester', '')}` :
                       'Other Fee'}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-900">{formatCurrency(payment.amount)}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        payment.status === 'created' ? 'bg-yellow-100 text-yellow-800' : 
                        payment.status === 'authorized' ? 'bg-blue-100 text-blue-800' :
                        payment.status === 'captured' ? 'bg-green-100 text-green-800' :
                        payment.status === 'refunded' ? 'bg-purple-100 text-purple-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {payment.status === 'created' ? 'Created' : 
                         payment.status === 'authorized' ? 'Authorized' :
                         payment.status === 'captured' ? 'Paid' : 
                         payment.status === 'refunded' ? 'Refunded' : 'Failed'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {formatDate(payment.paymentDate)}
                    </td>
                    <td className="py-3 px-4 space-x-2 whitespace-nowrap">
                      {payment.receiptUrl && (
                        <a 
                          href={payment.receiptUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          View Receipt
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
    </AuthCheck>
  );
}