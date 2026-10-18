import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Photo from '../components/Photo'
import Button from '../components/Button'
import { TEAM } from '../data/site'

export default function DoctorProfile() {
  const { slug } = useParams()
  const doctor = TEAM.find((d) => d.slug === slug)
  if (!doctor) return <Navigate to="/doctors" replace />
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 pt-32 pb-24">
      <Link to="/doctors" className="inline-flex items-center gap-1 text-sm font-semibold text-charcoal/60 hover:text-charcoal transition"><ArrowRight size={16} className="rotate-180" /> All doctors</Link>
      <div className="mt-8 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5">
          <Photo src="/images/doctor.jpg" icon={doctor.icon} alt={doctor.name} w={800} className="w-full aspect-[4/5] rounded-2xl block" />
        </div>
        <div className="md:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan">{doctor.specialty}</p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold text-charcoal">{doctor.name}</h1>
          <p className="mt-2 text-sm text-ink/50">{doctor.qualifications}</p>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">{doctor.bio}</p>
          <div className="mt-8"><Button to="/book">Book an appointment <ArrowRight size={18} /></Button></div>
        </div>
      </div>
    </section>
  )
}
