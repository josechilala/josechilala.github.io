import { profile } from '../data/portfolio'
import { Arrow } from '../components/Arrow'
import { ResumeLink } from '../components/ResumeLink'
import { ExternalLink } from '../components/ExternalLink'

export function Hero() {
  return (
    <section
      className="hero container"
      id="inicio"
      aria-labelledby="hero-title"
    >
      <div className="hero-content">
        <p className="eyebrow">
          <span className="status-dot" /> DESENVOLVEDOR FULL STACK
        </p>
        <h1 id="hero-title">
          José Chilala
          <br />
          <span>Jacinto.</span>
        </h1>
        <p className="hero-statement">
          Back-end .NET.
          <br />
          Soluções completas.
        </p>
        <p className="hero-description">
          {profile.summary}
        </p>
        <div className="hero-actions">
          <a href="#projetos" className="button button-dark">
            Explorar projetos <Arrow />
          </a>
          <ExternalLink href={profile.github} className="text-link">
            GitHub
          </ExternalLink>
          <ExternalLink href={profile.linkedin} className="text-link">
            LinkedIn
          </ExternalLink>
          <ResumeLink className="text-link" label="Ver currículo" />
        </div>
      </div>
      <div className="hero-aside">
        <div className="portrait-frame">
          <div className="portrait-top">
            <span>JOSÉ CHILALA JACINTO</span>
            <span aria-hidden="true">[ JC ]</span>
          </div>
          <img
            className="portrait"
            src={profile.photo}
            alt="José Chilala Jacinto"
            width="1254"
            height="1254"
            fetchPriority="high"
          />
          <div className="portrait-bottom">
            <span>FULL STACK DEVELOPER</span>
            <span aria-hidden="true">↗</span>
          </div>
        </div>
        <div className="location">
          <span aria-hidden="true">◎</span> {profile.location}
        </div>
      </div>
      <div className="hero-baseline">
        <span>C# / ASP.NET Core / React / APIs REST</span>
        <a href="#sobre">
          Conheça meu trabalho <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}
