import { ArrowRight, CalendarCheck, Phone, UserCheck } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import { H, tel } from '../data/site'

const STEPS = [
  [CalendarCheck, 'Send your request', 'Fill in the online appointment form or call our reception team with your name, phone number and the department you need.'],
  [Phone, 'We confirm a time', 'Our reception team will contact you by phone to confirm an available date and time that works for you.'],
  [UserCheck, 'Arrive prepared', 'Come a little before your appointment time with your identification, referral letter if you have one, and any records or medications you are bringing.'],
]

export default function PatientAppointments() {
  return (
    <>
      <PageHero kicker="Patient Information" title="Appointments & Bookings" text="How to request an appointment at Premier Specialist Clinic, what happens after you book, and how to reschedule or cancel." showActions={false} />
      <Section bg="white">
        <SectionHeader eyebrow="Ways to book" title="Two ways to request an appointment" text="You can request an appointment online at any time, or call our reception team during opening hours." />
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Reveal className="bg-cloud rounded-2xl p-8">
            <h3 className="font-display text-2xl font-bold text-purple mb-3">Book online</h3>
            <p className="text-ink/70 leading-relaxed mb-6">Fill in our appointment request form with your details and preferred department. It only takes a few minutes, and you can send a request at any time of day.</p>
            <Button to="/book" variant="primary">Request an appointment <ArrowRight size={18} /></Button>
          </Reveal>
          <Reveal delay={100} className="bg-cloud rounded-2xl p-8">
            <h3 className="font-display text-2xl font-bold text-purple mb-3">Call reception</h3>
            <p className="text-ink/70 leading-relaxed mb-6">Prefer to speak to someone? Call our reception team during opening hours and they will help you book, answer your questions and confirm which department is right for you.</p>
            <Button href={tel} variant="outline"><Phone size={18} /> {H.phone}</Button>
          </Reveal>
        </div>
        <div className="mt-8 bg-mint rounded-2xl p-6 border-l-4 border-cyan">
          <p className="text-ink/80 leading-relaxed"><b className="text-charcoal">Please note:</b> walk-in care is not available at Premier Specialist Clinic. Please book ahead so we can prepare for your visit and reduce your waiting time.</p>
        </div>
      </Section>
      <Section bg="cloud">
        <SectionHeader eyebrow="What happens next" title="After you request an appointment" text="A simple three-step process from request to visit." />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {STEPS.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 100} className="bg-white rounded-2xl p-8 border border-slate-200">
              <span className="w-12 h-12 rounded-xl bg-cloud text-cyan grid place-items-center"><Icon size={24} /></span>
              <p className="text-xs font-extrabold tracking-[.2em] uppercase text-cyan mt-5">Step {i + 1}</p>
              <h3 className="font-display text-xl font-bold text-charcoal mt-2 mb-3">{t}</h3>
              <p className="text-sm text-ink/65 leading-relaxed">{d}</p>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section bg="white">
        <div className="max-w-3xl">
          <Eyebrow>Changes</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mt-3 mb-5">Rescheduling or cancelling</h2>
          <p className="text-ink/70 text-lg leading-relaxed">If you need to change or cancel your appointment, please contact our reception team as soon as you can, using the phone number you booked with. Calling ahead helps us offer the time to another patient and avoids unnecessary delays on the day.</p>
          <p className="text-ink/70 text-lg leading-relaxed mt-4">When you call, it helps to have your appointment reference number ready — you will receive it when your appointment is confirmed.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={tel} variant="primary"><Phone size={18} /> Call reception</Button>
            <Button to="/patient-info/faq" variant="outline">Read our FAQs <ArrowRight size={18} /></Button>
          </div>
        </div>
        <p className="mt-10 text-sm text-ink/50">Booking and cancellation arrangements are pending confirmation by Premier Specialist Clinic.</p>
      </Section>
    </>
  )
}
