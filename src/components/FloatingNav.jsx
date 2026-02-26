import { useState, useEffect } from 'react'
import './FloatingNav.css'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'values', label: 'Values' },
  { id: 'framework', label: 'Framework' },
  { id: 'impact', label: 'Impact' },
  { id: 'team', label: 'Team' },
  { id: 'support', label: 'Support Us' },
]

export default function FloatingNav() {
  const [active, setActive] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.75)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-38% 0px -38% 0px', threshold: 0 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <nav className={`fnav ${visible ? 'fnav--on' : ''}`} aria-label="Section navigation">
      <div className="fnav__pill">
        <a href="#" className="fnav__logo">POP</a>
        <div className="fnav__divider" />
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`fnav__item ${active === id ? 'fnav__item--active' : ''}`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
