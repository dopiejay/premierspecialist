import { Stethoscope, HeartPulse, Siren, Baby, Scissors, FlaskConical, Smile, Droplets, Salad, Activity, Moon, Brain, ShieldCheck } from 'lucide-react'

// TODO: confirm every value with the hospital before going live.
export const H = { phone: '+265 212 832 415', address: '1st Floor, Fatima Arcade, Haile Selassie Road, Blantyre CBD', landmark: 'Directly above KFC' }
export const tel = `tel:${H.phone.replace(/\s/g, '')}`
export const DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=Shifa+Hospital+Fatima+Arcade+Blantyre'

// Stock placeholders (Unsplash). Replace with real Shifa photos in src/assets when available.
export const img = (id, w = 1200) =>
  /^(https?:)?\/\//.test(id) || id.startsWith('/')
    ? id
    : `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`
export const P = {
  hero: '1576091160399-112ba8d25d1d', doctor: '1612349317150-e413f6a5b16d', lab: '1579154204601-01588f351e67',
  dental: '1606811841689-23dfddce3e95', surgery: '1551076805-e1869033e561', hospital: '1519494026892-80bbd2d6fd0d',
  emergency: '1587351021759-3e566b6af7cc', maternity: '1555252333-9f8e92e65df9', baby: '1584515933487-779824d29309', outpatient: '1559757148-5c350d0d3c56',
  water: '1523362628745-0c100150b504', diet: '1512621776951-a57141f2eefd', exercise: '1534438327276-14e5300c3a48',
  sleep: '1541781774459-bb2af2f05b55', mind: '1506126613408-eca07ce68773', smoke: '1573497019940-1c28c88b4f3e',
  doc1: '1622253692010-333f2da6031d', doc2: '1594824476967-48c8b964273f', doc3: '1537368910025-700350fe46c7',
  doc4: '1582750433449-648ed127bb54', doc5: '1559839734-2b71ea197ec2', doc6: '1651008376811-b90baee60c1f',
}

