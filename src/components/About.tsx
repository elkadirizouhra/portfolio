import { about, profile } from '../data/profile'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { Section, SectionHeading } from './ui/Section'

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        id="about"
        index="01"
        eyebrow="About me"
        title={
          <>
            Engineering software that <span className="text-gradient">real teams depend on</span>
          </>
        }
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        {/* Narrative */}
        <div className="space-y-5">
          {about.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="text-base leading-[1.8]" style={{ color: 'var(--fg-muted)' }}>
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={300}>
            <p
              className="flex items-center gap-2 border-l-2 border-brand-500/50 pl-4 text-sm"
              style={{ color: 'var(--fg-subtle)' }}
            >
              <Icon name="mapPin" size={15} className="shrink-0 text-brand-500" />
              {profile.location} — available for on-site, hybrid and remote roles.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <dl className="flex flex-wrap gap-x-7 gap-y-3 pt-1">
              {about.languages.map((language) => (
                <div key={language.name}>
                  <dt className="text-sm font-medium">{language.name}</dt>
                  <dd className="text-[0.78rem]" style={{ color: 'var(--fg-subtle)' }}>
                    {language.level}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* What I work on */}
        <Reveal delay={120}>
          <div className="surface h-full rounded-2xl p-6 sm:p-7">
            <h3 className="flex items-center gap-2 text-sm font-semibold tracking-[0.12em] uppercase">
              <Icon name="layers" size={16} className="text-brand-500" />
              What I work on
            </h3>
            <ul className="mt-5 grid gap-x-4 gap-y-3 sm:grid-cols-2">
              {about.focusAreas.map((area) => (
                <li key={area} className="group flex items-start gap-2.5 text-sm">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-brand-500 to-violet-accent transition-transform duration-300 group-hover:scale-150"
                  />
                  <span
                    className="transition-colors duration-300 group-hover:text-brand-600 dark:group-hover:text-brand-300"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* Statistics */}
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {about.stats.map((stat, i) => (
          <Reveal as="li" key={stat.label} delay={i * 90}>
            <div className="surface group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-400 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-brand-500/35 hover:shadow-[var(--shadow-lift)]">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100"
              />
              <p className="font-display text-2xl font-bold tracking-tight sm:text-[1.7rem]">
                <span className="text-gradient">{stat.value}</span>
              </p>
              <p className="mt-2 text-sm font-medium">{stat.label}</p>
              <p className="mt-1 text-[0.8rem]" style={{ color: 'var(--fg-subtle)' }}>
                {stat.sub}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
