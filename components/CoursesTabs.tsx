'use client'

import { useMemo, useState } from 'react'
import AnimateOnScroll from './AnimateOnScroll'

export type Course = {
  name: string
  fee: string
  seats: number
  level: string
  duration: string
  slug?: string
  internship?: string
}

const tabs = [
  { id: 'all', label: 'All Courses', shortLabel: 'All' },
  { id: 'bachelors', label: "Bachelor's Programs", shortLabel: "Bachelor's" },
  { id: 'diploma', label: 'Diploma Programs', shortLabel: 'Diploma' },
] as const

const gradients = [
  'from-blue-600 via-indigo-600 to-purple-600',
  'from-emerald-500 via-teal-500 to-cyan-600',
  'from-orange-400 via-pink-500 to-rose-500',
  'from-sky-600 via-blue-600 to-indigo-700',
  'from-violet-500 via-purple-600 to-fuchsia-600',
  'from-teal-500 via-cyan-600 to-blue-600'
]

export default function CoursesTabs({ courses }: { courses: Course[] }) {
  const [tab, setTab] = useState<'all' | 'bachelors' | 'diploma'>('all')

  const filtered = useMemo(() => {
    if (tab === 'bachelors') return courses.filter(c => /bachelor/i.test(c.level))
    if (tab === 'diploma') return courses.filter(c => /diploma/i.test(c.level))
    return courses
  }, [tab, courses])

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Segmented control - scrollable on mobile */}
      <AnimateOnScroll animation="fade-up" className="flex justify-center mb-10">
        <div className="inline-flex items-center rounded-2xl bg-gray-100/80 backdrop-blur-sm p-1.5 shadow-inner overflow-x-auto max-w-full scrollbar-hide">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`
                relative px-4 md:px-6 py-2.5 rounded-xl text-sm md:text-base font-medium whitespace-nowrap
                transition-all duration-300 ease-out
                ${tab === t.id 
                  ? 'text-blue-600 shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
                }
              `}
              onClick={() => setTab(t.id)}
              type="button"
            >
              {tab === t.id && (
                <span className="absolute inset-0 bg-white rounded-xl transition-all duration-300" />
              )}
              <span className="relative z-10 hidden md:inline">{t.label}</span>
              <span className="relative z-10 md:hidden">{t.shortLabel}</span>
            </button>
          ))}
        </div>
      </AnimateOnScroll>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filtered.map((c, i) => (
          <AnimateOnScroll key={c.name} animation="fade-up" delay={i * 100}>
            <div
              className={`
                group relative rounded-3xl p-6 md:p-8 flex flex-col h-full
                bg-gradient-to-br ${gradients[i % gradients.length]}
                shadow-lg hover:shadow-2xl
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:scale-[1.02]
                overflow-hidden
              `}
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
              
              {/* Floating decorative circle */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10 blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              {/* Content */}
              <div className="relative mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white/90 text-xs font-medium mb-3">
                  {c.level}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight leading-tight">
                  {c.name}
                </h3>
              </div>

              {/* Stats row */}
              <div className="relative flex flex-wrap gap-3 mb-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 text-white text-sm font-medium backdrop-blur-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {c.fee}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 text-white text-sm backdrop-blur-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {c.duration}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 text-white text-sm backdrop-blur-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {c.seats} seats
                </div>
                {c.internship && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 text-white text-sm backdrop-blur-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    {c.internship}
                  </div>
                )}
              </div>

              <p className="relative text-white/90 text-sm leading-relaxed mb-6 flex-grow">
                Comprehensive curriculum with lab access, clinical exposure, and expert mentorship for a successful healthcare career.
              </p>

              {/* Buttons */}
              <div className="relative flex flex-col sm:flex-row gap-3 mt-auto">
                <a
                  href={c.slug ? `/courses/${c.slug}` : '/courses'}
                  className="
                    inline-flex items-center justify-center gap-2
                    bg-white/15 hover:bg-white/25 text-white 
                    px-5 py-2.5 rounded-xl text-sm font-medium 
                    backdrop-blur-sm ring-1 ring-white/30 
                    transition-all duration-300
                    active:scale-95
                  "
                >
                  View Details
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/apply"
                  className="
                    inline-flex items-center justify-center gap-2
                    bg-white text-gray-900 
                    px-5 py-2.5 rounded-xl text-sm font-semibold 
                    shadow-lg hover:shadow-xl hover:bg-gray-50
                    transition-all duration-300
                    active:scale-95
                  "
                >
                  Apply Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-500">No courses found in this category.</p>
        </div>
      )}
    </div>
  )
}
