import { useState } from 'react'
import { certifications, education } from '../data/portfolio'
import { SectionHeading } from '../components/SectionHeading'
import { ExternalLink } from '../components/ExternalLink'

function formatIssueDate(issueDate: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(issueDate)) return issueDate

  const date = new Date(`${issueDate}T00:00:00`)
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export function Education() {
  const [showAllCertifications, setShowAllCertifications] = useState(false)
  const orderedCertifications = [...certifications].sort(
    (left, right) => Number(Boolean(right.featured)) - Number(Boolean(left.featured)),
  )
  const visibleCertifications = showAllCertifications
    ? orderedCertifications
    : orderedCertifications.slice(0, 6)

  return (
    <section className="section container" id="formacao">
      <SectionHeading
        number="05"
        label="FORMAÇÃO & CERTIFICAÇÕES"
        title="Formação & Certificações"
      />
      <div className="education-grid">
        {education.map((item, index) => (
          <article key={item.title}>
            <span className="education-number">0{index + 1}</span>
            <p className="eyebrow">{item.level}</p>
            <h3>{item.title}</h3>
            <p className="education-institution">{item.institution}</p>
            <p className="education-year">{item.year}</p>
            {item.diplomaUrl?.trim() && (
              <ExternalLink href={item.diplomaUrl} className="education-document-link">
                {item.diplomaLabel?.trim() || 'Ver diploma'}
              </ExternalLink>
            )}
          </article>
        ))}
      </div>
      {certifications.length > 0 && (
        <div className="certifications" aria-labelledby="certifications-heading">
          <h3 id="certifications-heading">Certificações profissionais</h3>
          <div className="certification-grid" id="certification-list">
            {visibleCertifications.map((certification) => (
              <article
                className={`certification-card${certification.featured ? ' certification-featured' : ''}`}
                key={`${certification.title}-${certification.issuer}-${certification.issueDate}`}
              >
                {certification.title.trim() && <h4>{certification.title}</h4>}
                {certification.issuer.trim() && (
                  <p className="certification-issuer">{certification.issuer}</p>
                )}
                {certification.issueDate.trim() && (
                  <time className="certification-date" dateTime={certification.issueDate}>
                    {formatIssueDate(certification.issueDate)}
                  </time>
                )}
                {certification.skills?.some((skill) => skill.trim()) && (
                  <ul className="certification-skills" aria-label="Tecnologias e competências">
                    {certification.skills.filter((skill) => skill.trim()).map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                )}
                {(certification.certificateUrl?.trim() || certification.credentialUrl?.trim()) && (
                  <div className="certification-links">
                    {certification.certificateUrl?.trim() && (
                      <ExternalLink href={certification.certificateUrl} className="education-document-link">
                        Ver certificado
                      </ExternalLink>
                    )}
                    {certification.credentialUrl?.trim() && (
                      <ExternalLink href={certification.credentialUrl} className="education-document-link">
                        Ver credencial
                      </ExternalLink>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
          {orderedCertifications.length > 6 && (
            <button
              aria-controls="certification-list"
              aria-expanded={showAllCertifications}
              className="certification-toggle"
              onClick={() => setShowAllCertifications((showAll) => !showAll)}
              type="button"
            >
              {showAllCertifications ? 'Mostrar menos' : 'Ver todos os certificados'}
            </button>
          )}
        </div>
      )}
    </section>
  )
}
