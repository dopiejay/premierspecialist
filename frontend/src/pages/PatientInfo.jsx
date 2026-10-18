import { Link } from 'react-router-dom'
import { ArrowRight, CalendarCheck, ClipboardList, Clock, HelpCircle, MapPin, Phone, Wallet } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { H, HOURS, tel } from '../data/site'

const CARDS = [
  { to: '/patient-info/appointments', icon: CalendarCheck, title: 'Appointments & Bookings', text: 'How to request an appointment, what happens next, and how to reschedule or cancel.' },
  { to: '/patient-info/preparing', icon: ClipboardList, title: 'Preparing for Your Visit', text: 'What to bring with you and how to get ready for your appointment.' },
  { to: '/patient-info/fees-insurance', icon: Wallet, title: 'Fees & Insurance', text: 'Information on consultation fees, payment and accepted medical schemes.' },
  { to: '/patient-info/faq', icon: HelpCircle, title: 'Frequently Asked Questions', text: 'Quick answers to the questions patients ask us most often.' },
]

export default function PatientInfo() {
  return (
    <>
      <PageHero kicker="Patient Information" title="Everything you need for your visit" text="Practical guidance on appointments, preparation, fees and the most common questions patients ask — so you can arrive prepared and confident." />
      <Section bg="white">
        <div className="grid sm:grid-cols-3 gap-5">
          {[[Clock, 'Opening hours', HOURS], [MapPin, 'Find us', H.address], [Phone, 'Contact', H.phone]].map(([Icon, t, d]) => (
            <Reveal key={t} className="bg-mint rounded-2xl p-6 flex gap-4">
              <span className="w-11 h-11 rounded-xl bg-white text-cyan grid place-items-center shrink-0"><Icon size={20} /></span>
              <p><b className="text-charcoal">{t}</b><br /><span className="text-ink/70 text-sm">{d}</span></p>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section bg="mint">
        <SectionHeader eyebrow="Guides" title="Patient information guides" text="Open any guide for the details — or call our reception team if you cannot find what you need." />
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {CARDS.map(({ to, icon: Icon, title, text }, i) => (
            <Reveal key={to} delay={(i % 2) * 100}>
              <Link to={to} className="group block bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition h-full">
                <span className="w-12 h-12 rounded-xl bg-cloud text-cyan grid place-items-center"><Icon size={24} /></span>
                <h3 className="font-display text-2xl font-bold text-charcoal mt-5 mb-3">{title}</h3>
                <p className="text-ink/70 leading-relaxed">{text}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan mt-5">Learn more <ArrowRight size={15} className="transition group-hover:translate-x-1" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink/50">This information is provided for general guidance and is pending confirmation by Premier Specialist Clinic.</p>
      </Section>
      <CtaBand eyebrow="Appointments" title="Ready to book?" text="Send us an appointment request online or call our reception team — we will help you find the right service and a convenient time." />
    </>
  )
}
