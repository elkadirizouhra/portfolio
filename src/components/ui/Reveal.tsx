import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Stagger in milliseconds, for sequences of cards. */
  delay?: number
  className?: string
  /** Render as something other than a div (e.g. `li`, `article`). */
  as?: ElementType
}

/**
 * Fades and lifts its children into place the first time they scroll into view,
 * then stops observing. Reduced-motion users get the final state immediately
 * (the `.reveal` utility neutralises the transform under that media query).
 */
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  // Without IntersectionObserver (a very old browser), start visible rather
  // than leaving the content permanently faded out.
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
