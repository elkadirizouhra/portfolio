import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'zek-theme'

function systemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function storedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    // Private browsing or blocked storage — fall back to the system preference.
    return null
  }
}

/**
 * Theme state, persisted per visitor. The initial class is applied by an inline
 * script in index.html so there is no flash of the wrong theme on first paint;
 * this hook keeps React in sync with it afterwards.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document === 'undefined'
      ? 'light'
      : document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light',
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Persisting is a convenience, not a requirement.
    }
  }, [theme])

  // Follow the OS while the visitor has not made an explicit choice.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      if (!storedTheme()) setTheme(systemTheme())
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])

  return { theme, toggle }
}
