import Cloud from '../components/Cloud'
import './Budget.css'

const phases = [
  {
    num: '3',
    status: 'Completed',
    accent: '#5DC068',
    location: 'Na Phac Church & National Children\'s Hospital',
    timeframe: 'Completed 2025',
    total: '15,000,000',
    items: [
      { label: 'Prizes for competition participants', amount: '10,000,000' },
      { label: 'Transportation costs',               amount: '2,000,000'  },
      { label: 'Promotional materials & logistics',  amount: '3,000,000'  },
    ],
  },
  {
    num: '4',
    status: 'Completed',
    accent: '#5DC068',
    location: 'Writing Competitions — Multiple Locations',
    timeframe: 'Completed 2025',
    total: '55,000,000',
    items: [
      { label: 'Prizes for competition participants',       amount: '25,000,000' },
      { label: 'Transportation costs',                     amount: '2,000,000'  },
      { label: 'Promotional materials & hiring personnel', amount: '28,000,000' },
    ],
  },
  {
    num: '5',
    status: 'In Progress',
    accent: '#F5A820',
    location: 'Việt Trì County, Phú Thọ — Elementary Schools',
    timeframe: 'Aug–Oct 2025',
    total: '25,000,000',
    items: [
      { label: 'Books',                      amount: '10,000,000' },
      { label: 'Multimedia assets',          amount: '10,000,000' },
      { label: 'Transportation & logistics', amount: '5,000,000'  },
    ],
  },
  {
    num: '6',
    status: 'TBD',
    accent: '#E85A50',
    location: 'Additional Community Sites',
    timeframe: 'To Be Determined',
    total: '45,000,000',
    items: [
      { label: 'Books',                      amount: '30,000,000' },
      { label: 'Multimedia assets',          amount: '10,000,000' },
      { label: 'Transportation & logistics', amount: '5,000,000'  },
    ],
  },
  {
    num: '7',
    status: 'TBD',
    accent: '#E85A50',
    location: 'Việt Trì County — Writing Competition',
    timeframe: 'To Be Determined',
    total: '55,000,000',
    items: [
      { label: 'Prizes for competition participants', amount: '35,000,000' },
      { label: 'Transportation costs',               amount: '2,000,000'  },
      { label: 'Promotional materials & logistics',  amount: '18,000,000' },
    ],
  },
]

const breakdown = [
  { label: 'Phase 3', amount: 15, color: '#5DC068' },
  { label: 'Phase 4', amount: 55, color: '#5DC068' },
  { label: 'Phase 5', amount: 25, color: '#F5A820' },
  { label: 'Phase 6', amount: 45, color: '#E85A50' },
  { label: 'Phase 7', amount: 55, color: '#c0392b' },
]
const TOTAL = 212

const STATUS_STYLE = {
  'Completed':   { bg: 'rgba(93,192,104,0.13)', color: '#5DC068' },
  'In Progress': { bg: 'rgba(245,168,32,0.13)', color: '#F5A820' },
  'TBD':         { bg: 'rgba(232,90,80,0.12)',  color: '#E85A50' },
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
    <section className="budget sky-bg" id="budget">

      <Cloud variant={1} style={{ position:'absolute', width:'270px', top:'3%',    left:'-2%',   opacity:0.44, zIndex:0, animation:'cloud-b 17s ease-in-out infinite' }} />
      <Cloud variant={4} style={{ position:'absolute', width:'300px', top:'8%',    right:'-1%',  opacity:0.36, zIndex:0, animation:'cloud-a 21s ease-in-out infinite' }} />
      <Cloud variant={3} style={{ position:'absolute', width:'200px', top:'35%',   right:'3%',   opacity:0.28, zIndex:0, animation:'cloud-c 15s ease-in-out infinite' }} />
      <Cloud variant={2} style={{ position:'absolute', width:'220px', top:'42%',   left:'1%',    opacity:0.26, zIndex:0, animation:'cloud-f 19s ease-in-out infinite' }} />
      <Cloud variant={1} style={{ position:'absolute', width:'250px', bottom:'16%',left:'-1%',   opacity:0.32, zIndex:0, animation:'cloud-d 24s ease-in-out infinite' }} />
      <Cloud variant={3} style={{ position:'absolute', width:'190px', bottom:'10%',right:'2%',   opacity:0.28, zIndex:0, animation:'cloud-e 13s ease-in-out infinite' }} />
      <Cloud variant={4} style={{ position:'absolute', width:'280px', bottom:'3%', left:'20%',   opacity:0.22, zIndex:0, animation:'cloud-a 26s ease-in-out infinite' }} />

      {/* Wave bottom — sky → white for Support section */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

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

        {/* ── Hero dashboard (old layout) ── */}
        <div className="bp-hero" data-aos="fade-up" data-aos-delay="60">

          <div className="bp-hero-top">
            <div className="bp-hero-left">
              <span className="bp-hero-eyebrow">Total Budget</span>
              <div className="bp-hero-amount">212,000,000 <span>VND</span></div>
            </div>
            <div className="bp-hero-stats">
              <div className="bp-hero-stat">
                <span className="bp-hs-n">95M</span>
                <span className="bp-hs-l">Completed</span>
              </div>
              <div className="bp-hero-divider" />
              <div className="bp-hero-stat">
                <span className="bp-hs-n">117M</span>
                <span className="bp-hs-l">Upcoming</span>
              </div>
            </div>
          </div>

          {/* Stacked bar */}
          <div className="bp-bar-track">
            {breakdown.map(b => (
              <div
                key={b.label}
                className="bp-bar-seg"
                style={{ width: `${(b.amount / TOTAL) * 100}%`, background: b.color }}
                data-tooltip={`${b.label} · ${b.amount}M VND`}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="bp-bar-legend">
            {breakdown.map(b => (
              <span key={b.label} className="bp-legend-item">
                <span className="bp-legend-dot" style={{ background: b.color }} />
                {b.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Phase timeline ── */}
        <div className="bp-phases">
          {phases.map((p, i) => {
            const st = STATUS_STYLE[p.status]
            return (
              <div
                key={p.num}
                className="bp-row"
                style={{ '--accent': p.accent }}
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div className="bp-row-left">
                  <div className="bp-row-num">{p.num}</div>
                  <span className="bp-row-status" style={{ background: st.bg, color: st.color }}>
                    {p.status}
                  </span>
                </div>

                <div className="bp-row-line" />

                <div className="bp-row-card">
                  <div className="bp-row-card-top">
                    <div className="bp-row-meta">
                      <span className="bp-row-loc"><PinIcon />{p.location}</span>
                      <span className="bp-row-time"><ClockIcon />{p.timeframe}</span>
                    </div>
                    <div className="bp-row-total-pill">
                      <span className="bp-rtp-n">{p.total}</span>
                      <span className="bp-rtp-u">VND</span>
                    </div>
                  </div>
                  <div className="bp-row-items">
                    {p.items.map(item => (
                      <div key={item.label} className="bp-row-item">
                        <span className="bp-ri-dot" />
                        <span className="bp-ri-label">{item.label}</span>
                        <span className="bp-ri-amount">{item.amount} <em>VND</em></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
