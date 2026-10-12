import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { H, tel, NAV } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-5 py-14 grid md:grid-cols-3 gap-10 text-sm">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight text-white mb-4">Shifa Hospital</p>
          <p className="leading-relaxed text-white/70">Supporting the health and wellbeing of individuals and families in Blantyre.</p>
        </div>
        <div>
          <p className="font-bold text-white mb-3">Quick Links</p>
          <div className="flex flex-col gap-2">{NAV.map(([to, l]) => <Link key={to} to={to} className="hover:text-white transition">{l}</Link>)}</div>
        </div>
        <div>
          <p className="font-bold text-white mb-3">Contact</p>
          <p className="flex flex-col gap-2 text-white/70"><span><MapPin size={14} className="inline mr-2 text-white/40" />{H.address}</span><span><Phone size={14} className="inline mr-2 text-white/40" /><a href={tel} className="hover:text-white">{H.phone}</a></span><span><Mail size={14} className="inline mr-2 text-white/40" />enquiries@shifahospital.mw</span></p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 py-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>© 2026 Shifa Hospital. All rights reserved. · <span className="hover:text-white cursor-pointer">Privacy Policy</span></p>
        <p>Concept demo — not an official Shifa Hospital website. Content pending verification.</p>
      </div>
    </footer>
  )
}
