import Layout from '@/components/Layout'

export default function CareerServices() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Career Services</h1>
            <p className="text-xl text-gray-600">Your pathway to a successful healthcare career</p>
          </div>
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-8 bg-white rounded-lg shadow-lg px-8 py-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">95%</div>
                <div className="text-gray-600">Job Placement Rate</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">$16.50</div>
                <div className="text-gray-600">Average Starting Wage</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600">500+</div>
                <div className="text-gray-600">Employer Partners</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Support Services</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Counseling</h3>
                    <p className="text-gray-700">One-on-one career guidance to help you identify the best healthcare opportunities that match your interests and skills.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Resume & Interview Prep</h3>
                    <p className="text-gray-700">Professional resume writing assistance and mock interviews to help you present your best self to potential employers.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Job Placement Assistance</h3>
                    <p className="text-gray-700">Direct connections to our extensive network of healthcare employers and assistance with job applications and follow-up.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Advancement</h3>
                    <p className="text-gray-700">Ongoing support for career growth, including continuing education opportunities and advancement planning.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Employer Partners</h2>
              <p className="text-gray-700 mb-6">We work closely with leading healthcare organizations in the region to provide our graduates with excellent job opportunities:</p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-lg border p-4">
                  <h3 className="font-semibold text-gray-900">Hospital Systems</h3>
                  <p className="text-gray-600 text-sm">Regional Medical Center, St. Mary's Health System, Community General Hospital</p>
                </div>
                <div className="bg-white rounded-lg border p-4">
                  <h3 className="font-semibold text-gray-900">Long-Term Care</h3>
                  <p className="text-gray-600 text-sm">Sunrise Senior Living, Golden Years Care Center, Heritage Manor</p>
                </div>
                <div className="bg-white rounded-lg border p-4">
                  <h3 className="font-semibold text-gray-900">Outpatient Clinics</h3>
                  <p className="text-gray-600 text-sm">Family Health Associates, QuickCare Urgent Care, Specialty Medical Group</p>
                </div>
                <div className="bg-white rounded-lg border p-4">
                  <h3 className="font-semibold text-gray-900">Home Health Agencies</h3>
                  <p className="text-gray-600 text-sm">Visiting Nurse Service, ComfortCare Home Health, Family First Healthcare</p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Job Fair Events</h3>
                <p className="text-gray-700 mb-4">We host regular job fairs and networking events where students can meet directly with employers.</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Quarterly Healthcare Job Fair</li>
                  <li>• Annual Alumni Networking Event</li>
                  <li>• Monthly Employer Spotlight Sessions</li>
                  <li>• Virtual Career Workshops</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Before Graduation</h3>
              <p className="text-gray-600 text-sm">Career planning sessions begin during your program to ensure you're job-ready upon graduation.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">At Graduation</h3>
              <p className="text-gray-600 text-sm">Active job placement assistance with immediate access to our employer network and job opportunities.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lifetime Support</h3>
              <p className="text-gray-600 text-sm">Career services continue for life with ongoing support for job changes and career advancement opportunities.</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Career?</h3>
              <p className="mb-6 text-blue-100">Join thousands of successful graduates who've built rewarding healthcare careers with our support.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/apply" 
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                >
                  Start Your Application
                </a>
                <a 
                  href="/contact" 
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Schedule Career Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
