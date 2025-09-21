import Layout from '@/components/Layout'

export default function Contact() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">Ready to start your healthcare career? Get in touch with us today!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Information</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 7005176498"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Program of Interest</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select a program</option>
                    <option>Certified Nursing Assistant (CNA)</option>
                    <option>Patient Care Technician (PCT)</option>
                    <option>Phlebotomy Technician</option>
                    <option>EKG Technician</option>
                    <option>Medication Administration</option>
                    <option>CPR & First Aid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your goals and any questions you have..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit Us</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Main Campus</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Lalambung RIMS Road, Imphal West, Manipur-795001
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      +91 7005176498
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      admin@ihrcparamedicalcollege.com
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Hours</h3>
                  <div className="space-y-1 text-gray-600">
                    <p><span className="font-medium">Monday - Friday:</span> 8:00 AM - 6:00 PM</p>
                    <p><span className="font-medium">Saturday:</span> 9:00 AM - 4:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
