export type NewsItem = {
  id: string
  title: string
  date: string // ISO string
  category: 'Announcement' | 'Press' | 'Update'
  summary: string
  href?: string
}

export type EventItem = {
  id: string
  title: string
  date: string // ISO string
  time?: string
  venue?: string
  summary: string
  href?: string
}

export const news: NewsItem[] = [
  {
    id: 'admissions-2025-open',
    title: 'Admissions 2025: Applications Open',
    date: '2025-09-01',
    category: 'Announcement',
    summary:
      'Online applications are now open for B.Sc. and Diploma programs in MLT, OT Technology, and Dialysis Technology. Review eligibility and apply online.',
    href: '/admissions',
  },
  {
    id: 'anti-ragging-policy',
    title: 'Zero-Tolerance Anti-Ragging Policy',
    date: '2025-08-25',
    category: 'Update',
    summary:
      'All students must comply with UGC anti-ragging regulations. Read the policy and submit the undertaking during application.',
    href: '/anti-ragging',
  },
  {
    id: 'academic-board',
    title: 'Academic Board Constitution',
    date: '2025-07-15',
    category: 'Press',
    summary:
      'IHRC Paramedical College formalizes its Academic Board to oversee academic quality and compliance with affiliating norms.',
  },
]

export const events: EventItem[] = []
