import { useState } from 'react'
import { motion } from 'framer-motion'

const N = 30
const COULEURS = ['#e8506e', '#ff7a98', '#ff9bb0', '#d63e5c', '#ffb3c6']

// Génère une volée de cœurs partant du centre dans toutes les directions.
function genererCoeurs() {
  return Array.from({ length: N }, (_, i) => {
    const angle = (i / N) * Math.PI * 2 + (Math.random() - 0.5) * 0.7
    const distance = 140 + Math.random() * 280
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      scale: 0.6 + Math.random() * 1,
      rotate: (Math.random() - 0.5) * 140,
      duree: 0.9 + Math.random() * 0.7,
      couleur: COULEURS[i % COULEURS.length],
    }
  })
}

export default function HeartExplosion() {
  const [coeurs] = useState(genererCoeurs)

  return (
    <div className="explosion" aria-hidden="true">
      {coeurs.map((c, i) => (
        <motion.svg
          key={i}
          className="explosion-coeur"
          viewBox="0 0 24 24"
          initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
          animate={{ x: c.x, y: c.y, scale: c.scale, opacity: 0, rotate: c.rotate }}
          transition={{ duration: c.duree, ease: 'easeOut' }}
        >
          <path
            fill={c.couleur}
            d="M12 21s-6.7-4.35-9.33-8.06C.9 10.2 1.5 6.7 4.2 5.2c2-1.1 4.3-.5 5.6 1.1L12 8.8l2.2-2.5c1.3-1.6 3.6-2.2 5.6-1.1 2.7 1.5 3.3 5 1.53 7.74C18.7 16.65 12 21 12 21z"
          />
        </motion.svg>
      ))}
    </div>
  )
}
