import type { SVGProps } from 'react'

/**
 * A small, dependency-free icon set. Every glyph is drawn on a 24×24 grid with
 * `currentColor`, so icons inherit text colour and work in both themes.
 */
export type IconName =
  | 'linkedin'
  | 'github'
  | 'mail'
  | 'phone'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'close'
  | 'arrowDown'
  | 'arrowRight'
  | 'arrowUpRight'
  | 'download'
  | 'mapPin'
  | 'code'
  | 'layout'
  | 'server'
  | 'smartphone'
  | 'database'
  | 'cloud'
  | 'briefcase'
  | 'graduation'
  | 'award'
  | 'check'
  | 'sparkles'
  | 'terminal'
  | 'send'
  | 'target'
  | 'alert'
  | 'clock'
  | 'layers'

const paths: Record<IconName, React.ReactNode> = {
  linkedin: (
    <>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
      <path d="M3 10h4v11H3z" />
      <path d="M10 10h3.8v1.5A4 4 0 0 1 17 10c3 0 4 2 4 5.2V21h-4v-5.2c0-1.5-.5-2.5-1.9-2.5-1.2 0-1.8.8-2.1 1.6-.1.3-.1.7-.1 1.1V21h-4V10Z" />
    </>
  ),
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 8.2 5.6a1.5 1.5 0 0 0 1.6 0L21 7" />
    </>
  ),
  phone: (
    <path d="M6.6 3.5h2.6l1.3 3.3-1.9 1.2a11.5 11.5 0 0 0 5.4 5.4l1.2-1.9 3.3 1.3v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />,
  menu: <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  arrowDown: <path d="M12 4.5v15M6 13.5l6 6 6-6" />,
  arrowRight: <path d="M4.5 12h15M13 5.5l6.5 6.5L13 18.5" />,
  arrowUpRight: <path d="M7 17 17 7M8.5 7H17v8.5" />,
  download: <path d="M12 3.5v11M7.5 10.5 12 15l4.5-4.5M4.5 19.5h15" />,
  mapPin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  code: <path d="m8.5 8-5 4 5 4M15.5 8l5 4-5 4M13.5 4.5l-3 15" />,
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9.5h18M9.5 9.5V20" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
  smartphone: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  cloud: <path d="M7 19a4.5 4.5 0 0 1-.4-8.98 6 6 0 0 1 11.55 1.53A3.98 3.98 0 0 1 17.5 19H7Z" />,
  briefcase: (
    <>
      <rect x="2.5" y="7" width="19" height="13" rx="2.5" />
      <path d="M8.5 7V5.5A2 2 0 0 1 10.5 3.5h3a2 2 0 0 1 2 2V7M2.5 12.5h19" />
    </>
  ),
  graduation: (
    <>
      <path d="M12 3.5 22 8.5l-10 5-10-5 10-5Z" />
      <path d="M6.5 11v5.2c0 .9 2.5 2.3 5.5 2.3s5.5-1.4 5.5-2.3V11M22 8.5v5.5" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.5 13.8-1.3 6.7 4.8-2.6 4.8 2.6-1.3-6.7" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  sparkles: (
    <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5ZM19 3.5l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" />
  ),
  terminal: <path d="M5 7.5 9 12l-4 4.5M12.5 17h6.5" />,
  send: <path d="M21 3.5 10.5 14M21 3.5l-6.8 17.5-3.7-7.6-7.6-3.7L21 3.5Z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" />
    </>
  ),
  alert: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v4.5M12 15.8h.01" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  layers: <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3ZM3.5 12 12 16.5 20.5 12M3.5 16.5 12 21l8.5-4.5" />,
}

/** Icons that read better as solid shapes than as strokes. */
const filled = new Set<IconName>(['linkedin', 'github', 'sparkles'])

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
  /** Rendered size in pixels. */
  size?: number
}

export function Icon({ name, size = 20, ...rest }: IconProps) {
  const isFilled = filled.has(name)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}
