import { useCallback, useState } from 'react'
import { projects, type Project } from '../data/profile'
import { ProjectCard } from './ProjectCard'
import { ProjectDetails } from './ProjectDetails'
import { Reveal } from './ui/Reveal'
import { Section, SectionHeading } from './ui/Section'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <Section id="projects">
      <SectionHeading
        id="projects"
        index="03"
        eyebrow="Featured projects"
        title={
          <>
            Applications that replaced <span className="text-gradient">spreadsheets and paper</span>
          </>
        }
        lead="Enterprise applications I designed and shipped — four running in production at Varun Beverages Morocco, one delivered during my final-year internship. Open a card for the full case study: the problem, the architecture and the outcome."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 2) * 100}>
            <ProjectCard project={project} index={index} onOpen={setActive} />
          </Reveal>
        ))}
      </div>

      <ProjectDetails project={active} onClose={close} />
    </Section>
  )
}
