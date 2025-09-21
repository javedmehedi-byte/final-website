import { NextResponse } from 'next/server'
import { validateContact } from '@/lib/validate'

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)
  const result = validateContact(body)
  if (!result.valid) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 400 })
  }
  const ref = `MSG-${Date.now().toString(36).toUpperCase()}`
  return NextResponse.json({ ok: true, messageId: ref })
}
