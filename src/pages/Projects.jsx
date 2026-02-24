import Cloud from '../components/Cloud'
import './Projects.css'

const steps = [
  {
    number: '01',
    color: 'var(--coral)',
    bg: '#FFF0EF',
    icon: '📚',
    title: 'Providing Libraries & Multimedia Resources',
    description:
      'We begin by establishing reading spaces in hospitals, orphanages, and underserved communities. This includes donating books, computers, and access to online reading and learning tools, ensuring that children have both physical and digital resources to explore the world of literature. By incorporating multimedia assets, we bridge the gap between traditional learning and modern educational opportunities.',
  },
  {
    number: '02',
    color: 'var(--yellow)',
    bg: '#FFFBEF',
    icon: '✍️',
    title: 'Hosting Writing Competitions',
    description:
      'We believe that every child has a story to tell. Our writing competitions encourage children to express their thoughts, dreams, and creativity through storytelling, poetry, and personal essays. These competitions not only nurture a love for writing but also build confidence, helping young voices take their first steps toward being heard. Each competition is designed to be inclusive and accessible.',
  },
  {
    number: '03',
    color: 'var(--green)',
    bg: '#F0FBF1',
    icon: '📖',
    title: 'Collecting & Publishing Submissions',
    description:
      'A child\'s voice deserves to be amplified. We carefully curate outstanding submissions from our writing competitions and work toward publishing selected works — whether through printed collections, digital platforms, or public showcases. By sharing their words with a wider audience, we empower children to see the value in their creativity and inspire others to dream big.',
  },
]

export default function Framework() {
  return (
    <section className="framework sky-bg" id="framework">
      <Cloud width={180} color="white" style={{ top: '5%', left: '-1%', opacity: 0.8 }} />
      <Cloud width={120} color="white" style={{ bottom: '10%', right: '2%', opacity: 0.75 }} />

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

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="framework-header">
          <span className="section-label">Our Approach</span>
          <h2>Our Project Framework</h2>
          <p>
            At Pages of Possibility, we believe that access to books and creative expression can transform
            lives. Our approach goes beyond simply donating materials — we aim to create a sustainable cycle
            of literacy, creativity, and opportunity.
          </p>
        </div>

        <div className="framework-steps">
          {steps.map(step => (
            <div key={step.number} className="step-card" style={{ background: step.bg }}>
              <div className="step-header">
                <span className="step-number" style={{ color: step.color }}>{step.number}</span>
                <span className="step-icon">{step.icon}</span>
              </div>
              <h3 style={{ color: step.color }}>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className="framework-footer">
          <p>
            This three-step model allows Pages of Possibility to create a long-term impact — not just providing books,
            but fostering a culture of literacy and self-expression that continues to grow with each new initiative.
          </p>
        </div>
      </div>
    </section>
  )
}
