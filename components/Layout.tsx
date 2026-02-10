import Link from 'next/link'
import Image from 'next/image'
import { SITE_LOGO, SITE_LOGO_ALT } from '@/lib/site-config'
import Header from '@/components/Header'
import ScrollToTop from '@/components/ScrollToTop'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden ring-2 ring-gray-700 bg-white">
                  <Image src={SITE_LOGO} alt={SITE_LOGO_ALT} fill sizes="56px" className="object-contain p-1.5" />
                </div>
                <div>
                  <div className="text-lg font-bold">IHRC Paramedical College</div>
                  <div className="text-green-400 text-sm italic">skilling the future caregivers</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                Leading paramedical education institution in Imphal, providing world-class training in medical laboratory technology, operation theatre technology, and dialysis technology.
              </p>
              {/* Social links - optional */}
              <div className="flex gap-3">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                    aria-label={social}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Programs column */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Programs</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="/courses/bsc-mlt" className="hover:text-white transition-colors">B.Sc. Medical Lab Technology</Link></li>
                <li><Link href="/courses/diploma-mlt" className="hover:text-white transition-colors">Diploma in MLT</Link></li>
                <li><Link href="/courses/bsc-ott" className="hover:text-white transition-colors">B.Sc. Operation Theatre Tech</Link></li>
                <li><Link href="/courses/diploma-ott" className="hover:text-white transition-colors">Diploma in OTT</Link></li>
                <li><Link href="/courses/bsc-dialysis" className="hover:text-white transition-colors">B.Sc. Dialysis Technology</Link></li>
                <li><Link href="/courses/diploma-dialysis" className="hover:text-white transition-colors">Diploma in Dialysis</Link></li>
              </ul>
            </div>

            {/* Quick links column */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/courses" className="hover:text-white transition-colors">All Courses</Link></li>
                <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
                <li><Link href="/faculty" className="hover:text-white transition-colors">Our Faculty</Link></li>
                <li><Link href="/news-events" className="hover:text-white transition-colors">News & Events</Link></li>
                <li><Link href="/anti-ragging" className="hover:text-white transition-colors">Anti-Ragging</Link></li>
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Contact Info</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 7005176498</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>admin@ihrcparamedicalcollege.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Lalambung RIMS Road, Imphal West, Manipur-795001</span>
                </li>
              </ul>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
              >
                Get Directions
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Map section */}
          <div className="mt-10 pt-10 border-t border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <h4 className="font-semibold text-lg mb-2">Visit Our Campus</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Located in the heart of Imphal, our campus is easily accessible and equipped with state-of-the-art facilities.
                </p>
                <a
                  href="https://www.google.com/maps/place/Imphal+Hospital+%26+Research+Centre/@24.8121939,93.887929,13z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors"
                >
                  <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Open in Google Maps
                </a>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-2xl overflow-hidden ring-1 ring-gray-800 shadow-2xl">
                  <iframe
                    title="IHRC Paramedical College Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57944.17544619535!2d93.88792896065175!3d24.812193857764864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374927b6623df033%3A0xc1dfc45152ec92a6!2sImphal%20Hospital%20%26%20Research%20Centre!5e0!3m2!1sen!2sin!4v1758816213794!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Copyright bar */}
          <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} IHRC Paramedical College. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
              <Link href="/admin/login" className="text-gray-600 hover:text-gray-400 transition-colors">Admin</Link>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
