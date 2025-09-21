import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { PaymentRecord } from './payment-db';

/**
 * Generate a PDF receipt for a payment
 * @param payment - Payment record
 * @param paymentId - Razorpay payment ID
 * @returns Buffer containing the PDF
 */
export async function generatePaymentReceipt(payment: PaymentRecord, paymentId: string): Promise<Buffer> {
  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();
  
  // Add a page
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size
  
  // Get fonts
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  
  // Set some constants for positioning
  const margin = 50;
  const pageWidth = page.getWidth();
  const pageHeight = page.getHeight();
  
  // Draw college logo/name
  page.drawText('IHRC PARAMEDICAL COLLEGE', {
    x: margin,
    y: pageHeight - margin - 30,
    size: 24,
    font: helveticaBold,
    color: rgb(0.15, 0.25, 0.56), // Dark blue
  });
  
  // Draw receipt title
  page.drawText('PAYMENT RECEIPT', {
    x: margin,
    y: pageHeight - margin - 70,
    size: 18,
    font: helveticaBold,
    color: rgb(0, 0, 0),
  });
  
  // Draw horizontal line
  page.drawLine({
    start: { x: margin, y: pageHeight - margin - 85 },
    end: { x: pageWidth - margin, y: pageHeight - margin - 85 },
    thickness: 1,
    color: rgb(0, 0, 0),
  });
  
  // Receipt Details
  const startY = pageHeight - margin - 120;
  const lineHeight = 25;
  
  // Format date for display
  const paymentDate = payment.paymentDate 
    ? new Date(payment.paymentDate).toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : 'N/A';
  
  const receiptDetails = [
    { label: 'Receipt No:', value: paymentId },
    { label: 'Date:', value: paymentDate },
    { label: 'Student Name:', value: payment.studentName },
    { label: 'Email:', value: payment.studentEmail },
    { label: 'Phone:', value: payment.studentPhone },
    { label: 'Course:', value: payment.course },
  ];
  
  // Draw receipt details
  receiptDetails.forEach((detail, index) => {
    const y = startY - index * lineHeight;
    
    // Label
    page.drawText(detail.label, {
      x: margin,
      y,
      size: 11,
      font: helveticaBold,
    });
    
    // Value
    page.drawText(detail.value, {
      x: margin + 100,
      y,
      size: 11,
      font: helvetica,
    });
  });
  
  // Draw horizontal line for payment details section
  page.drawLine({
    start: { x: margin, y: startY - receiptDetails.length * lineHeight - 20 },
    end: { x: pageWidth - margin, y: startY - receiptDetails.length * lineHeight - 20 },
    thickness: 1,
    color: rgb(0, 0, 0),
  });
  
  // Payment Details Section
  const paymentY = startY - receiptDetails.length * lineHeight - 50;
  
  page.drawText('Payment Details', {
    x: margin,
    y: paymentY,
    size: 14,
    font: helveticaBold,
  });
  
  // Payment table headers
  const tableY = paymentY - 30;
  const cols = [margin, margin + 200, margin + 350];
  
  page.drawText('Description', {
    x: cols[0],
    y: tableY,
    size: 11,
    font: helveticaBold,
  });
  
  page.drawText('Fee Type', {
    x: cols[1],
    y: tableY,
    size: 11,
    font: helveticaBold,
  });
  
  page.drawText('Amount (₹)', {
    x: cols[2],
    y: tableY,
    size: 11,
    font: helveticaBold,
  });
  
  // Draw line under headers
  page.drawLine({
    start: { x: margin, y: tableY - 5 },
    end: { x: pageWidth - margin, y: tableY - 5 },
    thickness: 0.5,
    color: rgb(0, 0, 0),
  });
  
  // Fee description based on type
  let feeDescription = '';
  if (payment.feeType === 'admission') {
    feeDescription = 'Admission Fee';
  } else if (payment.feeType.includes('semester')) {
    feeDescription = `${payment.course} - Semester ${payment.feeType.replace('semester', '')} Fee`;
  } else if (payment.feeType === 'exam') {
    feeDescription = 'Examination Fee';
  } else {
    feeDescription = 'Other Fee';
  }
  
  // Payment item row
  const itemY = tableY - 25;
  
  page.drawText(feeDescription, {
    x: cols[0],
    y: itemY,
    size: 10,
    font: helvetica,
  });
  
  page.drawText(payment.feeType, {
    x: cols[1],
    y: itemY,
    size: 10,
    font: helvetica,
  });
  
  // Format the amount with commas for thousands separator
  const formattedAmount = payment.amount.toLocaleString('en-IN');
  
  page.drawText(formattedAmount, {
    x: cols[2],
    y: itemY,
    size: 10,
    font: helvetica,
  });
  
  // Draw line under items
  page.drawLine({
    start: { x: margin, y: itemY - 5 },
    end: { x: pageWidth - margin, y: itemY - 5 },
    thickness: 0.5,
    color: rgb(0, 0, 0),
  });
  
  // Total row
  const totalY = itemY - 25;
  
  page.drawText('Total', {
    x: cols[1],
    y: totalY,
    size: 12,
    font: helveticaBold,
  });
  
  page.drawText(formattedAmount, {
    x: cols[2],
    y: totalY,
    size: 12,
    font: helveticaBold,
  });
  
  // Draw double line under total
  page.drawLine({
    start: { x: margin, y: totalY - 5 },
    end: { x: pageWidth - margin, y: totalY - 5 },
    thickness: 0.5,
    color: rgb(0, 0, 0),
  });
  
  page.drawLine({
    start: { x: margin, y: totalY - 7 },
    end: { x: pageWidth - margin, y: totalY - 7 },
    thickness: 0.5,
    color: rgb(0, 0, 0),
  });
  
  // Payment status
  const statusY = totalY - 40;
  
  page.drawText('Payment Status:', {
    x: margin,
    y: statusY,
    size: 12,
    font: helveticaBold,
  });
  
  const statusText = payment.status === 'captured' ? 'PAID' : 'AUTHORIZED';
  const statusColor = payment.status === 'captured' ? rgb(0, 0.5, 0) : rgb(0.8, 0.4, 0);
  
  page.drawText(statusText, {
    x: margin + 110,
    y: statusY,
    size: 12,
    font: helveticaBold,
    color: statusColor,
  });
  
  // Payment method 
  page.drawText('Payment ID:', {
    x: margin,
    y: statusY - 25,
    size: 10,
    font: helveticaBold,
  });
  
  page.drawText(paymentId, {
    x: margin + 110,
    y: statusY - 25,
    size: 10,
    font: helvetica,
  });
  
  // Footer
  const footerY = 100;
  
  page.drawText('This is a computer-generated receipt and does not require a signature.', {
    x: margin,
    y: footerY,
    size: 10,
    font: helveticaOblique,
    color: rgb(0.4, 0.4, 0.4),
  });
  
  page.drawText('For any queries, please contact the accounts department.', {
    x: margin,
    y: footerY - 20,
    size: 10,
    font: helvetica,
  });
  
  page.drawText('Phone: +91 7005176498 | Email: admin@ihrcparamedicalcollege.com', {
    x: margin,
    y: footerY - 40,
    size: 10,
    font: helvetica,
  });
  
  // Get PDF as buffer
  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}