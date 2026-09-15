import { certifications, type Certification } from '../data/profile'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { Section, SectionHeading } from './ui/Section'

const statusTone: Record<Certification['status'], string> = {
  Earned: 'border-mint-accent/35 bg-mint-accent/12 text-mint-accent',
  'In progress': 'border-brand-500/30 bg-brand-500/10 text-brand-600 dark:text-brand-300',
  Planned: 'border-[rgb(var(--hairline))] bg-[color-mix(in_oklab,var(--fg)_5%,transparent)]',
}

export function Certifications() {
  return (
    <Section id="certifications" tone="alt">
      <SectionHeading
        id="certifications"
        index="06"
        eyebrow="Certifications & continuous learning"
        title={
          <>
            Always <span className="text-gradient">levelling up</span>
          </>
        }
        lead="Certifications earned, in progress and planned — kept honest about which is which."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal as="li" key={cert.name} delay={(i % 3) * 90}>
            <article className="surface group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-400 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-brand-500/35 hover:shadow-[var(--shadow-lift)]">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-14 -left-14 h-32 w-32 rounded-full bg-violet-accent/16 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="flex items-start justify-between gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500/15 to-violet-accent/15 text-brand-600 dark:text-brand-300"
                >
                  <Icon name="award" size={21} />
                </span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[0.7rem] font-medium ${statusTone[cert.status]}`}
                  style={
                    cert.status === 'Planned' ? { color: 'var(--fg-subtle)' } : undefined
                  }
                >
                  {cert.status}
                </span>
              </div>

              <h3 className="mt-4 text-base font-semibold">{cert.name}</h3>

              <p
                className="mt-1 flex items-center gap-2 text-[0.82rem]"
                style={{ color: 'var(--fg-subtle)' }}
              >
                {cert.issuer}
                <span aria-hidden="true">·</span>
                <span className="font-mono text-[0.72rem]">{cert.year}</span>
              </p>

              <p
                className="mt-4 flex-1 text-[0.83rem] leading-relaxed"
                style={{ color: 'var(--fg-muted)' }}
              >
                {cert.focus}
              </p>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-brand-600 transition-colors hover:text-brand-500 dark:text-brand-300"
                >
                  View credential
                  <Icon name="arrowUpRight" size={14} />
                </a>
              )}
            </article>
          </Reveal>
        ))}

        {/* Slot that makes the "add a certificate later" intent obvious. */}
        <Reveal as="li" delay={(certifications.length % 3) * 90}>
          <div
            className="flex h-full min-h-45 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-[rgb(var(--hairline))] p-6 text-center transition-colors duration-400 hover:border-brand-500/40"
            style={{ color: 'var(--fg-subtle)' }}
          >
            <Icon name="sparkles" size={20} className="text-brand-500/70" />
            <p className="text-sm font-medium">More on the way</p>
            <p className="text-[0.78rem] leading-relaxed">
              New certificates are added here as they are earned.
            </p>
          </div>
        </Reveal>
      </ul>
    </Section>
  )
}
