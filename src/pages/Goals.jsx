import './Goals.css'

const values = [
  {
    icon: '📚',
    title: 'Education',
    color: 'var(--coral)',
    bg: 'var(--coral-light)',
    border: '#F5C0BC',
    description:
      'Pages of Possibility embodies the belief that education is the foundation of opportunity, growth, and empowerment. Access to books and learning resources opens doors to new worlds, helping children develop critical thinking, creativity, and resilience. By providing educational materials to under-resourced communities, we aim to inspire a lifelong love of learning and give every child the chance to reach their full potential.',
  },
  {
    icon: '🤝',
    title: 'Community',
    color: 'var(--cyan)',
    bg: 'var(--cyan-light)',
    border: '#B0E4F5',
    description:
      'Pages of Possibility values the power of sharing within a community. Our libraries are designed to be spaces where learning, stories, and ideas can be freely exchanged. By building these spaces, we aim to foster a culture where knowledge can be shared and literature can be the catalyst for meaningful discussions.',
  },
  {
    icon: '🌟',
    title: 'Hope',
    color: 'var(--green)',
    bg: 'var(--green-light)',
    border: '#B5E5B9',
    description:
      'Pages of Possibility is built on hope — the hope that every child, regardless of their circumstances, can have access to knowledge, inspiration, and opportunity. Each book we provide is a seed of hope, a reminder that there is a world of potential waiting for them. By investing in these communities, we strive to empower children and families to envision a brighter future.',
  },
]

export default function Values() {
  return (
    <section className="values white-bg" id="values">
      <div className="container">

        <div className="values-header" data-aos="fade-up">
          <span className="section-label">Our Values</span>
          <h2>Values to Drive Us Forward</h2>
          <p>Three core principles guide everything we do — from choosing where to donate to how we engage with communities.</p>
        </div>

        <div className="values-grid">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="value-card"
              style={{ '--v-color': v.color, '--v-bg': v.bg, '--v-border': v.border }}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="value-icon-ring">
                <span className="value-icon">{v.icon}</span>
              </div>
              <h3 className="value-title">{v.title}</h3>
              <div className="value-divider" />
              <p className="value-desc">{v.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
