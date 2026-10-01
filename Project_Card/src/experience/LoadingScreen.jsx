import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function LoadingScreen({ visible }) {
  const overlayRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const overlay = overlayRef.current
    const line = lineRef.current
    if (!overlay || !line) return undefined

    const pulse = gsap.to(line, {
      scaleX: 1,
      duration: 1.6,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
    })

    if (!visible) {
      pulse.kill()
      gsap.to(overlay, {
        opacity: 0,
        duration: 1.1,
        ease: 'power2.inOut',
        pointerEvents: 'none',
        onComplete: () => {
          overlay.style.visibility = 'hidden'
        },
      })
    }

    return () => {
      pulse.kill()
    }
  }, [visible])

  return (
    <div ref={overlayRef} className="loading-screen" aria-hidden={!visible}>
      <p className="loading-screen__word">The Wedding World</p>
      <span ref={lineRef} className="loading-screen__line" />
    </div>
  )
}
