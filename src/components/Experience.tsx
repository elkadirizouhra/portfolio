import { experiences, projects } from '../data/profile'
import { Badge } from './ui/Badge'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { Section, SectionHeading } from './ui/Section'

export function Experience() {
  return (
    <Section id="experience" tone="alt">
      <SectionHeading
        id="experience"
        index="02"
        eyebrow="Experience"
        title={
          <>
            Building and running <span className="text-gradient">production software</span>
          </>
        }
        lead="Where I work today, what I own, and the applications I have shipped."
      />

      <ol className="mt-12 space-y-10">
        {experiences.map((job, index) => {
          const linked = job.projectSlugs
            .map((slug) => projects.find((p) => p.slug === slug))
            .filter((p): p is (typeof projects)[number] => Boolean(p))

          return (
            <Reveal as="li" key={`${job.company}-${index}`} className="relative">
              {/* Timeline rail */}
              <div
                aria-hidden="true"
                className="absolute top-3 left-[0.4375rem] hidden h-[calc(100%-0.75rem)] w-px bg-gradient-to-b from-brand-500/60 via-violet-accent/30 to-transparent sm:block"
              />
              <span
                aria-hidden="true"
                className="absolute top-2.5 left-0 hidden h-3.5 w-3.5 rounded-full border-2 border-brand-500 bg-[var(--page-alt)] sm:block"
              >
                <span className="absolute inset-0.5 rounded-full bg-brand-500" />
              </span>

              <div className="sm:pl-10">
                <div className="surface overflow-hidden rounded-2xl">
                  {/* Header */}
                  <div className="border-b border-[rgb(var(--hairline))] p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold sm:text-2xl">{job.role}</h3>
                        <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                          <span className="font-medium text-brand-600 dark:text-brand-300">
                            {job.company}
                          </span>
                          <span
                            className="inline-flex items-center gap-1.5"
                            style={{ color: 'var(--fg-subtle)' }}
                          >
                            <Icon name="mapPin" size={14} />
                            {job.location}
                          </span>
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="accent">
                          <Icon name="clock" size={13} />
                          {job.period}
                        </Badge>
                        <Badge>{job.type}</Badge>
                      </div>
                    </div>

                    <p className="mt-5 text-[0.95rem] leading-[1.8]" style={{ color: 'var(--fg-muted)' }}>
                      {job.summary}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {job.stack.map((tech) => (
                        <li key={tech}>
                          <Badge interactive>{tech}</Badge>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Responsibilities */}
                  <div className="p-6 sm:p-7">
                    <h4 className="flex items-center gap-2 text-sm font-semibold tracking-[0.12em] uppercase">
                      <Icon name="briefcase" size={16} className="text-brand-500" />
                      What I do
                    </h4>
                    <ul className="mt-4 grid gap-x-8 gap-y-2.5 md:grid-cols-2">
                      {job.responsibilities.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
                          <Icon
                            name="check"
                            size={14}
                            className="mt-1 shrink-0 text-mint-accent"
                            strokeWidth={2.4}
                          />
                          <span style={{ color: 'var(--fg-muted)' }}>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {linked.length > 0 && (
                      <div className="mt-7 border-t border-[rgb(var(--hairline))] pt-6">
                        <h4 className="flex items-center gap-2 text-sm font-semibold tracking-[0.12em] uppercase">
                          <Icon name="sparkles" size={15} className="text-violet-accent" />
                          Projects delivered in this role
                        </h4>
                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                          {linked.map((project) => (
                            <li key={project.slug}>
                              <a
                                href="#projects"
                                className="group flex h-full items-start gap-3 rounded-xl border border-[rgb(var(--hairline))] p-4 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-brand-500/40 hover:bg-brand-500/5"
                              >
                                <span
                                  aria-hidden="true"
                                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-500/15 to-violet-accent/15 font-mono text-[0.7rem] font-bold text-brand-600 dark:text-brand-300"
                                >
                                  {project.monogram}
                                </span>
                                <span className="min-w-0">
                                  <span className="flex items-center gap-1.5 text-sm font-semibold">
                                    {project.name}
                                    <Icon
                                      name="arrowUpRight"
                                      size={13}
                                      className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                                    />
                                  </span>
                                  <span
                                    className="mt-0.5 block text-[0.8rem] leading-snug"
                                    style={{ color: 'var(--fg-subtle)' }}
                                  >
                                    {project.category}
                                  </span>
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}
