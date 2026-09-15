import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  /** `accent` is used for live/status pills, `plain` for technology tags. */
  variant?: 'plain' | 'accent' | 'outline'
  className?: string
  /** Adds the lift-on-hover treatment used by the skills grid. */
  interactive?: boolean
}

const base =
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.78rem] font-medium leading-5 whitespace-nowrap'

export function Badge({
  children,
  variant = 'plain',
  className = '',
  interactive = false,
}: BadgeProps) {
  const variants: Record<NonNullable<BadgeProps['variant']>, string> = {
    plain: 'border border-[rgb(var(--hairline))] bg-[color-mix(in_oklab,var(--fg)_5%,transparent)]',
    accent: 'border border-brand-500/30 bg-brand-500/10 text-brand-600 dark:text-brand-300',
    outline: 'border border-[rgb(var(--hairline))]',
  }

  const motion = interactive
    ? 'transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-brand-500/45 hover:bg-brand-500/10 hover:text-brand-600 dark:hover:text-brand-300'
    : ''

  return <span className={`${base} ${variants[variant]} ${motion} ${className}`}>{children}</span>
}
