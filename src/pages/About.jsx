import Cloud from '../components/Cloud'
import './About.css'

export default function About() {
  return (
    <section className="about sky-bg" id="about">
      <Cloud width={200} color="white" style={{ top: '5%', right: '-2%', opacity: 0.8 }} />
      <Cloud width={140} color="white" style={{ bottom: '8%', left: '2%', opacity: 0.7 }} />

      <div className="wave-top">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      <div className="container about-inner">
        <div className="about-block">
          <span className="section-label">Background</span>
          <h2>How & Why We Started</h2>
          <p>
            Pages of Possibility was founded on the belief that every child, regardless of their circumstances,
            deserves access to books and educational resources. The project began in response to the lack of
            reading materials available to children in hospitals, orphanages, and underserved communities.
          </p>
          <p>
            Recognizing that books can open doors to imagination, knowledge, and opportunity, we set out to
            provide not just reading materials but also interactive ways for children to engage with literature.
            Over time, the project has grown to include writing competitions, reading corners, and plans for
            multimedia libraries to ensure long-term access to learning.
          </p>
        </div>

        <div className="about-divider" />

        <div className="about-block">
          <span className="section-label">Mission &amp; Vision</span>
          <h2>What Drives Us</h2>
          <div className="mission-box">
            <h3>Our Mission</h3>
            <p>
              To empower children through books, creativity, and education, providing them with the resources
              and opportunities to dream bigger.
            </p>
          </div>
          <div className="vision-box">
            <h3>Our Vision</h3>
            <p>
              A future where every child has access to a well-rounded education — both through traditional books
              and digital learning tools — regardless of their socioeconomic background. By fostering a culture
              of reading and self-expression, we hope to inspire young minds and give them the tools they need
              to build their futures.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
