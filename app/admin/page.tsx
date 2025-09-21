"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AuthCheck from '@/components/AuthCheck'

export default function AdminDashboard() {
  const [applications, setApplications] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()
  
  // Load applications
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch('/api/admin/applications');
        
        if (!response.ok) {
          throw new Error('Failed to load applications');
        }
        
        const data = await response.json();
        setApplications(data);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    
    fetchApplications();
  }, []);

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

  return (
    <AuthCheck>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Applications Dashboard</h1>
            <div className="space-x-4">
              <Link
                href="/admin/payments"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Payment Records
              </Link>
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
        ) : applications.length === 0 ? (
          <div className="bg-gray-100 p-6 rounded-md text-center">
            <p className="text-gray-600">No applications found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">ID</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Program</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Date</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {applications.map((app: any) => (
                  <tr key={app.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-700">{app.id}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{app.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{app.program}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        app.status === 'new' ? 'bg-blue-100 text-blue-800' : 
                        app.status === 'in-review' ? 'bg-yellow-100 text-yellow-800' :
                        app.status === 'accepted' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {app.status === 'new' ? 'New' : 
                         app.status === 'in-review' ? 'In Review' :
                         app.status === 'accepted' ? 'Accepted' : 'Rejected'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {new Date(app.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <Link 
                        href={`/admin/${app.id}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
    </AuthCheck>
  );
}