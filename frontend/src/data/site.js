import { Stethoscope, HeartPulse, Activity, Baby, FlaskConical, Smile, Sparkles, Eye, Glasses } from 'lucide-react'

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
  doc1: '1622253692010-333f2da6031d', doc2: '1594824476967-48c8b964273f', doc3: '1537368910025-700350fe46c7',
  doc4: '1582750433449-648ed127bb54', doc5: '1559839734-2b71ea197ec2', doc6: '1651008376811-b90baee60c1f',
}

// Specialist-clinic services. Each service is broken into categories of care so
// patients can see exactly what is offered. Copy pending clinical verification.
export const SERVICES = [
  {
    slug: 'dermatology-skin-care',
    icon: Sparkles,
    title: 'Dermatology & Advanced Skin Care',
    photo: '/images/dermatology.jpg',
    text: 'Dedicated consultations, advanced therapies and cosmetic treatments for acute and chronic skin conditions.',
    overview: 'Our dermatology service cares for the skin, hair and nails across every age group — from short-lived rashes to long-term conditions and advanced cosmetic treatment, all delivered under specialist supervision.',
    categories: [
      { title: 'General & medical dermatology', items: ['Acne and acne scarring', 'Eczema and atopic dermatitis', 'Psoriasis', 'Rosacea and facial redness', 'Hives (urticaria) and chronic rashes'] },
      { title: 'Skin infections', items: ['Fungal infections such as ringworm and athlete’s foot', 'Bacterial skin infections', 'Viral skin problems including warts and cold sores', 'Scabies and other infestations'] },
      { title: 'Hair & scalp conditions', items: ['Hair loss and alopecia', 'Dandruff and scalp irritation', 'Scalp infections', 'Hair and scalp assessment'] },
      { title: 'Nail conditions', items: ['Fungal nail infection', 'Ingrown toenails', 'Nail disorders and discolouration'] },
      { title: 'Pigmentation & skin tone', items: ['Hyperpigmentation and dark spots', 'Melasma', 'Vitiligo', 'Uneven skin tone'] },
      { title: 'Allergy & skin sensitivity', items: ['Allergic skin reactions', 'Contact dermatitis', 'Sensitive and reactive skin'] },
      { title: 'Lesions, moles & screening', items: ['Mole and skin lesion assessment', 'Skin cancer screening', 'Cyst, wart and skin tag removal'] },
      { title: 'Cosmetic & advanced skin therapies', items: ['Chemical peels', 'Skin rejuvenation', 'Scar treatment', 'Advanced skin therapies'] },
      { title: 'Children’s skin', items: ['Childhood eczema', 'Nappy rash', 'Birthmarks', 'Common childhood rashes'] },
    ],
  },
  {
    slug: 'ophthalmology',
    icon: Eye,
    title: 'Ophthalmology',
    photo: '/images/ophthalmology.jpg',
    text: 'Expert medical and surgical eye care for complex optical disorders, delivered by specialist consultants.',
    overview: 'Our ophthalmology service provides medical and surgical care for the eyes, from routine assessment of vision problems to the management of complex eye disease, with referral for surgery where it is needed.',
    categories: [
      { title: 'Eye consultations & examinations', items: ['Assessment of vision problems', 'Comprehensive eye examination', 'Diagnosis of eye disease'] },
      { title: 'Cataract assessment & care', items: ['Cataract assessment', 'Pre- and post-operative review', 'Referral for cataract surgery'] },
      { title: 'Glaucoma screening & management', items: ['Glaucoma screening', 'Eye pressure monitoring', 'Ongoing glaucoma care'] },
      { title: 'Retina & diabetic eye disease', items: ['Diabetic eye screening', 'Retinal assessment', 'Management of retinal conditions'] },
      { title: 'Eye infections & inflammation', items: ['Conjunctivitis', 'Blepharitis', 'Uveitis and eye inflammation'] },
      { title: 'Eye injuries & trauma', items: ['Assessment of eye injuries', 'Foreign body removal', 'Urgent eye care advice'] },
      { title: 'Surgical eye care', items: ['Specialist surgical assessment', 'Referral for eye surgery', 'Post-operative follow-up'] },
      { title: 'Children’s eye care', items: ['Children’s eye examination', 'Squint and lazy eye assessment', 'Vision development concerns'] },
    ],
  },
  {
    slug: 'optics',
    icon: Glasses,
    title: 'Optics',
    photo: '/images/optics.jpg',
    text: 'Vision examinations, corrective lens fittings and standard optical assessments for all ages.',
    overview: 'Our optical service covers vision testing and corrective eyewear, helping you see clearly and comfortably. We assess your sight, fit the right lenses and advise on the eyewear that suits your needs.',
    categories: [
      { title: 'Vision examinations', items: ['Comprehensive eye test', 'Vision and sight assessment', 'Prescription updates'] },
      { title: 'Prescription glasses', items: ['Corrective lens fitting', 'Reading and distance glasses', 'Prescription eyewear dispensing'] },
      { title: 'Frames & lens options', items: ['Single vision, bifocal and progressive lenses', 'Anti-glare and scratch-resistant coatings', 'Photochromic and blue-light lenses'] },
      { title: 'Contact lenses', items: ['Contact lens fitting', 'Contact lens aftercare', 'Advice on lens care and use'] },
      { title: 'Sunglasses & protective eyewear', items: ['Prescription sunglasses', 'UV-protective eyewear', 'Protective and safety eyewear'] },
      { title: 'Children’s eyewear', items: ['Children’s vision screening', 'School vision testing', 'Children’s frames and lenses'] },
    ],
  },
  {
    slug: 'dental',
    icon: Smile,
    title: 'Dental',
    photo: '/images/dental.jpg',
    text: 'Routine dental check-ups, treatment and oral health advice for the whole family.',
    overview: 'Our dental service provides routine check-ups, common treatments and oral health advice. From preventive care to everyday dental problems, we help you and your family maintain a healthy smile at every age.',
    categories: [
      { title: 'Dental examinations', items: ['Routine dental check-up', 'Oral health assessment', 'Dental X-rays and diagnosis'] },
      { title: 'Preventive care', items: ['Teeth cleaning and scaling', 'Fluoride treatment', 'Sealants for children'] },
      { title: 'Fillings & restorations', items: ['Tooth-coloured fillings', 'Repair of chipped or decayed teeth', 'Root canal treatment'] },
      { title: 'Tooth removal', items: ['Extraction of damaged teeth', 'Wisdom tooth assessment', 'Post-extraction care'] },
      { title: 'Children’s dentistry', items: ['Child dental check-ups', 'Early decay prevention', 'Advice on brushing and diet'] },
      { title: 'Oral health advice', items: ['Brushing and flossing guidance', 'Gum health advice', 'Referral for specialist dental care'] },
    ],
  },
  {
    slug: 'specialist-consultations',
    icon: Stethoscope,
    title: 'Specialist Consultations',
    photo: '/images/consultations.jpg',
    text: 'Advanced outpatient clinic care featuring visiting medical consultants and general medical case assessments.',
    overview: 'Our specialist consultation clinics give you access to advanced outpatient care and visiting medical consultants. We assess your case, arrange any needed tests and coordinate onward referral where specialist input is required.',
    categories: [
      { title: 'Visiting consultant clinics', items: ['Scheduled specialist clinics', 'Consultant-led assessments', 'Access to visiting specialists'] },
      { title: 'General medical assessments', items: ['Everyday illness and infections', 'General health concerns', 'Routine check-ups'] },
      { title: 'Specialist referrals', items: ['Referral to the right specialist', 'Second opinions', 'Coordination of onward care'] },
      { title: 'Follow-up & review', items: ['Review after treatment', 'Ongoing condition follow-up', 'Preventive health advice'] },
    ],
  },
]

export const FEATURED = [
  { icon: Sparkles, title: 'Dermatology & Skin Care', photo: '/images/dermatology.jpg', text: 'Consultations and advanced therapies for acute and chronic skin, hair and nail conditions.' },
  { icon: Eye, title: 'Ophthalmology', photo: '/images/ophthalmology.jpg', text: 'Expert medical and surgical eye care for complex optical disorders.' },
  { icon: Glasses, title: 'Optics', photo: '/images/optics.jpg', text: 'Vision examinations, corrective lens fittings and standard optical assessments.' },
]

export const NAV = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/services', 'Our Services'],
  ['/doctors', 'Our Specialists'],
  ['/patient-info', 'Patient Information', [
    ['/patient-info/appointments', 'Appointments & Bookings'],
    ['/patient-info/preparing', 'Preparing for Your Visit'],
    ['/patient-info/fees-insurance', 'Fees & Insurance'],
    ['/patient-info/faq', 'Frequently Asked Questions'],
  ]],
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
