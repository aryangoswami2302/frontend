import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { GoldMaterial } from './gateMaterials'
import { palette } from '../../config/theme'

export function ProceduralMandala3D() {
  const outerRingRef = useRef(null)
  const outerPetalsRef = useRef(null)
  const starFrameRef = useRef(null)
  const innerPetalsRef = useRef(null)
  const coreRef = useRef(null)

  // Pre-generate radial petal geometries & transformations
  const { outerPetalCoords, innerPetalCoords, radialTeeth } = useMemo(() => {
    // 16 outer petals
    const outerP = []
    const countOuter = 16
    for (let i = 0; i < countOuter; i += 1) {
      const angle = (i / countOuter) * Math.PI * 2
      outerP.push({
        angle,
        x: Math.cos(angle) * 2.45,
        y: Math.sin(angle) * 2.45,
      })
    }

    // 12 inner petals
    const innerP = []
    const countInner = 12
    for (let i = 0; i < countInner; i += 1) {
      const angle = (i / countInner) * Math.PI * 2
      innerP.push({
        angle,
        x: Math.cos(angle) * 1.35,
        y: Math.sin(angle) * 1.35,
      })
    }

    // 24 outer ring teeth
    const teeth = []
    const countTeeth = 24
    for (let i = 0; i < countTeeth; i += 1) {
      const angle = (i / countTeeth) * Math.PI * 2
      teeth.push({
        angle,
        x: Math.cos(angle) * 3.45,
        y: Math.sin(angle) * 3.45,
      })
    }

    return { outerPetalCoords: outerP, innerPetalCoords: innerP, radialTeeth: teeth }
  }, [])

  useFrame((_, delta) => {
    // Independent multi-layer counter rotations
    if (outerRingRef.current) outerRingRef.current.rotation.z += delta * 0.08
    if (outerPetalsRef.current) outerPetalsRef.current.rotation.z -= delta * 0.06
    if (starFrameRef.current) starFrameRef.current.rotation.z += delta * 0.12
    if (innerPetalsRef.current) innerPetalsRef.current.rotation.z -= delta * 0.14
    if (coreRef.current) coreRef.current.rotation.z += delta * 0.04
  })

  return (
    <group position={[0, 2.0, 0]}>
      {/* ==================== LAYER 0: BACKING GLOW AURA ==================== */}
      <mesh position={[0, 0, -0.4]}>
        <circleGeometry args={[4.2, 64]} />
        <meshBasicMaterial
          color={palette.champagne}
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <pointLight color="#FFB347" intensity={2.8} distance={12} position={[0, 0, 0.5]} />

      {/* ==================== LAYER 1: OUTER GEOMETRIC RINGS ==================== */}
      <group ref={outerRingRef} position={[0, 0, -0.25]}>
        {/* Main Outer Rim */}
        <mesh>
          <ringGeometry args={[3.38, 3.48, 64]} />
          <GoldMaterial emissiveIntensity={0.5} />
        </mesh>
        <mesh>
          <ringGeometry args={[3.12, 3.16, 64]} />
          <GoldMaterial emissiveIntensity={0.35} />
        </mesh>

        {/* 24 Radial Diamond Teeth */}
        {radialTeeth.map((t, idx) => (
          <mesh
            key={`teeth-${idx}`}
            position={[t.x, t.y, 0.02]}
            rotation={[0, 0, t.angle + Math.PI / 4]}
          >
            <boxGeometry args={[0.12, 0.12, 0.04]} />
            <GoldMaterial emissiveIntensity={0.6} />
          </mesh>
        ))}
      </group>

      {/* ==================== LAYER 2: 16 OUTER LOTUS PETALS ==================== */}
      <group ref={outerPetalsRef} position={[0, 0, -0.1]}>
        {outerPetalCoords.map((p, idx) => (
          <group key={`opetal-${idx}`} position={[p.x, p.y, 0]} rotation={[0, 0, p.angle]}>
            {/* Petal Cone / Diamond Shape */}
            <mesh rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.42, 0.42, 0.05]} />
              <GoldMaterial emissiveIntensity={0.45} />
            </mesh>
            <mesh position={[0.2, 0, 0.02]}>
              <sphereGeometry args={[0.04, 8, 8]} />
              <GoldMaterial emissiveIntensity={0.7} />
            </mesh>
          </group>
        ))}
      </group>

      {/* ==================== LAYER 3: 8-STAR GEOMETRIC FRAME ==================== */}
      <group ref={starFrameRef} position={[0, 0, 0.05]}>
        {/* Square Frame 1 */}
        <mesh rotation={[0, 0, 0]}>
          <ringGeometry args={[2.0, 2.06, 4]} />
          <GoldMaterial emissiveIntensity={0.55} />
        </mesh>
        {/* Square Frame 2 (Rotated 45deg) */}
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <ringGeometry args={[2.0, 2.06, 4]} />
          <GoldMaterial emissiveIntensity={0.55} />
        </mesh>
        {/* Concentric Gold Ring */}
        <mesh>
          <ringGeometry args={[1.82, 1.88, 48]} />
          <GoldMaterial emissiveIntensity={0.4} />
        </mesh>
      </group>

      {/* ==================== LAYER 4: INNER 12 LOTUS PETALS ==================== */}
      <group ref={innerPetalsRef} position={[0, 0, 0.2]}>
        {innerPetalCoords.map((p, idx) => (
          <group key={`ipetal-${idx}`} position={[p.x, p.y, 0]} rotation={[0, 0, p.angle]}>
            <mesh rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.32, 0.32, 0.06]} />
              <GoldMaterial emissiveIntensity={0.65} />
            </mesh>
          </group>
        ))}
      </group>

      {/* ==================== LAYER 5: CENTER GLOWING EMBLEM CORE ==================== */}
      <group ref={coreRef} position={[0, 0, 0.35]}>
        <mesh>
          <ringGeometry args={[0.65, 0.72, 48]} />
          <GoldMaterial emissiveIntensity={0.75} />
        </mesh>
        <mesh position={[0, 0, 0.02]}>
          <cylinderGeometry args={[0.55, 0.55, 0.04, 32]} rotation={[Math.PI / 2, 0, 0]} />
          <GoldMaterial emissiveIntensity={0.6} />
        </mesh>
        {/* Center Glowing Jewel */}
        <mesh position={[0, 0, 0.08]}>
          <sphereGeometry args={[0.22, 24, 24]} />
          <meshStandardMaterial
            color={palette.champagne}
            emissive={palette.champagne}
            emissiveIntensity={1.2}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </group>
    </group>
  )
}
