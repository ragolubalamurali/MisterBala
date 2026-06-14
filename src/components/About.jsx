import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { education } from '../data/portfolioData'

export default function About() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="about" ref={ref} className={`fade-up ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <span className="section-label">01 — About</span>
        <h2 className="section-title">About Me</h2>

        <div className="about-card glass-card">
          <div className="about-summary">
            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Professional Summary</h3>
            <p>
              I am a dedicated Computer Science student and Full Stack Developer with a strong passion for building structured, high-performance web systems. My engineering journey is driven by curiosity, transitioning from simple scripting projects to complex software architecture.
            </p>
            <p>
              I focus on backend robustness, efficient ML model integration, and smooth front-end user experiences. My goal is to write clean, maintainable code that solves real-world operational challenges.
            </p>
          </div>

          <div className="education-block">
            <h3 className="education-title">Education</h3>
            {education.map((edu, idx) => (
              <div className="edu-item" key={idx}>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-institution">{edu.institution}</div>
                <div className="edu-meta">{edu.duration}</div>
                <div className="edu-details text-secondary">{edu.details}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
