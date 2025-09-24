'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { SITE_LOGO, SITE_LOGO_ALT } from '@/lib/site-config'

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-gray-200 bg-white">
              <Image src={SITE_LOGO} alt={SITE_LOGO_ALT} fill priority sizes="40px" className="object-contain p-0.5" />
            </div>
            <div className="leading-tight">
              <div className="text-xl font-extrabold text-gray-900">IHRC</div>
              <div className="text-xs text-gray-500">Paramedical College</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
            <Link href="/courses" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Courses</Link>
            <Link href="/admissions" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Admissions</Link>
            <Link href="/faculty" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Faculty</Link>
            <Link href="/news-events" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">News & Events</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
            <Link href="/anti-ragging" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Anti-Ragging</Link>
            <Link href="/pay-fees" className="text-blue-700 font-semibold hover:text-blue-800 transition-colors">Pay Fees</Link>
            <Link href="/apply" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors ml-4">
              Apply Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md border border-gray-300"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(v => !v)}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <div
        id="mobile-menu"
        className={`${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'} lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-200`}
      >
        <nav className="px-4 py-3 grid gap-2">
          <Link href="/" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">Home</Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">About</Link>
          <Link href="/courses" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">Courses</Link>
          <Link href="/admissions" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">Admissions</Link>
          <Link href="/faculty" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">Faculty</Link>
          <Link href="/news-events" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">News & Events</Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">Contact</Link>
          <Link href="/anti-ragging" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">Anti-Ragging</Link>
          <Link href="/pay-fees" className="block px-3 py-2 rounded-md font-semibold text-blue-700 hover:bg-blue-50">Pay Fees</Link>
          <Link href="/apply" className="block text-center mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
