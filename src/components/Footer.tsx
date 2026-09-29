import { profile } from '../data/portfolio'
import { ExternalLink } from './ExternalLink'

export function Footer() {
  return (
    <footer className="container footer">
      <a className="brand" href="#inicio" aria-label="Voltar ao início">
        jc<span>.</span>
      </a>
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <div>
        <ExternalLink href={profile.github}>GitHub</ExternalLink>
        <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  )
}
