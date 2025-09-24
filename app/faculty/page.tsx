import Layout from '@/components/Layout'

type Role = 'Dean' | 'Program Coordinator' | 'Lecturer' | 'Faculty'
type Variant = 'dean' | 'mlt' | 'ot' | 'dialysis'

type FacultyMember = {
  name: string
  role: Role
  qualification?: string
}

function roleStyles(role: Role) {
  // Return explicit Tailwind classes (no dynamic interpolation) so they are preserved after purge
  if (role === 'Dean') {
    return {
      strip: 'from-indigo-600 to-indigo-400',
      chip: 'bg-indigo-50 text-indigo-700'
    }
  }
  if (role === 'Program Coordinator') {
    return {
      strip: 'from-blue-600 to-cyan-500',
      chip: 'bg-blue-50 text-blue-700'
    }
  }
  if (role === 'Lecturer') {
    return {
      strip: 'from-emerald-600 to-teal-500',
      chip: 'bg-emerald-50 text-emerald-700'
    }
  }
  return {
    // Faculty
    strip: 'from-purple-600 to-fuchsia-500',
    chip: 'bg-purple-50 text-purple-700'
  }
}

function groupGradient(variant?: Variant) {
  // Explicit classes only to satisfy Tailwind's purge
  switch (variant) {
    case 'dean':
      return 'from-indigo-200/60 via-white to-white'
    case 'mlt':
      return 'from-blue-200/60 via-cyan-100/60 to-white'
    case 'ot':
      return 'from-emerald-200/60 via-teal-100/60 to-white'
    case 'dialysis':
      return 'from-violet-200/60 via-fuchsia-100/60 to-white'
    default:
      return 'from-gray-200/60 via-gray-100/60 to-white'
  }
}

function FacultyCard({ member, variant }: { member: FacultyMember; variant?: Variant }) {
  const styles = roleStyles(member.role)
  return (
    <div className={`rounded-2xl p-[1px] bg-gradient-to-br ${groupGradient(variant)} shadow-sm transition-transform duration-200 hover:-translate-y-0.5`}>
      <article className="relative rounded-[15px] border border-gray-200 bg-white p-5">
        <div className={`absolute inset-y-0 left-0 w-1 rounded-l-[15px] bg-gradient-to-b ${styles.strip}`} aria-hidden />
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
          <span className={`shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles.chip}`}>
            {member.role}
          </span>
        </div>
        {member.qualification && (
          <p className="mt-2 text-sm text-gray-700">{member.qualification}</p>
        )}
      </article>
    </div>
  )
}

export default function FacultyPage() {
  // Data grouped by department
  const dean: FacultyMember = {
    name: 'Prof. Dr. Chanam Manglem Singh',
    role: 'Dean',
    qualification: 'MD OB/GY, FICS, FICOG'
  }

  const mlt: FacultyMember[] = [
    { name: 'Keinou Rejwana Shahani', role: 'Program Coordinator', qualification: 'M.Sc. MLT' },
    { name: 'Manoharmayum Balraj Sharma', role: 'Lecturer', qualification: 'Cytotechnologist ICMR' },
    { name: 'Prof. Dr. Y. Mohen Singh', role: 'Faculty', qualification: 'MD Pathology' },
    { name: 'Prof. Dr. Waikhom Gyaneshor Singh', role: 'Faculty', qualification: 'MD Biochemistry' },
    { name: 'Prof. T. Shantikumar Singh', role: 'Faculty', qualification: 'MD Microbiology' },
  ]

  const ot: FacultyMember[] = [
    { name: 'Prof. Dr. RK Shanti Devi', role: 'Program Coordinator', qualification: 'MD Anaesthesia' },
    { name: 'Kh. Gunamani Singh', role: 'Lecturer', qualification: 'B.Sc. Perfusion Technology, OT' },
    { name: 'Prof. Dr. Chanam Manglem Singh', role: 'Faculty', qualification: 'MD OB/GY' },
    { name: 'Prof. Dr. T. Arun Kumar', role: 'Faculty', qualification: 'MS General Surgery' },
    { name: 'Prof. Dr. S. Rajendra Singh', role: 'Faculty', qualification: 'MS Urology' },
    { name: 'Prof. Dr. Mayengbam Madhumangal Singh', role: 'Faculty', qualification: 'MS ENT' },
  ]

  const dialysis: FacultyMember[] = [
    { name: 'Dr. Keinou Javed Mehedi', role: 'Program Coordinator', qualification: 'MBBS with Dialysis/ ICU experience' },
    { name: 'Laishram Jackson', role: 'Lecturer', qualification: 'Diploma in Dialysis Technology' },
    { name: 'Laikhuram Shitaljit Singh', role: 'Lecturer', qualification: 'Diploma in Dialysis Technology' },
    { name: 'Prof. Dr. Y. Iboton Singh', role: 'Faculty', qualification: 'MD Medicine' },
    { name: 'Prof. Dr. Thangjam Premchand', role: 'Faculty', qualification: 'MD Medicine' },
  ]

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Faculty</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            List of Faculties & Faculty Structure
          </p>
        </div>
      </section>

      {/* Dean */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Dean (Overall)</h2>
          <FacultyCard member={dean} variant="dean" />
        </div>
      </section>

      {/* Medical Lab Technology */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical Lab Technology</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mlt.map((m) => (
              <FacultyCard key={`${m.name}-${m.role}`} member={m} variant="mlt" />
            ))}
          </div>
        </div>
      </section>

      {/* Operation Theatre & Anaesthesia Technology */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Operation Theatre & Anaesthesia Technology</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ot.map((m) => (
              <FacultyCard key={`${m.name}-${m.role}`} member={m} variant="ot" />
            ))}
          </div>
        </div>
      </section>

      {/* Dialysis Technology */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dialysis Technology</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dialysis.map((m) => (
              <FacultyCard key={`${m.name}-${m.role}`} member={m} variant="dialysis" />
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-sm text-gray-600">Total Faculties including Guest Faculty</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">16</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Intake of Students</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">45</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Teacher Students Ratio</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">1:15</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Excellence */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Faculty Excellence</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl border shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900">Doctoral Expertise</h3>
              <p className="text-gray-700 mt-1">Most faculty members hold doctoral or advanced professional degrees.</p>
            </div>
            <div className="bg-white rounded-xl border shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900">Industry Experience</h3>
              <p className="text-gray-700 mt-1">Strong blend of academic and real-world clinical exposure.</p>
            </div>
            <div className="bg-white rounded-xl border shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900">Research & Publications</h3>
              <p className="text-gray-700 mt-1">Active contributions to journals, conferences, and community health.</p>
            </div>
            <div className="bg-white rounded-xl border shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900">Student Mentoring</h3>
              <p className="text-gray-700 mt-1">Personalized guidance for career growth and higher studies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Teaching Philosophy</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl border shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900">Student-Centered Learning</h3>
              <p className="text-gray-700 mt-1">Active learning strategies tailored to individual needs.</p>
            </div>
            <div className="bg-white rounded-xl border shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900">Hands-On Experience</h3>
              <p className="text-gray-700 mt-1">Extensive practical sessions and simulation-based training.</p>  
            </div>
            <div className="bg-white rounded-xl border shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900">Professional Ethics</h3>
              <p className="text-gray-700 mt-1">Emphasis on integrity, empathy, and patient-first care.</p>
            </div>
            <div className="bg-white rounded-xl border shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900">Continuous Development</h3>
              <p className="text-gray-700 mt-1">Faculty upskill regularly to bring the latest practice into the classroom.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
