// Galerie photo. L'animation d'apparition est gérée en CSS (au chargement),
// pour garantir que les images restent TOUJOURS visibles, quel que soit le
// navigateur — pas de dépendance à une détection de défilement.
export default function Gallery({ titre, sousTitre, photos = [], colonnes = 3, alt = false, anim = 'none' }) {
  return (
    <section className={`section galerie galerie--${anim} ${alt ? 'section-alt' : ''}`}>
      <h2 className="section-title">{titre}</h2>
      {sousTitre && <p className="galerie-intro">{sousTitre}</p>}

      <div className="galerie-grille" style={{ '--colonnes': colonnes }}>
        {photos.map((p, i) => (
          <figure
            className="galerie-item"
            key={i}
            style={{ animationDelay: `${(i % colonnes) * 0.1}s` }}
          >
            <div className="galerie-media">
              <img src={p.src} alt={p.legende || titre} loading="lazy" />
            </div>
            {p.legende && <figcaption>{p.legende}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  )
}
