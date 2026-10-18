import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { H, HOURS, tel, DIRECTIONS } from '../data/site'

const FAQS = [
  {
    q: 'How do I book an appointment?',
    a: <>You can request an appointment at any time using our <Link to="/book" className="text-cyan font-semibold hover:underline">online appointment form</Link>, or call our reception team during opening hours on {H.phone}. Either way, our team will contact you to confirm an available date and time. See our <Link to="/patient-info/appointments" className="text-cyan font-semibold hover:underline">Appointments &amp; Bookings guide</Link> for full details.</>,
  },
  {
    q: 'Do you accept walk-ins?',
    a: <>Walk-in care is not available at Premier Specialist Clinic. Please book ahead so we can prepare for your visit and reduce your waiting time.</>,
  },
  {
    q: 'What are your opening hours?',
    a: <>{HOURS}. If you need to visit outside these hours, please call ahead to check whether your department is open.</>,
  },
  {
    q: 'Where is the clinic located?',
    a: <>We are located at {H.address}. You can <a href={DIRECTIONS} target="_blank" rel="noreferrer" className="text-cyan font-semibold hover:underline">get directions to the clinic here</a>.</>,
  },
  {
    q: 'Which services does the clinic offer?',
    a: <>We offer Dermatology &amp; Advanced Skin Care, Ophthalmology, Optics, Dental and Specialist Consultations. You can <Link to="/services" className="text-cyan font-semibold hover:underline">explore our services</Link> to see the full range of care in each department.</>,
  },
  {
    q: 'Do I need a referral letter?',
    a: <>Some specialist services may ask for a referral letter from your doctor or another health facility. Requirements can vary by department, so please call our reception team before your appointment to confirm what you need to bring.</>,
  },
  {
    q: 'Do you accept medical insurance or corporate schemes?',
    a: <>We work with corporate medical schemes and insurers. Accepted providers and cover arrangements can vary, so please contact our administration team before your visit to confirm that your provider is accepted and whether pre-authorisation is needed. Read more on our <Link to="/patient-info/fees-insurance" className="text-cyan font-semibold hover:underline">Fees &amp; Insurance page</Link>.</>,
  },
  {
    q: 'How do I pay for my appointment?',
    a: <>Our reception team will explain the fees for your appointment when your booking is confirmed, and will let you know the accepted payment methods. Self-paying patients are welcome.</>,
  },
  {
    q: 'Can I reschedule or cancel my appointment?',
    a: <>Yes. Please contact our reception team as soon as you can on {H.phone}. Calling ahead helps us offer the time to another patient. Having your appointment reference number ready makes the process quicker.</>,
  },
  {
    q: 'What should I bring to my appointment?',
    a: <>Please bring a form of identification, your referral letter if you have one, a list of your current medicines, any previous records or test results, and your medical scheme membership card if you will be using insurance. See the full <Link to="/patient-info/preparing" className="text-cyan font-semibold hover:underline">Preparing for Your Visit checklist</Link>.</>,
  },
  {
    q: 'Do you offer care for children?',
    a: <>Yes. We offer children&rsquo;s care across several departments, including childhood skin conditions, children&rsquo;s eye examinations and children&rsquo;s eyewear. Please mention your child&rsquo;s age when you book so we can arrange the right appointment.</>,
  },
  {
    q: 'How do I contact the clinic?',
    a: <>You can call us on <a href={tel} className="text-cyan font-semibold hover:underline">{H.phone}</a> or email <a href={`mailto:${H.email}`} className="text-cyan font-semibold hover:underline">{H.email}</a> during opening hours. Our reception team will be happy to help with bookings, questions and directions.</>,
  },
]

export default function PatientFaq() {
  const [open, setOpen] = useState(0)
  return (
    <>
      <PageHero kicker="Patient Information" title="Frequently Asked Questions" text="Quick answers to the questions patients ask us most often — from booking and fees to what to bring on the day." showActions={false} />
      <Section bg="white">
        <SectionHeader eyebrow="Common questions" title="Frequently asked questions" text="Open a question to see the answer. If you cannot find what you need, our reception team is happy to help." />
        <div className="mt-12 max-w-3xl space-y-3">
          {FAQS.map(({ q, a }, i) => (
            <Reveal key={q} delay={Math.min(i * 40, 240)} className="bg-cloud rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                aria-expanded={open === i}
              >
                <span className="font-bold text-charcoal">{q}</span>
                <ChevronDown size={20} className={`shrink-0 text-cyan transition ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6 -mt-1">
                  <p className="text-ink/70 leading-relaxed">{a}</p>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </Section>
      <Section bg="mint">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal">Still have a question?</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/65">Our reception team is happy to help with anything not covered here — from booking and fees to preparing for your visit.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={tel} variant="primary"><Phone size={18} /> {H.phone}</Button>
            <Button href={`mailto:${H.email}`} variant="outline"><Mail size={18} /> Email us</Button>
            <Button to="/book" variant="outline">Book an appointment <ArrowRight size={18} /></Button>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-ink/50">
            <MapPin size={15} className="text-cyan shrink-0" /> {H.address} · {HOURS}
          </div>
        </div>
      </Section>
    </>
  )
}
