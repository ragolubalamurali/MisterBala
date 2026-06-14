import { useEffect, useState } from 'react'

// Hand-Drawn Smile Icon Component matching the user's sketch
function SmileIcon({ className, size = 120 }) {
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

export default function LoadingScreen({ onFinished }) {
  const [phase, setPhase] = useState('enter') // 'enter' | 'hold' | 'exit'

  useEffect(() => {
    // Phase 1: logo animates in (600ms)
    const holdTimer = setTimeout(() => setPhase('hold'), 600)
    // Phase 2: hold briefly (800ms)
    const exitTimer = setTimeout(() => setPhase('exit'), 1400)
    // Phase 3: fade out complete, notify parent (400ms transition)
    const doneTimer = setTimeout(() => onFinished(), 1800)

    return () => {
      clearTimeout(holdTimer)
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [onFinished])

  return (
    <div className={`loading-screen loading-${phase}`} aria-hidden="true">
      <div className="loading-logo-wrap">
        <SmileIcon className="loading-smile" />
        <div className="loading-bar-track">
          <div className="loading-bar-fill" />
        </div>
      </div>
      {/* Ambient blobs */}
      <div className="loading-blob loading-blob-1" />
      <div className="loading-blob loading-blob-2" />
    </div>
  )
}
