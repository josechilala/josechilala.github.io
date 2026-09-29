import { experiences } from '../data/portfolio'
import { SectionHeading } from '../components/SectionHeading'

export function Experience() {
  return (
    <section className="section container experience" id="experiencia">
      <SectionHeading
        number="03"
        label="EXPERIÊNCIA"
        title="Tecnologia no contexto de negócio."
      />
      <ol className="experience-timeline" aria-label="Trajetória profissional">
        {experiences.map((item) => (
          <li key={item.company}>
          <article className={`experience-card${item.current ? ' experience-current' : ''}`}>
            <div className="experience-meta">
              <span className="experience-period">{item.period}</span>
              {item.current && <span className="current-label"><span className="status-dot" />Atuação atual</span>}
            </div>
            <h3>{item.company}</h3>
            <p className="role">{item.role}</p>
            <p>{item.description}</p>
            <ul className="experience-responsibilities">
              {item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
            </ul>
            <p className="experience-technologies">{item.technologies}</p>
          </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
