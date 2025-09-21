import Razorpay from 'razorpay';
import crypto from 'crypto';

// Initialize Razorpay instance with your API keys
export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
});

/**
 * Create a new payment order with Razorpay
 * @param amount - Amount in INR (smallest currency unit, i.e., paise)
 * @param receipt - Receipt ID (unique identifier for your reference)
 * @param notes - Optional metadata to associate with the order
 * @returns Razorpay order object
 */
export async function createOrder(amount: number, receipt: string, notes: Record<string, any> = {}) {
  try {
    const order = await razorpay.orders.create({
      amount, // Amount in smallest currency unit (paise for INR)
      currency: 'INR',
      receipt,
      notes,
    });
    
    return order;
  } catch (error: any) {
    console.error('Razorpay order creation failed:', error);
    throw new Error(`Payment initialization failed: ${error.message}`);
  }
}

/**
 * Verify Razorpay payment signature to ensure payment is authentic
 * @param orderId - Razorpay order ID
 * @param paymentId - Razorpay payment ID
 * @param signature - Signature received from Razorpay
 * @returns boolean indicating if signature is valid
 */
export function verifyPayment(orderId: string, paymentId: string, signature: string): boolean {
  const key_secret = process.env.RAZORPAY_KEY_SECRET || '';
  
  // Generate a signature based on the order ID and payment ID
  const expectedSignature = crypto
    .createHmac('sha256', key_secret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');
  
  // Compare the generated signature with the one received from Razorpay
  return expectedSignature === signature;
}

/**
 * Fetch payment details from Razorpay
 * @param paymentId - Razorpay payment ID
 * @returns Payment details object
 */
export async function getPaymentDetails(paymentId: string) {
  try {
    const payment = await razorpay.payments.fetch(paymentId);
    return payment;
  } catch (error: any) {
    console.error('Failed to fetch payment details:', error);
    throw new Error(`Could not retrieve payment information: ${error.message}`);
  }
}

/**
 * Generate a unique receipt ID for Razorpay
 * @param studentId - Student ID or another unique identifier
 * @returns Receipt ID string
 */
export function generateReceiptId(studentId: string): string {
  const timestamp = new Date().getTime();
  return `IHRC-${studentId}-${timestamp}`;
}