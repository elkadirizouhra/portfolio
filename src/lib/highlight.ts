export type TokenKind =
  | 'comment'
  | 'string'
  | 'number'
  | 'keyword'
  | 'type'
  | 'fn'
  | 'prop'
  | 'plain'

export type Token = { text: string; kind: TokenKind }

export type Language = 'java' | 'ts'

const KEYWORDS: Record<Language, ReadonlySet<string>> = {
  java: new Set([
    'int', 'char', 'boolean', 'void', 'return', 'if', 'else', 'for', 'while', 'new', 'class',
    'public', 'private', 'protected', 'static', 'final', 'this', 'true', 'false', 'null',
    'import', 'package', 'extends', 'implements', 'try', 'catch', 'throw', 'throws',
  ]),
  ts: new Set([
    'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'new', 'class',
    'interface', 'type', 'export', 'import', 'from', 'as', 'async', 'await', 'true', 'false',
    'null', 'undefined', 'readonly', 'extends', 'implements',
  ]),
}

/**
 * A deliberately small syntax highlighter: enough to make a short, hand-picked
 * snippet readable without pulling a full tokenizer into the bundle.
 *
 * It recognises line comments, string literals, numbers, keywords, capitalised
 * type names, call expressions and object keys — and leaves everything else
 * alone.
 */
const PATTERN =
  /(\/\/[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`[^`]*`)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)/g

export function highlight(line: string, lang: Language = 'ts'): Token[] {
  const tokens: Token[] = []
  const keywords = KEYWORDS[lang]
  let lastIndex = 0

  PATTERN.lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = PATTERN.exec(line)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ text: line.slice(lastIndex, match.index), kind: 'plain' })
    }

    const [text, comment, str, num, ident] = match

    if (comment) {
      // A comment swallows the rest of the line.
      tokens.push({ text: line.slice(match.index), kind: 'comment' })
      return tokens
    } else if (str) {
      tokens.push({ text, kind: 'string' })
    } else if (num) {
      tokens.push({ text, kind: 'number' })
    } else if (ident) {
      const next = line.slice(match.index + text.length)
      let kind: TokenKind = 'plain'
      if (keywords.has(ident)) kind = 'keyword'
      else if (/^\s*\(/.test(next)) kind = 'fn'
      else if (/^\s*:/.test(next)) kind = 'prop'
      else if (/^[A-Z]/.test(ident)) kind = 'type'
      tokens.push({ text, kind })
    }

    lastIndex = match.index + text.length
  }

  if (lastIndex < line.length) {
    tokens.push({ text: line.slice(lastIndex), kind: 'plain' })
  }

  return tokens
}
