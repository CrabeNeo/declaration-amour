import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { config } from '../config.js'

export default function Raisons() {
  return (
    <section className="section">
      <Reveal>
        <h2 className="section-title">Ce que j’aime chez toi</h2>
      </Reveal>

      <div className="cards">
        {config.raisons.map((raison, i) => (
          <Reveal key={raison.titre} delay={i * 0.1}>
            <article className="card">
              <Icon name={raison.icone} className="card-icon" />
              <h3 className="card-title">{raison.titre}</h3>
              <p className="card-text">{raison.texte}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
