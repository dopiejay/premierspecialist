import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './Button'
import { DIRECTIONS, H, NAV } from '../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const link = ({ isActive }) =>
    `px-3 py-2 text-[15px] font-medium rounded-lg transition ${isActive ? 'text-charcoal' : 'text-charcoal/60 hover:text-charcoal'}`
  const mobileLink = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-[15px] font-medium ${isActive ? 'text-charcoal' : 'text-charcoal/60 hover:text-charcoal'}`
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-cyan text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-5 py-2 flex items-center justify-between gap-3">
          <span>{H.phone}</span>
          <a href={DIRECTIONS} target="_blank" rel="noreferrer" className="hidden sm:block hover:text-charcoal transition">{H.address}</a>
        </div>
      </div>
      <div className="bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 h-[72px] flex items-center justify-between">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight text-purple">Shifa Hospital</Link>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} className={link}>{l}</NavLink>)}
            <Button to="/book" variant="primary" size="sm" className="ml-3">Book an Appointment</Button>
          </nav>
          <button className="lg:hidden p-2 text-charcoal" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 flex flex-col gap-1" onClick={() => setOpen(false)}>
          {NAV.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} className={mobileLink}>{l}</NavLink>)}
          <Button to="/book" variant="primary" size="sm" className="mt-2 justify-center">Book an Appointment</Button>
        </div>}
      </div>
    </header>
  )
}
