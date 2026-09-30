import { profile } from '../data/portfolio'
import { ExternalLink } from '../components/ExternalLink'
import { Arrow } from '../components/Arrow'
import { ResumeLink } from '../components/ResumeLink'

export function Contact() {
  return (
    <section className="contact-section" id="contato">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow">06 / VAMOS CONVERSAR</p>
          <h2>
            O próximo projeto
            <br />
            começa com uma
            <br />
            <span>boa conversa.</span>
          </h2>
          <p>
            Vamos conversar sobre oportunidades profissionais, projetos
            e colaboração técnica.
          </p>
        </div>
        <div className="contact-links">
          <ExternalLink href={profile.linkedin}>
            Vamos nos conectar{' '}
            <span className="contact-platform">LinkedIn</span>
          </ExternalLink>
          <ExternalLink href={profile.github}>
            Explore meu código <span className="contact-platform">GitHub</span>
          </ExternalLink>
          <ExternalLink href={profile.whatsapp}>
            Fale comigo pelo WhatsApp
            <span className="contact-platform">WhatsApp</span>
          </ExternalLink>
          {profile.email && (
            <a href={`mailto:${profile.email}`}>
              {profile.email}
              <Arrow diagonal />
            </a>
          )}
          <ResumeLink />
          <span className="contact-location">{profile.location}</span>
        </div>
      </div>
    </section>
  )
}
