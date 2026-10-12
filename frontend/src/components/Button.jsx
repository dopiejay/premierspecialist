import { Link } from 'react-router-dom'

const VARIANTS = {
  primary: 'bg-maroon text-white hover:bg-maroon-dark',
  light: 'bg-white text-ink hover:bg-white/90',
  ghostLight: 'border border-white/25 text-white hover:border-white/60 hover:bg-white/5',
  outline: 'border border-charcoal/20 text-charcoal hover:border-charcoal/50 hover:bg-charcoal/5',
}
const SIZES = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-8 py-3.5 text-[15px]',
}

export default function Button({ to, href, variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition ${SIZES[size]} ${VARIANTS[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button className={cls} {...rest}>{children}</button>
}
