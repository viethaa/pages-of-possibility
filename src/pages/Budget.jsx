import './Budget.css'

const phases = [
  {
    num: '3',
    phase: 'Phase 3',
    status: 'In Progress',
    accent: '#F5A820',
    location: 'Na Phac Church & National Children\'s Hospital',
    timeframe: 'Ongoing 2025',
    total: '15,000,000',
    items: [
      { label: 'Prizes for competition participants', amount: '10,000,000' },
      { label: 'Transportation costs',               amount: '2,000,000'  },
      { label: 'Promotional materials & logistics',  amount: '3,000,000'  },
    ],
  },
  {
    num: '4',
    phase: 'Phase 4',
    status: 'In Progress',
    accent: '#F5A820',
    location: 'Writing Competitions — Multiple Locations',
    timeframe: '2025',
    total: '55,000,000',
    items: [
      { label: 'Prizes for competition participants',      amount: '25,000,000' },
      { label: 'Transportation costs',                    amount: '2,000,000'  },
      { label: 'Promotional materials & hiring personnel',amount: '28,000,000' },
    ],
  },
  {
    num: '5',
    phase: 'Phase 5',
    status: 'Upcoming',
    accent: '#E85A50',
    location: 'Việt Trì County, Phú Thọ — Elementary Schools',
    timeframe: 'Aug–Oct 2025',
    total: '25,000,000',
    items: [
      { label: 'Books',                          amount: '10,000,000' },
      { label: 'Multimedia assets',              amount: '10,000,000' },
      { label: 'Transportation & logistics',     amount: '5,000,000'  },
    ],
  },
  {
    num: '6',
    phase: 'Phase 6',
    status: 'Upcoming',
    accent: '#2FB5D4',
    location: 'Additional Community Sites',
    timeframe: 'TBD',
    total: '45,000,000',
    items: [
      { label: 'Books',                      amount: '30,000,000' },
      { label: 'Multimedia assets',          amount: '10,000,000' },
      { label: 'Transportation & logistics', amount: '5,000,000'  },
    ],
  },
  {
    num: '7',
    phase: 'Phase 7',
    status: 'Upcoming',
    accent: '#5DC068',
    location: 'Việt Trì County — Writing Competition',
    timeframe: 'Aug–Oct 2025',
    total: '55,000,000',
    items: [
      { label: 'Prizes for competition participants', amount: '35,000,000' },
      { label: 'Transportation costs',               amount: '2,000,000'  },
      { label: 'Promotional materials & logistics',  amount: '18,000,000' },
    ],
  },
]

// Bar proportions (out of 212M total)
const breakdown = [
  { label: 'Phase 3', amount: 15,  accent: '#F5A820' },
  { label: 'Phase 4', amount: 55,  accent: '#F5A820' },
  { label: 'Phase 5', amount: 25,  accent: '#E85A50' },
  { label: 'Phase 6', amount: 45,  accent: '#2FB5D4' },
  { label: 'Phase 7', amount: 55,  accent: '#5DC068' },
]
const TOTAL = 212

const STATUS_META = {
  'In Progress': { symbol: '◉', bg: 'rgba(245,168,32,0.15)',  color: '#F5A820' },
  'Upcoming':    { symbol: '→', bg: 'rgba(232,90,80,0.12)',   color: '#E85A50' },
}

function PinIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

export default function Budget() {
  return (
    <section className="budget white-bg" id="budget">
      <div className="container bp-wrap">

        {/* ── Header ── */}
        <div className="bp-header" data-aos="fade-up">
          <span className="section-label">Action Plan</span>
          <h2 className="bp-title">Budget <em>Proposal</em></h2>
          <p className="bp-subtitle">
            Our phased approach ensures sustainable growth — each phase builds on the last,
            expanding our reach and deepening our impact across Vietnam.
          </p>
        </div>

        {/* ── Total budget hero ── */}
        <div className="bp-hero" data-aos="fade-up" data-aos-delay="60">
          <div className="bp-hero-left">
            <span className="bp-hero-eyebrow">Total Budget</span>
            <div className="bp-hero-amount">212,000,000 <span>VND</span></div>
            <p className="bp-hero-note">Across 5 active phases · 3+ locations · 2025</p>
          </div>
          <div className="bp-hero-stats">
            <div className="bp-hero-stat">
              <span className="bp-hs-n">70M</span>
              <span className="bp-hs-l">In Progress</span>
            </div>
            <div className="bp-hero-divider" />
            <div className="bp-hero-stat">
              <span className="bp-hs-n">125M</span>
              <span className="bp-hs-l">Upcoming</span>
            </div>
            <div className="bp-hero-divider" />
            <div className="bp-hero-stat">
              <span className="bp-hs-n">5</span>
              <span className="bp-hs-l">Phases</span>
            </div>
          </div>
          {/* Stacked bar */}
          <div className="bp-bar-track">
            {breakdown.map(b => (
              <div
                key={b.label}
                className="bp-bar-seg"
                style={{
                  width: `${(b.amount / TOTAL) * 100}%`,
                  background: b.accent,
                }}
                title={`${b.label}: ${b.amount}M VND`}
              />
            ))}
          </div>
          <div className="bp-bar-legend">
            {breakdown.map(b => (
              <span key={b.label} className="bp-legend-item">
                <span className="bp-legend-dot" style={{ background: b.accent }} />
                {b.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Phase cards ── */}
        <div className="bp-grid">
          {phases.map((p, i) => {
            const st = STATUS_META[p.status]
            return (
              <div
                key={p.phase}
                className="bp-card"
                style={{ '--accent': p.accent }}
                data-aos="fade-up"
                data-aos-delay={i * 70}
              >
                {/* Top stripe */}
                <div className="bp-card-stripe" />

                {/* Header row */}
                <div className="bp-card-head">
                  <div className="bp-phase-num">{p.num}</div>
                  <span
                    className="bp-status"
                    style={{ background: st.bg, color: st.color }}
                  >
                    {st.symbol} {p.status}
                  </span>
                </div>

                {/* Meta */}
                <div className="bp-card-meta">
                  <span className="bp-meta-row"><PinIcon />{p.location}</span>
                  <span className="bp-meta-row"><ClockIcon />{p.timeframe}</span>
                </div>

                <div className="bp-card-divider" />

                {/* Line items */}
                <ul className="bp-items">
                  {p.items.map(item => (
                    <li key={item.label} className="bp-item">
                      <span className="bp-item-label">{item.label}</span>
                      <span className="bp-item-amount">{item.amount} <em>VND</em></span>
                    </li>
                  ))}
                </ul>

                {/* Total footer */}
                <div className="bp-card-total">
                  <span className="bp-total-label">Phase Total</span>
                  <span className="bp-total-amount">{p.total} <em>VND</em></span>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Planning notes ── */}
        <div className="bp-notes" data-aos="fade-up">
          <div className="bp-note">
            <div className="bp-note-icon" style={{ '--ni': '#2FB5D4' }}>8–9</div>
            <div className="bp-note-body">
              <strong>Phases 8 &amp; 9 — E Hospital, Hanoi</strong>
              <p>Still in early planning — potentially including library donations and writing competitions. Budget and timeline to be confirmed.</p>
            </div>
          </div>
          <div className="bp-note">
            <div className="bp-note-icon" style={{ '--ni': '#5DC068' }}>✦</div>
            <div className="bp-note-body">
              <strong>Final Phase — Publishing Children's Works</strong>
              <p>Curating outstanding writing competition submissions toward a printed anthology. Currently in early planning — stay tuned.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
