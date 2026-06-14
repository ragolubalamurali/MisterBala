import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { achievements } from '../data/portfolioData'
import { FaTrophy, FaMedal, FaGraduationCap } from 'react-icons/fa'

const achIconMap = [
  {
    icon: <FaTrophy className="ach-icon" style={{ color: '#FFB300' }} />,
    bg: 'rgba(255, 179, 0, 0.08)'
  },
  {
    icon: <FaMedal className="ach-icon" style={{ color: '#E53935' }} />,
    bg: 'rgba(229, 57, 53, 0.08)'
  },
  {
    icon: <FaGraduationCap className="ach-icon" style={{ color: '#1E88E5' }} />,
    bg: 'rgba(30, 136, 229, 0.08)'
  }
]

export default function Achievements() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="achievements" ref={ref} className={`fade-up ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <span className="section-label">06 — Recognition</span>
        <h2 className="section-title">Key Achievements</h2>

        <div className="achievements-grid">
          {achievements.map((ach, idx) => {
            const styleInfo = achIconMap[idx % achIconMap.length]
            return (
              <div className="achievement-card glass-card" key={idx}>
                <div className="ach-header">
                  <div className="ach-icon-wrapper" style={{ backgroundColor: styleInfo.bg }}>
                    {styleInfo.icon}
                  </div>
                  <span className="achievement-org">{ach.organization}</span>
                </div>
                <h3 className="achievement-title">{ach.title}</h3>
                <p className="achievement-desc">{ach.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
