import { careerGoals } from '../data/profile'
import { Aurora } from './ui/Aurora'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { Container } from './ui/Section'

export function CareerGoals() {
  return (
    <section
      id="career"
      aria-labelledby="career-heading"
      className="relative isolate scroll-mt-24 overflow-hidden py-20 sm:py-28"
      style={{ backgroundColor: 'var(--page-alt)' }}
    >
      <Aurora />

      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3" aria-hidden="true">
            <span className="font-mono text-xs tracking-[0.2em] text-brand-500">08</span>
            <span className="h-px w-8 bg-gradient-to-r from-brand-500 to-transparent" />
            <span
              className="font-mono text-xs tracking-[0.22em] uppercase"
              style={{ color: 'var(--fg-subtle)' }}
            >
              Career goals
            </span>
          </div>

          <h2 id="career-heading" className="mt-4 text-3xl font-semibold sm:text-4xl">
            What I&rsquo;m <span className="text-gradient">looking for</span>
          </h2>

          <blockquote className="mt-6">
            <p
              className="text-lg leading-[1.75] text-balance sm:text-xl"
              style={{ color: 'var(--fg-muted)' }}
            >
              &ldquo;{careerGoals.statement}&rdquo;
            </p>
          </blockquote>
        </Reveal>

        <ul className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {careerGoals.interests.map((interest, i) => (
            <Reveal as="li" key={interest.title} delay={(i % 3) * 90}>
              <div className="glass group h-full rounded-2xl p-5 transition-all duration-400 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-brand-500/40">
                <div className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-500/18 to-violet-accent/16 text-brand-600 transition-transform duration-400 group-hover:scale-110 dark:text-brand-300"
                  >
                    <Icon name="target" size={16} />
                  </span>
                  <h3 className="text-[0.95rem] font-semibold">{interest.title}</h3>
                </div>
                <p
                  className="mt-3 text-[0.83rem] leading-relaxed"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  {interest.note}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
