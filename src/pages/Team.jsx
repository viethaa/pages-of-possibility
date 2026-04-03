import { useState } from 'react'
import Cloud from '../components/Cloud'
import './Team.css'

const members = [
  {
    name: 'Nguyen Vu Ha Anh',
    nickname: '"Panda"',
    role: 'President & Founder',
    initial: 'A',
    accent: '#E85A50',
    gradient: 'linear-gradient(145deg, #1B3070 0%, #3a1a18 55%, #E85A50 100%)',
    description:
      'Oversees the vision and direction of the project, coordinates with partners, and ensures every initiative aligns with our mission. Founded the project as an 11th-grade student at Concordia International School Hanoi.',
  },
  {
    name: 'Nguyen Chau Anh',
    nickname: null,
    role: 'Head of Marketing',
    initial: 'A',
    accent: '#2FB5D4',
    gradient: 'linear-gradient(145deg, #0D1E4E 0%, #0b2c38 55%, #2FB5D4 100%)',
    description:
      'Leads promotional efforts, builds community awareness, and connects our work to a wider audience through creative campaigns, social media, and strategic outreach.',
  },
  {
    name: 'Dang Vy Le',
    nickname: null,
    role: 'Head of Operations',
    initial: 'L',
    accent: '#5DC068',
    gradient: 'linear-gradient(145deg, #0D2A1A 0%, #0b1f10 55%, #5DC068 100%)',
    description:
      'Manages logistics, timelines, and resources — ensuring our events and book donations run smoothly from initial planning all the way through execution.',
  },
  {
    name: 'Jeny Park',
    nickname: null,
    role: 'Head of Design',
    initial: 'J',
    accent: '#F5A820',
    gradient: 'linear-gradient(145deg, #2A1E00 0%, #1a1400 55%, #F5A820 100%)',
    description:
      'Creates visual materials that capture our story and inspire participation, bringing warmth and creativity to every piece of Pages of Possibility\u2019s identity.',
  },
]

const advisors = [
  { name: 'Ms. Monica Nguyen',    role: 'Project Advisor'    },
  { name: 'Mr. Nguyen Ngoc Anh', role: 'Project Advisor'    },
  { name: 'Mr. Viet Huynh',      role: 'Project Consultant' },
]

const sponsors = [
  'Thiên Minh Group', 'Mrs. Trần Thị Dung', 'Mr. Nguyễn Tuấn Anh',
  'Mrs. Bùi Thanh Kim Huệ and TJ', 'Mme. Tô Thị Diền', 'Mr. Phạm Kiên',
  'Mrs. Phạm Nhài', 'Peter and Friends', 'Mr. Nguyễn Ngọc Anh',
  'Mrs. Phạm Thu Hiền Linh', 'Mr. Ngô Khánh', 'Wardrobe Warriors', 'Thai Moms',
]

/* Return position class for card i relative to active */
function getPos(i, active, total) {
  const diff = (i - active + total) % total
  if (diff === 0)           return 'center'
  if (diff === 1)           return 'right'
  if (diff === total - 1)   return 'left'
  return 'hidden'
}

