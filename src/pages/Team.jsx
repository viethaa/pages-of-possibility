import Cloud from '../components/Cloud'
import './Team.css'

const leaders = [
  {
    name: 'Nguyen Vu Ha Anh',
    nickname: 'Panda',
    role: 'President & Founder',
    color: 'var(--coral)',
    bg: 'var(--coral-light)',
    border: '#F5C0BC',
    initial: 'A',
    description:
      'Oversees the vision and direction of the project, coordinates with partners, and ensures every initiative aligns with our mission. Founded the project as an 11th-grade student at Concordia International School Hanoi.',
  },
  {
    name: 'Nguyen Chau Anh',
    nickname: null,
    role: 'Head of Marketing',
    color: 'var(--cyan)',
    bg: 'var(--cyan-light)',
    border: '#B0E4F5',
    initial: 'A',
    description:
      'Leads promotional efforts, builds community awareness, and connects our work to a wider audience.',
  },
  {
    name: 'Dang Vy Le',
    nickname: null,
    role: 'Head of Operations',
    color: 'var(--green)',
    bg: 'var(--green-light)',
    border: '#B5E5B9',
    initial: 'L',
    description:
      'Manages logistics, timelines, and resources, ensuring our events and donations run smoothly.',
  },
  {
    name: 'Jeny Park',
    nickname: null,
    role: 'Head of Design',
    color: 'var(--yellow)',
    bg: 'var(--yellow-light)',
    border: '#F5DFA0',
    initial: 'J',
    description:
      'Creates visual materials that capture our story and inspire participation.',
  },
]

const advisors = [
  { name: 'Ms. Monica Nguyen', role: 'Project Advisor' },
  { name: 'Mr. Nguyen Ngoc Anh', role: 'Project Advisor' },
  { name: 'Mr. Viet Huynh', role: 'Project Consultant' },
]

const sponsors = [
  'Thiên Minh Group', 'Mrs. Trần Thị Dung', 'Mr. Nguyễn Tuấn Anh',
  'Mrs. Bùi Thanh Kim Huệ and TJ', 'Mme. Tô Thị Diền', 'Mr. Phạm Kiên',
  'Mrs. Phạm Nhài', 'Peter and Friends', 'Mr. Nguyễn Ngọc Anh',
  'Mrs. Phạm Thu Hiền Linh', 'Mr. Ngô Khánh', 'Wardrobe Warriors', 'Thai Moms',
]

export default function Team() {
  return (
    <section className="team sky-bg" id="team">
      <Cloud variant={2} style={{ position:'absolute', width:'220px', top:'8%', right:'3%', opacity:0.6 }} />
      <Cloud variant={3} style={{ position:'absolute', width:'180px', bottom:'12%', left:'1%', opacity:0.5 }} />

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

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        <div className="team-header" data-aos="fade-up">
          <span className="section-label">The People Behind POP</span>
          <h2>Our Leadership Team</h2>
          <p>
            Rooted in the community of Concordia International School Hanoi, our team brings together
            students who combine creativity, strategy, and organization to drive our mission forward.
          </p>
        </div>

        <div className="team-grid">
          {leaders.map((member, i) => (
            <div
              key={member.name}
              className="member-card"
              style={{ '--m-color': member.color, '--m-bg': member.bg, '--m-border': member.border }}
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="member-avatar-wrap">
                <div className="member-avatar">{member.initial}</div>
                {member.nickname && (
                  <span className="member-nick">"{member.nickname}"</span>
                )}
              </div>
              <div className="member-role">{member.role}</div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-desc">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Volunteers banner */}
        <div className="team-volunteers" data-aos="fade-up">
          <div className="volunteers-inner">
            <div className="volunteers-stat">
              <span className="vol-number">20+</span>
              <span className="vol-unit">Volunteers</span>
            </div>
            <div className="volunteers-divider" />
            <div className="volunteers-text">
              <h3>Dedicated Volunteer Network</h3>
              <p>
                Beyond our core team, we are supported by over 20 dedicated volunteers from schools across
                Hanoi, whose collective passion and commitment make every page of our project possible.
              </p>
            </div>
          </div>
        </div>

        {/* Advisors */}
        <div className="team-advisor" data-aos="fade-up">
          <div className="advisor-label">Under the Supervision of</div>
          <p className="advisor-school">Concordia International School Hanoi (CISH)</p>
          <div className="advisors-row">
            {advisors.map(a => (
              <div key={a.name} className="advisor-card">
                <div className="advisor-avatar">{a.name.charAt(a.name.lastIndexOf(' ') + 1)}</div>
                <strong>{a.name}</strong>
                <span>{a.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsors */}
        <div className="team-sponsors" data-aos="fade-up">
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
            Our Sponsors &amp; Supporters
          </div>
          <div className="sponsors-wrap">
            {sponsors.map(s => (
              <span key={s} className="sponsor-pill">{s}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
