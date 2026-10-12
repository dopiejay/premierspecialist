export default function Eyebrow({ children, light }) {
  return <p className={`text-xs font-extrabold tracking-[.2em] uppercase ${light ? 'text-white/80' : 'text-teal'}`}>{children}</p>
}
