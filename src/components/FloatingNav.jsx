import { useState, useEffect } from 'react'
import './FloatingNav.css'

const LOGO = 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/pop/Logo+Only+Graphic.png'

const sections = [
  { id: 'overview',  label: 'Overview'    },
  { id: 'about',     label: 'About'       },
  { id: 'team',      label: 'Team'        },
  { id: 'framework', label: 'Framework'   },
  { id: 'impact',    label: 'Our Story'   },
  { id: 'budget',    label: 'Action Plan' },
  { id: 'support',   label: 'Support Us'  },
]

export default function FloatingNav() {
  const [active, setActive]   = useState('')
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', () => {}, { passive: true })

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <nav className={`fnav ${visible ? 'fnav--on' : ''}`} aria-label="Section navigation">
      <div className="fnav__bar">

        {/* ── Brand ── */}
        <a href="#" className="fnav__brand" aria-label="Back to top">
          <img src={LOGO} alt="" className="fnav__logo" aria-hidden="true" />
          <div className="fnav__brand-text">
            <span className="fnav__brand-top">Pages of</span>
            <span className="fnav__brand-em">Possibility</span>
          </div>
        </a>

        {/* ── Separator ── */}
        <div className="fnav__sep" aria-hidden="true" />

        {/* ── Links ── */}
        <div className="fnav__links">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`fnav__link ${active === id ? 'fnav__link--active' : ''}`}
            >
              {label}
            </a>
          ))}
        </div>

      </div>
    </nav>
  )
}
