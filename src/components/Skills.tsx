import { skillGroups } from '../data/profile'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { Section, SectionHeading } from './ui/Section'

export function Skills() {
  return (
    <Section id="skills" tone="alt">
      <SectionHeading
        id="skills"
        index="04"
        eyebrow="Technical skills"
        title={
          <>
            The stack I build with, <span className="text-gradient">end to end</span>
          </>
        }
        lead="Grouped by where they sit in a system — from the language up to the deployment pipeline."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal as="li" key={group.title} delay={(i % 3) * 90}>
            <div className="surface group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-400 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-brand-500/35 hover:shadow-[var(--shadow-lift)]">
              {/* Corner glow on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-brand-500/18 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500/15 to-violet-accent/15 text-brand-600 transition-transform duration-400 ease-[var(--ease-out-soft)] group-hover:scale-105 dark:text-brand-300">
                  <Icon name={group.icon} size={21} />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{group.title}</h3>
                  <p className="font-mono text-[0.7rem]" style={{ color: 'var(--fg-subtle)' }}>
                    {group.skills.length} technologies
                  </p>
                </div>
              </div>

              <p
                className="mt-4 text-[0.83rem] leading-relaxed"
                style={{ color: 'var(--fg-subtle)' }}
              >
                {group.blurb}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <li
                    key={skill}
                    style={{ transitionDelay: `${j * 28}ms` }}
                    className="inline-flex items-center rounded-lg border border-[rgb(var(--hairline))] bg-[color-mix(in_oklab,var(--fg)_4%,transparent)] px-2.5 py-1.5 text-[0.78rem] font-medium transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-brand-500/45 hover:bg-brand-500/10 hover:text-brand-600 dark:hover:text-brand-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
