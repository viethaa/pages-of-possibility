import Cloud from './Cloud'
import './Footer.css'

const keyContributors = [
  { name: 'Ms. Monica Nguyen',       role: 'Project Advisor'            },
  { name: 'Mr. Nguyen Ngoc Anh',     role: 'Project Advisor'            },
  { name: 'Mr. Viet Huynh',          role: 'Project Consultant'         },
  { name: 'Nguyen Vu Ha Anh',        role: 'Project Student Leader & Founder' },
]

const sponsors = [
  'Thiên Minh Group',
  'Mme. Tô Thị Diên',
  'Mr. Nguyễn Ngọc Anh',
  'Mrs. Trần Thị Dung',
  'Mr. Phạm Kiên',
  'Mrs. Phạm Thu Hiền Linh',
  'Mr. Nguyễn Tuấn Anh',
  'Mrs. Phạm Nhài',
  'Mr. Ngô Khánh',
  'Thái Moms',
  'Mrs. Bùi Thanh Kim Huệ and TJ',
  'Peter and Friends',
  'Wardrobe Warriors',
]

export default function Footer() {
  return (
    <footer className="footer sky-bg">
      <Cloud variant={1} style={{ position:'absolute', width:'300px', top:'8%',    left:'-2%',   opacity:0.5,  zIndex:0, animation:'cloud-b 20s ease-in-out infinite' }} />
      <Cloud variant={4} style={{ position:'absolute', width:'260px', top:'5%',    right:'-1%',  opacity:0.4,  zIndex:0, animation:'cloud-a 25s ease-in-out infinite' }} />
      <Cloud variant={3} style={{ position:'absolute', width:'180px', top:'38%',   left:'8%',    opacity:0.3,  zIndex:0, animation:'cloud-d 18s ease-in-out infinite' }} />
      <Cloud variant={2} style={{ position:'absolute', width:'220px', top:'42%',   right:'6%',   opacity:0.28, zIndex:0, animation:'cloud-e 22s ease-in-out infinite' }} />
      <Cloud variant={1} style={{ position:'absolute', width:'200px', bottom:'12%',left:'30%',   opacity:0.22, zIndex:0, animation:'cloud-f 16s ease-in-out infinite' }} />


      <div className="container footer-inner">

        {/* ── Brand ── */}
        <div className="footer-brand">
          <span className="footer-pages">✦ Pages of ✦</span>
          <span className="footer-possibility">Possibility</span>
          <div className="footer-divider" />
          <span className="footer-tagline">Read · Dream · Explore</span>
          <p className="footer-school">
            A student initiative from Concordia International School Hanoi
          </p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/pages_of_possibility.hn/" target="_blank" rel="noreferrer" className="footer-social" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Instagram
            </a>
            <a href="https://github.com/viethaa/pages-of-possibility" target="_blank" rel="noreferrer" className="footer-social" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              GitHub
            </a>
          </div>

          <a href="mailto:pagesofpossibilityhanoi@gmail.com" className="footer-email">
            pagesofpossibilityhanoi@gmail.com
          </a>
        </div>

        {/* ── Key Contributors ── */}
        <div className="footer-section">
          <span className="footer-section-label">Key Contributors</span>
          <div className="footer-contributors">
            {keyContributors.map(c => (
              <div key={c.name} className="footer-contributor">
                <span className="footer-contributor-name">{c.name}</span>
                <span className="footer-contributor-role">{c.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Sponsors & Supporters ── */}
        <div className="footer-section">
          <span className="footer-section-label">With Gratitude — Our Sponsors & Supporters</span>
          <div className="footer-sponsors">
            {sponsors.map(s => (
              <span key={s} className="footer-sponsor">{s}</span>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <span>© 2026 Pages of Possibility · All rights reserved.</span>
        </div>

      </div>
    </footer>
  )
}
