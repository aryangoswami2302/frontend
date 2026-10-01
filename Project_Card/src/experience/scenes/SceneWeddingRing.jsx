import { useEffect } from 'react'
import { useExperience } from '../ExperienceContext'
import { SCENE_IDS } from '../../config/experience'
import { IndianWeddingMandap } from '../objects/IndianWeddingMandap'
import { ProceduralRing3D } from '../objects/ProceduralRing3D'
import { SubtleParticles } from '../effects/SubtleParticles'
import { palette } from '../../config/theme'

export function SceneWeddingRing() {
  const { setSceneId } = useExperience()

  useEffect(() => {
    // Auto transition sequence when camera reaches the ring -> Invitation scene
    const timer = window.setTimeout(() => {
      setSceneId(SCENE_IDS.INVITATION)
    }, 4400)

    return () => window.clearTimeout(timer)
  }, [setSceneId])

  return (
    <group position={[0, 0, 0]}>
      <fog attach="fog" args={[palette.void, 12, 45]} />
      <color attach="background" args={[palette.void]} />

      {/* Atmospheric Lighting */}
      <ambientLight color={palette.antique} intensity={0.2} />
      <directionalLight color={palette.champagne} intensity={1.2} position={[3, 7, 5]} />
      <spotLight color="#FFA834" intensity={3.0} position={[0, 8.0, 2.0]} angle={Math.PI / 4} penumbra={0.6} />

      {/* Mandap Environment in Background */}
      <IndianWeddingMandap />

      {/* Floating 3D Gold Wedding Ring */}
      <ProceduralRing3D />

      {/* Shimmer Particles */}
      <SubtleParticles count={240} />
    </group>
  )
}
