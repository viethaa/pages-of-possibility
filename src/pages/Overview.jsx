import { useEffect, useRef, useState } from 'react'
import './Overview.css'

/* ── Animated counter hook ── */
function useCountUp(target, suffix = '', duration = 1800) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const ease = 1 - Math.pow(1 - progress, 3) // ease-out cubic
            setVal(Math.round(ease * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          obs.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return [val, ref]
}

/* ── Individual animated stat ── */
function AnimStat({ target, suffix, label, color, delay }) {
  const [val, ref] = useCountUp(target, suffix)
  return (
    <div
      className="ov-stat"
      ref={ref}
      style={{ '--s-color': color }}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <span className="ov-stat-num">
        {target >= 1000 ? val.toLocaleString() : val}{suffix}
      </span>
      <span className="ov-stat-label">{label}</span>
    </div>
  )
}

const stats = [
  { target: 1500, suffix: '+', label: 'Books donated to NCH',            color: 'var(--coral)'  },
  { target: 400,  suffix: '+', label: 'Books donated to Na Phac Church', color: 'var(--yellow)' },
  { target: 20,   suffix: '+', label: 'Dedicated volunteers',            color: 'var(--green)'  },
  { target: 3,    suffix: '+', label: 'Locations across Vietnam',        color: 'var(--cyan)'   },
]


export default function Overview() {
  return (
    <section className="overview white-bg" id="overview">

      <div className="container ov-wrap">

        {/* ════════ TOP: Text + Visual ════════ */}
        <div className="ov-top">

          {/* ── Left: Text ── */}
          <div className="ov-text">
            <div data-aos="fade-right">
              <span className="section-label">An Overview</span>
              <h2 className="ov-heading">
                What is<br /><em>Pages of Possibility?</em>
              </h2>
            </div>

            <p className="ov-p" data-aos="fade-right" data-aos-delay="80">
              Every child deserves the chance to dream, learn, and grow through books. Yet, many children in
              Vietnam — especially those in orphanages and underserved communities — lack access to quality
              reading materials. <strong>Pages of Possibility was founded to change that.</strong>
            </p>

            <p className="ov-p" data-aos="fade-right" data-aos-delay="140">
              Since its inception, our project has provided over 1,500 books to the National Children's Hospital,
              offering young patients a source of comfort, education, and imagination during their hospital stay.
              We have also donated books to Na Phac Church and other community spaces, hosting writing
              competitions and creating reading corners where children can explore literature freely.
            </p>

          </div>

          {/* ── Right: Visual cluster ── */}
          <div className="ov-visual" data-aos="fade-left" data-aos-delay="100">

            {/* Main image — large cloud blob */}
            <div className="ov-img ov-img-main">
              <div className="ov-placeholder ov-placeholder-main">
                <div className="ov-ph-inner">
                  <span className="ov-ph-icon">🏥</span>
                  <span className="ov-ph-text">National Children's Hospital</span>
                  <span className="ov-ph-sub">Your photo here</span>
                </div>
              </div>
              {/* Animated cloud border overlay */}
              <div className="ov-img-ring" />
            </div>

            {/* Secondary images */}
            <div className="ov-img-row">
              <div className="ov-img ov-img-sm ov-img-sm-1">
                <div className="ov-placeholder">
                  <div className="ov-ph-inner">
                    <span className="ov-ph-icon">⛪</span>
                    <span className="ov-ph-text">Na Phac Church</span>
                    <span className="ov-ph-sub">Photo coming soon</span>
                  </div>
                </div>
              </div>
              <div className="ov-img ov-img-sm ov-img-sm-2">
                <div className="ov-placeholder">
                  <div className="ov-ph-inner">
                    <span className="ov-ph-icon">📖</span>
                    <span className="ov-ph-text">Reading Corner</span>
                    <span className="ov-ph-sub">Photo coming soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative sparkle dots */}
            <div className="ov-sparkle ov-sp-1" aria-hidden="true" />
            <div className="ov-sparkle ov-sp-2" aria-hidden="true" />
            <div className="ov-sparkle ov-sp-3" aria-hidden="true" />
            <div className="ov-sparkle ov-sp-4" aria-hidden="true" />
          </div>
        </div>

        {/* ════════ BOTTOM: Stats bar ════════ */}
        <div className="ov-stats-bar">
          {stats.map((s, i) => (
            <AnimStat key={i} {...s} delay={i * 100} />
          ))}
        </div>

      </div>
    </section>
  )
}
