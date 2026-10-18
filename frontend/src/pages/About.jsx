import { ArrowRight, Check, Eye, Heart, HeartHandshake, HeartPulse, MessagesSquare, ShieldCheck, Target } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'

const PILLARS = [
  { icon: Target, title: 'Our Mission', body: 'To provide quality healthcare with compassion, professionalism and respect for every patient.' },
  { icon: Eye, title: 'Our Vision', body: 'To be a trusted healthcare provider known for patient-centred care and continuous improvement.' },
]

const VALUES = ['Compassion', 'Integrity', 'Professionalism', 'Respect', 'Patient safety']

const APPROACH = [
  [HeartHandshake, 'Respect for every patient', 'Create a welcoming experience in which patients are treated with dignity.'],
  [MessagesSquare, 'Clear communication', 'Help patients understand their care options and where to seek assistance.'],
  [HeartPulse, 'Patient wellbeing', 'Keep the patient\u2019s needs and wellbeing central to the care experience.'],
  [ShieldCheck, 'Professional practice', 'Present accurate information about services, staff qualifications and care arrangements.'],
]

export default function About() {
  return (
    <>
      <PageHero kicker="About Premier Specialist Clinic" title="Care That Puts People First." text="Get to know Premier Specialist Clinic, our approach to healthcare, and our commitment to providing a welcoming and professional experience for every patient." src="/images/doc.jpg" alt="A healthcare professional at Premier Specialist Clinic">
        <Button to="/services" variant="cyan">Explore Our Services <ArrowRight size={18} /></Button>
        <Button to="/book" variant="ghostLight">Contact Us</Button>
      </PageHero>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-5">Healthcare with Purpose</h2>
          <p className="text-ink/70 text-lg leading-relaxed">Premier Specialist Clinic is a specialist outpatient clinic serving the people of Blantyre, Malawi. We bring together clinicians and diagnostic teams to provide accessible, patient-centred care across our medical services.</p>
          <p className="text-ink/70 text-lg leading-relaxed mt-4">From everyday consultations to specialist care, our focus is on treating every patient with dignity, clear communication and professionalism.</p>
        </Reveal>
        <Reveal delay={120}>
          <img src="/images/about.jpg" alt="Premier Specialist Clinic" className="w-full h-[420px] rounded-2xl object-cover shadow-xl" />
        </Reveal>
      </section>

      <section className="bg-cloud py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <Eyebrow>What Drives Us</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3">Mission, vision &amp; core values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <Reveal key={title} className="bg-white rounded-2xl p-8 border border-slate-200">
                <span className="w-12 h-12 rounded-xl bg-cloud text-cyan grid place-items-center"><Icon size={24} /></span>
                <h3 className="font-display text-2xl font-bold text-purple mt-5 mb-3">{title}</h3>
                <p className="text-ink/70 leading-relaxed">{body}</p>
              </Reveal>
            ))}
            <Reveal className="bg-white rounded-2xl p-8 border border-slate-200">
              <span className="w-12 h-12 rounded-xl bg-cloud text-cyan grid place-items-center"><Heart size={24} /></span>
              <h3 className="font-display text-2xl font-bold text-purple mt-5 mb-3">Our Values</h3>
              <ul className="space-y-2">
                {VALUES.map((v) => <li key={v} className="flex items-center gap-2 text-ink/70"><Check size={16} className="text-green shrink-0" /> {v}</li>)}
              </ul>
            </Reveal>
          </div>
          <p className="mt-8 text-sm text-ink/50">Mission, vision and values are proposed for this concept and are pending confirmation by Premier Specialist Clinic management.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="max-w-3xl">
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3">Our approach to patient care</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/65">Principles that shape the experience we aim to provide at every visit.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {APPROACH.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 80} className="flex gap-4 bg-cloud rounded-2xl p-7">
              <span className="w-11 h-11 rounded-xl bg-white text-cyan grid place-items-center shrink-0 shadow-sm"><Icon size={20} /></span>
              <div><p className="font-bold text-charcoal">{t}</p><p className="text-sm text-ink/65 mt-1 leading-relaxed">{d}</p></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-purple">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
          <div className="max-w-2xl">
            <Eyebrow light>Next Steps</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">Your Healthcare Journey Starts Here.</h2>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">Explore the services available at Premier Specialist Clinic or contact the clinic to enquire about your healthcare needs.</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:shrink-0">
            <Button to="/services" variant="cyan">Explore Medical Services <ArrowRight size={18} /></Button>
            <Button to="/book" variant="ghostLight">Get in Touch</Button>
          </div>
        </div>
      </section>
    </>
  )
}
