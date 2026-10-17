import { Stethoscope, HeartPulse, Activity, Baby, FlaskConical, Scissors, Smile, Droplets, Salad, Moon, Brain, ShieldCheck } from 'lucide-react'

// TODO: confirm every value with Premier Specialist Clinic before going live.
// Contact details below are from the clinic's public directory listing (MapXplore) and are pending verification.
export const H = {
  phone: '+265 999 562 272',
  email: 'premclinics@gmail.com',
  address: 'Off Ndola Road, Beaton, Blantyre',
}
export const tel = `tel:${H.phone.replace(/\s/g, '')}`
export const DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=Premier+Specialist+Clinic+Beaton+Blantyre'
export const HOURS = 'Mon–Fri 08:00–17:00 · Sat 08:00–12:00 · Sun closed'

// Stock placeholders (Unsplash). Replace with real Premier Specialist Clinic photos in src/assets when available.
export const img = (id, w = 1200) =>
  /^(https?:)?\/\//.test(id) || id.startsWith('/')
    ? id
    : `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`
export const P = {
  hero: '1576091160399-112ba8d25d1d', doctor: '1612349317150-e413f6a5b16d', lab: '1579154204601-01588f351e67',
  dental: '1606811841689-23dfddce3e95', surgery: '1551076805-e1869033e561', hospital: '1519494026892-80bbd2d6fd0d',
  maternity: '1555252333-9f8e92e65df9', baby: '1584515933487-779824d29309', outpatient: '1559757148-5c350d0d3c56',
  water: '1523362628745-0c100150b504', diet: '1512621776951-a57141f2eefd', exercise: '1534438327276-14e5300c3a48',
  sleep: '1541781774459-bb2af2f05b55', mind: '1506126613408-eca07ce68773', smoke: '1573497019940-1c28c88b4f3e',
  doc1: '1622253692010-333f2da6031d', doc2: '1594824476967-48c8b964273f', doc3: '1537368910025-700350fe46c7',
  doc4: '1582750433449-648ed127bb54', doc5: '1559839734-2b71ea197ec2', doc6: '1651008376811-b90baee60c1f',
}

// Specialist-clinic services. Detail content is placeholder copy pending clinical verification.
export const SERVICES = [
  {
    slug: 'internal-medicine-consultations',
    icon: Stethoscope,
    title: 'Internal Medicine & Specialist Consultations',
    photo: '/images/service1.jpg',
    text: 'Consultations for everyday illness, long-term conditions and referral to the right specialist.',
    overview: 'Internal medicine consultations are the first point of contact for most patients. Consultations cover everyday illness, ongoing conditions and general health concerns, with referral to other specialists when needed.',
    conditions: ['Everyday illness such as colds, flu and infections', 'Long-term conditions that need ongoing follow-up', 'General health concerns and routine check-ups'],
    treatments: ['Specialist medical consultations', 'Long-term condition follow-up', 'Referral to other specialists', 'Preventive health advice'],
  },
  {
    slug: 'womens-health-antinatal',
    icon: HeartPulse,
    title: 'Women’s Health & Antenatal Care',
    photo: P.maternity,
    text: 'Antenatal care, women’s health and family planning, with specialist clinics on scheduled days.',
    overview: 'Women’s health and antenatal care support women through pregnancy and beyond, alongside general gynaecological care, with specialist clinics held on scheduled days.',
    conditions: ['Pregnancy and antenatal concerns', 'Women’s health and gynaecological needs', 'Family planning discussions'],
    treatments: ['Antenatal consultations', 'Women’s health clinics', 'Scheduled specialist reviews'],
  },
  {
    slug: 'paediatrics-child-health',
    icon: Baby,
    title: 'Paediatrics & Child Health',
    photo: P.baby,
    text: 'Care for infants, children and adolescents, including growth, nutrition and immunisation advice.',
    overview: 'Paediatrics and child health covers the medical needs of infants, children and adolescents, from routine check-ups to the management of childhood illness.',
    conditions: ['Childhood illness and infections', 'Growth, nutrition and development concerns', 'Routine child health checks'],
    treatments: ['Paediatric consultations', 'Child health and development reviews', 'Immunisation advice and referral', 'Referral for specialist paediatric care'],
  },
  {
    slug: 'chronic-disease-management',
    icon: Activity,
    title: 'Chronic Disease Management',
    photo: P.exercise,
    text: 'Ongoing care for conditions such as high blood pressure and diabetes, with regular review.',
    overview: 'Chronic disease management supports patients living with long-term conditions through regular review, treatment and lifestyle guidance.',
    conditions: ['Long-term conditions needing regular review', 'High blood pressure and diabetes follow-up', 'Ongoing medication management'],
    treatments: ['Regular review consultations', 'Treatment and monitoring', 'Lifestyle and self-care guidance', 'Referral when specialist input is needed'],
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
    slug: 'minor-procedures',
    icon: Scissors,
    title: 'Minor Procedures & Wound Care',
    photo: P.surgery,
    text: 'Outpatient procedures and wound care carried out in a clean, supervised setting.',
    overview: 'Minor procedures cover a range of outpatient treatments and wound care carried out in a clean, supervised setting, with follow-up and review.',
    conditions: ['Minor injuries and wounds needing treatment', 'Small procedures assessed as suitable for a clinic setting', 'Follow-up after a procedure'],
    treatments: ['Wound care and dressings', 'Minor outpatient procedures', 'Follow-up and review'],
  },
]

