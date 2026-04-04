import './Team.css'

const members = [
  {
    name: 'Nguyen Vu Ha Anh',
    watermark: 'Ha Anh',
    role: 'President & Founder',
    accent: '#E85A50',
    photoGrad: 'linear-gradient(160deg, #3d1818 0%, #1B3070 100%)',
    description:
      'Oversees the vision and direction of the project, coordinates with partners, and ensures every initiative aligns with our mission. Founded the project in 11th grade at CISH.',
  },
  {
    name: 'Nguyen Chau Anh',
    watermark: 'Chau Anh',
    role: 'Head of Marketing',
    accent: '#2FB5D4',
    photoGrad: 'linear-gradient(160deg, #082d3d 0%, #0D1E4E 100%)',
    description:
      'Leads promotional efforts, builds community awareness, and connects our work to a wider audience through creative campaigns and strategic outreach.',
  },
  {
    name: 'Dang Vy Le',
    watermark: 'Le',
    role: 'Head of Operations',
    accent: '#5DC068',
    photoGrad: 'linear-gradient(160deg, #0b2010 0%, #0D2A1A 100%)',
    description:
      'Manages logistics, timelines, and resources — ensuring every event and book donation runs smoothly from planning through execution.',
  },
  {
    name: 'Jeny Park',
    watermark: 'Jeny',
    role: 'Head of Design',
    accent: '#F5A820',
    photoGrad: 'linear-gradient(160deg, #2d1c00 0%, #1B3070 100%)',
    description:
      'Creates visual materials that capture our story and inspire participation, bringing warmth and creativity to every piece of POP\u2019s identity.',
  },
]

/* Camera icon SVG */
function CameraIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  )
}

export default function Team() {
  return (
    <section className="team white-bg" id="team">

      {/* Wave bottom — draws sky color into the white section for a seamless blend */}
      <div className="wave-bottom tm-wave-bottom">
        <svg viewBox="0 0 1440 130" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,60 C180,110 360,20 540,65 C720,110 900,15 1080,60 C1260,105 1380,40 1440,70 L1440,130 L0,130 Z" fill="#c5eafc" />
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

        {/* ══ 4 member cards — all visible ══ */}
        <div className="tm-cards-track">
          <div className="tm-cards">
            {members.map((m, i) => (
              <div
                key={m.name}
                className="tm-card"
                style={{ '--accent': m.accent, '--pg': m.photoGrad }}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                {/* Photo area */}
                <div className="tm-photo">
                  <div className="tm-photo-bg" />
                  {/* Ghost name watermark */}
                  <div className="tm-photo-watermark">{m.watermark}</div>
                  {/* Placeholder content */}
                  <div className="tm-photo-placeholder">
                    <div className="tm-camera"><CameraIcon /></div>
                    <span className="tm-photo-hint">Photo coming soon</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="tm-photo-add">
                    <CameraIcon />
                    <span>Add photo</span>
                  </div>
                  {/* Role pill — top center of photo */}
                  <div className="tm-role-pill">{m.role}</div>
                </div>

                {/* Info */}
                <div className="tm-card-body">
                  <h3 className="tm-card-name">{m.name}</h3>
                  <p className="tm-card-desc">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ Group photo ══ */}
        <div className="tm-group" data-aos="fade-up">
          <div className="tm-group-orb tm-go-1" />
          <div className="tm-group-orb tm-go-2" />
          <div className="tm-group-orb tm-go-3" />
          <div className="tm-group-content">
            <div className="tm-group-camera">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
            <div>
              <div className="tm-group-title">The Whole Team</div>
              <div className="tm-group-sub">Group photo coming soon — watch this space</div>
            </div>
          </div>
          {/* Dot grid decoration */}
          <div className="tm-group-dots" aria-hidden="true">
            {Array.from({ length: 40 }).map((_, i) => <span key={i} />)}
          </div>
        </div>

        {/* ══ Volunteers ══ */}
        <div className="tm-vol" data-aos="fade-up">
          <div className="tm-vol-orb tm-vo-1" />
          <div className="tm-vol-orb tm-vo-2" />
          <div className="tm-vol-stat">
            <span className="tm-vol-n">20+</span>
            <span className="tm-vol-u">Volunteers</span>
          </div>
          <div className="tm-vol-sep" />
          <div className="tm-vol-body">
            <h3>Dedicated Volunteer Network</h3>
            <p>
              Beyond our core team, over 20 passionate volunteers from schools across Hanoi
              bring their time and energy to make every page of our project possible.
            </p>
          </div>
        </div>


      </div>
    </section>
  )
}
