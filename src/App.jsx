import { Suspense, lazy, useState, useCallback } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Experience = lazy(() => import('./components/Experience'))
const Certifications = lazy(() => import('./components/Certifications'))
const Achievements = lazy(() => import('./components/Achievements'))
const Contact = lazy(() => import('./components/Contact'))

function SectionFallback() {
  return (
    <div style={{
      minHeight: '20vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Space Mono, monospace',
      fontSize: '11px',
      color: '#999'
    }} />
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const handleLoadFinished = useCallback(() => setLoaded(true), [])

  return (
    <>
      {!loaded && <LoadingScreen onFinished={handleLoadFinished} />}

      <div className={loaded ? 'site-content site-content--visible' : 'site-content'}>
        <Nav />
        {/* paddingTop matches navbar height (90px default, 76px scrolled) */}
        <main style={{ paddingTop: '90px' }}>
          <Hero />

          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Skills />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Experience />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Certifications />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Achievements />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  )
}
