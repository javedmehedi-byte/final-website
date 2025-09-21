"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AuthCheck from '@/components/AuthCheck'

export default function ApplicationDetail({ params }: { params: { id: string } }) {
  const [application, setApplication] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()
  
  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await fetch(`/api/admin/applications/${params.id}`);
        
        if (!response.ok) {
          throw new Error('Failed to load application details');
        }
        
        const data = await response.json();
        setApplication(data);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    
    fetchApplication();
  }, [params.id]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth/logout', {
        method: 'POST',
      });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Handle PDF download
  const handleDownloadPDF = async () => {
    try {
      window.open(`/api/admin/applications/${params.id}/pdf`, '_blank');
    } catch (error) {
      console.error('PDF download error:', error);
    }
  };

  return (
    <AuthCheck>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <Link href="/admin" className="text-blue-600 hover:text-blue-800 mr-2">
                ← Back to Applications
              </Link>
              <h1 className="text-2xl font-bold text-gray-800 ml-4">
                {isLoading ? 'Loading...' : `Application: ${application?.id}`}
              </h1>
            </div>
          <div className="flex space-x-4">
            <button
              onClick={handleDownloadPDF}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              disabled={isLoading}
            >
              Download PDF
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
        
        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-md mb-6">
            {error}
          </div>
        )}
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : application ? (
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                application.status === 'new' ? 'bg-blue-100 text-blue-800' : 
                application.status === 'in-review' ? 'bg-yellow-100 text-yellow-800' :
                application.status === 'accepted' ? 'bg-green-100 text-green-800' :
                'bg-red-100 text-red-800'
              }`}>
                {application.status === 'new' ? 'New Application' : 
                application.status === 'in-review' ? 'In Review' :
                application.status === 'accepted' ? 'Accepted' : 'Rejected'}
              </span>
              <span className="text-gray-500">
                Submitted on {new Date(application.createdAt).toLocaleDateString()}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                <div className="bg-gray-50 p-4 rounded">
                  <p><strong>Name:</strong> {application.name}</p>
                  <p><strong>Father's Name:</strong> {application.fatherName}</p>
                  <p><strong>Mother's Name:</strong> {application.motherName}</p>
                  <p><strong>Date of Birth:</strong> {application.dob}</p>
                  <p><strong>Gender:</strong> {application.gender}</p>
                  <p><strong>Category:</strong> {application.category}</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                <div className="bg-gray-50 p-4 rounded">
                  <p><strong>Email:</strong> {application.email}</p>
                  <p><strong>Phone:</strong> {application.phone}</p>
                  <p><strong>Address:</strong> {application.address}</p>
                  <p><strong>City:</strong> {application.city}</p>
                  <p><strong>State:</strong> {application.state}</p>
                  <p><strong>PIN Code:</strong> {application.pincode}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Academic Information</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p><strong>Program:</strong> {application.program}</p>
                <p><strong>Qualification:</strong> {application.qualification}</p>
                <p><strong>Board/University:</strong> {application.board}</p>
                <p><strong>Year of Passing:</strong> {application.passingYear}</p>
                <p><strong>Percentage/CGPA:</strong> {application.percentage}</p>
              </div>
            </div>
            
            {/* Admin actions */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="text-lg font-semibold mb-2">Admin Actions</h3>
              <div className="flex flex-wrap gap-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  Update Status
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
                  Add Note
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gray-100 p-6 rounded-md text-center">
            <p className="text-gray-600">Application not found.</p>
          </div>
        )}
      </div>
    </Layout>
    </AuthCheck>
  );
}