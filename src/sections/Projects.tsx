import { projects } from '../data/portfolio'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectGallery } from '../components/ProjectGallery'
import { ExternalLink } from '../components/ExternalLink'

export function Projects() {
  return (
    <section className="projects-section" id="projetos">
      <div className="container">
        <div className="projects-heading">
          <SectionHeading
            number="04"
            label="PROJETOS SELECIONADOS"
            title="Da arquitetura à aplicação."
          />
          <p>
            Três projetos. Diferentes desafios.
            <br />
            Conheça as soluções e explore o código.
          </p>
        </div>
        <div className="projects-list">
          {projects.map((project) => (
            <article className={`project-card${project.featured ? ' project-featured' : ''}`} key={project.id} aria-labelledby={`project-${project.id}`}>
              <ProjectGallery project={project} />
              <div className="project-content">
                <p className="eyebrow">{project.category}</p>
                {project.featured && <p className="featured-label">Projeto principal</p>}
                <h3 id={`project-${project.id}`}>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                {project.technologies.length > 0 && (
                  <p className="project-technologies">
                    {project.technologies.join(' · ')}
                  </p>
                )}
                <div className="project-links">
                  <ExternalLink
                    href={project.repository}
                    className="project-link"
                  >
                    Ver código
                  </ExternalLink>
                  {project.commercialUrl && (
                    <ExternalLink
                      href={project.commercialUrl}
                      className="project-link"
                    >
                      Ver site
                    </ExternalLink>
                  )}
                </div>
              </div>
              {project.caseSections && <div className="case-sections">
                {project.caseSections.map((section) => <div key={section.title}>
                  <h4>{section.title}</h4>
                  <p>{section.text}</p>
                </div>)}
              </div>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
