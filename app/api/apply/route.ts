import { NextResponse } from 'next/server'
export const runtime = 'nodejs'
import { validateApply } from '@/lib/validate'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { sendApplicationEmail } from '../../../lib/mailer'

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)
  const result = validateApply(body)
  if (!result.valid) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 400 })
  }
  const ref = `APP-${Date.now().toString(36).toUpperCase()}`

  // Build a simple printable PDF with applicant details
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([595.28, 841.89]) // A4 portrait in points
  const { width } = page.getSize()
  const margin = 50
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

  // Header
  page.drawText('IHRC Paramedical College', {
    x: margin,
    y: 800,
    size: 20,
    font: fontBold,
    color: rgb(0.12, 0.35, 0.71),
  })
  page.drawText('Application Form', { x: margin, y: 775, size: 14, font: fontBold })
  page.drawText(`Application No: ${ref}`, { x: width - margin - 250, y: 775, size: 12, font })

  const startY = 740
  let y = startY
  const lineGap = 22
  const small = 11

  const row = (label: string, value: string) => {
    page.drawText(label, { x: margin, y, size: small, font: fontBold })
    page.drawText(value || '-', { x: margin + 160, y, size: small, font })
    y -= lineGap
  }

  const d = result.data!
  row('First Name:', d.firstName)
  row('Last Name:', d.lastName)
  row('Email:', d.email)
  row('Phone:', d.phone)
  row('Address:', d.address)
  row('City:', d.city)
  row('State:', d.state)
  row('ZIP:', d.zip)
  row('Date of Birth:', d.dob)
  row('Program:', d.programSlug)
  row('Education Level:', d.educationLevel || '-')
  row('Anti-Ragging Consent:', d.antiRaggingConsent ? 'Yes' : 'No')
  row('Terms Accepted:', d.termsAccepted ? 'Yes' : 'No')
  row('Communications Consent:', d.communicationsConsent ? 'Yes' : 'No')
  row('Signature Name:', d.signatureName)
  row('Signature Date:', d.signatureDate)

  const pdfBytes = await pdfDoc.save()

  // Optionally email PDF to admin and applicant if SMTP is configured
  try {
    await sendApplicationEmail({
      applicationId: ref,
      applicantEmail: d.email,
      applicantName: `${d.firstName} ${d.lastName}`,
      pdfBuffer: Buffer.from(pdfBytes),
    })
  } catch (e) {
    // Log but do not fail the request
    console.warn('Email not sent:', e)
  }

  const nodeBuffer = Buffer.from(pdfBytes)
  const res = new NextResponse(nodeBuffer as any, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="IHRC-Application-${ref}.pdf"`,
      'X-Application-Id': ref,
    },
  })
  return res
}
