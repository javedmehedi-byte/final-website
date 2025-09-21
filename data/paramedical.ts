export type Program = {
  slug: string
  name: string
  fee: string
  seats: number
  level: "Bachelor's" | 'Diploma'
  duration: string
  internship: string
  summary: string
  highlights: string[]
  syllabus: string[]
  eligibility: string[]
  careerPaths: string[]
}

const programs: Program[] = [
  {
    slug: 'bsc-mlt',
    name: 'B.Sc. Medical Lab Technology',
  fee: 'Rs 60,000/sem',
    seats: 15,
    level: "Bachelor's",
    duration: '3 Years',
  internship: '1 Year Internship',
    summary: 'Develop expertise in diagnostic testing across hematology, biochemistry, microbiology, and pathology with extensive lab exposure.',
    highlights: [
      'Advanced diagnostics across core lab disciplines',
      'Hands-on lab training with modern analyzers',
      'Clinical postings in partner hospitals',
    ],
    syllabus: [
      'Human Anatomy & Physiology',
      'Clinical Biochemistry & Instrumentation',
      'Hematology & Blood Banking',
      'Medical Microbiology & Parasitology',
      'Pathology & Cytology Techniques',
      'Quality Control & Laboratory Management',
    ],
    eligibility: [
      '10+2 with Physics, Chemistry, Biology/Maths',
      'Minimum aggregate as per university norms',
    ],
    careerPaths: ['Lab Technologist', 'Blood Bank Technologist', 'Research Assistant', 'QA/QC in Diagnostics'],
  },
  {
    slug: 'diploma-mlt',
    name: 'Diploma in Medical Lab Technology',
  fee: 'Rs 60,000/sem',
    seats: 15,
    level: 'Diploma',
    duration: '2 Years',
  internship: '6 Months Internship',
    summary: 'Foundation program in diagnostic laboratory techniques with a focus on sample handling and routine testing.',
    highlights: [
      'Strong practical orientation',
      'Core lab operations & safety',
      'Industry-relevant skill development',
    ],
    syllabus: [
      'Basics of Laboratory Science',
      'Clinical Biochemistry',
      'Hematology & Serology',
      'Microbiology Techniques',
      'Lab Safety & Waste Management',
    ],
    eligibility: ['10+2 in Science (PCB/PCM)'],
    careerPaths: ['Lab Technician', 'Phlebotomist', 'Assistant in Diagnostic Centers'],
  },
  {
    slug: 'bsc-ott',
    name: 'B.Sc. Operation Theatre Technology',
  fee: 'Rs 60,000/sem',
    seats: 15,
    level: "Bachelor's",
    duration: '3 Years',
  internship: '1 Year Internship',
    summary: 'Training in pre-, intra-, and post-operative OT procedures, anesthesia assistance, and sterile techniques.',
    highlights: [
      'Live OT exposure under supervision',
      'Sterilization & infection control',
      'Anesthesia and surgical assistance',
    ],
    syllabus: [
      'OT Protocols & Sterile Techniques',
      'Anesthesia Equipment & Monitoring',
      'Surgical Instrumentation',
      'Post-operative Care & Recovery',
      'Emergency & Trauma OT Care',
    ],
    eligibility: ['10+2 with Science stream'],
    careerPaths: ['OT Technologist', 'Anesthesia Assistant', 'Surgical Technologist'],
  },
  {
    slug: 'diploma-ott',
    name: 'Diploma in Operation Theatre Technology',
  fee: 'Rs 60,000/sem',
    seats: 15,
    level: 'Diploma',
    duration: '2 Years',
  internship: '6 Months Internship',
    summary: 'Core skills for assisting in operation theatres with emphasis on sterilization and OT logistics.',
    highlights: ['OT assistance basics', 'Instrument care', 'Asepsis & safety protocols'],
    syllabus: [
      'OT Setup & Sterilization',
      'Instrument Handling & Count',
      'Assisting in General Surgeries',
      'Anesthesia Basics',
    ],
    eligibility: ['10+2 with Science stream'],
    careerPaths: ['OT Assistant', 'CSSD Technician'],
  },
  {
    slug: 'bsc-dialysis',
    name: 'B.Sc. Dialysis Technology',
  fee: 'Rs 60,000/sem',
    seats: 15,
    level: "Bachelor's",
    duration: '3 Years',
  internship: '1 Year Internship',
    summary: 'Comprehensive training in hemodialysis procedures, machine handling, and patient care in nephrology.',
    highlights: ['Dialysis unit rotations', 'Machine calibration & maintenance', 'Patient counseling & care'],
    syllabus: [
      'Renal Physiology & Disorders',
      'Dialysis Equipment & Water Treatment',
      'Anticoagulation & Vascular Access',
      'Complication Management',
      'Quality & Safety in Dialysis Units',
    ],
    eligibility: ['10+2 with PCB/PCM'],
    careerPaths: ['Dialysis Technologist', 'Nephrology Technician'],
  },
  {
    slug: 'diploma-dialysis',
    name: 'Diploma in Dialysis Technology',
  fee: 'Rs 60,000/sem',
    seats: 15,
    level: 'Diploma',
    duration: '2 Years',
  internship: '6 Months Internship',
    summary: 'Practical program focused on dialysis procedures, patient monitoring, and unit hygiene.',
    highlights: ['Hands-on dialysis practice', 'Infection control', 'Equipment handling'],
    syllabus: [
      'Dialysis Basics & Protocols',
      'Patient Monitoring',
      'Machine Setup & Disinfection',
    ],
    eligibility: ['10+2 with Science'],
    careerPaths: ['Dialysis Technician', 'Assistant in Dialysis Centers'],
  },
]

export default programs