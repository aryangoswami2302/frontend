import { useEffect } from 'react'
import { Html } from '@react-three/drei'
import { useExperience } from '../ExperienceContext'
import { SCENE_IDS } from '../../config/experience'
import { ProceduralMandala3D } from '../objects/ProceduralMandala3D'
import { SubtleParticles } from '../effects/SubtleParticles'
import { palette } from '../../config/theme'

export function SceneGlowingMandala() {
  const { sceneId, setSceneId } = useExperience()

  useEffect(() => {
    // Auto transition sequence from Mandala & Names -> Main Mandap Environment
    const timer = window.setTimeout(() => {
      setSceneId(SCENE_IDS.WEDDING_MANDAP)
    }, 4600)

    return () => window.clearTimeout(timer)
  }, [setSceneId])

  return (
    <group>
      <fog attach="fog" args={[palette.void, 12, 45]} />
      <color attach="background" args={[palette.void]} />

      {/* Atmospheric Lighting */}
      <ambientLight color={palette.antique} intensity={0.2} />
      <pointLight color="#FFB347" intensity={3.5} position={[0, 2.0, 4.0]} distance={18} />
      <directionalLight color={palette.champagne} intensity={1.2} position={[0, 6.0, 8.0]} />

      {/* 3D Mandala Structure */}
      <ProceduralMandala3D />

      {/* Floating 3D Integrated Couple Names Typography */}
      <Html position={[0, 1.85, 3.8]} center distanceFactor={9} zIndexRange={[100, 0]}>
        <div className="couple-names-card">
          <div className="couple-names-card__subtitle">TOGETHER WITH THEIR FAMILIES</div>
          <h1 className="couple-names-card__title">
            HEMAL <span className="ampersand">&amp;</span> AAYUSHI
          </h1>
          <div className="couple-names-card__line" />
          <div className="couple-names-card__invitation">INVITE YOU TO CELEBRATE THEIR WEDDING</div>
        </div>
      </Html>

      {/* Floating Shimmer Particles */}
      <SubtleParticles count={260} />
    </group>
  )
}
