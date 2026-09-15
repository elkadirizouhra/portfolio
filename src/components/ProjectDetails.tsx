import { useEffect, useRef } from 'react'
import type { Project } from '../data/profile'
import { Badge } from './ui/Badge'
import { Icon } from './ui/Icon'

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

type ProjectDetailsProps = {
  project: Project | null
  onClose: () => void
}

/**
 * Full case study for a project, presented as a modal dialog: focus is moved
 * into the panel, trapped while it is open, and returned to the trigger on
 * close. Escape and a backdrop click both dismiss it.
 */
export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const restoreFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!project) return

    restoreFocusRef.current = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const nodes = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE)
      if (!nodes || nodes.length === 0) return

      const first = nodes[0]
      const last = nodes[nodes.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      restoreFocusRef.current?.focus()
    }
  }, [project, onClose])

  if (!project) return null

  const titleId = `project-details-${project.slug}`

  return (
    <div
      className="fixed inset-0 z-100 flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="presentation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink-950/55 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="surface relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl sm:rounded-3xl"
        style={{ boxShadow: 'var(--shadow-lift)' }}
      >
        {/* ─────────── Header ─────────── */}
        <header className="relative shrink-0 overflow-hidden border-b border-[rgb(var(--hairline))]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-brand-500/18 via-violet-accent/12 to-transparent"
          />
          <div className="grid-backdrop absolute inset-0 opacity-50" aria-hidden="true" />

          <div className="relative flex items-start justify-between gap-4 p-6 sm:p-8">
            <div className="min-w-0">
              <p
                className="font-mono text-[0.72rem] tracking-[0.18em] uppercase"
                style={{ color: 'var(--fg-subtle)' }}
              >
                {project.client} · {project.period}
              </p>
              <h2 id={titleId} className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                {project.name}
              </h2>
              <p className="mt-2 text-sm font-medium text-brand-600 dark:text-brand-300">
                {project.tagline}
              </p>
              <p className="mt-1.5 text-[0.8rem]" style={{ color: 'var(--fg-subtle)' }}>
                {project.category}
              </p>
            </div>

            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[rgb(var(--hairline))] bg-[var(--surface)] transition-colors duration-300 hover:border-brand-500/45 hover:text-brand-500"
            >
              <Icon name="close" size={17} />
            </button>
          </div>
        </header>

        {/* ─────────── Scrollable body ─────────── */}
        <div className="min-h-0 flex-1 space-y-8 overflow-y-auto p-6 sm:p-8">
          <Block icon="alert" title="The problem">
            <p className="text-sm leading-[1.8]" style={{ color: 'var(--fg-muted)' }}>
              {project.problem}
            </p>
          </Block>

          <Block icon="sparkles" title="What I built">
            <p className="text-sm leading-[1.8]" style={{ color: 'var(--fg-muted)' }}>
              {project.solution}
            </p>
          </Block>

          <Block icon="layers" title="Key features">
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <Icon
                    name="check"
                    size={14}
                    strokeWidth={2.4}
                    className="mt-1 shrink-0 text-mint-accent"
                  />
                  <span style={{ color: 'var(--fg-muted)' }}>{feature}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block icon="target" title="Outcome">
            <ul className="space-y-2.5">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <Icon
                    name="arrowRight"
                    size={14}
                    className="mt-1 shrink-0 text-brand-500"
                  />
                  <span style={{ color: 'var(--fg-muted)' }}>{outcome}</span>
                </li>
              ))}
            </ul>
          </Block>

          <div className="grid gap-6 border-t border-[rgb(var(--hairline))] pt-7 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold tracking-[0.12em] uppercase">My role</h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                {project.role}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-[0.12em] uppercase">Technologies</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <li key={tech}>
                    <Badge className="text-[0.72rem]">{tech}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ─────────── Footer ─────────── */}
        <footer className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-[rgb(var(--hairline))] bg-[color-mix(in_oklab,var(--fg)_3%,transparent)] px-6 py-4 sm:px-8">
          <p className="text-[0.78rem]" style={{ color: 'var(--fg-subtle)' }}>
            {project.links?.github || project.links?.demo
              ? 'Explore the code and the live build.'
              : 'Internal enterprise project — source code is not public.'}
          </p>

          <div className="flex items-center gap-2">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-full border border-[rgb(var(--hairline))] px-4 py-2 text-[0.82rem] font-medium transition-colors duration-300 hover:border-brand-500/45 hover:text-brand-500"
              >
                <Icon name="github" size={15} />
                GitHub
              </a>
            )}
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-full border border-[rgb(var(--hairline))] px-4 py-2 text-[0.82rem] font-medium transition-colors duration-300 hover:border-brand-500/45 hover:text-brand-500"
              >
                <Icon name="arrowUpRight" size={15} />
                Live demo
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-[color-mix(in_oklab,var(--fg)_8%,transparent)] px-4 py-2 text-[0.82rem] font-medium transition-colors duration-300 hover:bg-[color-mix(in_oklab,var(--fg)_14%,transparent)]"
            >
              Close
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}

function Block({
  icon,
  title,
  children,
}: {
  icon: 'alert' | 'sparkles' | 'layers' | 'target'
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h3 className="flex items-center gap-2 text-sm font-semibold tracking-[0.12em] uppercase">
        <Icon name={icon} size={16} className="text-brand-500" />
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </section>
  )
}
