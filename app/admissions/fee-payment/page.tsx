import Layout from '@/components/Layout'
import Link from 'next/link'

export default function FeePaymentPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Fee Payment</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure and convenient ways to pay your tuition and other college fees.
          </p>
        </div>
      </section>

      {/* Payment options */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-6">
          {/* Online Payments */}
          <article className="relative rounded-2xl border border-gray-200 bg-white p-6 transform-gpu transition-all duration-300 shadow-[0_1px_0_rgba(0,0,0,0.04),0_10px_20px_-10px_rgba(2,132,199,0.25)] hover:-translate-y-1 hover:shadow-[0_1px_0_rgba(0,0,0,0.05),0_20px_40px_-20px_rgba(2,132,199,0.35)]">
            <div className="absolute inset-y-0 left-0 w-1 rounded-l-xl bg-gradient-to-b from-blue-600 to-teal-500" aria-hidden />
            <h2 className="text-2xl font-bold text-gray-900">Online Payment</h2>
            <p className="text-gray-700 mt-2">Pay using UPI, NetBanking, or Debit/Credit Card.</p>
            <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
              <li>UPI apps (Google Pay, PhonePe, Paytm, BHIM)</li>
              <li>NetBanking (all major Indian banks)</li>
              <li>Cards (Visa, MasterCard, RuPay)</li>
            </ul>
            <div className="mt-6">
              <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Proceed to Pay</a>
              <p className="text-xs text-gray-500 mt-2">Note: Payment gateway link will open in a secure window.</p>
            </div>
          </article>

          {/* Bank Transfer */}
          <article className="relative rounded-2xl border border-gray-200 bg-white p-6 transform-gpu transition-all duration-300 shadow-[0_1px_0_rgba(0,0,0,0.04),0_10px_20px_-10px_rgba(2,132,199,0.25)] hover:-translate-y-1 hover:shadow-[0_1px_0_rgba(0,0,0,0.05),0_20px_40px_-20px_rgba(2,132,199,0.35)]">
            <div className="absolute inset-y-0 left-0 w-1 rounded-l-xl bg-gradient-to-b from-blue-600 to-teal-500" aria-hidden />
            <h2 className="text-2xl font-bold text-gray-900">Bank Transfer (NEFT/IMPS)</h2>
            <p className="text-gray-700 mt-2">Transfer fees directly to the college bank account.</p>
            <div className="mt-4 text-sm text-gray-800 space-y-1">
              <p><span className="text-gray-500">Account Name:</span> IHRC Paramedical College</p>
              <p><span className="text-gray-500">Account No.:</span> 000000000000 (update)</p>
              <p><span className="text-gray-500">IFSC:</span> ABCD0123456 (update)</p>
              <p><span className="text-gray-500">Bank & Branch:</span> Your Bank, Imphal (update)</p>
            </div>
            <p className="text-xs text-gray-500 mt-3">Use the remark: <span className="font-medium">Student Name – Program – Mobile</span>. Email the receipt to <span className="font-medium">admin@ihrcparamedicalcollege.com</span>.</p>
          </article>

          {/* Help & Receipts */}
          <article className="relative rounded-2xl border border-gray-200 bg-white p-6 transform-gpu transition-all duration-300 shadow-[0_1px_0_rgba(0,0,0,0.04),0_10px_20px_-10px_rgba(2,132,199,0.25)] hover:-translate-y-1 hover:shadow-[0_1px_0_rgba(0,0,0,0.05),0_20px_40px_-20px_rgba(2,132,199,0.35)]">
            <div className="absolute inset-y-0 left-0 w-1 rounded-l-xl bg-gradient-to-b from-blue-600 to-teal-500" aria-hidden />
            <h2 className="text-2xl font-bold text-gray-900">Need Help?</h2>
            <p className="text-gray-700 mt-2">For payment support or receipts, contact our office.</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li><span className="text-gray-500">Phone:</span> +91 7005176498</li>
              <li><span className="text-gray-500">Email:</span> admin@ihrcparamedicalcollege.com</li>
              <li><span className="text-gray-500">Office Hours:</span> Mon–Sat, 9:30 AM – 5:00 PM</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="inline-block border border-blue-600 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">Contact Us</Link>
              <Link href="/admissions" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Admissions</Link>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}
