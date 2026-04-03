import './Hero.css'

const C1   = 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/pop/CloudLogo1.png'
const C2   = 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/pop/CloudLogo2.png'
const LOGO = 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/pop/Logo+1.png'

/* White sparkles */
const STARS = [
  { top: '11%', left:  '6%',   delay: '0s',    dur: '3.1s' },
  { top: '7%',  left:  '22%',  delay: '0.5s',  dur: '2.6s' },
  { top: '19%', left:  '47%',  delay: '1s',    dur: '3.6s' },
  { top: '8%',  right: '28%',  delay: '1.4s',  dur: '2.9s' },
  { top: '24%', right: '6%',   delay: '0.2s',  dur: '4.1s' },
  { top: '38%', left:  '10%',  delay: '1.7s',  dur: '2.3s' },
  { top: '44%', right: '18%',  delay: '0.7s',  dur: '3.3s' },
  { top: '30%', right: '40%',  delay: '1.1s',  dur: '2.8s' },
  { top: '4%',  left:  '38%',  delay: '0.8s',  dur: '3.9s' },
  { top: '16%', right: '55%',  delay: '1.9s',  dur: '2.4s' },
  { top: '52%', right: '5%',   delay: '0.3s',  dur: '3.7s' },
  { top: '60%', left:  '45%',  delay: '1.4s',  dur: '2.2s' },
  { top: '3%',  left:  '54%',  delay: '2.1s',  dur: '3.0s' },
  { top: '48%', left:  '2%',   delay: '0.6s',  dur: '4.4s' },
  { top: '28%', right: '12%',  delay: '1.6s',  dur: '2.7s' },
  { top: '72%', left:  '25%',  delay: '0.1s',  dur: '3.5s' },
]

/* Coloured sparkles — drawn from logo palette */
const COLOR_STARS = [
  { top: '14%', left:  '16%',  delay: '0.3s',  dur: '2.8s', color: '#E85A50' }, // coral
  { top: '32%', left:  '28%',  delay: '1.2s',  dur: '3.4s', color: '#F5A820' }, // yellow
  { top: '50%', left:  '14%',  delay: '0.7s',  dur: '2.5s', color: '#5DC068' }, // green
  { top: '12%', right: '14%',  delay: '1.8s',  dur: '3.1s', color: '#4DAFE0' }, // blue
  { top: '36%', right: '30%',  delay: '0.4s',  dur: '2.9s', color: '#E85A50' }, // coral
  { top: '58%', left:  '32%',  delay: '1.5s',  dur: '3.6s', color: '#F5A820' }, // yellow
  { top: '22%', right: '48%',  delay: '0.9s',  dur: '2.7s', color: '#5DC068' }, // green
  { top: '46%', right: '10%',  delay: '1.3s',  dur: '3.2s', color: '#4DAFE0' }, // blue
  { top: '63%', left:  '8%',   delay: '0.6s',  dur: '2.4s', color: '#E85A50' }, // coral
  { top: '55%', right: '22%',  delay: '2.0s',  dur: '3.8s', color: '#F5A820' }, // yellow
  { top: '26%', left:  '42%',  delay: '1.1s',  dur: '3.0s', color: '#4DAFE0' }, // blue
  { top: '68%', right: '38%',  delay: '0.5s',  dur: '2.6s', color: '#5DC068' }, // green
  { top: '5%',  left:  '32%',  delay: '1.6s',  dur: '2.9s', color: '#E85A50' }, // coral
  { top: '40%', left:  '52%',  delay: '0.2s',  dur: '3.5s', color: '#F5A820' }, // yellow
  { top: '17%', right: '22%',  delay: '1.0s',  dur: '2.2s', color: '#5DC068' }, // green
  { top: '74%', left:  '38%',  delay: '1.7s',  dur: '4.0s', color: '#4DAFE0' }, // blue
  { top: '9%',  right: '42%',  delay: '0.8s',  dur: '3.3s', color: '#E85A50' }, // coral
  { top: '70%', right: '12%',  delay: '2.2s',  dur: '2.7s', color: '#F5A820' }, // yellow
  { top: '43%', left:  '36%',  delay: '0.4s',  dur: '3.1s', color: '#5DC068' }, // green
  { top: '20%', left:  '3%',   delay: '1.4s',  dur: '2.5s', color: '#4DAFE0' }, // blue
]

