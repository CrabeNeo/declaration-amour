import { motion } from 'framer-motion'
import { config } from '../config.js'

export default function Hero() {
  return (
    <section className="hero">
      <motion.p
        className="hero-eyebrow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {config.accueil.titre}, {config.prenom}
      </motion.p>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {config.prenom}
        <svg
          className="hero-heart"
          viewBox="0 0 24 24"
          role="img"
          aria-label="cœur"
        >
          <defs>
            <linearGradient id="coeurDegrade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff7a98" />
              <stop offset="100%" stopColor="#e8506e" />
            </linearGradient>
          </defs>
          <path
            fill="url(#coeurDegrade)"
            d="M12 21s-6.7-4.35-9.33-8.06C.9 10.2 1.5 6.7 4.2 5.2c2-1.1 4.3-.5 5.6 1.1L12 8.8l2.2-2.5c1.3-1.6 3.6-2.2 5.6-1.1 2.7 1.5 3.3 5 1.53 7.74C18.7 16.65 12 21 12 21z"
          />
        </svg>
      </motion.h1>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {config.accueil.sousTitre}
      </motion.p>

      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span>Fais défiler</span>
        <span className="scroll-arrow">↓</span>
      </motion.div>
    </section>
  )
}
