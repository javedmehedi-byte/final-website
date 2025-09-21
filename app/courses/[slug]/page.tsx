import Layout from '@/components/Layout'
import programs from '@/data/paramedical'
import Link from 'next/link'

export async function generateStaticParams() {
  return programs.map(p => ({ slug: p.slug }))
}

export default function CourseDetail({ params }: { params: { slug: string } }) {
  const program = programs.find(p => p.slug === params.slug)
  if (!program) {
    return (
      <Layout>
        <section className="py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Program not found</h1>
          <Link href="/courses" className="text-blue-600 hover:underline">Back to Courses</Link>
        </section>
      </Layout>
    )
  }

  return (
    <Layout>
      <section className="bg-gradient-to-br from-blue-50 to-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm mb-4 text-gray-600"><Link href="/courses" className="hover:text-blue-600">Courses</Link> / <span className="text-gray-900">{program.name}</span></nav>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{program.name}</h1>
          <p className="text-gray-700 max-w-3xl">{program.summary}</p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* Quick Facts */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-4">
              <div className="text-xs uppercase tracking-wide text-blue-700">Level</div>
              <div className="text-sm font-semibold text-gray-900 mt-1">{program.level}</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 rounded-xl p-4">
              <div className="text-xs uppercase tracking-wide text-teal-700">Duration</div>
              <div className="text-sm font-semibold text-gray-900 mt-1">{program.duration}</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-100 rounded-xl p-4">
              <div className="text-xs uppercase tracking-wide text-indigo-700">Seats</div>
              <div className="text-sm font-semibold text-gray-900 mt-1">{program.seats}</div>
            </div>
            <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 border border-fuchsia-100 rounded-xl p-4">
              <div className="text-xs uppercase tracking-wide text-fuchsia-700">Fee</div>
              <div className="text-sm font-semibold text-gray-900 mt-1">{program.fee}</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-4">
              <div className="text-xs uppercase tracking-wide text-amber-700">Internship</div>
              <div className="text-sm font-semibold text-gray-900 mt-1">{program.internship}</div>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <Link href="/apply" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Apply Now</Link>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Highlights as colored cards */}
            <div>
              <h2 className="text-2xl font-bold mb-5">Program Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {program.highlights.map((h, i) => (
                  <div key={i} className={
                    'rounded-xl p-5 border shadow-sm bg-gradient-to-br ' +
                    (i % 3 === 0 ? 'from-blue-50 to-cyan-50 border-blue-100' : i % 3 === 1 ? 'from-teal-50 to-emerald-50 border-teal-100' : 'from-indigo-50 to-sky-50 border-indigo-100')
                  }>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-white/70 grid place-items-center text-blue-600">
                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      </div>
                      <p className="text-gray-800 font-medium">{h}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus as pill cards */}
            <div>
              <h2 className="text-2xl font-bold mb-5">Syllabus Overview</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {program.syllabus.map((s, i) => (
                  <div key={i} className={
                    'rounded-lg px-4 py-3 border bg-gradient-to-r ' +
                    (i % 2 === 0 ? 'from-fuchsia-50 to-pink-50 border-fuchsia-100' : 'from-amber-50 to-orange-50 border-amber-100')
                  }>
                    <div className="flex items-center gap-2 text-gray-800">
                      <svg className="w-4 h-4 text-fuchsia-600" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v2H4zM4 11h16v2H4zM4 18h10v2H4z"/></svg>
                      <span className="font-medium">{s}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Paths as colored chips */}
            <div>
              <h2 className="text-2xl font-bold mb-5">Career Paths</h2>
              <div className="flex flex-wrap gap-3">
                {program.careerPaths.map((c, i) => (
                  <span key={i} className={
                    'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border bg-gradient-to-r ' +
                    (i % 3 === 0 ? 'from-blue-50 to-cyan-50 border-blue-200 text-blue-800' : i % 3 === 1 ? 'from-teal-50 to-emerald-50 border-teal-200 text-teal-800' : 'from-indigo-50 to-sky-50 border-indigo-200 text-indigo-800')
                  }>
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M2.166 4.334A2 2 0 014 3h12a2 2 0 011.834 1.334l.666 2A2 2 0 0116.667 9H3.333A2 2 0 01.5 6.334l.666-2zM3 10h14v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5z"/></svg>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="h-fit space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-teal-500 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Get Started</h3>
              <p className="text-blue-50 mb-4">Secure your seat for the upcoming session. Limited seats available.</p>
              <div className="space-y-3">
                <Link href="/apply" className="block w-full text-center bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:opacity-95">Apply Now</Link>
                <Link href="/brochure.pdf" className="block w-full text-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10">Download Brochure</Link>
              </div>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Eligibility</h3>
              <ul className="space-y-3">
                {program.eligibility.map((e, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-800">
                    <span className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-700 grid place-items-center">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  )
}
