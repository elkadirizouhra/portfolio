import { heroSnippet, profile, socials } from '../data/profile'
import { Aurora } from './ui/Aurora'
import { ButtonLink } from './ui/Button'
import { CodeWindow } from './ui/CodeWindow'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { Container } from './ui/Section'

/**
 * Technology chips that float around the code panel. The wrapper is inset on
 * large screens (see `lg:px-14` below), so these sit in the gutter beside the
 * window rather than on top of the code.
 */
const orbitChips = [
  { label: 'Spring Boot', className: 'left-0 top-10 sm:-left-6 lg:-left-1', delay: '0s' },
  { label: 'Flutter', className: 'right-0 top-28 sm:-right-5 lg:-right-1', delay: '-2.2s' },
  { label: 'SQL Server', className: 'left-0 bottom-14 sm:-left-6 lg:-left-1', delay: '-4.4s' },
  { label: 'React', className: 'right-2 -bottom-4 sm:-right-3 lg:right-2', delay: '-1.1s' },
]

export function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <Aurora />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          {/* ───────────────────────── Copy ───────────────────────── */}
          <div>
            {profile.availability && (
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-full border border-mint-accent/30 bg-mint-accent/10 px-3.5 py-1.5 text-[0.78rem] font-medium">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-accent" />
                  </span>
                  {profile.availability}
                </p>
              </Reveal>
            )}

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-bold sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
                <span style={{ color: 'var(--fg-muted)' }} className="font-medium">
                  Hi, I&rsquo;m{' '}
                </span>
                <span className="text-gradient">{profile.fullName}</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-4">
                <p className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {profile.role}
                  <span
                    aria-hidden="true"
                    className="inline-block h-5 w-[3px] animate-caret rounded-full bg-brand-500 sm:h-6"
                  />
                </p>
                <p
                  className="mt-1.5 font-mono text-[0.8rem] tracking-wide"
                  style={{ color: 'var(--fg-subtle)' }}
                >
                  {profile.specialism}
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <p
                className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg"
                style={{ color: 'var(--fg-muted)' }}
              >
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <p
                className="mt-5 inline-flex items-center gap-2 text-sm"
                style={{ color: 'var(--fg-subtle)' }}
              >
                <Icon name="mapPin" size={16} className="text-brand-500" />
                Based in {profile.location}
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href="#projects" size="lg">
                  View My Projects
                  <Icon
                    name="arrowRight"
                    size={17}
                    className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1"
                  />
                </ButtonLink>
                <ButtonLink href={profile.cvPath} download variant="secondary" size="lg">
                  <Icon
                    name="download"
                    size={17}
                    className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-y-0.5"
                  />
                  Download CV
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <ul className="mt-9 flex items-center gap-3">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.icon === 'mail' ? undefined : '_blank'}
                      rel={social.icon === 'mail' ? undefined : 'noreferrer noopener'}
                      aria-label={`${social.label} — ${social.handle}`}
                      title={social.label}
                      className="grid h-10.5 w-10.5 place-items-center rounded-full border border-[rgb(var(--hairline))] transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-brand-500/45 hover:text-brand-500 hover:shadow-[var(--shadow-card)]"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      <Icon name={social.icon} size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* ──────────────────── Code-inspired visual ──────────────────── */}
          <Reveal delay={200} className="relative">
            <div className="relative mx-auto max-w-md px-3 sm:px-8 lg:max-w-none lg:px-14">
              {/* Soft halo behind the panel */}
              <div
                aria-hidden="true"
                className="absolute inset-x-3 -inset-y-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-500/18 via-violet-accent/14 to-mint-accent/12 blur-2xl sm:inset-x-8 lg:inset-x-14"
              />

              <div className="animate-float-slow">
                <CodeWindow title={heroSnippet.title} lines={heroSnippet.lines} lang="ts" caret />
              </div>

              {/* Floating stack chips */}
              {orbitChips.map((chip) => (
                <span
                  key={chip.label}
                  aria-hidden="true"
                  style={{ animationDelay: chip.delay }}
                  className={`glass absolute hidden animate-float rounded-full px-3 py-1.5 font-mono text-[0.7rem] font-medium shadow-[var(--shadow-card)] sm:block ${chip.className}`}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Scroll cue */}
        <Reveal delay={460} className="mt-16 hidden justify-center sm:flex">
          <a
            href="#about"
            className="group inline-flex flex-col items-center gap-2 text-xs tracking-[0.2em] uppercase"
            style={{ color: 'var(--fg-subtle)' }}
          >
            Scroll
            <Icon
              name="arrowDown"
              size={16}
              className="animate-float transition-colors group-hover:text-brand-500"
            />
          </a>
        </Reveal>
      </Container>
    </section>
  )
}
