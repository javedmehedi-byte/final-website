export type FeeType =
  | 'semester1'
  | 'semester2'
  | 'semester3'
  | 'semester4'
  | 'semester5'
  | 'semester6'
  | 'admission'
  | 'exam'
  | 'other'

export interface PayFeesPayload {
  fullName: string
  phone: string
  email: string
  programSlug: string
  feeType: FeeType
  amount: number
  notes?: string
}

export interface ApplyPayload {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  dob: string // ISO date
  programSlug: string
  educationLevel?: string
  antiRaggingConsent: boolean
  termsAccepted: boolean
  communicationsConsent?: boolean
  signatureName: string
  signatureDate: string // ISO date
}

export interface ContactPayload {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

export interface ValidationResult<T> {
  valid: boolean
  data?: T
  errors?: Record<string, string>
}
