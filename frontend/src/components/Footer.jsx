import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { H, tel, NAV } from '../data/site'

const FOOTER_SERVICES = [
  ['Internal Medicine & Specialist Consultations', 'internal-medicine-consultations'],
  ['Women’s Health & Antenatal Care', 'womens-health-antinatal'],
  ['Paediatrics & Child Health', 'paediatrics-child-health'],
  ['Chronic Disease Management', 'chronic-disease-management'],
  ['Laboratory & Diagnostics', 'laboratory-diagnostics'],
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-5 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight text-white mb-4">Premier Specialist Clinic</p>
          <p className="leading-relaxed text-white/70">Specialist consultations and diagnostic care for individuals and families in Blantyre.</p>
        </div>
        <div>
          <p className="font-bold text-white mb-3">Quick Links</p>
          <div className="flex flex-col gap-2">{NAV.map(([to, l]) => <Link key={to} to={to} className="hover:text-yellow transition">{l}</Link>)}</div>
        </div>
        <div>
          <p className="font-bold text-white mb-3">Services</p>
          <div className="flex flex-col gap-2">{FOOTER_SERVICES.map(([l, slug]) => <Link key={slug} to={`/services/${slug}`} className="hover:text-yellow transition">{l}</Link>)}</div>
        </div>
        <div>
          <p className="font-bold text-white mb-3">Contact</p>
          <p className="flex flex-col gap-2 text-white/70"><span><MapPin size={14} className="inline mr-2 text-yellow/80" />{H.address}</span><span><Phone size={14} className="inline mr-2 text-yellow/80" /><a href={tel} className="hover:text-yellow">{H.phone}</a></span><span><Mail size={14} className="inline mr-2 text-yellow/80" /><a href={`mailto:${H.email}`} className="hover:text-yellow">{H.email}</a></span></p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 py-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>© 2026 Premier Specialist Clinic. All rights reserved. · <span className="hover:text-yellow cursor-pointer">Privacy Policy</span></p>
        <p>Concept demo — not an official Premier Specialist Clinic website. Content pending verification.</p>
      </div>
    </footer>
  )
}
