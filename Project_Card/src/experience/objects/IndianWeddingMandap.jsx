import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { StoneMaterial, GoldMaterial } from './gateMaterials'
import { palette } from '../../config/theme'

export function IndianWeddingMandap() {
  const fireLightRef = useRef(null)
  const chandelierRef = useRef(null)

  // Pillar positions (4 corners)
  const pillarPositions = [
    [-2.2, 0, -2.2],
    [2.2, 0, -2.2],
    [-2.2, 0, 2.2],
    [2.2, 0, 2.2],
  ]

  // Pre-calculate floral garland bead points
  const garlandPoints = useMemo(() => {
    const beads = []
    const countPerBeam = 18

    // 4 top crossbeams
    const beams = [
      { start: [-2.2, 3.8, -2.2], end: [2.2, 3.8, -2.2] },
      { start: [2.2, 3.8, -2.2], end: [2.2, 3.8, 2.2] },
      { start: [2.2, 3.8, 2.2], end: [-2.2, 3.8, 2.2] },
      { start: [-2.2, 3.8, 2.2], end: [-2.2, 3.8, -2.2] },
    ]

    beams.forEach((beam) => {
      for (let i = 0; i <= countPerBeam; i += 1) {
        const t = i / countPerBeam
        const x = THREE.MathUtils.lerp(beam.start[0], beam.end[0], t)
        const z = THREE.MathUtils.lerp(beam.start[2], beam.end[2], t)
        // Catenary sag curve for realistic draped garlands
        const sag = Math.sin(t * Math.PI) * 0.42
        const y = 3.8 - sag

        beads.push({
          pos: [x, y, z],
          color: i % 3 === 0 ? '#E67E22' : i % 3 === 1 ? '#C0392B' : '#F5EEF8', // Marigold, Rose, Jasmine
        })
      }
    })

    return beads
  }, [])

  // Flame flickering & chandelier rotation
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()

    if (fireLightRef.current) {
      fireLightRef.current.intensity = 2.4 + Math.sin(t * 8) * 0.4 + Math.cos(t * 13) * 0.25
    }

    if (chandelierRef.current) {
      chandelierRef.current.rotation.y += delta * 0.08
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* ==================== 1. ELEVATED DAIS PLATFORM ==================== */}
      {/* Lower Platform Step */}
      <mesh position={[0, 0.15, 0]}>
        <boxGeometry args={[8.6, 0.3, 8.6]} />
        <StoneMaterial emissiveIntensity={0.03} />
      </mesh>
      <mesh position={[0, 0.29, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[4.22, 4.28, 64]} />
        <GoldMaterial emissiveIntensity={0.4} />
      </mesh>

      {/* Upper Platform Step */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[7.4, 0.22, 7.4]} />
        <StoneMaterial emissiveIntensity={0.05} />
      </mesh>
      <mesh position={[0, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.62, 3.68, 64]} />
        <GoldMaterial emissiveIntensity={0.45} />
      </mesh>
      <mesh position={[0, 0.505, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.8, 1.86, 48]} />
        <GoldMaterial emissiveIntensity={0.35} />
      </mesh>

      {/* ==================== 2. FOUR DECORATIVE PILLARS ==================== */}
      {pillarPositions.map((pos, pIdx) => (
        <group key={`mandap-pillar-${pIdx}`} position={pos}>
          {/* Base Plinth */}
          <mesh position={[0, 0.68, 0]}>
            <boxGeometry args={[0.72, 0.36, 0.72]} />
            <StoneMaterial />
          </mesh>
          <mesh position={[0, 0.85, 0]}>
            <boxGeometry args={[0.76, 0.04, 0.76]} />
            <GoldMaterial emissiveIntensity={0.35} />
          </mesh>

          {/* Torus Lotus Base */}
          <mesh position={[0, 0.94, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.32, 0.06, 16, 24]} />
            <GoldMaterial emissiveIntensity={0.45} />
          </mesh>

          {/* Fluted Column Shaft */}
          <mesh position={[0, 2.4, 0]}>
            <cylinderGeometry args={[0.28, 0.3, 2.9, 12]} />
            <StoneMaterial roughness={0.82} />
          </mesh>

          {/* Column Gold Ring Accents */}
          {[1.4, 2.4, 3.4].map((yRing, rIdx) => (
            <mesh key={`mpillar-ring-${rIdx}`} position={[0, yRing, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.3, 0.03, 12, 24]} />
              <GoldMaterial emissiveIntensity={0.38} />
            </mesh>
          ))}

          {/* Bracket Capital */}
          <mesh position={[0, 3.92, 0]}>
            <boxGeometry args={[0.68, 0.28, 0.68]} />
            <GoldMaterial emissiveIntensity={0.45} />
          </mesh>

          {/* Hanging Bell / Lantern Pendant */}
          <group position={[0, 3.65, 0.42]}>
            <mesh>
              <coneGeometry args={[0.07, 0.16, 12]} rotation={[Math.PI, 0, 0]} />
              <GoldMaterial emissiveIntensity={0.6} />
            </mesh>
            <pointLight color="#FF9900" intensity={0.5} distance={2.5} position={[0, -0.1, 0]} />
          </group>
        </group>
      ))}

      {/* ==================== 3. CANOPY BEAMS & FABRIC SHAMIANA ==================== */}
      {/* 4 Crossbeams connecting pillars */}
      {[
        { pos: [0, 4.0, -2.2], size: [4.8, 0.22, 0.28] },
        { pos: [0, 4.0, 2.2], size: [4.8, 0.22, 0.28] },
        { pos: [-2.2, 4.0, 0], size: [0.28, 0.22, 4.8] },
        { pos: [2.2, 4.0, 0], size: [0.28, 0.22, 4.8] },
      ].map((b, bIdx) => (
        <mesh key={`beam-${bIdx}`} position={b.pos}>
          <boxGeometry args={b.size} />
          <GoldMaterial emissiveIntensity={0.35} />
        </mesh>
      ))}

      {/* Shamiana Ceiling Canopy Ring */}
      <mesh position={[0, 4.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.8, 2.3, 32]} />
        <GoldMaterial emissiveIntensity={0.4} />
      </mesh>

      {/* ==================== 4. FLORAL GARLANDS ==================== */}
      {garlandPoints.map((g, idx) => (
        <mesh key={`garland-bead-${idx}`} position={g.pos}>
          <sphereGeometry args={[0.055, 8, 8]} />
          <meshStandardMaterial color={g.color} roughness={0.6} metalness={0.1} />
        </mesh>
      ))}

      {/* ==================== 5. CENTRAL HANGING CHANDELIER ==================== */}
      <group ref={chandelierRef} position={[0, 4.5, 0]}>
        {/* Chain */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.8, 8]} />
          <GoldMaterial emissiveIntensity={0.5} />
        </mesh>
        {/* Ring Tier 1 */}
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.65, 0.035, 12, 32]} />
          <GoldMaterial emissiveIntensity={0.65} />
        </mesh>
        {/* Ring Tier 2 */}
        <mesh position={[0, -0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.38, 0.03, 12, 24]} />
          <GoldMaterial emissiveIntensity={0.65} />
        </mesh>
        {/* Chandelier Warm Center Light */}
        <pointLight color="#FFA733" intensity={3.8} distance={14} decay={1.8} position={[0, -0.2, 0]} />
      </group>

      {/* ==================== 6. CENTRAL SACRED HAVANKUND ALTAR ==================== */}
      <group position={[0, 0.51, 0]}>
        {/* Outer Stepped Altar Box */}
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[1.6, 0.16, 1.6]} />
          <StoneMaterial />
        </mesh>
        <mesh position={[0, 0.16, 0]}>
          <boxGeometry args={[1.62, 0.02, 1.62]} />
          <GoldMaterial emissiveIntensity={0.4} />
        </mesh>

        {/* Inner Pit Rim */}
        <mesh position={[0, 0.22, 0]}>
          <boxGeometry args={[1.2, 0.12, 1.2]} />
          <StoneMaterial />
        </mesh>

        {/* Sacred Fire Embers */}
        <mesh position={[0, 0.32, 0]}>
          <coneGeometry args={[0.35, 0.32, 12]} />
          <meshStandardMaterial
            color="#FF6600"
            emissive="#FF4500"
            emissiveIntensity={1.8}
            roughness={0.3}
          />
        </mesh>
        <pointLight
          ref={fireLightRef}
          color="#FF7700"
          intensity={2.8}
          distance={8}
          decay={2}
          position={[0, 0.45, 0]}
        />
      </group>

      {/* ==================== 7. CIRCULAR DIYAS RING ==================== */}
      {[
        [-2.8, 0.52, -2.8],
        [2.8, 0.52, -2.8],
        [-2.8, 0.52, 2.8],
        [2.8, 0.52, 2.8],
        [0, 0.52, -3.2],
        [0, 0.52, 3.2],
        [-3.2, 0.52, 0],
        [3.2, 0.52, 0],
      ].map((dPos, dIdx) => (
        <group key={`mandap-diya-${dIdx}`} position={dPos}>
          <mesh position={[0, 0.04, 0]}>
            <cylinderGeometry args={[0.08, 0.04, 0.06, 12]} />
            <GoldMaterial emissiveIntensity={0.55} />
          </mesh>
          <mesh position={[0, 0.1, 0]}>
            <coneGeometry args={[0.03, 0.08, 8]} />
            <meshBasicMaterial color="#FFC86B" />
          </mesh>
          <pointLight color="#FF9900" intensity={0.55} distance={2.2} position={[0, 0.12, 0]} />
        </group>
      ))}
    </group>
  )
}
