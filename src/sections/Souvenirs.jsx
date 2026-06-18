import Reveal from '../components/Reveal.jsx'
import { config } from '../config.js'

export default function Souvenirs() {
  return (
    <section className="section section-alt">
      <Reveal>
        <h2 className="section-title">Notre histoire</h2>
      </Reveal>

      <div className="timeline">
        {config.souvenirs.map((souvenir, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="timeline-item">
              <div className="timeline-dot">❤</div>
              <div className="timeline-content">
                <h3 className="timeline-date">{souvenir.date}</h3>
                <p className="timeline-text">{souvenir.texte}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