export const FEATURED = [
  { icon: Stethoscope, title: 'Specialist Consultations', photo: '/images/service1.jpg', text: 'Medical consultations for everyday illness, long-term conditions and referral to the right specialist.' },
  { icon: HeartPulse, title: 'Women’s Health & Antenatal', photo: P.maternity, text: 'Pregnancy-related consultations and women’s health services, with details of available clinics and care options.' },
  { icon: FlaskConical, title: 'Laboratory & Diagnostics', photo: P.lab, text: 'Diagnostic investigations that support medical assessment and treatment decisions.' },
]

export const NAV = [['/', 'Home'], ['/about', 'About Us'], ['/services', 'Our Services'], ['/doctors', 'Our Specialists'], ['/health-tips', 'Health Tips']]

// General wellness content (demo copy — pending review by the clinic). Shape is CMS-ready.
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

// Illustrative placeholder profiles — replace with verified, approved details before launch.
export const TEAM = [
  {
    slug: 'dr-alinafe-banda', name: 'Dr. Alinafe Banda', specialty: 'Internal Medicine', icon: Stethoscope, qualifications: 'MBBS, MRCP (UK)', photo: P.doc1,
    bio: 'Dr. Banda diagnoses and manages everyday and long-term medical conditions, and coordinates referral to other specialists. He sees patients in the consultation clinic.',
  },
  {
    slug: 'dr-chikondi-phiri', name: 'Dr. Chikondi Phiri', specialty: 'Obstetrics & Gynaecology', icon: HeartPulse, qualifications: 'MBBS, MRCOG', photo: P.doc2,
    bio: 'Dr. Phiri supports women through pregnancy and general gynaecological care, with a focus on safe antenatal and postnatal care.',
  },
  {
    slug: 'dr-thandiwe-nyirenda', name: 'Dr. Thandiwe Nyirenda', specialty: 'Paediatrics & Child Health', icon: Baby, qualifications: 'MBBS, MMed (Paediatrics)', photo: P.doc4,
    bio: 'Dr. Nyirenda cares for infants, children and adolescents, including routine child health and development reviews.',
  },
  {
    slug: 'dr-grace-kamanga', name: 'Dr. Grace Kamanga', specialty: 'Family Medicine', icon: FlaskConical, qualifications: 'MBBS, MMed (Family Medicine)', photo: P.doc5,
    bio: 'Dr. Kamanga provides family-centred care for patients of all ages, with an emphasis on prevention and continuity of care.',
  },
  {
    slug: 'dr-yamikani-mwale', name: 'Dr. Yamikani Mwale', specialty: 'Chronic Disease Management', icon: Activity, qualifications: 'MBBS, MRCGP', photo: P.doc3,
    bio: 'Dr. Mwale manages long-term conditions such as high blood pressure and diabetes through regular review, treatment and lifestyle guidance.',
  },
  {
    slug: 'dr-mphatso-gondwe', name: 'Dr. Mphatso Gondwe', specialty: 'Dental Surgery', icon: Smile, qualifications: 'BDS', photo: P.doc6,
    bio: 'Dr. Gondwe provides routine dental check-ups, treatment and oral health advice.',
  },
]
