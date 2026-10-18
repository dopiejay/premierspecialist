import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import Button from './Button'
import { DIRECTIONS, H, NAV } from '../data/site'

const linkCls = (isActive) =>
  `px-3 py-2 text-[15px] font-medium rounded-lg transition ${isActive ? 'text-charcoal' : 'text-charcoal/60 hover:text-charcoal'}`

const mobileLinkCls = (isActive) =>
  `px-3 py-2 rounded-lg text-[15px] font-medium ${isActive ? 'text-charcoal' : 'text-charcoal/60 hover:text-charcoal'}`

const mobileChildCls = (isActive) =>
  `px-3 py-2 rounded-lg text-sm ${isActive ? 'text-charcoal font-semibold' : 'text-ink/60 hover:text-charcoal'}`

export default function Header() {
  const [open, setOpen] = useState(false)
  const [ddOpen, setDdOpen] = useState(false)
  const ddRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false); setDdOpen(false) }, [pathname])
  useEffect(() => {
    const onClick = (e) => { if (ddRef.current && !ddRef.current.contains(e.target)) setDdOpen(false) }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const isPatientActive = pathname.startsWith('/patient-info')

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-white text-charcoal text-xs sm:text-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-2 flex items-center justify-between gap-3">
          <span>{H.phone}</span>
          <a href={DIRECTIONS} target="_blank" rel="noreferrer" className="hidden sm:block hover:text-cyan transition">{H.address}</a>
        </div>
      </div>
      <div className="bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight text-purple"><span className="sm:hidden">PSC</span><span className="hidden sm:inline">Premier Specialist Clinic</span></Link>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map(([to, label, children]) => children ? (
              <div key={to} ref={ddRef} className="relative">
                <button
                  onClick={() => setDdOpen(!ddOpen)}
                  className={`px-3 py-2 text-[15px] font-medium rounded-lg transition inline-flex items-center gap-1 ${isPatientActive ? 'text-charcoal' : 'text-charcoal/60 hover:text-charcoal'}`}
                  aria-expanded={ddOpen}
                >
                  {label}
                  <ChevronDown size={15} className={`transition ${ddOpen ? 'rotate-180' : ''}`} />
                </button>
                {ddOpen && (
                  <div className="absolute right-0 top-full pt-2 z-50">
                    <div className="w-72 bg-white rounded-2xl border border-slate-200 shadow-xl p-2">
                      <Link to={to} onClick={() => setDdOpen(false)} className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-charcoal hover:bg-cloud transition">Overview</Link>
                      <div className="border-t border-slate-100 my-1" />
                      {children.map(([cTo, cLabel]) => (
                        <Link key={cTo} to={cTo} onClick={() => setDdOpen(false)} className="block px-4 py-2.5 rounded-xl text-sm text-ink/70 hover:bg-cloud hover:text-charcoal transition">{cLabel}</Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => linkCls(isActive)}>{label}</NavLink>
            ))}
            <Button to="/book" variant="primary" size="sm" className="ml-3">Book an Appointment</Button>
          </nav>
          <button className="lg:hidden p-2 text-charcoal" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 flex flex-col gap-1">
          {NAV.map(([to, label, children]) => children ? (
            <div key={to}>
              <NavLink to={to} end className={({ isActive }) => mobileLinkCls(isActive)}>{label}</NavLink>
              <div className="pl-4 flex flex-col gap-1 mt-1">
                {children.map(([cTo, cLabel]) => (
                  <NavLink key={cTo} to={cTo} className={({ isActive }) => mobileChildCls(isActive)}>{cLabel}</NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => mobileLinkCls(isActive)}>{label}</NavLink>
          ))}
          <Button to="/book" variant="primary" size="sm" className="mt-2 justify-center">Book an Appointment</Button>
        </div>}
      </div>
    </header>
  )
}
