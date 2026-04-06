import { useState } from 'react'
import './Budget.css'

const TRIPS = [
  {
    num: '01',
    title: 'Na Phac Trip 1',
    date: '08 Dec 2024',
    location: 'Na Phac Church, Bac Kan, Viet Nam',
    books: 450,
    members: 10,
    photoLabel: 'Trip 1 Photos',
    photoHref: '#',
    accent: '#E85A50',
  },
  {
    num: '02',
    title: 'Collaboration with Creation of Hearts',
    date: '16 Feb 2025',
    location: 'Endocrinology Center, National Children\u2019s Hospital, Hanoi',
    books: 250,
    members: 15,
    photoLabel: 'Trip 2 Photos',
    photoHref: '#',
    accent: '#2FB5D4',
  },
  {
    num: '03',
    title: 'National Children\u2019s Hospital, Part 1',
    date: '15 Mar 2025',
    location: 'MRI Center, National Children\u2019s Hospital, Hanoi',
    books: 450,
    members: 22,
    photoLabel: 'MRI Center Photos',
    photoHref: '#',
    accent: '#5DC068',
  },
  {
    num: '04',
    title: 'National Children\u2019s Hospital, Part 2',
    date: '16 Mar 2025',
    location: 'Emergency Medicine & Poison Control Dept., National Children\u2019s Hospital, Hanoi',
    books: 450,
    members: 22,
    photoLabel: 'Emergency Medicine Photos',
    photoHref: '#',
    accent: '#F5A820',
  },
  {
    num: '05',
    title: 'National Children\u2019s Hospital, Part 3',
    date: '16 Mar 2025',
    location: 'Cardiology & Etorhinolaryngology Dept., National Children\u2019s Hospital, Hanoi',
    books: 450,
    members: 22,
    photoLabel: 'Cardiology Photos',
    photoHref: '#',
    accent: '#E85A50',
  },
]

function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function BookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  )
}

function PeopleIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

export default function Timeline() {
  const [active, setActive] = useState(0)
  const t = TRIPS[active]
  const fillPct = (active / (TRIPS.length - 1)) * 100

  return (
    <section className="tl-section sky-bg" id="timeline">

      <div className="wave-bottom tl-wave-bottom">
        <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,45 C240,90 480,0 720,45 C960,90 1200,10 1440,45 L1440,90 L0,90 Z" fill="white" />
        </svg>
      </div>

      <div className="container tl-wrap">

        {/* Header */}
        <div className="tl-header" data-aos="fade-up">
          <span className="section-label">Our Journey</span>
          <h2 className="tl-title">Trips &amp; <em>Milestones</em></h2>
          <p className="tl-subtitle">
            Click each stop to explore every trip we've made across Vietnam.
          </p>
        </div>

        {/* Journey rail */}
        <div className="tl-rail" data-aos="fade-up" data-aos-delay="80">
          {/* Track */}
          <div className="tl-rail-track" aria-hidden="true">
            <div className="tl-rail-fill" style={{ width: `${fillPct}%`, background: t.accent }} />
          </div>

          {TRIPS.map((trip, i) => (
            <button
              key={trip.num}
              className={`tl-stop${i === active ? ' tl-stop--active' : ''}${i < active ? ' tl-stop--past' : ''}`}
              style={{ '--accent': i === active ? trip.accent : 'var(--navy)' }}
              onClick={() => setActive(i)}
              aria-label={`Trip ${trip.num}: ${trip.title}`}
            >
              <span className="tl-stop-dot">{trip.num}</span>
              <span className="tl-stop-date">{trip.date}</span>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div key={active} className="tl-detail" style={{ '--accent': t.accent }}>

          {/* Left */}
          <div className="tl-detail-left">
            <span className="tl-detail-bg-num" aria-hidden="true">{t.num}</span>
            <div className="tl-detail-content">
              <div className="tl-detail-eyebrow">
                <span className="tl-detail-trip-label">Trip {t.num}</span>
                <span className="tl-detail-date-pill">{t.date}</span>
              </div>
              <h3 className="tl-detail-title">{t.title}</h3>
            </div>
          </div>

          {/* Right */}
          <div className="tl-detail-right">
            <div className="tl-info-list">
              <div className="tl-info-row">
                <span className="tl-info-icon"><PinIcon /></span>
                <div>
                  <span className="tl-info-label">Location</span>
                  <span className="tl-info-val">{t.location}</span>
                </div>
              </div>
              <div className="tl-info-row">
                <span className="tl-info-icon"><BookIcon /></span>
                <div>
                  <span className="tl-info-label">Books Donated</span>
                  <span className="tl-info-val">{t.books.toLocaleString()} books</span>
                </div>
              </div>
              <div className="tl-info-row">
                <span className="tl-info-icon"><PeopleIcon /></span>
                <div>
                  <span className="tl-info-label">Members Participated</span>
                  <span className="tl-info-val">{t.members} members</span>
                </div>
              </div>
            </div>

            <div className="tl-detail-foot">
              <a href={t.photoHref} className="tl-cta">
                {t.photoLabel} <ArrowIcon />
              </a>
              <div className="tl-nav">
                <button
                  className="tl-nav-btn"
                  onClick={() => setActive(i => Math.max(0, i - 1))}
                  disabled={active === 0}
                  aria-label="Previous trip"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>
                <span className="tl-nav-count">{active + 1} / {TRIPS.length}</span>
                <button
                  className="tl-nav-btn"
                  onClick={() => setActive(i => Math.min(TRIPS.length - 1, i + 1))}
                  disabled={active === TRIPS.length - 1}
                  aria-label="Next trip"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
