import { useCallback } from 'react'
import { Html } from '@react-three/drei'
import { useExperience } from '../ExperienceContext'
import { SCENE_IDS, weddingData } from '../../config/experience'
import { ProceduralVenue3D } from '../objects/ProceduralVenue3D'
import { SubtleParticles } from '../effects/SubtleParticles'
import { palette } from '../../config/theme'

export function SceneVenue() {
  const { setSceneId } = useExperience()

  const handleProceedRsvp = useCallback(() => {
    setSceneId(SCENE_IDS.RSVP)
  }, [setSceneId])

  return (
    <group position={[0, 0, 0]}>
      <fog attach="fog" args={[palette.void, 12, 45]} />
      <color attach="background" args={[palette.void]} />

      {/* Atmospheric Lighting */}
      <ambientLight color={palette.antique} intensity={0.2} />
      <directionalLight color={palette.champagne} intensity={1.25} position={[3, 7, 5]} />
      <pointLight color="#FFB347" intensity={3.0} position={[0, 4.5, 2.5]} distance={14} />

      {/* Stylized 3D Venue Representation */}
      <ProceduralVenue3D />

      {/* 3D Integrated Venue Info Card */}
      <Html position={[0, 2.2, 2.2]} center distanceFactor={8.5} className="venue-card-container">
        <div className="venue-card">
          <div className="venue-card__tag">~ THE VENUE ~</div>
          <h2 className="venue-card__title">{weddingData.location.venueName}</h2>
          <div className="venue-card__address">Village {weddingData.location.village}<br />Taluka {weddingData.location.taluka} · District {weddingData.location.district}, {weddingData.location.state}</div>
          <div className="venue-card__divider" />

          <div className="venue-card__actions">
            <a href={weddingData.location.mapsUrl} target="_blank" rel="noopener noreferrer" className="venue-btn venue-btn--map">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              OPEN MAP
            </a>

            <button type="button" onClick={handleProceedRsvp} className="venue-btn venue-btn--rsvp">
              CONTINUE TO RSVP &rarr;
            </button>
          </div>
        </div>
      </Html>

      {/* Subtle Floating Particles */}
      <SubtleParticles count={240} />
    </group>
  )
}
