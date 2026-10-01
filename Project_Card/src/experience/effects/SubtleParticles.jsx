import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { palette } from '../../config/theme'

export function SubtleParticles({ count = 280, moveTowardCamera = false, speed = 1.2 }) {
  const pointsRef = useRef(null)
  const posAttrRef = useRef(null)

  const { geometry, initialPositions } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const initials = new Float32Array(count * 3)

    for (let i = 0; i < count; i += 1) {
      const x = (Math.random() - 0.5) * 22
      const y = Math.random() * 9 + 0.1
      const z = (Math.random() - 0.5) * 24

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      initials[i * 3] = x
      initials[i * 3 + 1] = y
      initials[i * 3 + 2] = z
    }

    const geo = new THREE.BufferGeometry()
    const attr = new THREE.BufferAttribute(positions, 3)
    geo.setAttribute('position', attr)
    return { geometry: geo, initialPositions: initials }
  }, [count])

  useFrame((_, delta) => {
    if (!pointsRef.current) return

    // Slow ambient rotation
    pointsRef.current.rotation.y += delta * 0.015

    // If camera travel particle motion is active, stream particles towards +Z (toward camera)
    if (moveTowardCamera && pointsRef.current.geometry) {
      const attr = pointsRef.current.geometry.attributes.position
      const arr = attr.array
      const currentSpeed = speed * delta * 4.5

      for (let i = 0; i < count; i += 1) {
        arr[i * 3 + 2] += currentSpeed // Move forward along Z
        // Wrap around when passing behind camera
        if (arr[i * 3 + 2] > 16) {
          arr[i * 3 + 2] = -18
          arr[i * 3] = (Math.random() - 0.5) * 22
          arr[i * 3 + 1] = Math.random() * 9 + 0.1
        }
      }
      attr.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef} geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        color={palette.champagne}
        size={moveTowardCamera ? 0.055 : 0.038}
        sizeAttenuation
        transparent
        opacity={moveTowardCamera ? 0.65 : 0.42}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
