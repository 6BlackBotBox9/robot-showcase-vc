import { useMemo } from 'react'

const seededRandom = (seed) => {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453
  return x - Math.floor(x)
}

function Background() {
  const stars = useMemo(() => {
    const items = []
    for (let i = 0; i < 150; i++) {
      items.push({
        id: i,
        left: `${seededRandom(i * 1.1) * 100}%`,
        top: `${seededRandom(i * 2.2) * 100}%`,
        size: seededRandom(i * 3.3) * 2.5 + 0.5,
        delay: seededRandom(i * 4.4) * 8,
        duration: seededRandom(i * 5.5) * 3 + 2,
        opacity: seededRandom(i * 6.6) * 0.7 + 0.3
      })
    }
    return items
  }, [])

  const asteroids = useMemo(() => {
    const items = []
    for (let i = 0; i < 15; i++) {
      items.push({
        id: i,
        left: `${seededRandom(i * 7.7) * 100}%`,
        delay: seededRandom(i * 8.8) * 12,
        duration: seededRandom(i * 9.9) * 6 + 4,
        size: seededRandom(i * 10) * 3 + 1
      })
    }
    return items
  }, [])

  const nebulaClouds = useMemo(() => {
    const items = []
    for (let i = 0; i < 5; i++) {
      items.push({
        id: i,
        left: `${seededRandom(i * 11.1) * 80}%`,
        top: `${seededRandom(i * 12.2) * 60}%`,
        width: `${seededRandom(i * 13.3) * 40 + 20}%`,
        height: `${seededRandom(i * 14.4) * 40 + 20}%`,
        delay: seededRandom(i * 15.5) * 20,
        color: seededRandom(i * 16.6) > 0.5 ? 'rgba(126, 5, 178, 0.15)' : 'rgba(0, 218, 243, 0.1)'
      })
    }
    return items
  }, [])

  const shootingStars = useMemo(() => {
    const items = []
    for (let i = 0; i < 3; i++) {
      items.push({
        id: i,
        left: `${seededRandom(i * 17.7) * 70}%`,
        top: `${seededRandom(i * 18.8) * 50}%`,
        delay: seededRandom(i * 19.9) * 15 + 5,
        duration: seededRandom(i * 20) * 1 + 0.5
      })
    }
    return items
  }, [])

  return (
    <div className="background-container">
      <div className="nebula-layer">
        {nebulaClouds.map(nebula => (
          <div
            key={nebula.id}
            className="nebula-cloud"
            style={{
              left: nebula.left,
              top: nebula.top,
              width: nebula.width,
              height: nebula.height,
              background: nebula.color,
              animationDelay: `${nebula.delay}s`
            }}
          />
        ))}
      </div>
      
      <div className="stars-layer">
        {stars.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              opacity: star.opacity
            }}
          />
        ))}
      </div>
      
      <div className="shooting-stars-layer">
        {shootingStars.map(star => (
          <div
            key={star.id}
            className="shooting-star"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`
            }}
          />
        ))}
      </div>
      
      <div className="asteroids-layer">
        {asteroids.map(asteroid => (
          <div
            key={asteroid.id}
            className="asteroid"
            style={{
              left: asteroid.left,
              width: `${asteroid.size}px`,
              height: `${asteroid.size}px`,
              animationDelay: `${asteroid.delay}s`,
              animationDuration: `${asteroid.duration}s`
            }}
          />
        ))}
      </div>
      
      <div className="grid-overlay" />
    </div>
  )
}

export default Background