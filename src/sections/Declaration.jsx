import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import HeartExplosion from '../components/HeartExplosion.jsx'
import { config } from '../config.js'

export default function Declaration() {
  const [accepte, setAccepte] = useState(false)
  const [exploser, setExploser] = useState(false)
  const [popup, setPopup] = useState(false)
  const [posNon, setPosNon] = useState({ x: 0, y: 0 })

  // Le bouton « Non » s'enfuit dès que la souris l'approche → impossible à cliquer.
  const fuir = () => {
    const x = (Math.random() * 2 - 1) * 200
    const y = (Math.random() * 2 - 1) * 130
    setPosNon({ x, y })
  }

  // Clic sur « Oui » : explosion de cœurs, puis ouverture de la popup.
  const direOui = () => {
    setAccepte(true)
    setExploser(true)
    setTimeout(() => setPopup(true), 700)
  }

  return (
    <section className="section declaration">
      <Reveal>
        <h2 className="declaration-title">{config.declaration.titre}</h2>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="declaration-text">{config.declaration.texte}</p>
      </Reveal>

      <Reveal delay={0.3}>
        {!accepte && (
          <div className="declaration-question">
            <p>{config.declaration.question}</p>
            <div className="declaration-boutons">
              <button className="btn" onClick={direOui}>
                {config.declaration.bouton}
              </button>
              <button
                type="button"
                className="btn btn--non"
                style={{ transform: `translate(${posNon.x}px, ${posNon.y}px)` }}
                onMouseEnter={fuir}
                onMouseMove={fuir}
                onClick={(e) => {
                  e.preventDefault()
                  fuir()
                }}
              >
                Non
              </button>
            </div>
          </div>
        )}
      </Reveal>

      <Reveal delay={0.45}>
        <p className="declaration-signature">— {config.deTaPart}</p>
      </Reveal>

      {exploser && <HeartExplosion />}

      <AnimatePresence>
        {popup && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPopup(false)}
          >
            <motion.div
              className="modal"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setPopup(false)}
                aria-label="Fermer"
              >
                ×
              </button>
              <h3 className="modal-titre">{config.declaration.messageTitre}</h3>
              <p className="modal-texte">{config.declaration.message}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
