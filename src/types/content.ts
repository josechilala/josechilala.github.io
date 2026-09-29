export interface ProjectImage {
  src: string
  alt: string
  caption: string
  category?: 'application' | 'commercial'
  order?: number
  width?: number
  height?: number
}

export interface Project {
  id: string
  number: string
  name: string
  subtitle: string
  category: string
  description: string
  technologies: string[]
  repository: string
  commercialUrl?: string
  featured?: boolean
  caseSections?: { title: string; text: string }[]
  images: ProjectImage[]
}

export interface EducationItem {
  level: string
  title: string
  institution: string
  year: string
  diplomaUrl?: string
  diplomaLabel?: string
}

export interface Certification {
  title: string
  issuer: string
  issueDate: string
  credentialUrl?: string
  certificateUrl?: string
  skills?: string[]
  featured?: boolean
}
