import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { projects } from '../data/portfolioData'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="projects" ref={ref} className={`fade-up ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <span className="section-label">03 — Works</span>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              className="project-card glass-card"
              key={project.id}
            >
              <div className="project-info">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FaGithub style={{ fontSize: '16px' }} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="project-link-btn project-link-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} Live Demo`}
                  >
                    <FaExternalLinkAlt style={{ fontSize: '13px' }} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
