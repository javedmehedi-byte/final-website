'use client'

import { useEffect, useState } from 'react'
import FloatingBackground from './FloatingBackground'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50" />
      <FloatingBackground />
      
      {/* Floating medical icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stethoscope icon */}
        <div 
          className={`
            absolute top-1/4 left-[10%] text-blue-200/50 transition-all duration-1000 ease-out
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
          style={{ transitionDelay: '300ms' }}
        >
          <svg className="w-16 h-16 md:w-24 md:h-24 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDuration: '4s' }}>
            <path d="M12 2a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0V7H9a1 1 0 110-2h2V3a1 1 0 011-1z"/>
            <path d="M18 10a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2h-2a1 1 0 110-2h2v-2a1 1 0 011-1z"/>
          </svg>
        </div>
        
        {/* Heart icon */}
        <div 
          className={`
            absolute bottom-1/3 right-[15%] text-teal-200/50 transition-all duration-1000 ease-out
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
          style={{ transitionDelay: '500ms' }}
        >
          <svg className="w-12 h-12 md:w-20 md:h-20 animate-bounce" fill="currentColor" viewBox="0 0 24 24" style={{ animationDuration: '3s' }}>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>

        {/* Medical cross */}
        <div 
          className={`
            absolute top-1/3 right-[25%] text-blue-300/30 transition-all duration-1000 ease-out
            ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
          `}
          style={{ transitionDelay: '700ms' }}
        >
          <svg className="w-8 h-8 md:w-12 md:h-12 animate-spin" fill="currentColor" viewBox="0 0 24 24" style={{ animationDuration: '10s' }}>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div 
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-full 
              bg-blue-100/80 text-blue-700 text-sm font-medium mb-6
              transition-all duration-700 ease-out
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
            `}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Admissions Open for 2025-26
          </div>

          {/* Main heading */}
          <h1 
            className={`
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6
              transition-all duration-700 ease-out
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: '100ms' }}
          >
            <span className="text-gray-900">Build Your Future in </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Healthcare
              </span>
              <svg 
                className="absolute -bottom-2 left-0 w-full" 
                viewBox="0 0 300 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path 
                  d="M2 8C50 2 100 2 150 8C200 14 250 14 298 8" 
                  stroke="url(#gradient)" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  className={`transition-all duration-1000 ease-out ${isLoaded ? 'stroke-dashoffset-0' : ''}`}
                  style={{
                    strokeDasharray: 400,
                    strokeDashoffset: isLoaded ? 0 : 400,
                    transition: 'stroke-dashoffset 1s ease-out 0.5s'
                  }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className={`
              text-lg sm:text-xl md:text-2xl mb-4 text-gray-700 max-w-4xl mx-auto leading-relaxed
              transition-all duration-700 ease-out
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: '200ms' }}
          >
            Industry‑aligned programs, hands‑on training, and expert mentorship at Imphal Hospital and Research Centre Paramedical College.
          </p>

          {/* Description */}
          <p 
            className={`
              text-base sm:text-lg mb-10 text-gray-600 max-w-3xl mx-auto
              transition-all duration-700 ease-out
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: '300ms' }}
          >
            Explore our programs and secure your seat for the upcoming academic session.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`
              flex flex-col sm:flex-row gap-4 justify-center items-center
              transition-all duration-700 ease-out
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: '400ms' }}
          >
            <a
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
              href="/courses"
            >
              <span className="mr-2">Explore Courses</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </a>
            <a
              className="group inline-flex items-center justify-center bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 active:scale-95 w-full sm:w-auto"
              href="/admissions"
            >
              <span>Admissions 2026</span>
              <svg 
                className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Trust indicators */}
          <div 
            className={`
              mt-16 pt-8 border-t border-gray-200/50
              transition-all duration-700 ease-out
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: '500ms' }}
          >
            <p className="text-sm text-gray-500 mb-4">Recognized by leading healthcare institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-gray-500 font-medium">Govt. Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-gray-500 font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
                <span className="text-gray-500 font-medium">Quality Assured</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
