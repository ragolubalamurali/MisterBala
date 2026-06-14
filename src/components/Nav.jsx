import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Home', target: '#home' },
  { label: 'About', target: '#about' },
  { label: 'Skills', target: '#skills' },
  { label: 'Projects', target: '#projects' },
  { label: 'Experience', target: '#experience' },
  { label: 'Certificates', target: '#certificates' },
  { label: 'Achievements', target: '#achievements' },
  { label: 'Contact', target: '#contact' },
]

// Hand-Drawn Smile Icon Component matching the user's sketch
function SmileIcon({ className, size = 32 }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', overflow: 'visible' }}
    >
      {/* Left eye brush stroke */}
      <path
        className="smile-stroke path-eye-left"
        d="M38 28 Q40 35 38.5 42"
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      {/* Right eye brush stroke */}
      <path
        className="smile-stroke path-eye-right"
        d="M58 27 Q60 34 58.5 41"
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      {/* Smile main thick brush stroke */}
      <path
        className="smile-stroke path-mouth-main"
        d="M28 54 Q48 72 68 49"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* Smile brush bristles / secondary lines on the right */}
      <path
        className="smile-stroke path-mouth-bristle-1"
        d="M30 55 Q48 71.5 71 47"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        className="smile-stroke path-mouth-bristle-2"
        d="M32 57 Q48 71 73 51"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        className="smile-stroke path-mouth-bristle-3"
        d="M29 54.5 Q48 72.5 66 52"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Active link highlight based on scroll position
      const sections = navItems.map(item => document.querySelector(item.target))
      const scrollPos = window.scrollY + 100

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i]
        if (section) {
          const top = section.offsetTop
          const height = section.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(navItems[i].target)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, target) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(target)
    if (element) {
      const offset = 80 // Height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setActiveSection(target)
    }
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#home" className="logo" onClick={(e) => handleLinkClick(e, '#home')} style={{ display: 'flex', alignItems: 'center' }}>
            <SmileIcon size={42} />
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.target}
                  className={activeSection === item.target ? 'active' : ''}
                  onClick={(e) => handleLinkClick(e, item.target)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu Toggle Button */}
          <button
            className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay Menu */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.target}
                onClick={(e) => handleLinkClick(e, item.target)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