export default function Hero() {
  return (
    <section className="hero" id="hero">

      {/* ── Sun glow ── */}
      <div className="hero-sun" aria-hidden="true">
        <div className="sun-inner" />
        <div className="sun-outer" />
      </div>

      {/* ── White sparkles ── */}
      {STARS.map((s, i) => (
        <span key={`w${i}`} className="sparkle" aria-hidden="true"
          style={{ top: s.top, left: s.left, right: s.right, animationDelay: s.delay, animationDuration: s.dur }} />
      ))}

      {/* ── Coloured sparkles ── */}
      {COLOR_STARS.map((s, i) => (
        <span key={`c${i}`} className="sparkle sparkle-c" aria-hidden="true"
          style={{ top: s.top, left: s.left, right: s.right, animationDelay: s.delay, animationDuration: s.dur, '--spark': s.color }} />
      ))}

      {/* ════════ CLOUD LAYERS ════════ */}
      <img src={C2} alt="" aria-hidden="true" className="cld l0 l0-a" />
      <img src={C1} alt="" aria-hidden="true" className="cld l0 l0-b" />
      <img src={C2} alt="" aria-hidden="true" className="cld l0 l0-c" />

      <img src={C1} alt="" aria-hidden="true" className="cld l1 l1-a" />
      <img src={C2} alt="" aria-hidden="true" className="cld l1 l1-b" />
      <img src={C1} alt="" aria-hidden="true" className="cld l1 l1-c" />
      <img src={C2} alt="" aria-hidden="true" className="cld l1 l1-d" />

      <img src={C2} alt="" aria-hidden="true" className="cld l2 l2-a" />
      <img src={C1} alt="" aria-hidden="true" className="cld l2 l2-b" />
      <img src={C2} alt="" aria-hidden="true" className="cld l2 l2-c" />
      <img src={C1} alt="" aria-hidden="true" className="cld l2 l2-d" />

      <img src={C1} alt="" aria-hidden="true" className="cld l3 l3-a" />
      <img src={C2} alt="" aria-hidden="true" className="cld l3 l3-b" />
      <img src={C1} alt="" aria-hidden="true" className="cld l3 l3-c" />

      {/* ════════ CONTENT ════════ */}
      <div className="hero-inner container">

        {/* ── Left: Text ── */}
        <div className="hero-text">


          <h1 className="hero-heading anim-2">
            <span className="h-light">Pages of</span>
            <span className="h-heavy">Possibility</span>
          </h1>

          <p className="hero-tagline anim-3">
            Bringing books, libraries, and creative opportunity
            to children across Vietnam.
          </p>

          {/* ── Stats — clean single pill, all white ── */}
          <div className="hero-stats anim-4">
            <div className="hstat">
              <strong>1,500+</strong>
              <span>Books donated</span>
            </div>
            <div className="hstat-sep" />
            <div className="hstat">
              <strong>3+</strong>
              <span>Locations</span>
            </div>
            <div className="hstat-sep" />
            <div className="hstat">
              <strong>20+</strong>
              <span>Volunteers</span>
            </div>
          </div>

          <div className="hero-ctas anim-5">
            <a href="#overview" className="cta-primary">Discover Our Story</a>
            <a href="#support"  className="cta-ghost">Support Us</a>
          </div>

        </div>

        {/* ── Right: Logo visual ── */}
        <div className="hero-visual anim-visual">
          <div className="logo-scene">

            {/* Sonar ripple waves — burst outward from center */}
            <div className="wave wave-1" />
            <div className="wave wave-2" />
            <div className="wave wave-3" />
            <div className="wave wave-4" />
            <div className="wave wave-5" />

            {/* Static glow disc */}
            <div className="logo-disc" />
            <div className="logo-halo" />

            {/* Orbit cloud accents */}
            <img src={C1} alt="" aria-hidden="true" className="cld orb orb-tl" />
            <img src={C2} alt="" aria-hidden="true" className="cld orb orb-tr" />
            <img src={C1} alt="" aria-hidden="true" className="cld orb orb-br" />

            {/* The logo — sits on top */}
            <img src={LOGO} alt="Pages of Possibility" className="hero-logo" />

          </div>
        </div>

      </div>

      {/* ── Cloud bank ── */}
      <div className="cloud-bank" aria-hidden="true">
        <img src={C2} alt="" className="cld bnk bnk-a" />
        <img src={C2} alt="" className="cld bnk bnk-c" />
      </div>

      <div className="hero-fade" />


    </section>
  )
}
