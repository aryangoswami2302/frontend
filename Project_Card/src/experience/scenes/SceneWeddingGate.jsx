import { useCallback, useMemo } from 'react'
import { useExperience } from '../ExperienceContext'
import { SCENE_IDS } from '../../config/experience'
import { SceneDarkEnvironment } from './SceneDarkEnvironment'
import { IndianWeddingGate } from '../objects/IndianWeddingGate'
import { EnterStoryUI } from '../interaction/EnterStoryUI'
import { SubtleParticles } from '../effects/SubtleParticles'

export function SceneWeddingGate() {
  const { sceneId, setSceneId } = useExperience()

  const isActivated = useMemo(
    () => [SCENE_IDS.GATE_ACTIVATION, SCENE_IDS.GATE_OPENING, SCENE_IDS.THROUGH_THE_GATE].includes(sceneId),
    [sceneId],
  )

  const isOpen = useMemo(
    () => [SCENE_IDS.GATE_OPENING, SCENE_IDS.THROUGH_THE_GATE].includes(sceneId),
    [sceneId],
  )

  const handleEnter = useCallback(() => {
    if (sceneId !== SCENE_IDS.WEDDING_GATE && sceneId !== SCENE_IDS.DARK_ENVIRONMENT) return

    // 1. Stop user interaction & start camera activation move (0s)
    setSceneId(SCENE_IDS.GATE_ACTIVATION)

    // 2. Gate doors slowly open & warm lights intensify (0.6s)
    const timer1 = window.setTimeout(() => {
      setSceneId(SCENE_IDS.GATE_OPENING)
    }, 600)

    // 3. Camera slowly travels through the gate (2.2s)
    const timer2 = window.setTimeout(() => {
      setSceneId(SCENE_IDS.THROUGH_THE_GATE)
    }, 2200)

    // 4. Transition into 3D Mandala scene (3.8s)
    const timer3 = window.setTimeout(() => {
      setSceneId(SCENE_IDS.GLOWING_MANDALA)
    }, 3800)

    return () => {
      window.clearTimeout(timer1)
      window.clearTimeout(timer2)
      window.clearTimeout(timer3)
    }
  }, [sceneId, setSceneId])

  return (
    <group>
      <SceneDarkEnvironment />
      <IndianWeddingGate isActivated={isActivated} isOpen={isOpen} />
      <EnterStoryUI visible={!isActivated} onEnter={handleEnter} />
      <SubtleParticles moveTowardCamera={isOpen} speed={1.8} />
    </group>
  )
}
