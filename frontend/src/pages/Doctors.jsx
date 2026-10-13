import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Photo from '../components/Photo'
import Button from '../components/Button'
import { TEAM } from '../data/site'

export default function Doctors() {
  return (
    <>
      <PageHero kicker="Our team" title="Our Doctors & Specialists" text="Meet the specialists providing care across our departments." src="/images/doctors.jpg" alt="Shifa Hospital doctors" />
      <Section bg="white">
        <SectionHeader eyebrow="Meet the team" title="Clinicians & specialists" text="Experienced doctors and specialists across medicine, maternity, surgery, diagnostics and dental services." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {TEAM.map((d) => (
            <div key={d.slug} className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl transition">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Photo src="/images/doctor.jpg" icon={d.icon} alt={d.name} className="absolute inset-0 w-full h-full transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-display text-xl font-bold text-charcoal">{d.name}</h3>
                <p className="text-sm font-semibold text-cyan mt-1">{d.specialty}</p>
                <p className="text-sm text-ink/55 mt-1">{d.qualifications}</p>
                <div className="mt-auto pt-5">
                  <Button to={`/doctors/${d.slug}`} variant="outline" size="sm">View profile <ArrowRight size={16} /></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
