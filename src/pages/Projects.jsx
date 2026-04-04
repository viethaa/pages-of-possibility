import Cloud from '../components/Cloud'
import './Projects.css'

const pillars = [
  {
    number: '01',
    accent: '#E85A50',
    photoGrad: 'linear-gradient(160deg, #3d1818 0%, #1B3070 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
    title: 'Providing Libraries & Multimedia Resources',
    description:
      'We establish reading spaces in hospitals, orphanages, and underserved communities — donating books, computers, and digital learning tools so every child has both physical and digital access to literature.',
    photoLabel: 'Library Setup',
  },
  {
    number: '02',
    accent: '#F5A820',
    photoGrad: 'linear-gradient(160deg, #2d1c00 0%, #1B3070 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Hosting Writing Competitions',
    description:
      'We believe every child has a story to tell. Our writing competitions encourage storytelling, poetry, and personal essays — building confidence and nurturing voices that deserve to be heard.',
    photoLabel: 'Writing Competition',
  },
  {
    number: '03',
    accent: '#5DC068',
    photoGrad: 'linear-gradient(160deg, #0b2010 0%, #0D1E4E 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'Collecting & Publishing Submissions',
    description:
      "A child's voice deserves to be amplified. We curate outstanding submissions and work toward publishing selected works — through printed collections, digital platforms, or public showcases.",
    photoLabel: 'Published Collection',
  },
]

function CameraIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  )
}

export default function Framework() {
  return (
    <section className="framework sky-bg" id="framework">

      <Cloud variant={2} style={{ position:'absolute', width:'280px', top:'3%',    left:'-2%',   opacity:0.45, zIndex:0, animation:'cloud-a 14s ease-in-out infinite' }} />
      <Cloud variant={3} style={{ position:'absolute', width:'210px', top:'10%',   right:'1%',   opacity:0.38, zIndex:0, animation:'cloud-b 18s ease-in-out infinite' }} />
      <Cloud variant={1} style={{ position:'absolute', width:'200px', top:'38%',   left:'5%',    opacity:0.28, zIndex:0, animation:'cloud-c 22s ease-in-out infinite' }} />
      <Cloud variant={4} style={{ position:'absolute', width:'260px', top:'50%',   right:'-1%',  opacity:0.26, zIndex:0, animation:'cloud-d 16s ease-in-out infinite' }} />
      <Cloud variant={1} style={{ position:'absolute', width:'190px', bottom:'18%',left:'-1%',   opacity:0.32, zIndex:0, animation:'cloud-e 20s ease-in-out infinite' }} />
      <Cloud variant={3} style={{ position:'absolute', width:'240px', bottom:'5%', right:'-2%',  opacity:0.30, zIndex:0, animation:'cloud-f 13s ease-in-out infinite' }} />


      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      <div className="container fw-wrap">

        {/* ── Header ── */}
        <div className="fw-header" data-aos="fade-up">
          <span className="section-label">Our Approach</span>
          <h2 className="fw-title">Our Project <em>Framework</em></h2>
          <p className="fw-subtitle">
            At Pages of Possibility, access to books and creative expression can transform lives.
            Our three-pillar approach creates a sustainable cycle of literacy, creativity, and opportunity.
          </p>
        </div>

        {/* ── 3 pillar cards ── */}
        <div className="fw-cards">
          {pillars.map((p, i) => (
            <div
              key={p.number}
              className="fw-card"
              style={{ '--accent': p.accent, '--pg': p.photoGrad }}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Photo area */}
              <div className="fw-photo">
                <div className="fw-photo-bg" />
                <div className="fw-photo-watermark">{p.number}</div>
                <div className="fw-photo-center">
                  <div className="fw-camera"><CameraIcon /></div>
                  <span className="fw-photo-label">{p.photoLabel}</span>
                  <span className="fw-photo-hint">Photo coming soon</span>
                </div>
                <div className="fw-photo-hover">
                  <CameraIcon />
                  <span>Add photo</span>
                </div>
              </div>

              {/* Content */}
              <div className="fw-card-body">
                <div className="fw-title-row">
                  <div className="fw-icon">{p.icon}</div>
                  <h3 className="fw-card-title">{p.title}</h3>
                </div>
                <p className="fw-card-desc">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Closing statement ── */}
        <div className="fw-footer" data-aos="fade-up">
          <div className="fw-footer-inner">
            <div className="fw-footer-mark" aria-hidden="true">"</div>
            <p>
              This three-pillar model allows Pages of Possibility to create long-term impact — not just
              providing books, but fostering a culture of literacy and self-expression that grows with
              every new initiative.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
