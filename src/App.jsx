import Hearts from './components/Hearts.jsx'
import Gallery from './components/Gallery.jsx'
import Hero from './sections/Hero.jsx'
import Raisons from './sections/Raisons.jsx'
import Souvenirs from './sections/Souvenirs.jsx'
import Declaration from './sections/Declaration.jsx'
import { config } from './config.js'

export default function App() {
  return (
    <>
      <Hearts />
      <main>
        <Hero />
        <Raisons />
        <Gallery {...config.beaute} />
        <Gallery {...config.sport} alt />
        <Gallery {...config.humour} />
        <Souvenirs />
        <Declaration />
      </main>
      <footer className="footer">
        Fait avec
        <svg className="footer-coeur" viewBox="0 0 24 24" aria-label="amour" role="img">
          <path
            fill="currentColor"
            d="M12 21s-6.7-4.35-9.33-8.06C.9 10.2 1.5 6.7 4.2 5.2c2-1.1 4.3-.5 5.6 1.1L12 8.8l2.2-2.5c1.3-1.6 3.6-2.2 5.6-1.1 2.7 1.5 3.3 5 1.53 7.74C18.7 16.65 12 21 12 21z"
          />
        </svg>
        par {config.deTaPart}
      </footer>
    </>
  )
}
