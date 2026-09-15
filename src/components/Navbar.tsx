import { useEffect, useState } from 'react'
import { navItems, profile } from '../data/profile'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useTheme } from '../hooks/useTheme'
import { Icon } from './ui/Icon'

const sectionIds = navItems.map((item) => item.id)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const activeId = useScrollSpy(sectionIds)
  const { theme, toggle } = useTheme()

  // Condense the bar and drive the reading-progress indicator.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const scrollable = document.body.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock background scrolling and allow Escape to dismiss the mobile drawer.
  useEffect(() => {
    if (!menuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className={`transition-all duration-400 ease-[var(--ease-out-soft)] ${
          scrolled ? 'glass shadow-[0_1px_0_0_rgb(var(--hairline))]' : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-17 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          {/* Monogram + wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 rounded-full"
            aria-label={`${profile.fullName} — back to top`}
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-600 via-brand-500 to-violet-accent font-display text-[0.8rem] font-bold text-white shadow-[0_6px_18px_-6px_rgb(90_125_255/0.8)] transition-transform duration-400 ease-[var(--ease-out-soft)] group-hover:scale-105">
              {profile.monogram}
            </span>
            <span className="hidden font-display text-[0.95rem] font-semibold tracking-tight sm:block">
              {profile.fullName}
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => {
              const active = activeId === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active ? 'true' : undefined}
                    className={`relative rounded-full px-3 py-2 text-[0.83rem] font-medium transition-colors duration-300 ${
                      active ? 'text-brand-600 dark:text-brand-300' : 'hover:text-brand-500'
                    }`}
                    style={active ? undefined : { color: 'var(--fg-muted)' }}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 -bottom-0.5 h-px origin-center bg-gradient-to-r from-brand-500 to-violet-accent transition-transform duration-400 ease-[var(--ease-out-soft)] ${
                        active ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="grid h-9.5 w-9.5 place-items-center rounded-full border border-[rgb(var(--hairline))] transition-all duration-300 ease-[var(--ease-out-soft)] hover:border-brand-500/45 hover:text-brand-500"
            >
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} />
            </button>

            <a
              href={profile.cvPath}
              download
              className="hidden h-9.5 items-center gap-1.5 rounded-full border border-[rgb(var(--hairline))] px-4 text-[0.82rem] font-medium transition-all duration-300 ease-[var(--ease-out-soft)] hover:border-brand-500/45 hover:text-brand-500 md:inline-flex"
            >
              <Icon name="download" size={15} />
              CV
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="grid h-9.5 w-9.5 place-items-center rounded-full border border-[rgb(var(--hairline))] transition-colors duration-300 hover:border-brand-500/45 hover:text-brand-500 lg:hidden"
            >
              <Icon name={menuOpen ? 'close' : 'menu'} size={18} />
            </button>
          </div>
        </div>

        {/* Reading progress */}
        <div
          aria-hidden="true"
          className="h-px origin-left bg-gradient-to-r from-brand-500 via-violet-accent to-mint-accent transition-opacity duration-300"
          style={{ transform: `scaleX(${progress})`, opacity: scrolled ? 1 : 0 }}
        />
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="glass border-t border-[rgb(var(--hairline))] lg:hidden"
      >
        <ul className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
          {navItems.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                aria-current={activeId === item.id ? 'true' : undefined}
                className={`flex items-center justify-between border-b border-[rgb(var(--hairline))] py-3 text-[0.95rem] font-medium transition-colors last:border-0 ${
                  activeId === item.id ? 'text-brand-600 dark:text-brand-300' : ''
                }`}
              >
                {item.label}
                <span className="font-mono text-[0.7rem]" style={{ color: 'var(--fg-subtle)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