// Detail content (conditions/treatments) is placeholder copy pending clinical verification.
export const SERVICES = [
  {
    slug: 'outpatient-internal-medicine',
    icon: Stethoscope,
    title: 'Outpatient & Internal Medicine',
    photo: '/images/service1.jpg',
    text: 'Consultations for everyday illness, chronic condition follow-up and referrals to the right specialist.',
    overview: 'Outpatient and internal medicine is the first point of contact for most patients. Consultations cover everyday illness, ongoing conditions and general health concerns, with referrals made to the right specialist when needed.',
    conditions: ['Everyday illness such as colds, flu and infections', 'Chronic conditions that need ongoing follow-up', 'General health concerns and routine check-ups'],
    treatments: ['General medical consultations', 'Chronic disease follow-up', 'Referrals to specialist care', 'Preventive health advice'],
  },
  {
    slug: 'emergency-walk-in-care',
    icon: Siren,
    title: 'Emergency & Walk-in Care',
    photo: P.emergency,
    text: 'Open around the clock. No strict booking needed when you need urgent medical attention.',
    overview: 'Emergency and walk-in care supports patients who need prompt medical attention. Our team assesses your condition and provides urgent treatment where available, or arranges referral when specialist care is required.',
    conditions: ['Urgent concerns that need prompt attention', 'Minor injuries and sudden illness', 'Concerns outside regular clinic times'],
    treatments: ['Initial assessment and stabilisation', 'Urgent treatment where available', 'Referral or transfer when specialist care is needed'],
  },
  {
    slug: 'maternity-gynaecology',
    icon: HeartPulse,
    title: 'Maternity & Gynaecology',
    photo: P.maternity,
    text: 'Antenatal care and women’s health, with specialist clinics held on scheduled days.',
    overview: 'Maternity and gynaecology services support women through pregnancy and beyond, alongside general women’s health care, with specialist clinics held on scheduled days.',
    conditions: ['Pregnancy and antenatal concerns', 'Women’s health and gynaecological needs', 'Family planning discussions'],
    treatments: ['Antenatal consultations', 'Women’s health clinics', 'Scheduled specialist reviews'],
  },
  {
    slug: 'neonatal-care-nicu',
    icon: Baby,
    title: 'Neonatal Care (NICU)',
    photo: P.baby,
    text: 'Specialised care for newborns who need close monitoring in their first days.',
    overview: 'Neonatal care provides close monitoring and support for newborns who need it in their first days, working alongside the maternity team.',
    conditions: ['Newborns needing close monitoring', 'Babies who need extra support in their first days'],
    treatments: ['Newborn monitoring', 'Newborn care alongside the maternity team', 'Referral when specialist neonatal care is required'],
  },
  {
    slug: 'surgery-theatres',
    icon: Scissors,
    title: 'Surgery & Theatres',
    photo: P.surgery,
    text: 'Assessment, operating theatre procedures and follow-up care under one roof.',
    overview: 'Our surgical service covers assessment, operating theatre procedures and follow-up care, coordinated under one roof.',
    conditions: ['Conditions assessed as needing a surgical opinion', 'Planned procedures following consultation'],
    treatments: ['Pre-operative assessment', 'Operating theatre procedures', 'Post-operative and follow-up care'],
  },
  {
    slug: 'laboratory-diagnostics',
    icon: FlaskConical,
    title: 'Laboratory & Diagnostics',
    photo: P.lab,
    text: 'Tests and investigations that help your doctor choose the right treatment, faster.',
    overview: 'The laboratory and diagnostics service supports your doctor with tests and investigations, helping guide timely and appropriate treatment decisions.',
    conditions: ['Tests requested by your doctor', 'Routine and diagnostic investigations'],
    treatments: ['Blood and laboratory tests', 'Diagnostic investigations', 'Results reporting to guide treatment'],
  },
  {
    slug: 'dental-care-implants',
    icon: Smile,
    title: 'Dental Care & Implants',
    photo: '/images/dental.jpg',
    text: 'Check-ups and treatment through our dedicated dental and implant centre.',
    overview: 'Dental care and implants are provided through our dedicated dental centre, covering routine check-ups, treatment and implant enquiries.',
    conditions: ['Routine dental and oral health needs', 'Missing teeth and implant enquiries'],
    treatments: ['Dental check-ups', 'Dental treatment', 'Implant assessment and treatment'],
  },
]

export const FEATURED = [
  { icon: Stethoscope, title: 'General & Outpatient Care', photo: '/images/service1.jpg', text: 'Medical consultations for common illnesses, routine health concerns and follow-up visits, subject to available services.' },
  { icon: HeartPulse, title: 'Maternity & Women’s Health', photo: P.maternity, text: 'Pregnancy-related consultations and women’s health services, with details of available clinics and care options.' },
  { icon: FlaskConical, title: 'Laboratory & Diagnostics', photo: P.lab, text: 'Diagnostic investigations that support medical assessment and treatment decisions.' },
]

export const NAV = [['/', 'Home'], ['/about', 'About Us'], ['/services', 'Medical Services'], ['/doctors', 'Our Doctors'], ['/health-tips', 'Health Tips']]

