import Layout from '@/components/Layout'

export default function FinancialAid() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Financial Aid</h1>
            <p className="text-xl text-gray-600">Making healthcare education affordable and accessible</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Plans</h3>
              <p className="text-gray-600">Flexible monthly payment options with no interest charges.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Federal Aid</h3>
              <p className="text-gray-600">Pell Grants and federal student loans for qualified programs.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scholarships</h3>
              <p className="text-gray-600">Merit-based and need-based scholarships available.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Aid Options</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Federal Financial Aid</h3>
                    <p className="text-gray-700 mb-3">IHRC Paramedical College participates in financial aid programs for eligible students:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Federal Pell Grants (up to $7,395 annually)</li>
                    <li>• Federal Direct Subsidized Loans</li>
                    <li>• Federal Direct Unsubsidized Loans</li>
                    <li>• Federal Work-Study Program</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Veterans Benefits</h3>
                  <p className="text-gray-700 mb-3">We proudly support our veterans with education benefits:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• GI Bill benefits accepted</li>
                    <li>• Yellow Ribbon Program participant</li>
                    <li>• Vocational Rehabilitation benefits</li>
                    <li>• Military spouse scholarships</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">State & Private Aid</h3>
                  <p className="text-gray-700 mb-3">Additional funding sources to help reduce costs:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• State workforce development grants</li>
                    <li>• Employer tuition reimbursement</li>
                    <li>• Private foundation scholarships</li>
                    <li>• Healthcare facility sponsorship programs</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Step-by-Step Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Complete FAFSA</h4>
                      <p className="text-sm text-gray-600">Submit your Free Application for Federal Student Aid online</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Meet with Financial Aid</h4>
                      <p className="text-sm text-gray-600">Schedule an appointment with our financial aid counselor</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Review Aid Package</h4>
                      <p className="text-sm text-gray-600">Receive and review your personalized financial aid offer</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Accept & Enroll</h4>
                      <p className="text-sm text-gray-600">Accept your aid and complete enrollment process</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Important Deadlines</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Priority FAFSA Deadline:</strong> March 1st for the upcoming academic year
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Scholarship Applications:</strong> Rolling deadlines throughout the year
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-blue-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Financial Aid Calculator</h3>
              <p className="mb-6">Estimate your potential financial aid and out-of-pocket costs for your program.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#calculator" 
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Use Calculator
                </a>
                <a 
                  href="/contact" 
                  className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Schedule Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
