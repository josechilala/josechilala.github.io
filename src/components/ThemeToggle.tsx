import { useEffect, useRef, useState } from 'react'

type Theme = 'light' | 'dark'
const storageKey = 'portfolio-theme'

function storedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(storageKey)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0b1120' : '#f8fafc')
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
  const explicitChoice = useRef(storedTheme() !== null)

  useEffect(() => {
    const system = window.matchMedia('(prefers-color-scheme: dark)')
    const sync = (next: Theme) => {
      applyTheme(next)
      setTheme(next)
    }
    const onSystemChange = () => {
      if (!explicitChoice.current) sync(system.matches ? 'dark' : 'light')
    }
    const onStorageChange = (event: StorageEvent) => {
      if (event.key !== storageKey && event.key !== null) return
      const preference = storedTheme()
      explicitChoice.current = preference !== null
      sync(preference ?? (system.matches ? 'dark' : 'light'))
    }
    system.addEventListener('change', onSystemChange)
    window.addEventListener('storage', onStorageChange)
    return () => {
      system.removeEventListener('change', onSystemChange)
      window.removeEventListener('storage', onStorageChange)
    }
  }, [])

  function choose(next: Theme) {
    explicitChoice.current = true
    applyTheme(next)
    setTheme(next)
    try {
      localStorage.setItem(storageKey, next)
    } catch {
      // Keep the choice for this visit even when persistence is blocked.
    }
  }

  return <div className="theme-toggle" role="group" aria-label="Tema de aparência">
    <button type="button" aria-label="Usar tema claro" aria-pressed={theme === 'light'} onClick={() => choose('light')}>Light</button>
    <button type="button" aria-label="Usar tema escuro" aria-pressed={theme === 'dark'} onClick={() => choose('dark')}>Dark</button>
  </div>
}
