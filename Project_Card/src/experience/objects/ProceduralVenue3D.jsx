import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { StoneMaterial, GoldMaterial } from './gateMaterials'
import { palette } from '../../config/theme'

export function ProceduralVenue3D() {
  const markerRef = useRef(null)
  const pinLightRef = useRef(null)

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()

    if (markerRef.current) {
      // Floating motion & rotation for 3D Location Marker Pin
      markerRef.current.position.y = 3.6 + Math.sin(t * 1.8) * 0.12
      markerRef.current.rotation.y += delta * 0.6
    }

    if (pinLightRef.current) {
      pinLightRef.current.intensity = 2.5 + Math.sin(t * 4) * 0.6
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Platform Dais Base for Palace Venue Model */}
      <mesh position={[0, 0.15, 0]}>
        <boxGeometry args={[7.2, 0.3, 5.2]} />
        <StoneMaterial emissiveIntensity={0.04} />
      </mesh>
      <mesh position={[0, 0.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.8, 2.85, 48]} />
        <GoldMaterial emissiveIntensity={0.4} />
      </mesh>

      {/* Stylized Palace Structure (Central Pavilion & Domes) */}
      <group position={[0, 0.3, 0]}>
        {/* Main Facade Structure */}
        <mesh position={[0, 1.2, 0]}>
          <boxGeometry args={[4.8, 2.4, 2.4]} />
          <StoneMaterial roughness={0.84} />
        </mesh>

        {/* Gold Facade Trim Lines */}
        <mesh position={[0, 2.42, 1.21]}>
          <boxGeometry args={[4.82, 0.06, 0.04]} />
          <GoldMaterial emissiveIntensity={0.45} />
        </mesh>

        {/* Central Dome */}
        <mesh position={[0, 2.85, 0]}>
          <sphereGeometry args={[0.72, 24, 24]} />
          <GoldMaterial emissiveIntensity={0.5} />
        </mesh>

        {/* Side Turrets */}
        {[-2.0, 2.0].map((x, idx) => (
          <group key={`turret-${idx}`} position={[x, 2.2, 0]}>
            <cylinderGeometry args={[0.35, 0.38, 1.6, 12]} />
            <StoneMaterial />
            <mesh position={[0, 1.1, 0]}>
              <coneGeometry args={[0.38, 0.6, 12]} />
              <GoldMaterial emissiveIntensity={0.55} />
            </mesh>
          </group>
        ))}
      </group>

      {/* GLOWING 3D LOCATION MARKER PIN */}
      <group ref={markerRef} position={[0, 3.6, 0]}>
        {/* Diamond Pin Head */}
        <mesh rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.22, 0.55, 8]} />
          <GoldMaterial emissiveIntensity={0.95} color={palette.champagne} />
        </mesh>
        <mesh position={[0, 0.22, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial
            color="#FF9900"
            emissive="#FF7700"
            emissiveIntensity={1.8}
            roughness={0.1}
          />
        </mesh>

        <pointLight
          ref={pinLightRef}
          color="#FF9900"
          intensity={2.8}
          distance={6}
          position={[0, 0.2, 0]}
        />
      </group>
    </group>
  )
}
