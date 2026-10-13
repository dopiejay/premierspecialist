export default function Eyebrow({ children, light }) {
  return <p className={`text-xs font-extrabold tracking-[.2em] uppercase ${light ? 'text-yellow' : 'text-cyan'}`}>{children}</p>
}
