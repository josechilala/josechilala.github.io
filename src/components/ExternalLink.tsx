import type { ReactNode } from 'react'
import { Arrow } from './Arrow'

export function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <Arrow diagonal />
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  )
}
