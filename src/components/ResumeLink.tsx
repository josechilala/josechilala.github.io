import { profile } from '../data/portfolio'
import { ExternalLink } from './ExternalLink'

export function ResumeLink({ className }: { className?: string }) {
  if (!profile.resumeUrl) return null
  return <ExternalLink href={profile.resumeUrl} className={className}>Currículo<span className="sr-only"> em PDF</span></ExternalLink>
}
