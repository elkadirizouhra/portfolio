import { problemSolving } from '../data/profile'
import { CodeWindow } from './ui/CodeWindow'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { Section, SectionHeading } from './ui/Section'

export function ProblemSolving() {
  return (
    <Section id="problem-solving" ariaLabel="Problem solving">
      <SectionHeading
        id="problem-solving"
        index="07"
        eyebrow="Problem solving"
        title={
          <>
            Thinking in <span className="text-gradient">complexity, not syntax</span>
          </>
        }
        lead={problemSolving.intro}
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
        {/* Patterns I drill */}
        <div>
          <Reveal>
            <h3 className="flex items-center gap-2 text-sm font-semibold tracking-[0.12em] uppercase">
              <Icon name="terminal" size={16} className="text-brand-500" />
              Patterns I drill
            </h3>
          </Reveal>

          <ul className="mt-5 space-y-2.5">
            {problemSolving.topics.map((topic, i) => (
              <Reveal as="li" key={topic.name} delay={i * 60}>
                <div className="surface group flex items-center justify-between gap-4 rounded-xl px-4 py-3.5 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-brand-500/35 hover:shadow-[var(--shadow-card)]">
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{topic.name}</p>
                    <p
                      className="mt-0.5 truncate text-[0.78rem]"
                      style={{ color: 'var(--fg-subtle)' }}
                    >
                      {topic.note}
                    </p>
                  </div>
                  <code className="shrink-0 rounded-md border border-[rgb(var(--hairline))] bg-[color-mix(in_oklab,var(--fg)_4%,transparent)] px-2 py-1 font-mono text-[0.72rem] text-brand-600 transition-colors duration-300 group-hover:border-brand-500/40 dark:text-brand-300">
                    {topic.complexity}
                  </code>
                </div>
              </Reveal>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-3">
            {problemSolving.platforms.map((platform, i) => (
              <Reveal as="li" key={platform.name} delay={i * 60}>
                <div className="surface flex items-center gap-3 rounded-xl px-4 py-3">
                  <span
                    aria-hidden="true"
                    className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-amber-500/18 to-brand-500/15 text-amber-600 dark:text-amber-400"
                  >
                    <Icon name="target" size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{platform.name}</p>
                    <p className="text-[0.78rem]" style={{ color: 'var(--fg-subtle)' }}>
                      {platform.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* A worked solution */}
        <Reveal delay={120}>
          <div className="lg:sticky lg:top-24">
            <h3 className="flex items-center gap-2 text-sm font-semibold tracking-[0.12em] uppercase">
              <Icon name="code" size={16} className="text-violet-accent" />
              A solution I like
            </h3>
            <div className="mt-5">
              <CodeWindow
                title={problemSolving.snippet.title}
                lines={problemSolving.snippet.lines}
                lang="java"
              />
            </div>
            <p
              className="mt-4 text-[0.83rem] leading-relaxed"
              style={{ color: 'var(--fg-subtle)' }}
            >
              Two pointers and a hash map turn a quadratic scan into a single pass. The same
              instinct — bound the work before writing it — is what keeps a production query from
              becoming an incident.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
