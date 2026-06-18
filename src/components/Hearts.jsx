// Petits cœurs qui flottent doucement en arrière-plan.
const HEARTS = Array.from({ length: 14 })

export default function Hearts() {
  return (
    <div className="hearts" aria-hidden="true">
      {HEARTS.map((_, i) => {
        const style = {
          left: `${(i * 7.3) % 100}%`,
          fontSize: `${12 + (i % 5) * 6}px`,
          animationDuration: `${8 + (i % 6)}s`,
          animationDelay: `${(i % 7)}s`,
          opacity: 0.15 + (i % 4) * 0.12,
        }
        return (
          <span key={i} className="heart" style={style}>
            ❤
          </span>
        )
      })}
    </div>
  )
}
