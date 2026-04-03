import Cloud from '../components/Cloud'
import './About.css'

const storyRows = [
  {
    index: '01',
    accentColor: 'var(--coral)',
    photoGradient: 'linear-gradient(135deg, #AEE3F8 0%, #c8e8f6 60%, #ddf2fb 100%)',
    photoIcon: '🏥',
    photoLabel: "National Children's Hospital",
    text: 'Pages of Possibility was founded on the belief that every child, regardless of their circumstances, deserves access to books and educational resources. The project began in response to the lack of reading materials available to children in hospitals, orphanages, and underserved communities.',
  },
  {
    index: '02',
    accentColor: 'var(--cyan)',
    photoGradient: 'linear-gradient(135deg, #FFF0EF 0%, #fde8e6 60%, #fbd5d1 100%)',
    photoIcon: '⛪',
    photoLabel: 'Na Phac Church, Bac Kan',
    text: 'Recognizing that books can open doors to imagination, knowledge, and opportunity, we set out to provide not just reading materials but also interactive ways for children to engage with literature. Over time, the project has grown to include writing competitions, reading corners, and plans for multimedia libraries.',
    flip: true,
  },
]

const values = [
  {
    title: 'Education',
    gradient: 'linear-gradient(145deg, #1B3070 0%, #2a4a8c 45%, #E85A50 100%)',
    description: 'Education is the foundation of opportunity. Access to books opens doors to new worlds, helping children develop critical thinking, creativity, and resilience — giving every child a chance to reach their full potential.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
  {
    title: 'Community',
    gradient: 'linear-gradient(145deg, #0D1E4E 0%, #1B3070 45%, #2FB5D4 100%)',
    description: 'Our libraries are spaces where learning, stories, and ideas are freely exchanged. We build communities where knowledge is shared and literature sparks meaningful connections between people.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Hope',
    gradient: 'linear-gradient(145deg, #0D2A1A 0%, #164a2c 45%, #5DC068 100%)',
    description: 'Every book we provide is a seed of hope — a reminder that there is a world of potential waiting for each child. By investing in these communities, we empower families to envision a brighter future.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
]

export default function About() {
  return (
    <section className="about sky-bg" id="about">

      {/* ── Clouds: How & Why section only ── */}
      <Cloud variant={1} style={{ position:'absolute', width:'400px', top:' 2%',  left:'-5%',  opacity:0.50, zIndex:0 }} />
      <Cloud variant={2} style={{ position:'absolute', width:'320px', top:' 1%',  right:'-3%', opacity:0.45, zIndex:0 }} />
      <Cloud variant={4} style={{ position:'absolute', width:'280px', top:' 4%',  left:'22%',  opacity:0.32, zIndex:0 }} />
      <Cloud variant={3} style={{ position:'absolute', width:'180px', top:' 6%',  right:'30%', opacity:0.25, zIndex:0 }} />

      <Cloud variant={3} style={{ position:'absolute', width:'260px', top:'16%',  left:'-1%',  opacity:0.32, zIndex:0 }} />
      <Cloud variant={1} style={{ position:'absolute', width:'220px', top:'20%',  right:'-2%', opacity:0.28, zIndex:0 }} />

      <Cloud variant={2} style={{ position:'absolute', width:'200px', top:'32%',  left:' 2%',  opacity:0.26, zIndex:0 }} />
      <Cloud variant={4} style={{ position:'absolute', width:'180px', top:'36%',  right:' 1%', opacity:0.24, zIndex:0 }} />
      <Cloud variant={3} style={{ position:'absolute', width:'160px', top:'48%',  left:' 4%',  opacity:0.22, zIndex:0 }} />
      <Cloud variant={2} style={{ position:'absolute', width:'170px', top:'52%',  right:' 3%', opacity:0.22, zIndex:0 }} />

      {/* ── Wave top — white flows down from Overview into sky blue ── */}
      <div className="wave-top about-wave-top">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,60 C1200,20 1080,78 900,44 C720,12 540,68 360,38 C180,8 60,62 0,50 Z" fill="white" />
        </svg>
      </div>
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      <div className="container ab-wrap">

        {/* ══════════ PART 1: Story ══════════ */}
        <div className="ab-part-header" data-aos="fade-up">
          <span className="section-label">Background</span>
          <h2 className="ab-part-title">
            How &amp; Why<br /><em>We Started</em>
          </h2>
        </div>

        <div className="ab-story">
          {storyRows.map((row, i) => (
            <div
              key={row.index}
              className={`ab-story-row ${row.flip ? 'ab-story-row--flip' : ''}`}
              data-aos={row.flip ? 'fade-left' : 'fade-right'}
              data-aos-delay={i * 80}
            >
              {/* Text side */}
              <div className="ab-story-text">
                <div className="ab-story-badge" style={{ '--b-color': row.accentColor }}>
                  {row.index}
                </div>
                <p>{row.text}</p>
              </div>

              {/* Photo side */}
              <div className="ab-story-photo">
                <div
                  className="ab-photo-blob"
                  style={{ background: row.photoGradient }}
                >
                  <div className="ab-photo-inner">
                    <span className="ab-photo-icon">{row.photoIcon}</span>
                    <span className="ab-photo-label">{row.photoLabel}</span>
                    <span className="ab-photo-hint">Photo coming soon</span>
                  </div>
                  {/* hover hint */}
                  <div className="ab-photo-hover">📷 Add photo</div>
                </div>
                {/* Small sparkle dots */}
                <div className="ab-photo-dot ab-dot-1" style={{ background: row.accentColor }} />
                <div className="ab-photo-dot ab-dot-2" />
              </div>
            </div>
          ))}

          {/* Founder quote */}
          <div className="ab-quote-wrap" data-aos="zoom-in" data-aos-delay="60">
            <div className="ab-quote">
              <div className="ab-quote-mark" aria-hidden="true">"</div>
              <blockquote className="ab-quote-text">
                I've loved reading since I was young, and I wanted to create a project
                that could share this love for reading with more students and children.
              </blockquote>
              <footer className="ab-quote-footer">
                <div className="ab-quote-avatar">A</div>
                <div>
                  <div className="ab-quote-name">Nguyen Vu Ha Anh</div>
                  <div className="ab-quote-role">Founder &amp; President · Concordia International School Hanoi</div>
                </div>
              </footer>
            </div>
          </div>
        </div>

        {/* ══════════ CHAPTER BREAK ══════════ */}
        <div className="ab-chapter-break" data-aos="fade-up">
          <div className="ab-break-line" />
          <div className="ab-break-center">
            <span className="section-label" style={{ margin: 0 }}>Our Values</span>
            <h2 className="ab-part-title" style={{ marginTop: '0.35rem' }}>
              What <em>Drives Us</em>
            </h2>
          </div>
          <div className="ab-break-line" />
        </div>

        {/* ══════════ PART 2: Values as dark panels ══════════ */}
        <div className="ab-mv-grid" id="values">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="ab-mv-panel"
              style={{ '--mv-gradient': v.gradient }}
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="ab-mv-bg-word" aria-hidden="true">{v.title}</div>
              <div className="ab-mv-content">
                <div className="ab-mv-title-row">
                  <span className="ab-mv-icon">{v.icon}</span>
                  <h3 className="ab-mv-label">{v.title}</h3>
                </div>
                <p className="ab-mv-statement">{v.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
