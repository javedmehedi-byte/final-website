import Layout from '@/components/Layout'
import PaymentForm from '@/components/PaymentForm'

export default function PayFeesPage() {
  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Pay Fees</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Submit your payment details through our secure online form.
          </p>
        </div>
      </section>

      {/* Payment Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
            <PaymentForm />
          </div>
        </div>
      </section>

      {/* Payment Instructions */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Payment Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Bank Transfer Details</h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium text-gray-900">Account Name:</span> IHRC Paramedical College</p>
                <p><span className="font-medium text-gray-900">Account Number:</span> XXXXX XXXXX</p>
                <p><span className="font-medium text-gray-900">IFSC Code:</span> XXXX0000XXX</p>
                <p><span className="font-medium text-gray-900">Bank Name:</span> State Bank of India</p>
                <p><span className="font-medium text-gray-900">Branch:</span> Imphal</p>
                <p className="text-sm text-gray-600 mt-4">
                  For NEFT/IMPS transfers, please use your Name and Program as reference.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Payment Guidelines</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Please ensure all details entered are accurate.</li>
                <li>Keep a copy of your payment confirmation for your records.</li>
                <li>For payment issues, contact our finance office at <span className="text-blue-600">admin@ihrcparamedicalcollege.com</span>.</li>
                <li>Payment receipts will be emailed within 24-48 hours.</li>
                <li>A late fee may be applicable for payments after the due date.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}