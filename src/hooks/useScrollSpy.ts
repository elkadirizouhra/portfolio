import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view so the navbar can mark it active.
 *
 * Rather than picking the section with the largest intersection ratio (which is
 * unstable for sections of very different heights), we pick the last section
 * whose top edge has crossed the reading line just below the sticky navbar.
 */
export function useScrollSpy(sectionIds: readonly string[], offset = 120) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    const update = () => {
      const line = offset
      let current = sectionIds[0] ?? ''

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= line) current = id
      }

      // At the very bottom of the page the last section may never cross the
      // line, so claim it explicitly.
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      if (atBottom) current = sectionIds[sectionIds.length - 1] ?? current

      setActiveId(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [sectionIds, offset])

  return activeId
}
