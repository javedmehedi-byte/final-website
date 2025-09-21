export default function WhyChooseUs() {
  const features = [
    {
      // Own Advanced Lab
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 2a1 1 0 000 2h1v6.1l-4.6 7.7A3 3 0 008.1 22h7.8a3 3 0 002.7-4.6L14 10.1V4h1a1 1 0 100-2H9zM8.3 18a1 1 0 000 2h7.4a1 1 0 100-2H8.3z"/>
        </svg>
      ),
      title: 'Own Advanced Lab',
      description: 'In-house hematology, microbiology, biochemistry and pathology labs mirroring hospital standards.'
    },
    {
      // Own Dialysis Unit
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 3a2 2 0 00-2 2v7a5 5 0 005 5h1v1a2 2 0 11-4 0 1 1 0 10-2 0 4 4 0 108 0v-1h1a5 5 0 005-5V5a2 2 0 00-2-2H8zm0 2h8v3H8V5zm0 5h8v2a3 3 0 01-3 3h-2a3 3 0 01-3-3v-2z"/>
        </svg>
      ),
      title: 'Own Dialysis Unit',
      description: 'Hands-on training with in-house dialysis machines for safe hemodialysis procedures.'
    },
    {
      // Own Operation Theatre
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0V7H9a1 1 0 110-2h2V3a1 1 0 011-1z"/>
          <path d="M18 10a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2h-2a1 1 0 110-2h2v-2a1 1 0 011-1z"/>
        </svg>
      ),
      title: 'Own Operation Theatre',
      description: 'Sterile in-house OT setup for instrumentation, asepsis and peri-operative training.'
    },
    {
      // Robust Faculties
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm0 16a6 6 0 116-6 6.006 6.006 0 01-6 6zm0-8a2 2 0 102 2 2 2 0 00-2-2z"/>
        </svg>
      ),
      title: 'Robust Faculties',
      description: 'Clinically well-experienced, student-centric teaching staff delivering outcome-driven learning with strong ethical grounding.'
    },
    {
      // Digital Learning Resources
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v8H4V6zm-2 9a1 1 0 000 2h20a1 1 0 100-2H2z"/>
        </svg>
      ),
      title: 'Digital Learning Resources',
      description: 'Access to e-learning materials, journals and structured case discussions.'
    },
    {
      // Student Support Services
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 5a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3H9l-4 4v-4H7a3 3 0 01-3-3V5z"/>
        </svg>
      ),
      title: 'Student Support Services',
      description: 'Guidance, mentoring and career counseling for academic success.'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why choose IHRC Paramedical College?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the highest quality healthcare education with the support you need to succeed.
          </p>
        </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
