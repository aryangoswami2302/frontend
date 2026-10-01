import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { cameraDestinations, FOUNDATION_SCENE, pointerParallax } from '../../config/experience'
import { usePointerParallax } from '../interaction/usePointerParallax'

const lookTarget = new THREE.Vector3()
const desiredPosition = new THREE.Vector3()

export function CinematicCamera({ sceneId = FOUNDATION_SCENE }) {
  const cameraRef = useRef(null)
  const destination = cameraDestinations[sceneId] ?? cameraDestinations[FOUNDATION_SCENE]
  const parallax = usePointerParallax()
  const { size } = useThree()

  useFrame((state) => {
    const camera = cameraRef.current
    if (!camera || !destination) return

    camera.aspect = size.width / Math.max(size.height, 1)
    camera.updateProjectionMatrix()

    // Smooth sinusoidal breathing movement
    const t = state.clock.getElapsedTime()
    const breathAmount = destination.breath ?? 0.04
    const breathY = Math.sin(t * 0.75) * breathAmount
    const breathX = Math.cos(t * 0.45) * (breathAmount * 0.45)

    if (destination.orbit) {
      // Cinematic orbit around center
      const radius = 12.8
      const orbitSpeed = 0.075
      const orbitAngle = t * orbitSpeed
      const x = Math.sin(orbitAngle) * radius
      const z = Math.cos(orbitAngle) * radius

      desiredPosition.set(
        x + parallax.current.x * pointerParallax.strength * 1.5,
        destination.position[1] + parallax.current.y * pointerParallax.strength * 0.45 + breathY,
        z,
      )
    } else {
      desiredPosition.set(
        destination.position[0] + parallax.current.x * pointerParallax.strength + breathX,
        destination.position[1] + parallax.current.y * pointerParallax.strength * 0.45 + breathY,
        destination.position[2],
      )
    }

    const lerpSpeed = destination.lerp ?? 0.028
    camera.position.lerp(desiredPosition, lerpSpeed)

    lookTarget.set(
      destination.lookAt[0] + parallax.current.x * 0.35,
      destination.lookAt[1] + parallax.current.y * 0.12,
      destination.lookAt[2],
    )
    camera.lookAt(lookTarget)
  })

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      fov={38}
      near={0.1}
      far={80}
      position={[0, 2.15, 14.2]}
    />
  )
}
