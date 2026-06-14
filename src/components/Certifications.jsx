import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { certifications } from '../data/portfolioData'
import { 
  FaBriefcase, 
  FaTrophy, 
  FaGraduationCap, 
  FaAward, 
  FaExternalLinkAlt, 
  FaEye 
} from 'react-icons/fa'

const categoryIcons = {
  internship: <FaBriefcase className="cert-badge-icon" style={{ color: '#00ACC1' }} />,
  hackathon: <FaTrophy className="cert-badge-icon" style={{ color: '#FF8C00' }} />,
  course: <FaGraduationCap className="cert-badge-icon" style={{ color: '#3949AB' }} />,
  other: <FaAward className="cert-badge-icon" style={{ color: '#43A047' }} />
}

const categoryBgs = {
  internship: 'rgba(0, 172, 193, 0.08)',
  hackathon: 'rgba(255, 140, 0, 0.08)',
  course: 'rgba(57, 73, 171, 0.08)',
  other: 'rgba(67, 160, 71, 0.08)'
}

export default function Certifications() {
  const [ref, isVisible] = useIntersectionObserver()
  const [activeTab, setActiveTab] = useState('all')

  const filteredCerts = certifications.filter(cert => {
    if (activeTab === 'all') return true
    if (activeTab === 'internship') return cert.category === 'internship'
    if (activeTab === 'hackathon') return cert.category === 'hackathon' || cert.category === 'other'
    if (activeTab === 'course') return cert.category === 'course'
    return true
  })

  return (
    <section id="certificates" ref={ref} className={`fade-up ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <span className="section-label">05 — Qualifications</span>
        <h2 className="section-title">Certifications</h2>

        {/* Filter Tabs */}
        <div className="certs-tabs">
          {[
            { id: 'all', label: 'All' },
            { id: 'internship', label: 'Internships' },
            { id: 'hackathon', label: 'Hackathons' },
            { id: 'course', label: 'Courses' }
          ].map(tab => (
            <button
              key={tab.id}
              className={`cert-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="certs-grid">
          {filteredCerts.map((cert, idx) => {
            const icon = categoryIcons[cert.category] || categoryIcons.other
            const bg = categoryBgs[cert.category] || categoryBgs.other
            const isExternal = cert.link.startsWith('http')

            return (
              <div className="cert-card glass-card" key={idx}>
                <div className="cert-header">
                  <div className="cert-badge-wrapper" style={{ backgroundColor: bg }}>
                    {icon}
                  </div>
                  <div className="cert-info">
                    <span className="cert-meta">{cert.year}</span>
                    <h3 className="cert-name">{cert.name}</h3>
                    <span className="cert-org">{cert.organization}</span>
                  </div>
                </div>
                
                <a 
                  href={cert.link} 
                  className="btn btn-secondary btn-small cert-action-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {isExternal ? (
                    <>
                      Verify Badge <FaExternalLinkAlt className="cert-btn-icon" />
                    </>
                  ) : (
                    <>
                      View Certificate <FaEye className="cert-btn-icon" />
                    </>
                  )}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
