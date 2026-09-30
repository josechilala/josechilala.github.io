import { profile } from '../data/portfolio'
import { ExternalLink } from './ExternalLink'

export function ResumeLink({ className, label = 'Currículo' }: { className?: string; label?: string }) {
  if (!profile.resumeUrl) return null
  return <ExternalLink href={profile.resumeUrl} className={className}>{label}<span className="sr-only"> em PDF</span></ExternalLink>
}
