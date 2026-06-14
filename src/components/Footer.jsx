import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="footer-copy">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
