import { SectionHeading } from '../components/SectionHeading'
import { highlights, profile } from '../data/portfolio'

export function About() {
  return (
    <section className="section container about" id="sobre">
      <SectionHeading
        number="01"
        label="SOBRE MIM"
        title="Código com estrutura. Soluções com propósito."
      />
      <div className="about-copy">
        {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <dl className="professional-highlights">
        {highlights.map((item) => <div key={item.title}>
          <dt>{item.title}</dt>
          <dd>{item.text}</dd>
        </div>)}
      </dl>
    </section>
  )
}
