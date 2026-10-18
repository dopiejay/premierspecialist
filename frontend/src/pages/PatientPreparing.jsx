import { ArrowRight, Baby, Check, Clock } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import { tel } from '../data/site'

const BRING = [
  'A form of identification, such as a national ID or passport',
  'Your referral letter, if you were referred by another doctor or health facility',
  'A list of any medicines you are currently taking, including doses',
  'Previous test results, letters or records related to your condition',
  'Your medical scheme membership card and ID, if you will be using insurance',
  'Your Health Passport, if you have one',
]

export default function PatientPreparing() {
  return (
    <>
      <PageHero kicker="Patient Information" title="Preparing for Your Visit" text="A little preparation helps your appointment run smoothly. Here is what to bring and what to expect when you arrive." showActions={false} />
      <Section bg="white">
        <SectionHeader eyebrow="What to bring" title="Your appointment checklist" text="Having these items with you helps our team understand your history and give you the best possible care." />
        <div className="grid md:grid-cols-2 gap-4 mt-12 max-w-4xl">
          {BRING.map((item, i) => (
            <Reveal key={item} delay={(i % 2) * 80} className="flex gap-3 bg-cloud rounded-2xl p-5">
              <span className="w-7 h-7 rounded-full bg-white text-cyan grid place-items-center shrink-0 mt-0.5"><Check size={16} /></span>
              <p className="text-ink/75 leading-relaxed">{item}</p>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section bg="mint">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Eyebrow>On the day</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mt-3 mb-5">Arriving for your appointment</h2>
            <div className="space-y-5">
              <Reveal className="flex gap-4 bg-white rounded-2xl p-6 border border-slate-200">
                <span className="w-11 h-11 rounded-xl bg-cloud text-cyan grid place-items-center shrink-0"><Clock size={20} /></span>
                <p><b className="text-charcoal">Arrive a little early</b><br /><span className="text-ink/65 text-sm leading-relaxed">Please arrive about 15 minutes before your appointment time so reception can check you in and our team can review your details without rushing.</span></p>
              </Reveal>
              <Reveal delay={100} className="flex gap-4 bg-white rounded-2xl p-6 border border-slate-200">
                <span className="w-11 h-11 rounded-xl bg-cloud text-cyan grid place-items-center shrink-0"><Baby size={20} /></span>
                <p><b className="text-charcoal">Bringing a child</b><br /><span className="text-ink/65 text-sm leading-relaxed">For children&rsquo;s appointments, please bring the child&rsquo;s Health Passport or clinic card and any previous records. One parent or guardian should attend where possible.</span></p>
              </Reveal>
            </div>
          </div>
          <Reveal delay={150} className="bg-white rounded-2xl p-8 border border-slate-200">
            <h3 className="font-display text-2xl font-bold text-charcoal mb-4">Department-specific preparation</h3>
            <p className="text-ink/70 leading-relaxed">Some appointments may need simple special preparation — for example, dilating drops for certain eye examinations. If any preparation is needed for your appointment, our team will tell you when your appointment is confirmed.</p>
            <p className="text-ink/70 leading-relaxed mt-4">If you are unsure whether you need to prepare in any way, please call our reception team before your visit and they will check with the relevant department.</p>
            <Button href={tel} variant="primary" className="mt-6">Call reception</Button>
          </Reveal>
        </div>
      </Section>
      <Section bg="white">
        <div className="max-w-3xl">
          <Eyebrow>Next steps</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mt-3 mb-5">Not booked yet?</h2>
          <p className="text-ink/70 text-lg leading-relaxed">Request an appointment online or call our reception team. If you have a question about preparing for your visit, we are happy to help before you come in.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/book" variant="primary">Book an appointment <ArrowRight size={18} /></Button>
            <Button href={tel} variant="outline">Ask a question</Button>
          </div>
        </div>
        <p className="mt-10 text-sm text-ink/50">Preparation guidance is general and pending confirmation by Premier Specialist Clinic departments.</p>
      </Section>
    </>
  )
}
