import Layout from '@/components/Layout'
import programs from '@/data/paramedical'
import ApplyForm from '@/components/ApplyForm'

export default function Apply() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Apply Now</h1>
            <p className="text-xl text-gray-600">Start your journey to a rewarding healthcare career today</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ApplyForm programs={programs} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
