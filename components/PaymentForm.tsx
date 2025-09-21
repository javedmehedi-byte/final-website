'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import programs, { type Program } from '@/data/paramedical';
import { type FeeType } from '@/lib/types';

// Define Razorpay interface for TypeScript
declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PaymentForm() {
  const router = useRouter();
  
  // Form state
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [programSlug, setProgramSlug] = useState('');
  const [feeType, setFeeType] = useState<FeeType | ''>('');
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Helper function to validate the form
  const validateForm = () => {
    // Basic form validation
    if (!fullName || !phone || !email || !programSlug || !feeType || !amount) {
      setError('Please fill in all required fields');
      return false;
    }
    
    // Validate amount
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      setError('Please enter a valid amount');
      return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    
    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.replace(/[^0-9]/g, ''))) {
      setError('Please enter a valid 10-digit Indian mobile number');
      return false;
    }
    
    return true;
  };
  
  // Load Razorpay script
  const loadRazorpay = (): Promise<boolean> => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => {
        setError('Failed to load payment gateway. Please try again later.');
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  
  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Validate the form
    if (!validateForm()) return;
    
    try {
      setIsSubmitting(true);
      
      // Format the data for the API
      const formData = {
        fullName,
        phone,
        email,
        programSlug,
        feeType,
        amount: parseFloat(amount),
        notes: notes || undefined
      };
      
      // Create order via our API
      const response = await fetch('/api/pay-fees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!data.ok) {
        throw new Error(data.error || 'Failed to initialize payment');
      }
      
      // Ensure Razorpay script is loaded
      const scriptLoaded = await loadRazorpay();
      if (!scriptLoaded) {
        throw new Error('Failed to load payment gateway');
      }
      
      // Initialize Razorpay
      const razorpay = new window.Razorpay({
        key: data.key,
        amount: data.amount.toString(),
        currency: 'INR',
        name: 'IHRC Paramedical College',
        description: `${feeType.replace(/semester/i, 'Semester ')} Payment`,
        order_id: data.orderId,
        prefill: {
          name: fullName,
          email: email,
          contact: phone
        },
        notes: {
          program: programSlug,
          feeType: feeType,
          payment_id: data.paymentId
        },
        handler: function(response: any) {
          // Handle successful payment
          verifyPayment({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            payment_id: data.paymentId
          });
        },
        modal: {
          ondismiss: function() {
            setIsSubmitting(false);
          }
        },
        theme: {
          color: '#1e40af'
        }
      });
      
      razorpay.open();
    } catch (err: any) {
      console.error('Payment error:', err);
      setError(err.message || 'Payment initialization failed. Please try again.');
      setIsSubmitting(false);
    }
  };
  
  // Verify payment with our API
  const verifyPayment = async (paymentData: any) => {
    try {
      const response = await fetch('/api/pay-fees/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentData)
      });
      
      const data = await response.json();
      
      if (!data.ok) {
        throw new Error(data.error || 'Payment verification failed');
      }
      
      // Redirect to payment success page with payment details
      router.push(`/pay-fees/success?id=${paymentData.payment_id}`);
    } catch (err: any) {
      console.error('Verification error:', err);
      setError(err.message || 'Payment verification failed. Please contact support.');
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 "
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <p className="mt-1 text-xs text-gray-500">10-digit Indian mobile number</p>
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
            Program *
          </label>
          <select
            id="program"
            name="program"
            value={programSlug}
            onChange={(e) => setProgramSlug(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select your program</option>
            {programs.map((program: Program) => (
              <option key={program.slug} value={program.slug}>
                {program.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="feeType" className="block text-sm font-medium text-gray-700 mb-1">
            Semester / Fee Type *
          </label>
          <select
            id="feeType"
            name="feeType"
            value={feeType}
            onChange={(e) => setFeeType(e.target.value as FeeType)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select fee type</option>
            <option value="semester1">Semester 1</option>
            <option value="semester2">Semester 2</option>
            <option value="semester3">Semester 3</option>
            <option value="semester4">Semester 4</option>
            <option value="semester5">Semester 5</option>
            <option value="semester6">Semester 6</option>
            <option value="admission">Admission Fee</option>
            <option value="exam">Examination Fee</option>
            <option value="other">Other Fee</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
          Payment Amount (₹) *
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="100"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <p className="mt-1 text-xs text-gray-500">Razorpay will present you with all available payment methods during checkout</p>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-lg font-bold text-lg text-white transition-colors ${
            isSubmitting 
              ? 'bg-blue-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? 'Processing...' : 'Proceed to Pay'}
        </button>
        <p className="mt-3 text-xs text-center text-gray-500">
          Note: You will be redirected to our secure payment gateway after submission.
        </p>
      </div>
    </form>
  );
}