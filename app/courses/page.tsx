import Layout from '@/components/Layout'
import CoursesTabs from '@/components/CoursesTabs'
import programs from '@/data/paramedical'

export default function CoursesPage() {
  const courses = programs.map(p => ({
    name: p.name,
    fee: p.fee,
    seats: p.seats,
    level: p.level,
    duration: p.duration,
    slug: p.slug,
    internship: p.internship,
  }))

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our paramedical programs designed to meet industry standards with strong hands‑on training.
          </p>
        </div>
      </section>

      {/* Courses Tabs + Grid */}
      <section className="py-16">
  <CoursesTabs courses={courses} />
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Enroll?</h2>
          <p className="text-blue-50 max-w-2xl mx-auto mb-8">Secure your seat for the upcoming session. Limited seats available across programs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/apply" className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:opacity-95">Apply Now</a>
            
          </div>
        </div>
      </section>
    </Layout>
  )
}