// General wellness content (demo copy — pending review by the hospital). Shape is CMS-ready.
export const TIPS = [
  {
    slug: 'stay-hydrated', icon: Droplets, tag: 'Everyday health', title: 'Stay hydrated', photo: P.water,
    text: 'Drink enough clean water through the day, especially in hot weather, to help your body work at its best.',
    overview: 'Water keeps every part of your body working properly. When you are active or the weather is hot, you lose more fluid than usual — and even mild dehydration can leave you tired, headachy or unable to concentrate.',
  },
  {
    slug: 'eat-a-balanced-diet', icon: Salad, tag: 'Nutrition', title: 'Eat a balanced diet', photo: P.diet,
    text: 'Build meals around vegetables, fruit, whole grains and lean protein, and limit sugary drinks and processed foods.',
    overview: 'A balanced diet gives your body the energy and nutrients it needs to stay strong and resist illness. You do not need expensive foods — simple, fresh and varied meals go a long way.',
  },
  {
    slug: 'keep-moving', icon: Activity, tag: 'Fitness', title: 'Keep moving', photo: P.exercise,
    text: 'A brisk walk most days supports your heart, mood and energy levels.',
    overview: 'Regular movement is one of the best things you can do for your health. You do not need a gym — walking, chores and everyday activity all count.',
  },
  {
    slug: 'prioritise-sleep', icon: Moon, tag: 'Rest', title: 'Prioritise sleep', photo: P.sleep,
    text: 'Most adults need 7–9 hours of sleep. A steady routine helps your body recover and stay well.',
    overview: 'Sleep is when your body repairs itself and your mind processes the day. Poor sleep over time affects mood, concentration and even how well your immune system works.',
  },
  {
    slug: 'look-after-your-mind', icon: Brain, tag: 'Wellbeing', title: 'Look after your mind', photo: P.mind,
    text: 'Managing stress, staying connected and asking for support matter just as much as physical health.',
    overview: 'Mental health is part of overall health. Stress, worry and low mood are common, and talking about them — with people you trust or with a professional — makes a real difference.',
  },
  {
    slug: 'do-not-smoke', icon: ShieldCheck, tag: 'Prevention', title: 'Do not smoke', photo: '/images/nosmocking.jpg',
    text: 'Stopping smoking is one of the biggest steps you can take to protect your health and those around you.',
    overview: 'Smoking harms almost every part of the body and increases the risk of serious illness, including heart and lung disease. It also affects the people around you through second-hand smoke. Quitting is hard, but support greatly improves your chances.',
  },
]

export const TEAM = [
  {
    slug: 'dr-alinafe-banda', name: 'Dr. Alinafe Banda', specialty: 'Internal Medicine', icon: Stethoscope, qualifications: 'MBBS, MRCP (UK)', photo: P.doc1,
    bio: 'Dr. Banda diagnoses and manages everyday and long-term medical conditions, and coordinates referrals to specialist care. He sees patients in our outpatient clinic.',
  },
  {
    slug: 'dr-chikondi-phiri', name: 'Dr. Chikondi Phiri', specialty: 'Obstetrics & Gynaecology', icon: HeartPulse, qualifications: 'MBBS, MRCOG', photo: P.doc2,
    bio: 'Dr. Phiri supports women through pregnancy and general gynaecological care, with a focus on safe antenatal and postnatal care.',
  },
  {
    slug: 'dr-yamikani-mwale', name: 'Dr. Yamikani Mwale', specialty: 'General Surgery', icon: Scissors, qualifications: 'MBBS, FRCS', photo: P.doc3,
    bio: 'Dr. Mwale provides surgical assessment, operating theatre procedures and follow-up care across a range of general surgical conditions.',
  },
  {
    slug: 'dr-thandiwe-nyirenda', name: 'Dr. Thandiwe Nyirenda', specialty: 'Paediatrics & Neonatal Care', icon: Baby, qualifications: 'MBBS, MMed (Paediatrics)', photo: P.doc4,
    bio: 'Dr. Nyirenda cares for infants and children, including newborns who need close monitoring in their first days.',
  },
  {
    slug: 'dr-grace-kamanga', name: 'Dr. Grace Kamanga', specialty: 'Family Medicine', icon: FlaskConical, qualifications: 'MBBS, MMed (Family Medicine)', photo: P.doc5,
    bio: 'Dr. Kamanga provides family-centred care for patients of all ages, with an emphasis on prevention and continuity of care.',
  },
  {
    slug: 'dr-mphatso-gondwe', name: 'Dr. Mphatso Gondwe', specialty: 'Dental Surgery', icon: Smile, qualifications: 'BDS', photo: P.doc6,
    bio: 'Dr. Gondwe leads our dental service, covering routine check-ups, treatment and implant assessment.',
  },
]
