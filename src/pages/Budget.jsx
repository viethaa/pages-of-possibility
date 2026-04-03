import './Budget.css'

const phases = [
  {
    phase: 'Phase 3',
    status: 'In Progress',
    statusColor: 'var(--yellow)',
    location: 'Na Phac Church & National Children\'s Hospital',
    timeframe: 'Ongoing 2025',
    total: '15,000,000 VND',
    color: 'var(--yellow)',
    bg: 'var(--yellow-light)',
    items: [
      { label: 'Prizes for competition participants', amount: '10,000,000 VND' },
      { label: 'Transportation costs', amount: '2,000,000 VND' },
      { label: 'Promotional materials & logistics', amount: '3,000,000 VND' },
    ],
  },
  {
    phase: 'Phase 4',
    status: 'In Progress',
    statusColor: 'var(--yellow)',
    location: 'Writing Competitions — Multiple Locations',
    timeframe: '2025',
    total: '55,000,000 VND',
    color: 'var(--coral)',
    bg: 'var(--coral-light)',
    items: [
      { label: 'Prizes for competition participants', amount: '25,000,000 VND' },
      { label: 'Transportation costs', amount: '2,000,000 VND' },
      { label: 'Promotional materials, hiring personnel', amount: '28,000,000 VND' },
    ],
  },
  {
    phase: 'Phase 5',
    status: 'Upcoming',
    statusColor: 'var(--coral)',
    location: 'Viet Tri County, Phu Tho — Elementary Schools',
    timeframe: 'Aug–Oct 2025',
    total: '25,000,000 VND',
    color: 'var(--green)',
    bg: 'var(--green-light)',
    items: [
      { label: 'Books', amount: '10,000,000 VND' },
      { label: 'Multimedia assets', amount: '10,000,000 VND' },
      { label: 'Transportation & logistics', amount: '5,000,000 VND' },
    ],
  },
  {
    phase: 'Phase 6',
    status: 'Upcoming',
    statusColor: 'var(--coral)',
    location: 'Additional Community Sites',
    timeframe: 'TBD',
    total: '45,000,000 VND',
    color: 'var(--cyan)',
    bg: 'var(--cyan-light)',
    items: [
      { label: 'Books', amount: '30,000,000 VND' },
      { label: 'Multimedia assets', amount: '10,000,000 VND' },
      { label: 'Transportation & logistics', amount: '5,000,000 VND' },
    ],
  },
  {
    phase: 'Phase 7',
    status: 'Upcoming',
    statusColor: 'var(--coral)',
    location: 'Viet Tri County, Phu Tho — Writing Competition',
    timeframe: 'Aug–Oct 2025',
    total: '55,000,000 VND',
    color: 'var(--yellow)',
    bg: 'var(--yellow-light)',
    items: [
      { label: 'Prizes for competition participants', amount: '35,000,000 VND' },
      { label: 'Transportation costs', amount: '2,000,000 VND' },
      { label: 'Promotional materials & logistics', amount: '18,000,000 VND' },
    ],
  },
]

const budgetSummary = [
  { label: 'Phases 3 & 4 (In Progress)', amount: '95,000,000 VND', color: 'var(--yellow)' },
  { label: 'Phases 5–7 (Upcoming)', amount: '117,000,000 VND', color: 'var(--coral)' },
  { label: 'Total Budget Overall', amount: '212,000,000 VND', color: 'var(--navy)', isTotal: true },
]

export default function Budget() {
  return (
    <section className="budget surface-bg" id="budget">
      <div className="container">

        <div className="budget-header" data-aos="fade-up">
          <span className="section-label">Action Plan</span>
          <h2>Action Plan &amp; Budget Proposal</h2>
          <p>
            Our phased approach ensures sustainable growth — each phase builds on the last,
            expanding our reach and deepening our impact across Vietnam.
          </p>
        </div>

        {/* Also upcoming phases 8/9 note */}
        <div className="budget-note" data-aos="fade-up" data-aos-delay="50">
          <div className="note-icon">🗓️</div>
          <div>
            <strong>Phases 8 &amp; 9 — E Hospital, Hanoi</strong>
            <p>These phases are still in early planning, potentially including library donations and writing competitions. Details to be confirmed.</p>
          </div>
        </div>

        <div className="phases-grid">
          {phases.map((p, i) => (
            <div
              key={p.phase}
              className="phase-card"
              style={{ '--p-color': p.color, '--p-bg': p.bg }}
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="phase-card-head">
                <div className="phase-badge">{p.phase}</div>
                <span className="tag" style={{ color: p.statusColor, borderColor: p.statusColor }}>
                  {p.status}
                </span>
              </div>

              <div className="phase-location">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {p.location}
              </div>
              <div className="phase-timeframe">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {p.timeframe}
              </div>

              <div className="phase-divider" />

              <ul className="phase-items">
                {p.items.map(item => (
                  <li key={item.label} className="phase-item">
                    <span className="phase-item-label">{item.label}</span>
                    <span className="phase-item-amount">{item.amount}</span>
                  </li>
                ))}
              </ul>

              <div className="phase-total">
                <span>Total</span>
                <span className="phase-total-amount">{p.total}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="budget-summary" data-aos="fade-up">
          <h3>Budget Summary</h3>
          {budgetSummary.map(row => (
            <div key={row.label} className={`summary-row ${row.isTotal ? 'summary-row--total' : ''}`}>
              <span className="summary-label">{row.label}</span>
              <span className="summary-amount" style={{ color: row.color }}>{row.amount}</span>
            </div>
          ))}
        </div>

        <div className="final-phase-note" data-aos="fade-up" data-aos-delay="100">
          <div className="fpn-icon">📝</div>
          <div>
            <strong>Final Phase — Publishing Children's Works</strong>
            <p>
              Curating outstanding writing competition submissions and working toward publishing a
              collection of selected works. Currently in early planning stages — stay tuned for updates!
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
