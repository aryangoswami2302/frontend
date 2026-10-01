import { useState, useCallback } from 'react'
import { Html } from '@react-three/drei'

export function EnterStoryUI({ onEnter, visible = true }) {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleClick = useCallback(
    (e) => {
      e?.stopPropagation()
      if (clicked) return
      setClicked(true)
      onEnter?.()
    },
    [clicked, onEnter],
  )

  if (!visible) return null

  return (
    <Html
      position={[0, 1.85, 2.4]}
      center
      distanceFactor={10}
      zIndexRange={[100, 0]}
      className="enter-story-container"
    >
      <button
        type="button"
        onClick={handleClick}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        className={`enter-story-badge ${hovered ? 'is-hovered' : ''} ${clicked ? 'is-clicked' : ''}`}
        aria-label="Enter Our Story"
      >
        <div className="enter-story-badge__gold-glow" />
        <div className="enter-story-badge__border">
          <span className="corner-tl" />
          <span className="corner-tr" />
          <span className="corner-bl" />
          <span className="corner-br" />
        </div>

        <svg
          className="enter-story-badge__mandala"
          viewBox="0 0 32 32"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="16" cy="16" r="14" strokeWidth="0.8" opacity="0.6" />
          <circle cx="16" cy="16" r="8" strokeWidth="0.8" opacity="0.8" />
          <path d="M16 2v28M2 16h28M6.1 6.1l19.8 19.8M6.1 25.9L25.9 6.1" strokeWidth="0.6" opacity="0.45" />
          <circle cx="16" cy="16" r="2.5" fill="currentColor" />
        </svg>

        <span className="enter-story-badge__text">ENTER OUR STORY</span>

        <span className="enter-story-badge__prompt">TOUCH TO BEGIN</span>
      </button>
    </Html>
  )
}
