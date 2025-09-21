import Link from 'next/link'
import Image from 'next/image'
import { SITE_LOGO, SITE_LOGO_ALT } from '@/lib/site-config'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
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
            <button className="lg:hidden flex items-center justify-center w-8 h-8">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden ring-1 ring-gray-700 bg-white">
                  <Image src={SITE_LOGO} alt={SITE_LOGO_ALT} fill sizes="64px" className="object-contain p-1.5" />
                </div>
                <span className="text-xl font-bold">IHRC Paramedical College</span>
              </div>
              <p className="text-green-400 italic mb-4 max-w-md">
                skilling the future caregivers
              </p>
              {/* Social icons removed as requested */}
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Programs</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/courses/bsc-mlt" className="hover:text-white">B.Sc. Medical Lab Technology</Link></li>
                <li><Link href="/courses/diploma-mlt" className="hover:text-white">Diploma in Medical Lab Technology</Link></li>
                <li><Link href="/courses/bsc-ott" className="hover:text-white">B.Sc. Operation Theatre Technology</Link></li>
                <li><Link href="/courses/diploma-ott" className="hover:text-white">Diploma in Operation Theatre Technology</Link></li>
                <li><Link href="/courses/bsc-dialysis" className="hover:text-white">B.Sc. Dialysis Technology</Link></li>
                <li><Link href="/courses/diploma-dialysis" className="hover:text-white">Diploma in Dialysis Technology</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
                <li><Link href="/admissions" className="hover:text-white">Admissions</Link></li>
                <li><Link href="/faculty" className="hover:text-white">Faculty</Link></li>
                <li><Link href="/news-events" className="hover:text-white">News & Events</Link></li>
                <li><Link href="/anti-ragging" className="hover:text-white">Anti-Ragging</Link></li>
                <li><Link href="/apply" className="hover:text-white">Apply Now</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li>+91 7005176498</li>
                <li>admin@ihrcparamedicalcollege.com</li>
                <li>Lalambung RIMS Road, Imphal West, Manipur-795001</li>
                <li className="pt-2">
                  <Link href="/contact" className="text-blue-400 hover:text-blue-300">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} IHRC Paramedical College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
