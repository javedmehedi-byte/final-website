import Layout from '@/components/Layout'
import Link from 'next/link'

export default function About() {
  return (
    <Layout>
      {/* About Header */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">IHRC Paramedical College</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            IHRC Paramedical College, located at Lalambung RIMS Road, Imphal West, Manipur, is dedicated to building a new generation of skilled and compassionate healthcare professionals. Established with the motto “Skilling Future Caregivers,” the college focuses on academic excellence, practical training, and ethical values to strengthen healthcare delivery in Manipur, the Northeast, and beyond. By fostering excellence, integrity, compassion, and innovation, IHRC Paramedical College strives to build the next generation of allied health professionals who will play a key role in improving healthcare delivery.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          {/* Mission card with 3D gradient */}
          <div className="relative group rounded-3xl p-8 bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-600 text-white shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.25),transparent_65%)]" />
            <div className="relative flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/25 shadow-inner">
                {/* Mission icon: compass/target */}
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3M21 12h-3M12 21v-3M3 12h3"/></svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tight drop-shadow-sm mt-2">Our Mission</h2>
            </div>
            <ul className="relative space-y-3 text-white/90 leading-relaxed antialiased text-[15px]">
              {[
                'Provide quality education and training in paramedical sciences through a competency-based curriculum, experienced faculty, and hands-on clinical exposure.',
                'Develop skilled and compassionate healthcare professionals who are committed to patient care, ethical practice, and lifelong learning.',
                'Promote research and innovation in allied health sciences to strengthen evidence-based practice and improve healthcare delivery.',
                'Collaborate with hospitals, universities, and healthcare institutions to ensure continuous professional development and career opportunities for students.',
                'Contribute to community health through outreach, preventive care initiatives, and awareness campaigns across Manipur and Northeast India.'
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 w-2.5 h-2.5 rounded-full bg-white/70 shadow ring-2 ring-white/40 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="absolute -bottom-12 -right-10 w-56 h-56 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          </div>
          {/* Vision card with 3D gradient */}
            <div className="relative group rounded-3xl p-8 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.25),transparent_65%)]" />
              <div className="relative flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/25 shadow-inner">
                  {/* Vision icon: eye/forward */}
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h2 className="text-2xl font-bold tracking-tight drop-shadow-sm mt-2">Our Vision</h2>
              </div>
              <p className="relative text-white/90 leading-relaxed antialiased font-medium text-[15px]">
                To be a nationally recognised centre of excellence in paramedical education and applied healthcare training. We aspire to cultivate a generation of compassionate, technically proficient, and ethically grounded healthcare professionals who lead improvements in patient care, adapt to evolving medical technologies, and contribute to healthier communities through service and innovation.
              </p>
              <div className="absolute -bottom-12 -right-10 w-56 h-56 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            </div>
  </div>
      </section>

      {/* Academic Board Section */}
      <section className="py-14 bg-gradient-to-b from-teal-800/60 via-teal-900/70 to-slate-950/80 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.10),transparent_65%)]" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-white mb-10 tracking-tight">Academic Board of IHRC</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Background Card */}
            <div className="group relative rounded-3xl p-8 bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-700 text-white shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.25),transparent_65%)]" />
              <div className="relative flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/25 shadow-inner">
                  {/* Background icon: layers */}
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4-9 4-9-4z"/><path d="M3 10l9 4 9-4"/><path d="M3 16l9 4 9-4"/></svg>
                </div>
                <h3 className="text-2xl font-bold tracking-tight drop-shadow-sm mt-2">Background</h3>
              </div>
              <p className="relative text-white/90 leading-relaxed antialiased text-[15px] font-medium">
                The Academic Board of IHRC Paramedical College is constituted pursuant to the decision of the Board of Directors of Imphal Hospital &amp; Research Centre Pvt. Ltd. on 15 July 2015 (Ref. No. IHRC/VOL-4-2025-261). The Board's objective is to ensure academic excellence, compliance with affiliating university norms, and adherence to statutory guidelines.
              </p>
              <div className="absolute -bottom-12 -right-10 w-56 h-56 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            </div>
            {/* Members Card */}
            <div className="group relative rounded-3xl p-8 bg-gradient-to-br from-fuchsia-600 via-pink-600 to-rose-600 text-white shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.25),transparent_65%)]" />
              <div className="relative flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/25 shadow-inner">
                  {/* Members icon: users */}
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.85"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
                <h3 className="text-2xl font-bold tracking-tight drop-shadow-sm mt-2">Members</h3>
              </div>
              <ol className="relative space-y-3 text-white/90 leading-relaxed antialiased text-[15px] font-medium list-decimal list-inside">
                <li><span className="font-semibold text-white">Prof. Dr. Chanam Manglem Singh</span> — Chairperson</li>
                <li><span className="font-semibold text-white">Dr. Mayengbam Madhumangal Singh</span> — Vice-Chairperson</li>
                <li><span className="font-semibold text-white">Dr. Keinou Javed Mehedi</span> — Secretary</li>
                <li><span className="font-semibold text-white">Dr. Rajkumari Shanti Devi</span> — External Expert</li>
                <li><span className="font-semibold text-white">Celina Seram</span> — Industry Expert</li>
                <li><span className="font-semibold text-white">M. Jimmy</span> — Financial Expert</li>
              </ol>
              <div className="absolute -bottom-12 -right-10 w-56 h-56 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Compassionate Care',
                desc: 'Empathy-driven and patient‑first training.',
                gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z"/></svg>
                )
              },
              {
                title: 'Academic Excellence',
                desc: 'High standards in teaching and learning.',
                gradient: 'from-indigo-500 via-violet-500 to-purple-600',
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10l8-4 8 4-8 4-8-4z"/><path d="M12 14v7"/><path d="M6 12v5a6 6 0 0012 0v-5"/></svg>
                )
              },
              {
                title: 'Professional Ethics',
                desc: 'Integrity and responsibility in practice.',
                gradient: 'from-emerald-500 via-teal-500 to-green-600',
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"/><path d="M9 12l2 2 4-4"/></svg>
                )
              },
              {
                title: 'Industry Leadership',
                desc: 'Preparing future‑ready healthcare talent.',
                gradient: 'from-amber-400 via-orange-500 to-red-500',
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21l2-5 5-5 5-2 2-5-5 2-2 5-5 5-5 2z"/><path d="M12 12l4 4"/></svg>
                )
              }
            ].map((v, i) => (
              <div
                key={i}
                className={`group relative rounded-3xl p-6 text-white shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] bg-gradient-to-br ${v.gradient} overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_-15px_rgba(0,0,0,0.65)]`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.25),transparent_65%)]" />
                <div className="relative flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/25 shadow-inner">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold tracking-tight text-[15px] mb-2 drop-shadow-sm">{v.title}</h3>
                    <p className="text-xs md:text-sm leading-relaxed text-white/90 font-medium">{v.desc}</p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Achievements — removed per request */}

      {/* Facilities (colorful 3D gradient cards) */}
      <section className="py-14 bg-slate-950 bg-gradient-to-b from-slate-900 via-slate-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.08),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-white mb-10 text-center tracking-tight">Our Facilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Own Advanced Lab',
                desc: 'In-house hematology, microbiology, biochemistry and pathology labs mirroring hospital standards.',
                gradient: 'from-fuchsia-500 via-pink-500 to-rose-500',
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v6.5L5.2 18a3.8 3.8 0 003.3 5.5h7a3.8 3.8 0 003.3-5.5L14 8.5V2"/><path d="M8 18h8"/></svg>
                ),
              },
              {
                title: 'Own Dialysis Unit',
                desc: 'Hands-on training with in-house dialysis machines for safe hemodialysis procedures.',
                gradient: 'from-cyan-500 via-sky-500 to-blue-600',
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="14" rx="2"/><path d="M11 6h2M11 10h2"/><path d="M12 16v3a3 3 0 01-6 0"/><path d="M12 16v3a3 3 0 006 0"/></svg>
                ),
              },
              {
                title: 'Own Operation Theatre',
                desc: 'Sterile in-house OT setup for instrumentation, asepsis and peri-operative training.',
                gradient: 'from-amber-400 via-orange-500 to-red-500',
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5l5 5M14.5 9.5l-5 5"/></svg>
                ),
              },
              {
                title: 'Robust Faculties',
                desc: 'Clinically experienced, student-centric teaching staff ensuring outcome-driven learning.',
                gradient: 'from-emerald-500 via-teal-500 to-green-600',
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12a5 5 0 100-10 5 5 0 000 10z"/><path d="M2 22a8 8 0 0116 0"/></svg>
                ),
              },
              {
                title: 'Digital Learning Resources',
                desc: 'Access to e-learning materials, journals and structured case discussions.',
                gradient: 'from-indigo-500 via-violet-500 to-purple-600',
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/></svg>
                ),
              },
              {
                title: 'Student Support Services',
                desc: 'Guidance, mentoring and career counselling for academic success.',
                gradient: 'from-slate-600 via-gray-700 to-gray-900',
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 8a5 5 0 1110 0"/><path d="M12 13v5"/><path d="M9 22h6"/><path d="M5 11a7 7 0 0014 0"/></svg>
                ),
              },
            ].map((f, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl p-6 text-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.55)] bg-gradient-to-br ${f.gradient} overflow-hidden transition-all duration-300 hover:shadow-[0_25px_45px_-10px_rgba(0,0,0,0.6)] hover:-translate-y-1`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30 shadow-inner">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold tracking-tight text-[15px] mb-1 drop-shadow-sm">{f.title}</h3>
                    <p className="text-xs md:text-sm leading-relaxed text-white/90 font-medium">{f.desc}</p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approvals & Affiliations (paraphrased) */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Approvals & Affiliations</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">
            Affiliated to Manipur International University and recognized by relevant medical education authorities.
          </p>
          {/* CTA removed per request */}
        </div>
      </section>
    </Layout>
  )
}
