import { navItems, profile, socials } from '../data/profile'
import { Icon } from './ui/Icon'
import { Container } from './ui/Section'

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--hairline))]" style={{ backgroundColor: 'var(--page-alt)' }}>
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Identity */}
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2.5" aria-label="Back to top">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-600 via-brand-500 to-violet-accent font-display text-[0.8rem] font-bold text-white">
                {profile.monogram}
              </span>
              <span className="font-display text-[0.95rem] font-semibold tracking-tight">
                {profile.fullName}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
              {profile.role} in {profile.location}, building scalable backend, web and mobile
              applications.
            </p>
          </div>

          {/* Site map */}
          <nav aria-label="Footer">
            <h2 className="text-[0.78rem] font-semibold tracking-[0.14em] uppercase">Explore</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm transition-colors duration-300 hover:text-brand-500"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Elsewhere */}
          <div>
            <h2 className="text-[0.78rem] font-semibold tracking-[0.14em] uppercase">Elsewhere</h2>
            <ul className="mt-4 flex items-center gap-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.icon === 'mail' ? undefined : '_blank'}
                    rel={social.icon === 'mail' ? undefined : 'noreferrer noopener'}
                    aria-label={social.label}
                    title={social.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-[rgb(var(--hairline))] transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-brand-500/45 hover:text-brand-500"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    <Icon name={social.icon} size={17} />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={profile.cvPath}
              download
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 hover:text-brand-500"
              style={{ color: 'var(--fg-muted)' }}
            >
              <Icon name="download" size={15} />
              Download CV
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[rgb(var(--hairline))] pt-6 sm:flex-row">
          <p className="text-[0.8rem]" style={{ color: 'var(--fg-subtle)' }}>
            © 2026 {profile.fullName}. All rights reserved.
          </p>
          <p
            className="flex items-center gap-1.5 font-mono text-[0.74rem]"
            style={{ color: 'var(--fg-subtle)' }}
          >
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  )
}
