import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { personalInfo } from '../data/portfolioData'
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function Hero() {
  const [ref, isVisible] = useIntersectionObserver()

  const handleScrollToProjects = (e) => {
    e.preventDefault()
    const element = document.querySelector('#projects')
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" ref={ref} className={`fade-up ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-left">
            <span className="hero-greeting">Hi, I'm</span>
            <h1 className="hero-name">{personalInfo.name}</h1>
            <p className="hero-role">{personalInfo.subtitle}</p>
            <p className="hero-subtitle">{personalInfo.description}</p>
            
            <div className="hero-cta">
              <a 
                href={personalInfo.resumeUrl} 
                className="btn btn-primary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Resume
              </a>
              <a 
                href="#projects" 
                className="btn btn-secondary"
                onClick={handleScrollToProjects}
              >
                View Projects
              </a>
            </div>

            <div className="hero-socials">
              <a 
                href={personalInfo.github} 
                className="hero-social-icon" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href={personalInfo.linkedin} 
                className="hero-social-icon" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href={personalInfo.whatsapp} 
                className="hero-social-icon" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href={personalInfo.instagram} 
                className="hero-social-icon" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="photo-frame">
              <img 
                src="/profile.jpg" 
                alt={personalInfo.name} 
                className="photo-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
