import Cloud from '../components/Cloud'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero sky-bg">
      {/* Floating clouds */}
      <Cloud width={220} color="white" style={{ top: '6%', left: '-3%', opacity: 0.9 }} />
      <Cloud width={160} color="white" style={{ top: '12%', right: '5%', opacity: 0.85 }} />
      <Cloud width={130} color="white" style={{ top: '55%', left: '5%', opacity: 0.7 }} />
      <Cloud width={100} color="rgba(255,255,255,0.7)" style={{ top: '40%', right: '12%', opacity: 0.75 }} />

      {/* Wave bottom */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      <div className="container hero-content">
        {/* Logo / icon area */}
        <div className="hero-logo-area">
          <div className="hero-balloon">🎈</div>
          <div className="hero-book">📖</div>
        </div>

        <div className="hero-brand">
          <span className="hero-pages">✦ PAGES OF ✦</span>
          <h1 className="hero-possibility">POSSIBILITY</h1>
          <p className="hero-tagline">Read ✦ Dream ✦ Explore</p>
        </div>

        <p className="hero-sub">
          Our journey so far, our impact today, and our vision for the future.
        </p>

        <div className="hero-actions">
          <a href="#about" className="btn btn-primary">Learn More</a>
          <a href="#support" className="btn btn-outline">Support Us</a>
        </div>
      </div>
    </section>
  )
}
