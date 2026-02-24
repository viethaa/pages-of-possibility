import './Overview.css'

const stats = [
  { number: '1,500+', label: 'Books donated to\nNational Children\'s Hospital', color: 'var(--coral)' },
  { number: '400+', label: 'Books donated to\nNa Phac Church', color: 'var(--yellow)' },
  { number: '20+', label: 'Dedicated volunteers\nfrom schools across Hanoi', color: 'var(--green)' },
  { number: '3+', label: 'Locations reached\nacross Vietnam', color: 'var(--cyan)' },
]

export default function Overview() {
  return (
    <section className="overview white-bg" id="overview">
      <div className="container">
        <div className="overview-header">
          <span className="section-label">An Overview</span>
          <h2>What is Pages of Possibility?</h2>
          <p>
            Every child deserves the chance to dream, learn, and grow through books. Yet, many children in
            Vietnam — especially those in orphanages and underserved communities — lack access to quality
            reading materials. <strong>Pages of Possibility was founded to change that.</strong>
          </p>
          <p>
            Since its inception, our project has provided over 1,500 books to the National Children's Hospital,
            offering young patients a source of comfort, education, and imagination during their hospital stay.
            We have also donated books to Na Phac Church and other community spaces, hosting writing
            competitions and creating reading corners where children can explore literature freely.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map(stat => (
            <div key={stat.number} className="stat-card">
              <span className="stat-number" style={{ color: stat.color }}>{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
