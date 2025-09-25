import { SITE_LOGO_ALT } from '@/lib/site-config'

export default function AnnouncementBar() {
  const messages = [
    'Admissions for 2025–26 are open. Apply now.',
    'For queries: +91 7005176498 · admin@ihrcparamedicalcollege.com',
  ]

  const line = messages.join('   •   ')

  return (
    <section className="bg-blue-600 text-white border-b border-blue-500">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3">
        <span className="sr-only">Announcement</span>
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1 1 0 01-1.447.894L5 18H3a1 1 0 01-1-1V9a1 1 0 011-1h2l4.553-2.135A1 1 0 0111 5.882zM15 10h4m-4 4h2" />
        </svg>
        <div className="relative overflow-hidden whitespace-nowrap flex-1">
          <div className="announcement-track">
            <span className="announcement-item">{line}</span>
            <span className="announcement-item" aria-hidden="true">{line}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
