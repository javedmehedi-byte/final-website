import Layout from '@/components/Layout'

export default function StudentServices() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Student Services</h1>
            <p className="text-xl text-gray-600">Comprehensive support throughout your educational journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Support</h3>
              <p className="text-gray-600">One-on-one tutoring, study groups, and academic counseling to help you succeed in your studies.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Student Counseling</h3>
              <p className="text-gray-600">Personal and academic counseling services to help you navigate challenges and achieve your goals.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology Support</h3>
              <p className="text-gray-600">Computer lab access, technical support, and online learning platform assistance.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Student Life</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Student Organizations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      Future Healthcare Professionals Club
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      Student Government Association
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      Volunteer Health Outreach Program
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      Peer Mentorship Network
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Campus Facilities</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      Modern simulation labs with hospital-grade equipment
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      Computer lab with high-speed internet
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      Student lounge and study areas
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      On-site parking and accessibility features
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Support Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Disability Services</h3>
                  <p className="text-gray-700 mb-4">We provide accommodations for students with documented disabilities to ensure equal access to education.</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Extended test time</li>
                    <li>• Note-taking assistance</li>
                    <li>• Accessible classroom seating</li>
                    <li>• Alternative format materials</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Library & Learning Resources</h3>
                  <p className="text-gray-700 mb-4">Access to comprehensive learning materials and research databases:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Medical reference library</li>
                    <li>• Online journal access</li>
                    <li>• Study guides and practice exams</li>
                    <li>• Quiet study spaces</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Health & Wellness</h3>
                  <p className="text-gray-700">Student wellness programs including health screenings, stress management workshops, and wellness seminars.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Support?</h3>
              <p className="text-gray-700 mb-6">Our student services team is here to help you succeed. Contact us for any questions or to schedule an appointment.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Contact Student Services
                </a>
                <a 
                  href="tel:+917005176498" 
                  className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Call +91 7005176498
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
