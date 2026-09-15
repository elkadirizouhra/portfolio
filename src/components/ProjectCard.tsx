import type { Project } from '../data/profile'
import { Badge } from './ui/Badge'
import { Icon } from './ui/Icon'

/** Per-card gradient so the grid does not read as four identical tiles. */
const artworkGradients = [
  'from-brand-500/22 via-violet-accent/14 to-transparent',
  'from-violet-accent/22 via-brand-500/14 to-transparent',
  'from-mint-accent/22 via-brand-500/14 to-transparent',
  'from-brand-600/22 via-mint-accent/14 to-transparent',
]

const statusTone: Record<Project['status'], string> = {
  Production: 'border-mint-accent/35 bg-mint-accent/12 text-mint-accent',
  Internal: 'border-brand-500/30 bg-brand-500/10 text-brand-600 dark:text-brand-300',
  'In development': 'border-amber-500/35 bg-amber-500/12 text-amber-600 dark:text-amber-400',
}

type ProjectCardProps = {
  project: Project
  index: number
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const headingId = `project-${project.slug}-title`

  return (
    <article
      aria-labelledby={headingId}
      className="surface group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-400 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:border-brand-500/35 hover:shadow-[var(--shadow-lift)]"
    >
      {/* ─────────────── Artwork ─────────────── */}
      <div
        aria-hidden="true"
        className={`relative h-36 overflow-hidden bg-gradient-to-br ${artworkGradients[index % artworkGradients.length]}`}
      >
        <div className="grid-backdrop absolute inset-0 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] to-transparent" />

        <span className="absolute -right-3 -bottom-5 font-display text-[5.5rem] leading-none font-bold text-[color-mix(in_oklab,var(--fg)_8%,transparent)] transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-110 group-hover:text-[color-mix(in_oklab,var(--fg)_11%,transparent)]">
          {project.monogram}
        </span>

        <span className="absolute top-4 left-5 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--hairline))] bg-[color-mix(in_oklab,var(--surface)_75%,transparent)] px-2.5 py-1 font-mono text-[0.68rem] tracking-wide backdrop-blur-sm">
          {String(index + 1).padStart(2, '0')} / {project.category}
        </span>
      </div>

      {/* ─────────────── Body ─────────────── */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <h3 id={headingId} className="text-xl font-semibold tracking-tight">
            {project.name}
          </h3>
          <span
            className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[0.7rem] font-medium ${statusTone[project.status]}`}
          >
            {project.status}
          </span>
        </div>

        <p className="mt-1.5 text-[0.82rem] font-medium text-brand-600 dark:text-brand-300">
          {project.tagline}
        </p>

        <p
          className="mt-4 flex-1 text-sm leading-relaxed"
          style={{ color: 'var(--fg-muted)' }}
        >
          {project.summary}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((tech) => (
            <li key={tech}>
              <Badge className="text-[0.72rem]">{tech}</Badge>
            </li>
          ))}
          {project.tech.length > 5 && (
            <li>
              <Badge variant="outline" className="text-[0.72rem]">
                +{project.tech.length - 5}
              </Badge>
            </li>
          )}
        </ul>

        <div className="mt-6 flex items-center gap-2 border-t border-[rgb(var(--hairline))] pt-5">
          <button
            type="button"
            onClick={() => onOpen(project)}
            aria-haspopup="dialog"
            className="group/btn inline-flex items-center gap-1.5 rounded-full bg-[color-mix(in_oklab,var(--fg)_6%,transparent)] px-4 py-2 text-[0.83rem] font-medium transition-all duration-300 ease-[var(--ease-out-soft)] hover:bg-brand-500 hover:text-white"
          >
            View Project
            <Icon
              name="arrowRight"
              size={15}
              className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
            />
          </button>

          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.name} on GitHub`}
              className="grid h-9 w-9 place-items-center rounded-full border border-[rgb(var(--hairline))] transition-colors duration-300 hover:border-brand-500/45 hover:text-brand-500"
            >
              <Icon name="github" size={16} />
            </a>
          )}

          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.name} live demo`}
              className="grid h-9 w-9 place-items-center rounded-full border border-[rgb(var(--hairline))] transition-colors duration-300 hover:border-brand-500/45 hover:text-brand-500"
            >
              <Icon name="arrowUpRight" size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
