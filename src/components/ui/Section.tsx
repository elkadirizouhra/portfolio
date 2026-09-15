import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

/** Shared horizontal rhythm for every block on the page. */
export function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}

type SectionProps = {
  id: string
  children: ReactNode
  /** Paints the alternate page tone, used to separate adjacent sections. */
  tone?: 'base' | 'alt'
  className?: string
  ariaLabel?: string
}

export function Section({ id, children, tone = 'base', className = '', ariaLabel }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabel ? undefined : `${id}-heading`}
      className={`relative scroll-mt-24 py-20 sm:py-28 ${className}`}
      style={tone === 'alt' ? { backgroundColor: 'var(--page-alt)' } : undefined}
    >
      <Container>{children}</Container>
    </section>
  )
}

type SectionHeadingProps = {
  id: string
  /** Two-digit index shown in the eyebrow, e.g. "02". */
  index: string
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  align?: 'left' | 'center'
}

export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  lead,
  align = 'left',
}: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <Reveal className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <div
        className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}
        aria-hidden="true"
      >
        <span className="font-mono text-xs tracking-[0.2em] text-brand-500">{index}</span>
        <span className="h-px w-8 bg-gradient-to-r from-brand-500 to-transparent" />
        <span
          className="font-mono text-xs tracking-[0.22em] uppercase"
          style={{ color: 'var(--fg-subtle)' }}
        >
          {eyebrow}
        </span>
      </div>

      <h2
        id={`${id}-heading`}
        className="mt-4 text-3xl font-semibold sm:text-4xl md:text-[2.75rem] md:leading-[1.1]"
      >
        {title}
      </h2>

      {lead ? (
        <p className="mt-4 text-base leading-relaxed sm:text-lg" style={{ color: 'var(--fg-muted)' }}>
          {lead}
        </p>
      ) : null}
    </Reveal>
  )
}
