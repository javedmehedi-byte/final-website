import { ApplyPayload, ContactPayload, PayFeesPayload, ValidationResult } from './types'

const phoneRegex = /^(?:\+?91[\/-\s]?|0)?[6-9]\d{9}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validatePayFees(payload: any): ValidationResult<PayFeesPayload> {
  const errors: Record<string, string> = {}
  if (!payload?.fullName || String(payload.fullName).trim().length < 2) errors.fullName = 'Full name is required'
  if (!payload?.phone || !phoneRegex.test(String(payload.phone))) errors.phone = 'Valid Indian phone is required'
  if (!payload?.email || !emailRegex.test(String(payload.email))) errors.email = 'Valid email is required'
  if (!payload?.programSlug) errors.programSlug = 'Program is required'
  if (!payload?.feeType) errors.feeType = 'Fee type is required'
  if (payload?.amount == null || Number(payload.amount) <= 0) errors.amount = 'Amount must be greater than 0'

  return {
    valid: Object.keys(errors).length === 0,
    data: Object.keys(errors).length === 0 ? (payload as PayFeesPayload) : undefined,
    errors: Object.keys(errors).length ? errors : undefined,
  }
}

export function validateApply(payload: any): ValidationResult<ApplyPayload> {
  const errors: Record<string, string> = {}
  if (!payload?.firstName) errors.firstName = 'First name is required'
  if (!payload?.lastName) errors.lastName = 'Last name is required'
  if (!payload?.email || !emailRegex.test(String(payload.email))) errors.email = 'Valid email is required'
  if (!payload?.phone || !phoneRegex.test(String(payload.phone))) errors.phone = 'Valid Indian phone is required'
  if (!payload?.address) errors.address = 'Address is required'
  if (!payload?.city) errors.city = 'City is required'
  if (!payload?.state) errors.state = 'State is required'
  if (!payload?.zip) errors.zip = 'ZIP is required'
  if (!payload?.dob) errors.dob = 'DOB is required'
  if (!payload?.programSlug) errors.programSlug = 'Program is required'
  if (!payload?.antiRaggingConsent) errors.antiRaggingConsent = 'Anti-ragging consent is required'
  if (!payload?.termsAccepted) errors.termsAccepted = 'Terms must be accepted'
  if (!payload?.signatureName) errors.signatureName = 'Signature name is required'
  if (!payload?.signatureDate) errors.signatureDate = 'Signature date is required'

  return {
    valid: Object.keys(errors).length === 0,
    data: Object.keys(errors).length === 0 ? (payload as ApplyPayload) : undefined,
    errors: Object.keys(errors).length ? errors : undefined,
  }
}

export function validateContact(payload: any): ValidationResult<ContactPayload> {
  const errors: Record<string, string> = {}
  if (!payload?.name) errors.name = 'Name is required'
  if (!payload?.email || !emailRegex.test(String(payload.email))) errors.email = 'Valid email is required'
  if (!payload?.message) errors.message = 'Message is required'

  return {
    valid: Object.keys(errors).length === 0,
    data: Object.keys(errors).length === 0 ? (payload as ContactPayload) : undefined,
    errors: Object.keys(errors).length ? errors : undefined,
  }
}
