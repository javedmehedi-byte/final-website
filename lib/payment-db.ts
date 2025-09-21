import fs from 'fs';
import path from 'path';

// Define payment status types
export type PaymentStatus = 'created' | 'authorized' | 'captured' | 'refunded' | 'failed';

// Define payment record structure
export interface PaymentRecord {
  id: string;
  orderId: string;
  paymentId: string | null;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  amount: number;
  course: string;
  semester: string;
  feeType: string;
  status: PaymentStatus;
  paymentDate: string | null;
  receiptUrl: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}

// Define payment database class
class PaymentDB {
  private filePath: string;
  private payments: PaymentRecord[];

  constructor() {
    this.filePath = path.join(process.cwd(), 'data', 'payments.json');
    this.payments = this.loadPayments();
  }

  // Load payments from JSON file
  private loadPayments(): PaymentRecord[] {
    try {
      // Create directory if it doesn't exist
      const dir = path.dirname(this.filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Create file if it doesn't exist
      if (!fs.existsSync(this.filePath)) {
        fs.writeFileSync(this.filePath, JSON.stringify([]));
        return [];
      }

      // Read and parse file
      const data = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error loading payments data:', error);
      return [];
    }
  }

  // Save payments to JSON file
  private savePayments(): void {
    try {
      const dir = path.dirname(this.filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(this.filePath, JSON.stringify(this.payments, null, 2));
    } catch (error) {
      console.error('Error saving payments data:', error);
    }
  }

  // Get all payments
  getAllPayments(): PaymentRecord[] {
    return this.payments;
  }

  // Get payment by ID
  getPaymentById(id: string): PaymentRecord | null {
    return this.payments.find(payment => payment.id === id) || null;
  }

  // Get payment by order ID
  getPaymentByOrderId(orderId: string): PaymentRecord | null {
    return this.payments.find(payment => payment.orderId === orderId) || null;
  }

  // Get payment by payment ID
  getPaymentByPaymentId(paymentId: string): PaymentRecord | null {
    return this.payments.find(payment => payment.paymentId === paymentId) || null;
  }

  // Create a new payment record
  createPayment(payment: Omit<PaymentRecord, 'createdAt' | 'updatedAt'>): PaymentRecord {
    const now = new Date().toISOString();
    const newPayment: PaymentRecord = {
      ...payment,
      createdAt: now,
      updatedAt: now
    };

    this.payments.push(newPayment);
    this.savePayments();
    return newPayment;
  }

  // Update an existing payment record
  updatePayment(id: string, updates: Partial<PaymentRecord>): PaymentRecord | null {
    const paymentIndex = this.payments.findIndex(payment => payment.id === id);
    if (paymentIndex === -1) return null;

    const updatedPayment = {
      ...this.payments[paymentIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    };

    this.payments[paymentIndex] = updatedPayment;
    this.savePayments();
    return updatedPayment;
  }

  // Delete a payment record
  deletePayment(id: string): boolean {
    const paymentIndex = this.payments.findIndex(payment => payment.id === id);
    if (paymentIndex === -1) return false;

    this.payments.splice(paymentIndex, 1);
    this.savePayments();
    return true;
  }
}

// Create and export a singleton instance
const paymentDB = new PaymentDB();
export default paymentDB;