import Layout from '@/components/Layout'

export default function Admissions() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Admissions 2025</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Begin your journey in healthcare with our paramedical programs. Apply for the upcoming academic session and secure your seat.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/apply" className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold shadow hover:opacity-95 transition-colors">
                    <span className="mr-2">Apply Online</span>
                    <span aria-hidden>→</span>
                  </a>
                  <a href="/brochure.pdf" download className="inline-block bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                    Download Brochure
                  </a>
                </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">General Requirements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">✓</span>
                      Class XII passed in PCB/M
                    </li>
                  </ul>
                </div>
                
                {/* Program-Specific Requirements removed per request */}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Submit Application</h3>
                    <p className="text-gray-600">Complete our online application form with your personal and educational information.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Submit and print the form</h3>
                    <p className="text-gray-600">Complete your application online and print a copy for submission.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Submit the printed form to the office</h3>
                    <p className="text-gray-600">Visit the admissions office with the printed form and required documents.</p>
                    <ol className="mt-2 text-gray-700 list-decimal pl-6 space-y-1">
                      <li>Two recent passport photos</li>
                      <li>Photocopies of Class X and XII marksheets</li>
                      <li>Photocopy of AADHAR Card / Driving License / PAN Card / Voter ID</li>
                    </ol>
                  </div>
                </div>
                
              </div>
              
              {/* Start Dates section removed per request */}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/apply" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors mr-4"
            >
              Apply Now
            </a>
            {/* Fee Payment link removed as requested */}
          </div>
        </div>
      </div>
    </Layout>
  )
}
