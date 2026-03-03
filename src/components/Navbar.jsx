import { useState, useEffect } from 'react'
import './Navbar.css'

const LOGO = 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/pop/Logo+1.png'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Values', href: '#values' },
  { label: 'Framework', href: '#framework' },
  { label: 'Impact', href: '#impact' },
  { label: 'Team', href: '#team' },
  { label: 'Support Us', href: '#support' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          <img src={LOGO} alt="Pages of Possibility" className="navbar-logo-img" />
        </a>

        <button className="navbar-toggle" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>

        <ul className={`navbar-links ${open ? 'open' : ''}`}>
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
            </li>
          ))}
          <li className="nav-cta-item">
            <a href="#support" className="nav-cta" onClick={() => setOpen(false)}>Donate</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
