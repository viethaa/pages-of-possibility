import Cloud from '../components/Cloud'
import './Team.css'

const leaders = [
  {
    name: 'Nguyen Vu Ha Anh',
    nickname: 'Panda',
    role: 'President & Founder',
    color: 'var(--coral)',
    bg: '#FFF0EF',
    description:
      'Oversees the vision and direction of the project, coordinates with partners, and ensures every initiative aligns with our mission. Founded the project as an 11th-grade student at Concordia International School Hanoi.',
  },
  {
    name: 'Nguyen Chau Anh',
    nickname: null,
    role: 'Head of Marketing',
    color: 'var(--cyan)',
    bg: '#EDF9FE',
    description:
      'Leads promotional efforts, builds community awareness, and connects our work to a wider audience.',
  },
  {
    name: 'Dang Vy Le',
    nickname: null,
    role: 'Head of Operations',
    color: 'var(--green)',
    bg: '#F0FBF1',
    description:
      'Manages logistics, timelines, and resources, ensuring our events and donations run smoothly.',
  },
  {
    name: 'Jeny Park',
    nickname: null,
    role: 'Head of Design',
    color: 'var(--yellow)',
    bg: '#FFFBEF',
    description:
      'Creates visual materials that capture our story and inspire participation.',
  },
]

export default function Team() {
  return (
    <section className="team sky-bg" id="team">
      <Cloud variant={2} style={{ position:'absolute', width:'220px', top:'8%', right:'3%', opacity:0.8 }} />
      <Cloud variant={3} style={{ position:'absolute', width:'180px', bottom:'12%', left:'1%', opacity:0.7 }} />

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
        <div className="team-header">
          <span className="section-label">The People Behind POP</span>
          <h2>Our Leadership Team</h2>
          <p>
            Rooted in the community of Concordia International School Hanoi, our team brings together
            students who combine creativity, strategy, and organization to drive our mission forward.
          </p>
        </div>

        <div className="team-grid">
          {leaders.map(member => (
            <div key={member.name} className="member-card" style={{ background: member.bg }}>
              <div className="member-avatar" style={{ background: member.color }}>
                {member.name.charAt(0)}
              </div>
              <div className="member-role" style={{ color: member.color }}>{member.role}</div>
              <h3 className="member-name">{member.name}</h3>
              {member.nickname && <span className="member-nick">"{member.nickname}"</span>}
              <p className="member-desc">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="team-volunteers">
          <div className="volunteers-inner">
            <span className="volunteers-icon">🌟</span>
            <div>
              <h3>20+ Dedicated Volunteers</h3>
              <p>
                Beyond our core team, we are supported by over 20 dedicated volunteers from schools across
                Hanoi, whose collective passion and commitment make every page of our project possible.
              </p>
            </div>
          </div>
        </div>

        <div className="team-advisor">
          <h3>Under the Supervision of</h3>
          <p className="advisor-school">Concordia International School Hanoi (CISH)</p>
          <div className="advisors-row">
            <div className="advisor"><strong>Ms. Monica Nguyen</strong><span>Project Advisor</span></div>
            <div className="advisor"><strong>Mr. Nguyen Ngoc Anh</strong><span>Project Advisor</span></div>
            <div className="advisor"><strong>Mr. Viet Huynh</strong><span>Project Consultant</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
