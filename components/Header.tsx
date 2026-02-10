'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { SITE_LOGO, SITE_LOGO_ALT } from '@/lib/site-config'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/faculty', label: 'Faculty' },
  { href: '/news-events', label: 'News & Events' },
  { href: '/contact', label: 'Contact' },
  { href: '/anti-ragging', label: 'Anti-Ragging' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header 
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-out
          ${scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'bg-white border-b border-gray-200'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-2 ring-blue-100 bg-white group-hover:ring-blue-300 transition-all duration-300 group-hover:scale-105">
                <Image 
                  src={SITE_LOGO} 
                  alt={SITE_LOGO_ALT} 
                  fill 
                  priority 
                  sizes="40px" 
                  className="object-contain p-0.5" 
                />
              </div>
              <div className="leading-tight">
                <div className="text-xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors">IHRC</div>
                <div className="text-xs text-gray-500">Paramedical College</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`
                    px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${pathname === link.href 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/pay-fees" 
                className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-all duration-200"
              >
                Pay Fees
              </Link>
              <Link 
                href="/apply" 
                className="ml-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Apply Now
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className={`
                lg:hidden relative w-11 h-11 rounded-xl flex items-center justify-center
                transition-all duration-200
                ${open ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}
              `}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(v => !v)}
            >
              <div className="relative w-6 h-5">
                <span 
                  className={`
                    absolute left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-out
                    ${open ? 'top-2 rotate-45' : 'top-0'}
                  `}
                />
                <span 
                  className={`
                    absolute left-0 top-2 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-out
                    ${open ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}
                  `}
                />
                <span 
                  className={`
                    absolute left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-out
                    ${open ? 'top-2 -rotate-45' : 'top-4'}
                  `}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <div 
        className={`
          fixed inset-0 z-40 lg:hidden
          transition-all duration-300 ease-out
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        
        {/* Drawer */}
        <div 
          id="mobile-menu"
          className={`
            absolute top-0 right-0 h-full w-[85%] max-w-sm
            bg-white shadow-2xl
            transition-transform duration-300 ease-out
            ${open ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span className="font-bold text-gray-900">Menu</span>
            <button 
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer content */}
          <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100%-140px)]">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  flex items-center px-4 py-3.5 rounded-xl text-base font-medium
                  transition-all duration-200
                  ${pathname === link.href 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                  }
                `}
                style={{ 
                  transitionDelay: open ? `${index * 50}ms` : '0ms',
                  transform: open ? 'translateX(0)' : 'translateX(20px)',
                  opacity: open ? 1 : 0
                }}
              >
                {link.label}
                {pathname === link.href && (
                  <svg className="ml-auto w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>

          {/* Drawer footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-white space-y-3">
            <Link 
              href="/pay-fees"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-full px-4 py-3.5 rounded-xl font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Pay Fees
            </Link>
            <Link 
              href="/apply"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-3.5 rounded-xl font-semibold active:scale-95 transition-transform"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  )
}
