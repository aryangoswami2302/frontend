import { useCallback } from 'react'
import { Html } from '@react-three/drei'
import { useExperience } from '../ExperienceContext'
import { SCENE_IDS } from '../../config/experience'
import { SubtleParticles } from '../effects/SubtleParticles'
import { palette } from '../../config/theme'

export function SceneEventDetails() {
  const { setSceneId } = useExperience()

  const handleNextVenue = useCallback(() => {
    setSceneId(SCENE_IDS.VENUE)
  }, [setSceneId])

  const events = [
    { title: 'MEHNDI', date: '23 DECEMBER 2026', time: '04:00 PM ONWARDS' },
    { title: 'HALDI', date: '24 DECEMBER 2026', time: '10:00 AM ONWARDS' },
    { title: 'WEDDING', date: '25 DECEMBER 2026', time: '07:00 PM ONWARDS' },
    { title: 'RECEPTION', date: '25 DECEMBER 2026', time: '08:30 PM ONWARDS' },
  ]

  return (
    <group position={[0, 0, 0]}>
      {/* Subtly Visible Dark 3D Background */}
      <fog attach="fog" args={[palette.void, 10, 40]} />
      <color attach="background" args={[palette.void]} />

      <ambientLight color={palette.antique} intensity={0.15} />
      <directionalLight color={palette.champagne} intensity={0.8} position={[0, 5, 5]} />

      {/* Spatial 3D Typography Composition for Events (NO CARDS) */}
      <Html position={[0, 1.8, 2.0]} center distanceFactor={8.5} className="events-spatial-container">
        <div className="events-spatial-wrapper">
          <div className="events-spatial-header">
            <span className="events-header__line" />
            <h2 className="events-header__title">WEDDING CELEBRATIONS</h2>
            <span className="events-header__line" />
          </div>

          <div className="events-spatial-list">
            {events.map((evt, idx) => (
              <div key={`event-${idx}`} className={`event-spatial-item item-delay-${idx}`}>
                <div className="event-spatial-item__title">{evt.title}</div>
                <div className="event-spatial-item__date">{evt.date}</div>
                <div className="event-spatial-item__time">{evt.time}</div>
                {idx < events.length - 1 && <div className="event-spatial-item__dot">◆</div>}
              </div>
            ))}
          </div>

          <button type="button" onClick={handleNextVenue} className="events-next-btn">
            EXPLORE THE VENUE &rarr;
          </button>
        </div>
      </Html>

      {/* Subtle Floating Gold Particles */}
      <SubtleParticles count={220} />
    </group>
  )
}
