import Link from 'next/link';

/**
 * Layout wrapper for admin pages that require authentication
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">IHRC Admin Panel</div>
          <div className="space-x-6">
            <Link 
              href="/admin" 
              className="hover:text-blue-300 transition-colors"
            >
              Applications
            </Link>
            <Link 
              href="/admin/payments" 
              className="hover:text-blue-300 transition-colors"
            >
              Payments
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}