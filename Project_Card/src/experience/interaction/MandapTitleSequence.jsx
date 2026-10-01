import { useState, useEffect } from 'react'
import { Html } from '@react-three/drei'

export function MandapTitleSequence({ onStepChange }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    // Timed movie title sequence steps (in milliseconds)
    const t1 = window.setTimeout(() => {
      setStep(1)
      onStepChange?.(1)
    }, 2200) // Hemal

    const t2 = window.setTimeout(() => {
      setStep(2)
      onStepChange?.(2)
    }, 4400) // &

    const t3 = window.setTimeout(() => {
      setStep(3)
      onStepChange?.(3)
    }, 6600) // Aayushi

    const t4 = window.setTimeout(() => {
      setStep(4)
      onStepChange?.(4)
    }, 9000) // OUR WEDDING & 25 DECEMBER 2026

    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.clearTimeout(t3)
      window.clearTimeout(t4)
    }
  }, [onStepChange])

  return (
    <Html
      position={[0, 2.0, 1.0]}
      center
      distanceFactor={8.5}
      zIndexRange={[100, 0]}
      className="mandap-title-container"
    >
      <div className={`mandap-title-sequence step-${step}`}>
        {/* Step 1: Hemal Reveal */}
        <div className={`title-name title-hemal ${step >= 1 ? 'is-visible' : ''}`}>
          <span className="title-text">HEMAL</span>
        </div>

        {/* Step 2: Ampersand Reveal */}
        <div className={`title-ampersand ${step >= 2 ? 'is-visible' : ''}`}>
          <svg className="ampersand-ring" viewBox="0 0 40 40" width="36" height="36">
            <circle cx="20" cy="20" r="18" stroke="rgba(200, 169, 107, 0.4)" strokeWidth="1" fill="none" />
          </svg>
          <span className="ampersand-symbol">&amp;</span>
        </div>

        {/* Step 3: Aayushi Reveal */}
        <div className={`title-name title-aayushi ${step >= 3 ? 'is-visible' : ''}`}>
          <span className="title-text">AAYUSHI</span>
        </div>

        {/* Step 4: Event Title & Date Reveal */}
        <div className={`title-footer ${step >= 4 ? 'is-visible' : ''}`}>
          <div className="title-footer__line-wrapper">
            <span className="footer-line" />
            <span className="footer-diamond">◆</span>
            <span className="footer-line" />
          </div>
          <h2 className="title-footer__event">OUR WEDDING</h2>
          <div className="title-footer__date">25 DECEMBER 2026</div>
        </div>
      </div>
    </Html>
  )
}