export default function Team() {
  const [active, setActive] = useState(0)
  const total = members.length

  const go = (idx) => setActive((idx + total) % total)

  return (
    <section className="team sky-bg" id="team">

      <Cloud variant={2} style={{ position:'absolute', width:'240px', top:'5%',  right:'1%',  opacity:0.40, zIndex:0 }} />
      <Cloud variant={3} style={{ position:'absolute', width:'190px', top:'12%', left:'-1%', opacity:0.32, zIndex:0 }} />
      <Cloud variant={1} style={{ position:'absolute', width:'160px', top:'22%', right:'4%', opacity:0.25, zIndex:0 }} />

      <div className="wave-top">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      <div className="container tm-wrap">

        {/* ══ Header ══ */}
        <div className="tm-header" data-aos="fade-up">
          <span className="section-label">The People Behind POP</span>
          <h2 className="tm-title">Meet Our <em>Team</em></h2>
          <p className="tm-subtitle">
            Student leaders from Concordia International School Hanoi,
            united by a shared belief that every child deserves a book.
          </p>
        </div>

        {/* ══ Slider ══ */}
        <div className="tm-slider" data-aos="fade-up" data-aos-delay="80">

          {/* Stage */}
          <div className="tm-stage">
            {members.map((m, i) => {
              const pos = getPos(i, active, total)
              return (
                <div
                  key={m.name}
                  className={`tm-card tm-card--${pos}`}
                  style={{ '--accent': m.accent, '--grad': m.gradient }}
                  onClick={() => pos !== 'center' && go(i)}
                  aria-hidden={pos === 'hidden'}
                >
                  {/* Ambient glow */}
                  <div className="tm-glow" />
                  <div className="tm-glow tm-glow--top" />

                  {/* Avatar */}
                  <div className="tm-avatar-wrap">
                    <div className="tm-avatar-ring">
                      <div className="tm-avatar">{m.initial}</div>
                    </div>
                    <div className="tm-avatar-pulse" />
                  </div>

                  {/* Role badge */}
                  <div className="tm-role-badge">{m.role}</div>

                  {/* Identity */}
                  <div className="tm-identity">
                    <h3 className="tm-name">{m.name}</h3>
                    {m.nickname && <div className="tm-nick">{m.nickname}</div>}
                  </div>

                  {/* Description — fades in for center only */}
                  <p className="tm-desc">{m.description}</p>

                  {/* Photo placeholder */}
                  <div className="tm-photo-slot">
                    <div className="tm-photo-inner">
                      <span>📷</span>
                      <span>Photo coming soon</span>
                    </div>
                  </div>

                  {/* Decorative lines */}
                  <div className="tm-stripe tm-stripe-1" />
                  <div className="tm-stripe tm-stripe-2" />
                </div>
              )
            })}
          </div>

          {/* Arrows */}
          <button className="tm-arrow tm-arrow--prev" onClick={() => go(active - 1)} aria-label="Previous member">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="tm-arrow tm-arrow--next" onClick={() => go(active + 1)} aria-label="Next member">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Dot nav */}
          <div className="tm-dots" role="tablist">
            {members.map((m, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={m.name}
                className={`tm-dot ${i === active ? 'tm-dot--on' : ''}`}
                style={{ '--dc': m.accent }}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </div>

        {/* ══ Volunteers banner ══ */}
        <div className="tm-vol" data-aos="fade-up">
          <div className="tm-vol-stat">
            <span className="tm-vol-n">20+</span>
            <span className="tm-vol-u">Volunteers</span>
          </div>
          <div className="tm-vol-sep" />
          <div className="tm-vol-body">
            <h3>Dedicated Volunteer Network</h3>
            <p>
              Beyond our core team, over 20 dedicated volunteers from schools across Hanoi bring their
              passion and energy to make every page of our project possible.
            </p>
          </div>
          {/* Decorative orbs */}
          <div className="tm-vol-orb tm-vol-orb-1" />
          <div className="tm-vol-orb tm-vol-orb-2" />
        </div>

        {/* ══ Advisors ══ */}
        <div className="tm-advisors" data-aos="fade-up">
          <div className="tm-advisors-label">Under the Supervision of</div>
          <div className="tm-advisors-school">Concordia International School Hanoi (CISH)</div>
          <div className="tm-advisors-row">
            {advisors.map((a) => (
              <div key={a.name} className="tm-advisor-card">
                <div className="tm-advisor-av">
                  {a.name.charAt(a.name.lastIndexOf(' ') + 1)}
                </div>
                <strong>{a.name}</strong>
                <span>{a.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ══ Sponsors ══ */}
        <div className="tm-sponsors" data-aos="fade-up">
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
            Our Sponsors &amp; Supporters
          </div>
          <div className="tm-sponsors-grid">
            {sponsors.map((s) => (
              <span key={s} className="tm-sponsor-pill">{s}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
