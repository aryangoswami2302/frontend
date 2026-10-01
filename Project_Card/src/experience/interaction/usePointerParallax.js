import { useEffect, useRef } from 'react'
import { pointerParallax } from '../../config/experience'

export function usePointerParallax() {
  const parallax = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onPointerMove = (event) => {
      const x = event.clientX / window.innerWidth
      const y = event.clientY / window.innerHeight
      target.current.x = (x - 0.5) * 2
      target.current.y = (y - 0.5) * -2
    }

    const onTouchMove = (event) => {
      const touch = event.touches[0]
      if (!touch) return
      const x = touch.clientX / window.innerWidth
      const y = touch.clientY / window.innerHeight
      target.current.x = (x - 0.5) * 2
      target.current.y = (y - 0.5) * -2
    }

    let raf = 0
    const tick = () => {
      parallax.current.x += (target.current.x - parallax.current.x) * pointerParallax.lerp
      parallax.current.y += (target.current.y - parallax.current.y) * pointerParallax.lerp
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  return parallax
}
