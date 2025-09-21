import nodemailer from 'nodemailer'

type MailInput = {
  applicationId: string
  applicantEmail: string
  applicantName: string
  pdfBuffer: Buffer
}

type PaymentReceiptInput = {
  paymentId: string
  orderId: string
  studentName: string
  studentEmail: string
  amount: number
  course: string
  feeType: string
  paymentDate: string
  receiptPdf: Buffer
}

// Create a transporter function that can be reused
function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
  
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null
  }
  
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })
}

/**
 * Send application emails to admin and applicant
 */
export async function sendApplicationEmail(input: MailInput): Promise<{sent: boolean; error?: string}> {
  const { ADMIN_EMAIL_TO, ADMIN_EMAIL_FROM } = process.env
  
  if (!ADMIN_EMAIL_TO || !ADMIN_EMAIL_FROM) {
    console.log('Email configuration missing. Skipping application email.')
    return { sent: false, error: 'Email configuration missing' }
  }
  
  const transporter = createTransporter()
  if (!transporter) {
    console.log('SMTP configuration missing. Skipping application email.')
    return { sent: false, error: 'SMTP configuration missing' }
  }
  
  try {
    const subject = `IHRC Application ${input.applicationId}`
    
    const attachments = [
      {
        filename: `IHRC-Application-${input.applicationId}.pdf`,
        content: input.pdfBuffer,
        contentType: 'application/pdf',
      },
    ]
    
    // Send to admin
    await transporter.sendMail({
      from: ADMIN_EMAIL_FROM,
      to: ADMIN_EMAIL_TO,
      subject,
      text: `New application received from ${input.applicantName} (${input.applicantEmail}). Application ID: ${input.applicationId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e3a8a; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">New Application Received</h1>
          </div>
          <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <p>A new application has been received with the following details:</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Application ID</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${input.applicationId}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Name</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${input.applicantName}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${input.applicantEmail}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Date</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${new Date().toLocaleDateString()}</td>
              </tr>
            </table>
            <p>The complete application is attached as a PDF file.</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>This is an automated message from IHRC Paramedical College Application System.</p>
          </div>
        </div>
      `,
      attachments,
    })
    
    // Send to applicant
    await transporter.sendMail({
      from: ADMIN_EMAIL_FROM,
      to: input.applicantEmail,
      subject: `Your IHRC Paramedical College Application - ${input.applicationId}`,
      text: `Thank you for applying to IHRC Paramedical College. Your Application ID is ${input.applicationId}. A copy of your application is attached as PDF.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e3a8a; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Application Received</h1>
          </div>
          <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <p>Dear ${input.applicantName},</p>
            <p>Thank you for applying to IHRC Paramedical College. We have received your application successfully.</p>
            <div style="background-color: #f3f4f6; padding: 15px; margin: 15px 0; border-radius: 5px; text-align: center;">
              <p style="margin: 0; font-weight: bold;">Your Application ID: ${input.applicationId}</p>
            </div>
            <p>Please keep this ID for future reference. A copy of your complete application is attached to this email.</p>
            <p>What happens next:</p>
            <ol>
              <li>Our admissions team will review your application.</li>
              <li>You will be contacted for any additional documents or information if required.</li>
              <li>After the review process, you will receive a decision regarding your application.</li>
            </ol>
            <p>If you have any questions regarding your application, please contact our admissions office at <a href="mailto:admin@ihrcparamedicalcollege.com">admin@ihrcparamedicalcollege.com</a> or call us at +91 7005176498.</p>
            <p>We look forward to welcoming you to our campus!</p>
            <p>Best regards,<br>Admissions Team<br>IHRC Paramedical College</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      `,
      attachments,
    })
    
    return { sent: true }
  } catch (error: any) {
    console.error('Error sending application email:', error.message)
    return { sent: false, error: error.message }
  }
}

/**
 * Send payment receipt emails to admin and student
 */
export async function sendPaymentReceipt(input: PaymentReceiptInput): Promise<{sent: boolean; error?: string}> {
  const { ADMIN_EMAIL_TO, ADMIN_EMAIL_FROM } = process.env
  
  if (!ADMIN_EMAIL_TO || !ADMIN_EMAIL_FROM) {
    console.log('Email configuration missing. Skipping payment receipt email.')
    return { sent: false, error: 'Email configuration missing' }
  }
  
  const transporter = createTransporter()
  if (!transporter) {
    console.log('SMTP configuration missing. Skipping payment receipt email.')
    return { sent: false, error: 'SMTP configuration missing' }
  }
  
  try {
    // Format amount for display
    const formattedAmount = input.amount.toLocaleString('en-IN')
    
    // Format date for display
    const paymentDate = new Date(input.paymentDate).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
    
    const subject = `IHRC Payment Receipt - ₹${formattedAmount}`
    
    // Attachments
    const attachments = [
      {
        filename: `IHRC-Payment-Receipt-${input.paymentId}.pdf`,
        content: input.receiptPdf,
        contentType: 'application/pdf',
      },
    ]
    
    // Send to admin
    await transporter.sendMail({
      from: ADMIN_EMAIL_FROM,
      to: ADMIN_EMAIL_TO,
      subject,
      text: `Payment received from ${input.studentName} (${input.studentEmail}). Amount: ₹${formattedAmount}, Payment ID: ${input.paymentId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e3a8a; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">New Payment Received</h1>
          </div>
          <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <p>A new payment has been received with the following details:</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Payment ID</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${input.paymentId}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Order ID</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${input.orderId}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Student Name</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${input.studentName}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${input.studentEmail}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Amount</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">₹${formattedAmount}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Course</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${input.course}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Fee Type</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${input.feeType}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Date</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${paymentDate}</td>
              </tr>
            </table>
            <p>The complete receipt is attached as a PDF file.</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>This is an automated message from IHRC Paramedical College Payment System.</p>
          </div>
        </div>
      `,
      attachments,
    })
    
    // Send to student
    await transporter.sendMail({
      from: ADMIN_EMAIL_FROM,
      to: input.studentEmail,
      subject: `Your IHRC Paramedical College Payment Receipt`,
      text: `Thank you for your payment to IHRC Paramedical College. Your Payment ID is ${input.paymentId}. A copy of your payment receipt is attached as PDF.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e3a8a; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Payment Receipt</h1>
          </div>
          <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <p>Dear ${input.studentName},</p>
            <p>Thank you for your payment to IHRC Paramedical College. We have received your payment successfully.</p>
            <div style="background-color: #f3f4f6; padding: 15px; margin: 15px 0; border-radius: 5px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Payment ID:</td>
                  <td style="padding: 8px;">${input.paymentId}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Amount:</td>
                  <td style="padding: 8px;">₹${formattedAmount}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Date:</td>
                  <td style="padding: 8px;">${paymentDate}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Course:</td>
                  <td style="padding: 8px;">${input.course}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Fee Type:</td>
                  <td style="padding: 8px;">${input.feeType}</td>
                </tr>
              </table>
            </div>
            <p>Please find attached the official payment receipt for your records. We recommend saving this receipt for future reference.</p>
            <p>If you have any questions regarding your payment, please contact our accounts office at <a href="mailto:admin@ihrcparamedicalcollege.com">admin@ihrcparamedicalcollege.com</a> or call us at +91 7005176498.</p>
            <p>Thank you for choosing IHRC Paramedical College for your education.</p>
            <p>Best regards,<br>Accounts Department<br>IHRC Paramedical College</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      `,
      attachments,
    })
    
    return { sent: true }
  } catch (error: any) {
    console.error('Error sending payment receipt email:', error.message)
    return { sent: false, error: error.message }
  }
}
