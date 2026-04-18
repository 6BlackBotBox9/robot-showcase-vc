import { useState, useEffect, useRef } from 'react'
import Background from './components/Background'
import { ModelCard } from './components/ModelCard'
import './App.css'

const ROBOTS = [
  { 
    id: 1, 
    name: 'REI NEO', 
    type: 'Beauty Assistance AGI', 
    video: '/assets/modelbot/Rei-Neo.mp4',
    stats: { strength: 85, power: 78, weakness: 40, ability: 'Beauty Assistance AGI' },
    color: '#ff69b4'
  },
  { 
    id: 2, 
    name: 'oMeg5.0', 
    type: 'Strategic Attacker AI', 
    video: '/assets/modelbot/oMeg5.0.mp4',
    stats: { strength: 88, power: 90, weakness: 35, ability: 'Strategic Attacker AI' },
    color: '#00ff88'
  },
  { 
    id: 3, 
    name: 'Demo0.0', 
    type: 'Tank Vicious Fatal', 
    video: '/assets/modelbot/Demo0.0.mp4',
    stats: { strength: 75, power: 80, weakness: 60, ability: 'Tank Vicious Fatal' },
    color: '#ff4444'
  },
]

function VideoPlayer({ videoPath, isActive }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (!isActive || !videoRef.current) return
    
    const video = videoRef.current
    video.src = videoPath
    video.loop = true
    video.muted = false
    video.playsInline = true
    video.load()
    video.play().catch(() => {})

    return () => {
      video.pause()
      video.src = ''
    }
  }, [videoPath, isActive])

  if (!isActive) return null

  return (
    <video
      ref={videoRef}
      className="video-player"
      playsInline
      loop
      muted={false}
      autoPlay
    />
  )
}

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <p>INITIALIZING ROBOT FORGE</p>
      </div>
    </div>
  )
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY
      const windowHeight = window.innerHeight
      
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const top = ref.offsetTop
          if (scrollPos >= top - windowHeight / 2 && scrollPos < top + ref.offsetHeight / 2) {
            setActiveIndex(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    const timer = setTimeout(() => setIsLoaded(true), 2000)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollDown = () => {
    const nextIndex = Math.min(activeIndex + 1, ROBOTS.length - 1)
    scrollToSection(nextIndex)
  }

  return (
    <div className="app">
      {!isLoaded && <LoadingScreen />}
      
      <Background />
      
      <header className="header">
        <div className="logo">
          <span className="logo-icon">■</span>
          <span className="logo-text">ROBOT<span className="highlight">FORGE</span></span>
        </div>
        <nav className="nav">
          <a href="#" className="active">Showcase</a>
          <a href="#">Models</a>
          <a href="#">Specs</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main className="main">
        {ROBOTS.map((robot, index) => (
          <section 
            key={robot.id} 
            className="robot-section"
            ref={(el) => sectionRefs.current[index] = el}
            style={{ 
              '--accent': robot.color,
              opacity: index === activeIndex ? 1 : 0.5
            }}
          >
            <div className="section-content">
              <div className="video-wrapper">
                <VideoPlayer 
                  videoPath={robot.video} 
                  isActive={index === activeIndex} 
                />
                <div className="video-overlay">
                  <span className="video-label">{robot.name}</span>
                </div>
              </div>
              
              <ModelCard 
                name={robot.name}
                type={robot.type}
                color={robot.color}
                stats={robot.stats}
              />
            </div>
          </section>
        ))}
      </main>

      <nav className="section-nav">
        {ROBOTS.map((robot, index) => (
          <button
            key={robot.id}
            className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
            style={{ '--accent': robot.color }}
            onClick={() => scrollToSection(index)}
            title={robot.name}
          >
            <span className="nav-dot-inner"></span>
          </button>
        ))}
      </nav>

      {activeIndex < ROBOTS.length - 1 && (
        <div className="scroll-indicator" onClick={scrollDown} style={{ cursor: 'pointer' }}>
          <span>Scroll Down</span>
          <div className="arrow"></div>
        </div>
      )}

      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{ left: `${(i * 7) % 100}%`, animationDelay: `${i * 0.5}s` }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default App