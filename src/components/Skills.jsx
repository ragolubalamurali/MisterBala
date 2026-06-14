import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { skills } from '../data/portfolioData'
import {
  FaReact,
  FaJsSquare,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaCodeBranch
} from 'react-icons/fa'
import { DiDjango } from 'react-icons/di'
import {
  SiFlask,
  SiExpress,
  SiMongodb,
  SiMysql
} from 'react-icons/si'

const iconMap = {
  FaReact: <FaReact className="skill-icon" style={{ color: '#61DAFB' }} />,
  FaJsSquare: <FaJsSquare className="skill-icon" style={{ color: '#F7DF1E' }} />,
  FaPython: <FaPython className="skill-icon" style={{ color: '#3776AB' }} />,
  DiDjango: <DiDjango className="skill-icon" style={{ color: '#092E20', fontSize: '50px' }} />,
  SiFlask: <SiFlask className="skill-icon" style={{ color: '#00C4CC' }} />,
  FaNodeJs: <FaNodeJs className="skill-icon" style={{ color: '#339933' }} />,
  SiExpress: <SiExpress className="skill-icon" style={{ color: '#444444' }} />,
  SiMongodb: <SiMongodb className="skill-icon" style={{ color: '#47A248' }} />,
  SiMysql: <SiMysql className="skill-icon" style={{ color: '#4479A1' }} />,
  FaGitAlt: <FaGitAlt className="skill-icon" style={{ color: '#F05032' }} />,
  FaGithub: <FaGithub className="skill-icon" style={{ color: '#181717' }} />,
  FaHtml5: <FaHtml5 className="skill-icon" style={{ color: '#E34F26' }} />,
  FaCss3Alt: <FaCss3Alt className="skill-icon" style={{ color: '#1572B6' }} />,
  FaAws: <FaAws className="skill-icon" style={{ color: '#FF9900' }} />,
  FaCodeBranch: <FaCodeBranch className="skill-icon" style={{ color: '#4F46E5' }} />
}

export default function Skills() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="skills" ref={ref} className={`fade-up ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <span className="section-label">02 — Expertise</span>
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card glass-card" key={skill.name}>
              {iconMap[skill.iconName] || <FaReact className="skill-icon" />}
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
