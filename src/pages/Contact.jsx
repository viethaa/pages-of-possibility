import './Contact.css'

export default function Support() {
  return (
    <section className="support white-bg" id="support" style={{ position: 'relative' }}>
      <div className="wave-bottom sp-wave-bottom">
        <svg viewBox="0 0 1440 110" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,55 C240,10 480,100 720,55 C960,10 1200,90 1440,55 L1440,110 L0,110 Z" fill="#c5eafc" />
        </svg>
      </div>

      <div className="container sp-wrap">

        {/* ── Header ── */}
        <div className="sp-header" data-aos="fade-up">
          <span className="section-label">Get Involved</span>
          <h2 className="sp-title">Support <em>Our Mission</em></h2>
          <p className="sp-subtitle">
            Every contribution, big or small, puts a book in a child's hands.
          </p>
        </div>

        {/* ── Main ── */}
        <div className="sp-main" data-aos="fade-up" data-aos-delay="60">

          {/* Left: QR */}
          <div className="sp-qr-col">
            <img
              src="https://hearts2hands.s3.ap-southeast-2.amazonaws.com/pop/qr-code.png"
              alt="Donation QR Code"
              className="sp-qr-img"
            />
            <span className="sp-qr-label">Scan to donate</span>
          </div>

          {/* Right: plain text info */}
          <div className="sp-info">

            {/* Bank transfer */}
            <div className="sp-section">
              <span className="sp-section-eyebrow">Bank Transfer</span>
              <div className="sp-acct-num">80118398540001</div>
              <div className="sp-fields">
                <div className="sp-field">
                  <span className="sp-field-label">Bank</span>
                  <span className="sp-field-val">Nam A Bank · Napas 247</span>
                </div>
                <div className="sp-field">
                  <span className="sp-field-label">Account Name</span>
                  <span className="sp-field-val">LCMS Holdings Việt Nam</span>
                </div>
              </div>
              <p className="sp-transfer-note">
                Include <strong>"POP"</strong> in your transfer note
              </p>
            </div>

            <div className="sp-rule" />

            {/* Material donations */}
            <div className="sp-section">
              <span className="sp-section-eyebrow">Material Donations</span>
              <p className="sp-material-note">Please call ahead before dropping anything off.</p>
              <div className="sp-fields">
                <div className="sp-field">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span className="sp-field-val">Vimeco CT4 Tú Mỡ, Phường Trung Hoà, Cầu Giấy, Hanoi</span>
                </div>
                <div className="sp-field">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.49 2 2 0 0 1 3.6 1.29h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.53 16z"/>
                  </svg>
                  <span className="sp-field-val">+84 906 095 995</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Acknowledgement ── */}
        <p className="sp-ack" data-aos="fade-up">
          Donors will be acknowledged by name and receive progress updates —
          unless they prefer to remain anonymous.{' '}
          <strong>Thank you for believing in Pages of Possibility.</strong>
        </p>

      </div>
    </section>
  )
}
