import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { experience } from '../data/portfolioData'

export default function Experience() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="experience" ref={ref} className={`fade-up ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <span className="section-label">04 — Journey</span>
        <h2 className="section-title">Work Experience</h2>

        <div className="timeline">
          {experience.map((exp, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot"></div>
              <span className="timeline-meta">{exp.duration}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <div className="timeline-company">{exp.company}</div>
              <ul className="timeline-desc">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
