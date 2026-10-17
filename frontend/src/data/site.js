import { Stethoscope, HeartPulse, Activity, Baby, FlaskConical, Smile, Droplets, Salad, Moon, Brain, ShieldCheck, Sparkles, Eye, Glasses } from 'lucide-react'

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

// Specialist-clinic services. Each service is broken into categories of care so
// patients can see exactly what is offered. Copy pending clinical verification.
export const SERVICES = [
  {
    slug: 'dermatology-skin-care',
    icon: Sparkles,
    title: 'Dermatology & Advanced Skin Care',
    photo: '/images/service1.jpg',
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
    photo: P.doctor,
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
    photo: P.outpatient,
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
    slug: 'specialist-consultations',
    icon: Stethoscope,
    title: 'Specialist Consultations',
    photo: P.hero,
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
  { icon: Sparkles, title: 'Dermatology & Skin Care', photo: '/images/service1.jpg', text: 'Consultations and advanced therapies for acute and chronic skin, hair and nail conditions.' },
  { icon: Eye, title: 'Ophthalmology', photo: P.doctor, text: 'Expert medical and surgical eye care for complex optical disorders.' },
  { icon: Glasses, title: 'Optics', photo: P.outpatient, text: 'Vision examinations, corrective lens fittings and standard optical assessments.' },
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
