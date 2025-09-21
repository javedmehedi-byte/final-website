import Layout from '@/components/Layout'

function committeeGradient(index: number) {
  // Explicit Tailwind classes to avoid purge
  if (index === 0) return 'from-indigo-200/60 via-blue-100/60 to-white'
  if (index === 1) return 'from-blue-200/60 via-cyan-100/60 to-white'
  return 'from-teal-200/60 via-emerald-100/60 to-white'
}

function committeeStrip(index: number) {
  // Explicit Tailwind classes for the left accent strip
  if (index === 0) return 'from-indigo-600 to-blue-500'
  if (index === 1) return 'from-blue-600 to-cyan-500'
  return 'from-teal-600 to-emerald-500'
}

export default function AntiRaggingPage() {
  return (
    <Layout>
      {/* Hero with helpline */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Anti-Ragging Policy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              IHRC Paramedical College maintains a zero‑tolerance stance on ragging. We’re committed to a safe, respectful, and inclusive campus for every student.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-xl border shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Helpline</h3>
              <p className="text-gray-600 mb-4">Report incidents immediately. Your safety is our priority.</p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+917005176498" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700">
                  <span>Call: +91 7005176498</span>
                </a>
                <a href="mailto:antirag@ihrcparamedical.edu.in" className="inline-flex items-center gap-2 border border-blue-600 text-blue-700 px-5 py-3 rounded-lg font-semibold hover:bg-blue-50">
                  Email Report
                </a>
              </div>
            </div>
            <div className="bg-blue-600 text-white rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Zero Tolerance</h3>
              <p className="text-blue-50">Ragging in any form is prohibited and will lead to strict disciplinary action.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment and Definition */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-gray-700 mb-4">
              We are dedicated to building an environment where students learn and thrive without intimidation or harassment. Any individual engaging in ragging will face immediate action under institutional rules and applicable laws.
            </p>
            <p className="text-gray-700">
              All students must adhere to the Code of Conduct and participate in awareness programs during orientation and throughout the year.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">What is “Ragging”?</h3>
            <p className="text-gray-700 mb-4">
              Ragging refers to any act—spoken, written, or physical—that causes or is likely to cause annoyance, hardship, psychological harm, or fear in a student. This includes teasing, abuse, humiliation, or disruptive behavior that impacts a student’s dignity or safety.
            </p>
            <details className="group border rounded-lg p-4">
              <summary className="cursor-pointer select-none font-medium text-gray-900 flex items-center justify-between">
                Examples and Prohibited Behaviors
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <ul className="mt-3 text-gray-700 list-disc pl-5 space-y-1">
                <li>Compelling a student to perform humiliating tasks</li>
                <li>Verbal abuse, bullying, or threats online or offline</li>
                <li>Forcing attendance at activities under duress</li>
                <li>Any behavior creating a hostile environment</li>
              </ul>
            </details>
          </div>
        </div>
      </section>

      {/* Penalties timeline */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Penalties for Ragging</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">Strict disciplinary actions will be imposed on those found guilty, proportional to the severity of the incident.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Suspension from classes and academic privileges',
              'Withholding/withdrawing scholarship and other benefits',
              'Debarring from examinations or evaluation processes',
              'Withholding results',
              'Debarring from institutional representation',
              'Suspension/expulsion from hostel',
              'Cancellation of admission',
              'Rustication for one to four semesters',
              'Expulsion and debarment from future admissions',
            ].map((text, idx) => (
              <div key={text} className="bg-white rounded-xl border shadow-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">{idx + 1}</div>
                  <p className="text-gray-800">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Channels */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Report Ragging</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">Multiple channels are available. Choose the one you’re most comfortable with.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900">24/7 Helpline</h3>
              <p className="text-gray-600 mt-1">Call anytime</p>
              <p className="mt-3 font-medium">+91 7005176498</p>
              <span className="mt-2 inline-block text-xs px-2 py-1 rounded bg-green-100 text-green-800">24/7 Available</span>
            </div>
            <div className="bg-white rounded-xl border shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900">Email Report</h3>
              <p className="text-gray-600 mt-1">Send a detailed incident report</p>
              <a href="mailto:antirag@ihrcparamedical.edu.in" className="mt-3 inline-block font-medium text-blue-700 hover:underline">antirag@ihrcparamedical.edu.in</a>
              <span className="mt-2 inline-block text-xs px-2 py-1 rounded bg-blue-100 text-blue-800">Response within 24 hours</span>
            </div>
            <div className="bg-white rounded-xl border shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900">Anonymous Box</h3>
              <p className="text-gray-600 mt-1">Drop complaints anonymously</p>
              <p className="mt-3">Located in campus premises</p>
              <span className="mt-2 inline-block text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-800">Daily collection</span>
            </div>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-2">Additional Reporting Methods</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Inform any member of the Anti‑Ragging Committee</li>
              <li>Use the suggestion/complaint box for anonymous reports</li>
              <li>Helpline: +91 7005176498 | Email: antirag@ihrcparamedical.edu.in</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Committee */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Anti‑Ragging Committee</h2>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {[
              { name: 'Prof. Dr. Mayengbam Modhumangal Singh', role: 'Chair, Vice-Chancellor of Academic Board' },
              { name: 'Prof. Dr. Chanam Manglem Singh', role: 'Dean, IHRC Paramedical College' },
              { name: 'Selina Seram', role: 'Industry Expert, Academic Board' },
            ].map((m, idx) => (
              <div key={m.name} className={`h-full rounded-2xl p-[1px] bg-gradient-to-br ${committeeGradient(idx)} shadow-sm`}>
                <div className="relative h-full bg-white rounded-[15px] border p-6">
                  <div className={`absolute inset-y-0 left-0 w-1 rounded-l-[15px] bg-gradient-to-b ${committeeStrip(idx)}`} aria-hidden />
                  <h3 className="text-lg font-semibold text-gray-900">{m.name}</h3>
                  <p className="text-gray-600">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Measures */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Prevention Measures</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { t: 'Orientation Programs', d: 'Induction sessions explaining policies and campus culture.' },
              { t: 'Regular Monitoring', d: 'Faculty and staff monitor student areas and activities.' },
              { t: 'Awareness Campaigns', d: 'Workshops and posters highlighting the impact of ragging.' },
              { t: 'Counseling Support', d: 'Professional counseling for affected students.' },
            ].map((i) => (
              <div key={i.t} className="bg-white rounded-xl border shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900">{i.t}</h3>
                <p className="text-gray-700 mt-1">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Together We Can Stop Ragging</h2>
          <p className="text-blue-50 max-w-2xl mx-auto mb-8">If you experience or witness any form of ragging, report it immediately. We’ll act swiftly and confidentially.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917005176498" className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:opacity-95">Call Helpline</a>
            <a href="mailto:antirag@ihrcparamedical.edu.in" className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10">Report Online</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
