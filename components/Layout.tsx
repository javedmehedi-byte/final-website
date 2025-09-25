import Link from 'next/link'
import Image from 'next/image'
import { SITE_LOGO, SITE_LOGO_ALT } from '@/lib/site-config'
import Header from '@/components/Header'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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
              <div className="mt-6">
                <h4 className="font-medium text-white mb-2">Our Location</h4>
                <div className="rounded-lg overflow-hidden ring-1 ring-gray-800">
                  <iframe
                    title="IHRC Paramedical College Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57944.17544619535!2d93.88792896065175!3d24.812193857764864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374927b6623df033%3A0xc1dfc45152ec92a6!2sImphal%20Hospital%20%26%20Research%20Centre!5e0!3m2!1sen!2sin!4v1758816213794!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-40"
                  />
                </div>
                <div className="mt-2">
                  <a
                    href="https://www.google.com/maps/place/Imphal+Hospital+%26+Research+Centre/@24.8121939,93.887929,13z/data=!4m6!3m5!1s0x374927b6623df033:0xc1dfc45152ec92a6!8m2!3d24.8121939!4d93.887929!16s%2Fg%2F11c1lg_w8p?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
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
