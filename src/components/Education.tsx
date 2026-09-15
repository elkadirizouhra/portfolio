import { education } from '../data/profile'
import { Badge } from './ui/Badge'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { Section, SectionHeading } from './ui/Section'

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        id="education"
        index="05"
        eyebrow="Education"
        title={
          <>
            A formal <span className="text-gradient">engineering foundation</span>
          </>
        }
        lead="Two years of national preparatory classes followed by an engineering degree at INPT — five years of mathematics, computer science and applied software engineering."
      />

      <ol className="mt-12 space-y-8">
        {education.map((entry, index) => (
          <Reveal as="li" key={`${entry.institution}-${index}`} className="relative">
            {/* Timeline rail */}
            <div
              aria-hidden="true"
              className="absolute top-3 left-[0.4375rem] hidden h-[calc(100%-0.75rem)] w-px bg-gradient-to-b from-violet-accent/60 to-transparent sm:block"
            />
            <span
              aria-hidden="true"
              className="absolute top-2.5 left-0 hidden h-3.5 w-3.5 rounded-full border-2 border-violet-accent bg-[var(--page)] sm:block"
            >
              <span className="absolute inset-0.5 rounded-full bg-violet-accent" />
            </span>

            <div className="sm:pl-10">
              <div className="surface rounded-2xl p-6 transition-all duration-400 ease-[var(--ease-out-soft)] hover:border-brand-500/30 hover:shadow-[var(--shadow-lift)] sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-accent/18 to-brand-500/15 text-violet-accent"
                    >
                      <Icon name="graduation" size={23} />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold sm:text-xl">{entry.degree}</h3>
                      <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-300">
                        {entry.field}
                      </p>
                      <p
                        className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"
                        style={{ color: 'var(--fg-muted)' }}
                      >
                        <span>{entry.institution}</span>
                        <span
                          className="font-mono text-[0.72rem]"
                          style={{ color: 'var(--fg-subtle)' }}
                        >
                          ({entry.abbr})
                        </span>
                        <span aria-hidden="true" style={{ color: 'var(--fg-subtle)' }}>
                          ·
                        </span>
                        <span
                          className="inline-flex items-center gap-1.5"
                          style={{ color: 'var(--fg-subtle)' }}
                        >
                          <Icon name="mapPin" size={14} />
                          {entry.location}
                        </span>
                      </p>
                    </div>
                  </div>

                  <Badge variant="accent">
                    <Icon name="clock" size={13} />
                    {entry.period}
                  </Badge>
                </div>

                <p
                  className="mt-5 text-[0.95rem] leading-[1.8]"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  {entry.summary}
                </p>

                <div className="mt-6 border-t border-[rgb(var(--hairline))] pt-5">
                  <h4 className="text-sm font-semibold tracking-[0.12em] uppercase">
                    Core coursework
                  </h4>
                  <ul className="mt-3.5 flex flex-wrap gap-2">
                    {entry.coursework.map((course) => (
                      <li key={course}>
                        <Badge interactive>{course}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
