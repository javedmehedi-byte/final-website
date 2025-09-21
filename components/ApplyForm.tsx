"use client"
import { useState } from 'react'
import type { Program } from '@/data/paramedical'

export default function ApplyForm({ programs }: { programs: Program[] }) {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const form = e.currentTarget
      const fd = new FormData(form)
      const payload = {
        firstName: String(fd.get('firstName') || ''),
        lastName: String(fd.get('lastName') || ''),
        email: String(fd.get('email') || ''),
        phone: String(fd.get('phone') || ''),
        address: String(fd.get('address') || ''),
        city: String(fd.get('city') || ''),
        state: String(fd.get('state') || ''),
        zip: String(fd.get('zip') || ''),
        dob: String(fd.get('dob') || ''),
        programSlug: String(fd.get('programSlug') || ''),
        educationLevel: String(fd.get('educationLevel') || ''),
        antiRaggingConsent: fd.get('antiRaggingConsent') === 'on',
        termsAccepted: fd.get('termsAccepted') === 'on',
        communicationsConsent: fd.get('communicationsConsent') === 'on',
        signatureName: String(fd.get('signatureName') || ''),
        signatureDate: String(fd.get('signatureDate') || ''),
      }

      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/pdf' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        const msg = data?.errors ? Object.values(data.errors).join(', ') : 'Submission failed'
        throw new Error(msg)
      }

      const blob = await res.blob()
      const appId = res.headers.get('X-Application-Id') || 'application'
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `IHRC-Application-${appId}.pdf`
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)

      form.reset()
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {/* Names */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
          <input name="firstName" type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
          <input name="lastName" type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
      </div>

      {/* Contact */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input name="email" type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <input name="phone" type="tel" required pattern="^(?:\\+?91[\\/\\-\\s]?|0)?[6-9]\\d{9}$" inputMode="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
        <input name="address" type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
          <input name="city" type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
          <select name="state" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">Select State/UT</option>
            <optgroup label="States">
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chhattisgarh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
            </optgroup>
            <optgroup label="Union Territories">
              <option>Andaman and Nicobar Islands</option>
              <option>Chandigarh</option>
              <option>Dadra and Nagar Haveli and Daman and Diu</option>
              <option>Delhi</option>
              <option>Jammu and Kashmir</option>
              <option>Ladakh</option>
              <option>Lakshadweep</option>
              <option>Puducherry</option>
            </optgroup>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
          <input name="zip" type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
        <input name="dob" type="date" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Program of Interest *</label>
        <select name="programSlug" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option value="">Select a program</option>
          {programs.map((p) => (
            <option key={p.slug} value={p.slug}>{p.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Highest Level of Education</label>
        <select name="educationLevel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option value="">Select education level</option>
          <option value="high-school">High School Diploma</option>
          <option value="ged">GED</option>
          <option value="some-college">Some College</option>
          <option value="associates">Associate's Degree</option>
          <option value="bachelors">Bachelor's Degree</option>
          <option value="masters">Master's Degree</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Consents */}
      <div className="border-t pt-6">
        <div className="flex items-start space-x-3">
          <input name="termsAccepted" type="checkbox" id="terms" required className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I agree to the <a href="/terms" className="text-blue-600 hover:underline">Terms and Conditions</a> and
            <a href="/privacy" className="text-blue-600 hover:underline ml-1">Privacy Policy</a>.
          </label>
        </div>
        <div className="flex items-start space-x-3 mt-4">
          <input name="antiRaggingConsent" type="checkbox" id="anti-ragging" required className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
          <label htmlFor="anti-ragging" className="text-sm text-gray-700">
            I will not engage in any form of ragging and will abide by the college's <a href="/anti-ragging" className="text-blue-600 hover:underline">Anti‑Ragging Policy</a>.
          </label>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <input name="communicationsConsent" type="checkbox" id="communications" className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
        <label htmlFor="communications" className="text-sm text-gray-700">
          I consent to receive communications from IHRC Paramedical College.
        </label>
      </div>

      {/* Signature */}
      <div className="grid md:grid-cols-2 gap-6 pt-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Applicant Signature *</label>
          <input name="signatureName" type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Type your full name" />
          <p className="text-xs text-gray-500 mt-2">Typing your full name serves as your digital signature.</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Signature Date *</label>
          <input name="signatureDate" type="date" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      <div className="pt-2">
        <button type="submit" disabled={submitting} className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-60">
          {submitting ? 'Submitting…' : 'Submit Application'}
        </button>
      </div>
    </form>
  )
}
