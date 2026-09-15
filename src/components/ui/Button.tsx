import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-13 px-7 text-[0.95rem]',
}

const variants: Record<Variant, string> = {
  // Gradient fill with a soft brand-coloured glow that intensifies on hover.
  primary: [
    'text-white bg-gradient-to-r from-brand-600 via-brand-500 to-violet-accent',
    'shadow-[0_10px_30px_-10px_rgb(90_125_255/0.7)]',
    'hover:shadow-[0_16px_40px_-12px_rgb(90_125_255/0.85)] hover:brightness-[1.06]',
  ].join(' '),
  secondary: [
    'border border-[rgb(var(--hairline))] bg-[var(--surface)]',
    'shadow-[var(--shadow-card)]',
    'hover:border-brand-500/45 hover:shadow-[var(--shadow-lift)]',
  ].join(' '),
  ghost: 'hover:bg-[color-mix(in_oklab,var(--fg)_7%,transparent)]',
}

const base = [
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-medium',
  'transition-all duration-300 ease-[var(--ease-out-soft)]',
  'hover:-translate-y-0.5 active:translate-y-0',
  'disabled:pointer-events-none disabled:opacity-60',
].join(' ')

type CommonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  )
}

export function ButtonLink({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  )
}
