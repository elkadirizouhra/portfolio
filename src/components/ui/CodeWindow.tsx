import { highlight, type Language, type TokenKind } from '../../lib/highlight'

const tokenClass: Record<TokenKind, string> = {
  comment: 'italic text-ink-400 dark:text-ink-500',
  string: 'text-mint-accent',
  number: 'text-amber-500 dark:text-amber-400',
  keyword: 'text-violet-accent',
  type: 'text-brand-500 dark:text-brand-300',
  fn: 'text-sky-600 dark:text-sky-400',
  prop: 'text-brand-600 dark:text-brand-300',
  plain: '',
}

type CodeWindowProps = {
  title: string
  lines: readonly string[]
  lang?: Language
  /** Shows line numbers in a gutter. */
  numbered?: boolean
  /** Appends a blinking caret to the last line. */
  caret?: boolean
  className?: string
}

/**
 * A decorative — but real — code panel. Content comes from `profile.ts`, so the
 * snippets stay editable alongside the rest of the copy.
 */
export function CodeWindow({
  title,
  lines,
  lang = 'ts',
  numbered = true,
  caret = false,
  className = '',
}: CodeWindowProps) {
  return (
    <figure
      className={`surface overflow-hidden rounded-2xl ${className}`}
      style={{ boxShadow: 'var(--shadow-lift)' }}
    >
      {/* Window chrome */}
      <figcaption className="flex items-center gap-2 border-b border-[rgb(var(--hairline))] bg-[color-mix(in_oklab,var(--fg)_4%,transparent)] px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span
          className="ml-1 truncate font-mono text-[0.72rem]"
          style={{ color: 'var(--fg-subtle)' }}
        >
          {title}
        </span>
      </figcaption>

      <pre className="overflow-x-auto px-4 py-4 font-mono text-[0.74rem] leading-[1.75] sm:text-[0.8rem]">
        <code>
          {lines.map((line, i) => (
            <span key={i} className="flex">
              {numbered && (
                <span
                  aria-hidden="true"
                  className="mr-4 w-5 shrink-0 text-right select-none"
                  style={{ color: 'var(--fg-subtle)', opacity: 0.5 }}
                >
                  {i + 1}
                </span>
              )}
              <span className="min-w-0 whitespace-pre" style={{ color: 'var(--fg-muted)' }}>
                {highlight(line, lang).map((token, j) => (
                  <span key={j} className={tokenClass[token.kind]}>
                    {token.text}
                  </span>
                ))}
                {caret && i === lines.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="ml-0.5 inline-block h-[1em] w-[0.5em] translate-y-[0.15em] animate-caret bg-brand-500"
                  />
                )}
              </span>
            </span>
          ))}
        </code>
      </pre>
    </figure>
  )
}
