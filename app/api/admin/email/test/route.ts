import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function GET(request: NextRequest) {
  try {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ADMIN_EMAIL_FROM } = process.env

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !ADMIN_EMAIL_FROM) {
      return NextResponse.json(
        { ok: false, error: 'SMTP/Email env vars missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ADMIN_EMAIL_FROM.' },
        { status: 400 }
      )
    }

    const url = new URL(request.url)
    const to = url.searchParams.get('to') || process.env.ADMIN_EMAIL_TO || SMTP_USER

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })

    const info = await transporter.sendMail({
      from: ADMIN_EMAIL_FROM,
      to,
      subject: 'IHRC Test Email',
      text: 'This is a test email from IHRC website to verify SMTP configuration.',
    })

    return NextResponse.json({ ok: true, messageId: info.messageId, to })
  } catch (error: any) {
    console.error('SMTP test failed:', error)
    return NextResponse.json({ ok: false, error: error.message || 'SMTP test failed' }, { status: 500 })
  }
}
