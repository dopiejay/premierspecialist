import { Link } from 'react-router-dom'
import { Clock, MapPin, Phone, Mail } from 'lucide-react'
import { H, HOURS, tel, NAV } from '../data/site'

const FOOTER_SERVICES = [
  ['Dermatology & Advanced Skin Care', 'dermatology-skin-care'],
  ['Ophthalmology', 'ophthalmology'],
  ['Optics', 'optics'],
  ['Dental', 'dental'],
  ['Specialist Consultations', 'specialist-consultations'],
]

export default function Footer() {
  return (
    <footer className="bg-cloud text-ink/70">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight text-purple mb-4">Premier Specialist Clinic</p>
          <p className="leading-relaxed text-ink/60">Specialist consultations and diagnostic care for individuals and families in Blantyre.</p>
        </div>
        <div>
          <p className="font-bold text-charcoal mb-3">Quick Links</p>
          <div className="flex flex-col gap-2">{NAV.map(([to, l]) => <Link key={to} to={to} className="hover:text-cyan transition">{l}</Link>)}</div>
        </div>
        <div>
          <p className="font-bold text-charcoal mb-3">Services</p>
          <div className="flex flex-col gap-2">{FOOTER_SERVICES.map(([l, slug]) => <Link key={slug} to={`/services/${slug}`} className="hover:text-cyan transition">{l}</Link>)}</div>
        </div>
        <div>
          <p className="font-bold text-charcoal mb-3">Contact</p>
          <p className="flex flex-col gap-2 text-ink/70"><span><Clock size={14} className="inline mr-2 text-cyan" />{HOURS}</span><span><MapPin size={14} className="inline mr-2 text-cyan" />{H.address}</span><span><Phone size={14} className="inline mr-2 text-cyan" /><a href={tel} className="hover:text-cyan">{H.phone}</a></span><span><Mail size={14} className="inline mr-2 text-cyan" /><a href={`mailto:${H.email}`} className="hover:text-cyan">{H.email}</a></span></p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 border-t border-ink/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink/50">
        <p>© 2026 Premier Specialist Clinic. All rights reserved. · <span className="hover:text-cyan cursor-pointer">Privacy Policy</span></p>
        <p>Concept demo — not an official Premier Specialist Clinic website. Content pending verification.</p>
      </div>
    </footer>
  )
}
