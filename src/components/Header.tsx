import { useRef, useState } from 'react'
import { navigation } from '../data/portfolio'
import { Arrow } from './Arrow'

export function Header() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  return (
    <header className="header" onKeyDown={(event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        menuButton.current?.focus()
      }
    }}>
      <div className="container header-inner">
        <a
          className="brand"
          href="#inicio"
          aria-label="José Chilala — início"
          onClick={() => setOpen(false)}
        >
          jc<span>.</span>
        </a>
        <button
          ref={menuButton}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Fechar' : 'Menu'}
          <span aria-hidden="true">{open ? '−' : '+'}</span>
        </button>
        <nav
          id="main-navigation"
          aria-label="Navegação principal"
          className={open ? 'navigation is-open' : 'navigation'}
        >
          {navigation.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contato"
            onClick={() => setOpen(false)}
          >
            Vamos conversar <Arrow diagonal />
          </a>
        </nav>
      </div>
    </header>
  )
}
