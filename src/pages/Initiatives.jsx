import './Initiatives.css'

const timeline = [
  {
    year: '2024',
    color: 'var(--yellow)',
    events: [
      {
        date: 'December 8, 2024',
        location: 'Na Phac Church, Bac Kan',
        tag: 'Completed',
        tagColor: 'var(--green)',
        title: 'Library Established at Na Phac Church',
        description:
          'Pages of Possibility visited Na Phac Church, bringing not just books but a full day of engagement with the local community. We donated 400 books, establishing a library for children in the area. Together with the children, we decorated the library, introduced favorite books, read stories aloud, and played music — turning literature into an interactive experience.',
        highlight: '400 books donated',
      },
    ],
  },
  {
    year: '2025',
    color: 'var(--cyan)',
    events: [
      {
        date: 'February 23, 2025',
        location: 'National Children\'s Hospital — Endocrinology Dept.',
        tag: 'Completed',
        tagColor: 'var(--green)',
        title: 'First Hospital Library',
        description:
          'Our first visit to the National Children\'s Hospital focused on the Endocrinology Department, where we donated 250 books, creating a small but meaningful library for children undergoing care.',
        highlight: '250 books donated',
      },
      {
        date: 'March 15, 2025',
        location: 'National Children\'s Hospital — 3 More Departments',
        tag: 'Completed',
        tagColor: 'var(--green)',
        title: 'Expanded to Three More Departments',
        description:
          'We expanded our reach by visiting Cardiology & Otorhinolaryngology, Emergency Medicine & Poison Control, and the MRI Center — donating 450 books to each, ensuring that more children across different medical conditions had access to reading materials.',
        highlight: '1,500+ books total',
      },
      {
        date: 'In Progress',
        location: 'Na Phac Church & National Children\'s Hospital',
        tag: 'In Progress',
        tagColor: 'var(--yellow)',
        title: 'Writing Competitions',
        description:
          'We are hosting writing competitions with themes like "Moments of Tet" at Na Phac Church, and organizing a writing competition at the National Children\'s Hospital to give patients a creative outlet — ensuring that they, too, have a chance to tell their stories.',
        highlight: null,
      },
      {
        date: 'Upcoming — Aug/Sep 2025',
        location: 'Viet Tri County, Phu Tho',
        tag: 'Upcoming',
        tagColor: 'var(--coral)',
        title: 'Expanding to Elementary Schools',
        description:
          'Setting up libraries at 2–3 elementary schools in Viet Tri County, with at least 600 books per library. As the project continues to grow, we aim to expand our impact to additional orphanages, schools, and community centers.',
        highlight: '600+ books per library',
      },
    ],
  },
]

export default function Impact() {
  return (
    <section className="impact white-bg" id="impact">
      <div className="container">
        <div className="impact-header">
          <span className="section-label">Our Story</span>
          <h2>Our Progress &amp; Impact</h2>
          <p>
            From a single library at Na Phac Church to over 1,500 books across the National Children's
            Hospital, every page of our journey reflects real change in children's lives.
          </p>
        </div>

        <div className="timeline">
          {timeline.map(group => (
            <div key={group.year} className="timeline-group">
              <div className="timeline-year" style={{ background: group.color }}>
                {group.year}
              </div>
              <div className="timeline-events">
                {group.events.map(event => (
                  <div key={event.title} className="timeline-card">
                    <div className="timeline-card-top">
                      <div className="timeline-meta">
                        <span className="event-date">📅 {event.date}</span>
                        <span className="event-location">📍 {event.location}</span>
                      </div>
                      <span className="event-tag" style={{ color: event.tagColor, borderColor: event.tagColor }}>
                        {event.tag}
                      </span>
                    </div>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    {event.highlight && (
                      <div className="event-highlight">
                        ✦ {event.highlight}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <blockquote className="impact-quote">
          "Our model — building libraries, organizing writing competitions, and publishing children's
          works — is designed to create a lasting impact, not just through one-time donations but by
          fostering sustainable access to books and creative opportunities."
        </blockquote>
      </div>
    </section>
  )
}
