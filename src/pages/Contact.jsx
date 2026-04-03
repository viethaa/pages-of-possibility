import './Contact.css'

const ways = [
  {
    icon: '📚',
    title: 'Library & Multimedia Contributions',
    description: 'Funding for books, Chromebooks, and online learning tools to enhance our library initiatives.',
    color: 'var(--coral)',
    bg: 'var(--coral-light)',
    border: '#F5C0BC',
  },
  {
    icon: '✍️',
    title: 'Writing Competition Support',
    description: 'Assistance with prizes, materials, and publishing efforts to encourage creativity and self-expression.',
    color: 'var(--yellow)',
    bg: 'var(--yellow-light)',
    border: '#F5DFA0',
  },
  {
    icon: '🚐',
    title: 'Expansion & Logistics Assistance',
    description: 'Support for transportation, book procurement, and event organization to bring our programs to more communities.',
    color: 'var(--green)',
    bg: 'var(--green-light)',
    border: '#B5E5B9',
  },
]

export default function Support() {
  return (
    <section className="support white-bg" id="support">
      <div className="container">

        <div className="support-header" data-aos="fade-up">
          <span className="section-label">Get Involved</span>
          <h2>Support Us!</h2>
          <p>
            Supporting Pages of Possibility means investing in sustainable educational resources and creative
            opportunities for children in underserved communities. Whether through financial contributions,
            in-kind donations, or strategic partnerships, every contribution strengthens our ability to make
            a lasting impact.
          </p>
        </div>

        {/* Ways to support */}
        <div className="support-ways">
          {ways.map((w, i) => (
            <div
              key={w.title}
              className="support-way"
              style={{ '--w-color': w.color, '--w-bg': w.bg, '--w-border': w.border }}
              data-aos="fade-up"
              data-aos-delay={i * 90}
            >
              <div className="way-icon-ring">
                <span>{w.icon}</span>
              </div>
              <h3>{w.title}</h3>
              <p>{w.description}</p>
            </div>
          ))}
        </div>

        {/* Donation info */}
        <div className="support-donate" data-aos="fade-up">

          <div className="donate-card donate-monetary">
            <div className="donate-card-head">
              <div className="donate-icon">💳</div>
              <h3>Monetary Donations</h3>
            </div>
            <p className="donate-note">
              Transfer to the account below.<br />
              <strong>Please include "POP" in transfer notes!</strong>
            </p>
            <div className="bank-info">
              <div className="bank-row">
                <span>Bank</span>
                <strong>Nam A Bank (Napas 247)</strong>
              </div>
              <div className="bank-row">
                <span>Account No.</span>
                <strong>80118398540001</strong>
              </div>
              <div className="bank-row">
                <span>Account Name</span>
                <strong>CONG TY TNHH LCMS HOLDINGS VIET NAM</strong>
              </div>
            </div>
          </div>

          <div className="donate-card donate-material">
            <div className="donate-card-head">
              <div className="donate-icon">📦</div>
              <h3>Material Donations</h3>
            </div>
            <p className="donate-note">Please call ahead before delivery.</p>
            <div className="contact-details">
              <div className="contact-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Vimeco CT4 Tú Mỡ, Phường Trung Hoà, Cầu Giấy, Hanoi</span>
              </div>
              <div className="contact-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.49 2 2 0 0 1 3.6 1.29h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.53 16z"/></svg>
                <span>+84 906 095 995</span>
              </div>
            </div>
          </div>

        </div>

        {/* Contact channels */}
        <div className="support-channels" data-aos="fade-up" data-aos-delay="100">
          <a href="mailto:pagesofpossibilityhanoi@gmail.com" className="channel-item">
            <div className="channel-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <div className="channel-label">Email us</div>
              <div className="channel-value">pagesofpossibilityhanoi@gmail.com</div>
            </div>
          </a>

          <div className="channels-divider" />

          <div className="channel-item">
            <div className="channel-icon channel-icon--insta">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </div>
            <div>
              <div className="channel-label">Follow our journey</div>
              <div className="channel-value">@pages_of_possibility.hn</div>
            </div>
          </div>
        </div>

        <p className="support-note" data-aos="fade-up">
          Donors to our project, unless they wish to donate anonymously, will be acknowledged by name
          and will receive updates on our progress. <strong>Thank you for considering contributing to Pages of Possibility.</strong>
        </p>

      </div>
    </section>
  )
}
