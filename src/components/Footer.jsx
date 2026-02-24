import Cloud from './Cloud'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer sky-bg">
      <Cloud width={180} color="rgba(255,255,255,0.6)" style={{ top: '5%', left: '-2%' }} />
      <Cloud width={120} color="rgba(255,255,255,0.5)" style={{ top: '10%', right: '5%' }} />

      <div className="wave-top">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-pages">✦ PAGES OF ✦</span>
          <span className="footer-possibility">POSSIBILITY</span>
          <p className="footer-tagline">Read ✦ Dream ✦ Explore</p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#values">Values</a>
          <a href="#framework">Framework</a>
          <a href="#impact">Impact</a>
          <a href="#team">Team</a>
          <a href="#support">Support Us</a>
        </div>

        <div className="footer-contact">
          <a href="mailto:pagesofpossibilityhanoi@gmail.com">pagesofpossibilityhanoi@gmail.com</a>
          <span>@pages_of_possibility.hn</span>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Pages of Possibility · Concordia International School Hanoi · All rights reserved.
        </p>
      </div>
    </footer>
  )
}
