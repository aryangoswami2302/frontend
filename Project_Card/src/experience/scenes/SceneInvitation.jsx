import { useState, useCallback } from 'react'
import { useExperience } from '../ExperienceContext'
import { SCENE_IDS } from '../../config/experience'
import { PhysicalInvitation3D } from '../objects/PhysicalInvitation3D'
import { SubtleParticles } from '../effects/SubtleParticles'
import { palette } from '../../config/theme'

export function SceneInvitation() {
  const { sceneId, setSceneId } = useExperience()
  const [isOpen, setIsOpen] = useState(sceneId === SCENE_IDS.INVITATION_OPEN)

  const handleOpenToggle = useCallback(() => {
    setIsOpen(true)
    setSceneId(SCENE_IDS.INVITATION_OPEN)
  }, [setSceneId])

  const handleProceedToEvents = useCallback(() => {
    setSceneId(SCENE_IDS.EVENT_DETAILS)
  }, [setSceneId])

  return (
    <group position={[0, 0, 0]}>
      <fog attach="fog" args={[palette.void, 12, 45]} />
      <color attach="background" args={[palette.void]} />

      {/* Atmospheric Lighting */}
      <ambientLight color={palette.antique} intensity={0.22} />
      <directionalLight color={palette.champagne} intensity={1.3} position={[2, 6, 6]} />
      <pointLight color="#FFB347" intensity={3.2} position={[0, 2.5, 3.0]} distance={12} />

      {/* 3D Physical Invitation Card */}
      <PhysicalInvitation3D isOpen={isOpen} onToggle={handleOpenToggle} />

      {/* Invisible Click Handler over opened invitation to advance */}
      {isOpen && (
        <mesh position={[0, 1.8, 0.4]} onClick={handleProceedToEvents}>
          <planeGeometry args={[3.8, 4.8]} />
          <meshBasicMaterial visible={false} />
        </mesh>
      )}

      {/* Shimmer Particles */}
      <SubtleParticles count={240} />
    </group>
  )
}
