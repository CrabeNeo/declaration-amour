// Jeu d'icônes au trait (style épuré et cohérent), une par carte.
// Pour ajouter une icône : ajoute une entrée ici puis utilise son nom dans config.js.
const PATHS = {
  // L'œil — « Ses yeux »
  eye: (
    <>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  // Le sourire — « Son sourire »
  smile: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </>
  ),
  // L'étoile — « Son physique »
  star: (
    <path d="M12 2.5l2.6 6.3 6.8.5-5.2 4.4 1.7 6.6L12 17.3 6.1 20.8l1.7-6.6L2.6 9.8l6.8-.5z" />
  ),
  // Le cœur — « Sa gentillesse »
  heart: (
    <path d="M12 21s-6.7-4.35-9.33-8.06C.9 10.2 1.5 6.7 4.2 5.2c2-1.1 4.3-.5 5.6 1.1L12 8.8l2.2-2.5c1.3-1.6 3.6-2.2 5.6-1.1 2.7 1.5 3.3 5 1.53 7.74C18.7 16.65 12 21 12 21z" />
  ),
  // L'ampoule — « Son intelligence »
  lightbulb: (
    <>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </>
  ),
  // La montagne — « Sa persévérance »
  mountain: <path d="M8 3l4 8 5-5 5 15H2L8 3z" />,
  // Deux personnes — « Ses câlins »
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  // Le diamant — « Son authenticité »
  gem: (
    <>
      <path d="M6 3h12l4 6-10 13L2 9z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </>
  ),
  // La lune — « Sa présence »
  moon: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />,
}

export default function Icon({ name, className }) {
  const contenu = PATHS[name] ?? PATHS.heart
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {contenu}
    </svg>
  )
}
