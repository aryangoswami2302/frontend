import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { GoldMaterial } from './gateMaterials'
import { palette } from '../../config/theme'

export function ProceduralRing3D() {
  const ringGroupRef = useRef(null)
  const gemRef = useRef(null)

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()

    if (ringGroupRef.current) {
      // Slow rotation & subtle floating tumble
      ringGroupRef.current.rotation.y += delta * 0.45
      ringGroupRef.current.rotation.x = Math.sin(t * 0.8) * 0.12
      ringGroupRef.current.position.y = 1.9 + Math.sin(t * 1.4) * 0.08
    }

    if (gemRef.current) {
      gemRef.current.rotation.y += delta * 0.8
    }
  })

  return (
    <group position={[0, 1.9, 0]}>
      {/* Soft Ground Shadow & Glow Plane under Ring */}
      <mesh position={[0, -0.65, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.2, 1.2, 32]} />
        <meshBasicMaterial color={palette.champagne} transparent opacity={0.14} blending={THREE.AdditiveBlending} />
      </mesh>

      <group ref={ringGroupRef}>
        {/* Main Gold Band */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[0.62, 0.09, 24, 48]} />
          <GoldMaterial emissiveIntensity={0.5} roughness={0.18} metalness={0.92} />
        </mesh>

        {/* Inner Comfort Fit Inlay Ring */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[0.61, 0.04, 16, 36]} />
          <GoldMaterial emissiveIntensity={0.7} roughness={0.1} metalness={0.95} />
        </mesh>

        {/* Crown Setting Mount */}
        <group position={[0, 0.65, 0.15]}>
          <mesh>
            <cylinderGeometry args={[0.09, 0.04, 0.14, 8]} />
            <GoldMaterial emissiveIntensity={0.6} metalness={0.9} />
          </mesh>

          {/* Solitaire Brilliant Cut Diamond Gem */}
          <mesh ref={gemRef} position={[0, 0.11, 0]}>
            <octahedronGeometry args={[0.13, 2]} />
            <meshPhysicalMaterial
              color="#FFFFFF"
              emissive="#FFF5E6"
              emissiveIntensity={0.8}
              roughness={0.05}
              metalness={0.1}
              transmission={0.88}
              ior={2.42}
              transparent
              opacity={0.95}
            />
          </mesh>
        </group>
      </group>

      {/* Ring Warm Specular Spot Light */}
      <pointLight color="#FFD580" intensity={3.8} distance={7} position={[0, 2.8, 1.5]} />
    </group>
  )
}
