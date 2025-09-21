export type Course = {
  id: string
  title: string
  length: string
  blurb: string
  price: string
  highlights: string[]
}

const courses: Course[] = [
  { 
    id: 'cna', 
    title: 'Certified Nursing Assistant (CNA)', 
    length: '6-8 weeks', 
    blurb: 'Launch your healthcare career with comprehensive CNA training including clinical rotations and state exam preparation.',
    price: 'Starting at $1,299',
    highlights: ['75 hours of clinical training', 'State exam preparation', 'Job placement assistance']
  },
  { 
    id: 'pct', 
    title: 'Patient Care Technician (PCT)', 
    length: '8-10 weeks', 
    blurb: 'Advanced patient care skills including EKG monitoring, phlebotomy basics, and vital signs assessment.',
    price: 'Starting at $1,599',
    highlights: ['EKG certification included', 'Phlebotomy training', 'Hospital externship opportunities']
  },
  { 
    id: 'phleb', 
    title: 'Phlebotomy Technician', 
    length: '4-6 weeks', 
    blurb: 'Master the art of blood collection with hands-on training and prepare for national certification.',
    price: 'Starting at $899',
    highlights: ['100+ supervised blood draws', 'National certification prep', 'Clinical externship']
  },
  { 
    id: 'med-admin', 
    title: 'Medication Administration', 
    length: '3-4 weeks', 
    blurb: 'Specialized training for CNAs to safely administer medications in long-term care facilities.',
    price: 'Starting at $699',
    highlights: ['State-approved curriculum', 'Medication safety protocols', 'Continuing education credits']
  },
  { 
    id: 'ekg', 
    title: 'EKG Technician', 
    length: '2-3 weeks', 
    blurb: 'Learn to perform and interpret electrocardiograms with expert instruction and real-world practice.',
    price: 'Starting at $599',
    highlights: ['Hands-on EKG practice', 'Rhythm interpretation', 'Certification exam included']
  },
  { 
    id: 'cpr-first-aid', 
    title: 'CPR & First Aid Certification', 
    length: '1 day', 
    blurb: 'Essential life-saving skills certification required for most healthcare positions.',
    price: 'Starting at $89',
    highlights: ['AHA certification', 'Same-day certification', 'Group discounts available']
  }
]

export default courses
