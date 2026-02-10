'use client'

import { useState } from 'react'

const messages = [
  { text: 'Admissions for 2025–26 are now open. Apply today!', icon: '🎓' },
  { text: 'For queries: +91 7005176498', icon: '📞' },
  { text: 'admin@ihrcparamedicalcollege.com', icon: '✉️' },
]

export default function AnnouncementBar() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section 
      className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
      
      <div className="max-w-7xl mx-auto px-4 py-2.5">
        <div className="flex items-center gap-3">
          {/* Pulse icon */}
          <div className="relative flex-shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white/30 animate-ping opacity-75" style={{ animationDuration: '2s' }} />
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1 1 0 01-1.447.894L5 18H3a1 1 0 01-1-1V9a1 1 0 011-1h2l4.553-2.135A1 1 0 0111 5.882zM15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728" />
              </svg>
            </div>
          </div>

          {/* Scrolling text container */}
          <div className="flex-1 overflow-hidden relative">
            <div 
              className={`flex whitespace-nowrap ${isPaused ? '' : 'animate-marquee'}`}
              style={{
                animationDuration: '25s',
              }}
            >
              {/* Duplicate for seamless loop */}
              {[...messages, ...messages, ...messages].map((msg, index) => (
                <span key={index} className="inline-flex items-center mx-6 md:mx-10">
                  <span className="mr-2 text-lg">{msg.icon}</span>
                  <span className="text-sm md:text-base font-medium">{msg.text}</span>
                  <span className="mx-6 md:mx-10 text-blue-300">•</span>
                </span>
              ))}
            </div>
          </div>

          {/* Close button - visible on larger screens */}
          <button 
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0"
            aria-label="Dismiss announcement"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  )
}
