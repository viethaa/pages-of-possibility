import Cloud from '../components/Cloud'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">

      {/* ── Sun ── */}
      <div className="hero-sun" aria-hidden="true">
        <div className="sun-core" />
        <div className="sun-rays" />
      </div>

      {/* ── Cloud layer 1 — Background (large, faint, very slow) ── */}
      <Cloud variant={4} color="rgba(255,255,255,0.18)" className="hc hc-b1" />
      <Cloud variant={1} color="rgba(255,255,255,0.14)" className="hc hc-b2" />
      <Cloud variant={4} color="rgba(255,255,255,0.12)" className="hc hc-b3" />

      {/* ── Cloud layer 2 — Midground (white, medium speed) ── */}
      <Cloud variant={2} color="rgba(255,255,255,0.72)" className="hc hc-m1" />
      <Cloud variant={3} color="rgba(255,255,255,0.68)" className="hc hc-m2" />
      <Cloud variant={1} color="rgba(255,255,255,0.65)" className="hc hc-m3" />
      <Cloud variant={2} color="rgba(255,255,255,0.60)" className="hc hc-m4" />

      {/* ── Cloud layer 3 — Foreground (crisp white, quicker) ── */}
      <Cloud variant={3} color="white" className="hc hc-f1" />
      <Cloud variant={2} color="white" className="hc hc-f2" />
      <Cloud variant={3} color="rgba(255,255,255,0.9)" className="hc hc-f3" />

      {/* ── Floating balloon (scene element) ── */}
      <div className="hero-balloon" aria-hidden="true">
        <span className="balloon-icon">🎈</span>
        <span className="balloon-thread" />
        <span className="balloon-book">📖</span>
      </div>

      {/* ══════════════ CONTENT ══════════════ */}
      <div className="hero-content">

        {/* Badge */}
        <div className="hero-badge anim-1">
          <span className="badge-pulse" />
          Read &nbsp;·&nbsp; Dream &nbsp;·&nbsp; Explore
        </div>

        {/* Title */}
        <div className="hero-title anim-2">
          <span className="title-pages">✦ &nbsp;PAGES OF&nbsp; ✦</span>
          <h1 className="title-main">POSSIBILITY</h1>
        </div>

        {/* Tagline */}
        <p className="hero-tagline anim-3">
          Bringing books, libraries, and creative opportunity<br />
          to children across Vietnam.
        </p>

        {/* Stats pill */}
        <div className="hero-stats anim-4">
          <div className="hstat">
            <strong>1,500+</strong>
            <span>Books donated</span>
          </div>
          <div className="hstat-bar" />
          <div className="hstat">
            <strong>3+</strong>
            <span>Locations</span>
          </div>
          <div className="hstat-bar" />
          <div className="hstat">
            <strong>20+</strong>
            <span>Volunteers</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="hero-ctas anim-5">
          <a href="#overview" className="cta-primary">Discover Our Story</a>
          <a href="#support"  className="cta-ghost">Support Us</a>
        </div>

      </div>
      {/* ═══════════════════════════════════ */}

      {/* ── Cloud bank (bottom transition to white) ── */}
      <div className="hero-cloudbank" aria-hidden="true">
        <Cloud variant={4} color="rgba(255,255,255,0.5)" className="bank-back" />
        <Cloud variant={4} color="rgba(255,255,255,0.75)" className="bank-mid"  />
        <Cloud variant={4} color="white" className="bank-front" />
      </div>

      {/* ── Scroll hint ── */}
      <div className="scroll-hint anim-5" aria-hidden="true">
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        <span>Scroll</span>
      </div>

    </section>
  )
}
