import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { personalInfo } from '../data/portfolioData'
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa'

export default function Contact() {
  const [ref, isVisible] = useIntersectionObserver()

  const contacts = [
    {
      name: 'Email',
      icon: <FaEnvelope className="contact-icon" style={{ color: '#D44638' }} />,
      url: `mailto:${personalInfo.email}`
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn className="contact-icon" style={{ color: '#0077B5' }} />,
      url: personalInfo.linkedin
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="contact-icon" style={{ color: '#25D366' }} />,
      url: personalInfo.whatsapp
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="contact-icon" style={{ color: '#E4405F' }} />,
      url: personalInfo.instagram
    }
  ]

  return (
    <section id="contact" ref={ref} className={`fade-up ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <div className="contact-wrapper">
          <span className="section-label">07 — Contact</span>
          <h2 className="contact-title">Let&rsquo;s Build Something Great Together</h2>
          <p className="contact-desc">
            Whether you want to discuss a software engineering opportunity, review some code, or just say hello — feel free to reach out.
          </p>

          <div className="contact-icons-row">
            {contacts.map((c) => (
              <a
                href={c.url}
                className="contact-icon-btn"
                key={c.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.name}
              >
                <div className="contact-icon-wrapper">
                  {c.icon}
                </div>
                <span className="contact-icon-label">{c.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
