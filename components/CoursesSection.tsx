import courses, { type Course } from '@/data/courses'

export default function CoursesSection() {
  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Healthcare Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive selection of healthcare certification programs designed to get you career-ready fast.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c: Course) => (
            <article key={c.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl text-gray-900 leading-tight">{c.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {c.length}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{c.blurb}</p>
                <div className="mb-6">
                  <p className="font-bold text-2xl text-green-600 mb-3">{c.price}</p>
                  <ul className="space-y-2">
                    {c.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <a 
                    href="#" 
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
