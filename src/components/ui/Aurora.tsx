/**
 * Ambient background: three slow-drifting colour fields behind a faint dotted
 * grid. Purely decorative, so it is hidden from assistive technology and sits
 * beneath all content.
 */
export function Aurora({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div
        className="grid-backdrop absolute inset-0 opacity-70"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 75%)',
        }}
      />
      <div
        className="absolute -top-32 -left-24 h-[34rem] w-[34rem] animate-drift rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgb(var(--glow-a)) 0%, transparent 68%)' }}
      />
      <div
        className="absolute -top-20 right-[-8rem] h-[30rem] w-[30rem] animate-drift rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgb(var(--glow-b)) 0%, transparent 68%)',
          animationDelay: '-6s',
        }}
      />
      <div
        className="absolute bottom-[-10rem] left-1/3 h-[26rem] w-[26rem] animate-drift rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgb(var(--glow-c)) 0%, transparent 68%)',
          animationDelay: '-12s',
        }}
      />
    </div>
  )
}
