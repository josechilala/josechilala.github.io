import { skills } from '../data/portfolio'
import { SectionHeading } from '../components/SectionHeading'

export function Stack() {
  return (
    <section className="section container" id="stack">
      <SectionHeading
        number="02"
        label="ÁREAS DE ATUAÇÃO & STACK"
        title="Uma stack para conectar as partes."
      />
      <div className="stack-grid">
        {skills.map((skill) => (
          <article className="skill" key={skill.number}>
            <span className="skill-number">{skill.number}</span>
            <h3>{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
            <p className="skill-technologies">{skill.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
