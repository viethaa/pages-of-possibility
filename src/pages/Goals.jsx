import './Goals.css'

const values = [
  {
    emoji: '📚',
    title: 'Education',
    color: 'var(--coral)',
    bg: '#FFF0EF',
    border: '#F5C0BC',
    description:
      'Pages of Possibility embodies the belief that education is the foundation of opportunity, growth, and empowerment. Access to books and learning resources opens doors to new worlds, helping children develop critical thinking, creativity, and resilience. By providing educational materials to under-resourced communities, we aim to inspire a lifelong love of learning and give every child the chance to reach their full potential.',
  },
  {
    emoji: '🤝',
    title: 'Community',
    color: 'var(--cyan)',
    bg: '#EDF9FE',
    border: '#B0E4F5',
    description:
      'Pages of Possibility values the power of sharing within a community. Our libraries are designed to be spaces where learning, stories, and ideas can be freely exchanged. By building these spaces, we aim to foster a culture where knowledge can be shared and literature can be the catalyst for these discussions.',
  },
  {
    emoji: '🌟',
    title: 'Hope',
    color: 'var(--green)',
    bg: '#F0FBF1',
    border: '#B5E5B9',
    description:
      'Pages of Possibility is built on hope — the hope that every child, regardless of their circumstances, can have access to knowledge, inspiration, and opportunity. Each book we provide is a seed of hope, a reminder that there is a world of potential waiting for them. By investing in these communities, we strive to bring hope to children and families, empowering them to envision and build a brighter future.',
  },
]

export default function Values() {
  return (
    <section className="values white-bg" id="values">
      <div className="container">
        <div className="values-header">
          <span className="section-label">Our Values</span>
          <h2>Values to Drive Us Forward</h2>
        </div>
        <div className="values-grid">
          {values.map(v => (
            <div
              key={v.title}
              className="value-card"
              style={{ background: v.bg, borderColor: v.border }}
            >
              <div className="value-icon" style={{ background: v.border }}>
                <span>{v.emoji}</span>
              </div>
              <h3 style={{ color: v.color }}>{v.title}</h3>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
