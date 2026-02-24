import './Contact.css'

const ways = [
  {
    icon: '📚',
    title: 'Library & Multimedia Contributions',
    description: 'Funding for books, Chromebooks, and online learning tools to enhance our library initiatives.',
    color: 'var(--coral)',
    bg: '#FFF0EF',
  },
  {
    icon: '✍️',
    title: 'Writing Competition Support',
    description: 'Assistance with prizes, materials, and publishing efforts to encourage creativity and self-expression.',
    color: 'var(--yellow)',
    bg: '#FFFBEF',
  },
  {
    icon: '🚐',
    title: 'Expansion & Logistics Assistance',
    description: 'Support for transportation, book procurement, and event organization to bring our programs to more communities.',
    color: 'var(--green)',
    bg: '#F0FBF1',
  },
]

export default function Support() {
  return (
    <section className="support white-bg" id="support">
      <div className="container">
        <div className="support-header">
          <span className="section-label">Get Involved</span>
          <h2>Support Us!</h2>
          <p>
            Supporting Pages of Possibility means investing in sustainable educational resources and creative
            opportunities for children in underserved communities. Whether through financial contributions,
            in-kind donations, or strategic partnerships, every contribution strengthens our ability to make
            a lasting impact.
          </p>
        </div>

        <div className="support-ways">
          {ways.map(w => (
            <div key={w.title} className="support-way" style={{ background: w.bg }}>
              <div className="way-icon" style={{ fontSize: '2rem' }}>{w.icon}</div>
              <h3 style={{ color: w.color }}>{w.title}</h3>
              <p>{w.description}</p>
            </div>
          ))}
        </div>

        <div className="support-donate">
          <div className="donate-monetary">
            <h3>💳 Monetary Donations</h3>
            <p>Transfer to the account below. <strong>Please include "POP" in transfer notes.</strong></p>
            <div className="bank-info">
              <div className="bank-row"><span>Bank</span><strong>Nam A Bank (Napas 247)</strong></div>
              <div className="bank-row"><span>Account No.</span><strong>80118398540001</strong></div>
              <div className="bank-row"><span>Account Name</span><strong>CONG TY TNHH LCMS HOLDINGS VIET NAM</strong></div>
            </div>
          </div>

          <div className="donate-material">
            <h3>📦 Material Donations</h3>
            <p>Please deliver to the following address and call ahead before delivery.</p>
            <div className="contact-details">
              <div className="contact-row">
                <span>📍</span>
                <span>Vimeco CT4 Tú Mỡ, Phường Trung Hoà, Cầu Giấy, Hanoi</span>
              </div>
              <div className="contact-row">
                <span>📞</span>
                <span>+84 906 095 995</span>
              </div>
            </div>
          </div>
        </div>

        <div className="support-contact">
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <div>
              <div className="contact-label">Email</div>
              <a href="mailto:pagesofpossibilityhanoi@gmail.com" className="contact-value">
                pagesofpossibilityhanoi@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-divider" />
          <div className="contact-item">
            <span className="contact-icon">📸</span>
            <div>
              <div className="contact-label">Instagram</div>
              <span className="contact-value">@pages_of_possibility.hn</span>
            </div>
          </div>
        </div>

        <p className="support-note">
          Donors to our project, unless they wish to donate anonymously, will be acknowledged by name
          and will receive updates on our progress. <strong>Thank you for considering contributing to Pages of Possibility.</strong>
        </p>
      </div>
    </section>
  )
}
