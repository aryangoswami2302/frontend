import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useGatewayShape, gateExtrude, trimExtrude } from './gateGeometry'
import { StoneMaterial, GoldMaterial, TimberMaterial, JaliMaterial } from './gateMaterials'
import { palette } from '../../config/theme'

export function IndianWeddingGate({ isActivated = false, isOpen = false }) {
  const leftDoorRef = useRef(null)
  const rightDoorRef = useRef(null)
  const interiorLightRef = useRef(null)
  const glowHaloRef = useRef(null)

  const { gatewayShape, archMouldingShape, onionDomeGeometry } = useGatewayShape()

  useFrame((state, delta) => {
    // Smooth door opening rotation
    const leftTarget = isOpen ? -Math.PI * 0.52 : 0
    const rightTarget = isOpen ? Math.PI * 0.52 : 0

    if (leftDoorRef.current) {
      leftDoorRef.current.rotation.y += (leftTarget - leftDoorRef.current.rotation.y) * delta * 2.2
    }
    if (rightDoorRef.current) {
      rightDoorRef.current.rotation.y += (rightTarget - rightDoorRef.current.rotation.y) * delta * 2.2
    }

    // Dynamic interior light intensity animation
    if (interiorLightRef.current) {
      const targetIntensity = isOpen ? 5.2 : isActivated ? 3.2 : 1.6
      interiorLightRef.current.intensity += (targetIntensity - interiorLightRef.current.intensity) * delta * 3
    }

    // Gentle pulse for the top lotus mandala glow
    if (glowHaloRef.current) {
      glowHaloRef.current.rotation.z += delta * 0.15
    }
  })

  // Door stud grid coordinates (4 columns x 5 rows)
  const studCols = [-0.48, -0.16, 0.16, 0.48]
  const studRows = [0.6, 1.3, 2.0, 2.7, 3.4]

  return (
    <group position={[0, 0, 0]}>
      {/* ==================== 1. PLINTH & STEPS ==================== */}
      {/* Bottom Step */}
      <mesh position={[0, 0.12, 0.4]}>
        <boxGeometry args={[7.8, 0.24, 3.4]} />
        <StoneMaterial emissiveIntensity={0.03} />
      </mesh>
      {/* Bottom Step Gold Edge */}
      <mesh position={[0, 0.23, 2.08]}>
        <boxGeometry args={[7.82, 0.03, 0.05]} />
        <GoldMaterial emissiveIntensity={0.25} />
      </mesh>

      {/* Middle Step */}
      <mesh position={[0, 0.32, 0.2]}>
        <boxGeometry args={[6.8, 0.2, 2.8]} />
        <StoneMaterial emissiveIntensity={0.04} />
      </mesh>
      <mesh position={[0, 0.41, 1.58]}>
        <boxGeometry args={[6.82, 0.03, 0.05]} />
        <GoldMaterial emissiveIntensity={0.3} />
      </mesh>

      {/* Top Threshold Step */}
      <mesh position={[0, 0.48, 0]}>
        <boxGeometry args={[5.8, 0.16, 2.2]} />
        <StoneMaterial emissiveIntensity={0.05} />
      </mesh>
      <mesh position={[0, 0.55, 1.08]}>
        <boxGeometry args={[5.82, 0.03, 0.05]} />
        <GoldMaterial emissiveIntensity={0.35} />
      </mesh>

      {/* ==================== 2. MAIN ARCHWAY WALL ==================== */}
      <mesh position={[0, 0.55, -gateExtrude.depth / 2]}>
        <extrudeGeometry args={[gatewayShape, gateExtrude]} />
        <StoneMaterial roughness={0.88} metalness={0.14} />
      </mesh>

      {/* Gold Cusped Arch Inner Moulding */}
      <mesh position={[0, 0.55, gateExtrude.depth / 2 + 0.01]}>
        <extrudeGeometry args={[archMouldingShape, trimExtrude]} />
        <GoldMaterial emissiveIntensity={0.4} />
      </mesh>

      {/* ==================== 3. TOP FRIEZE & MEDALLION ==================== */}
      {/* Top Gold Moulding Trim */}
      <mesh position={[0, 6.7, 0.02]}>
        <boxGeometry args={[7.4, 0.12, 0.74]} />
        <GoldMaterial emissiveIntensity={0.42} />
      </mesh>
      <mesh position={[0, 6.45, 0.02]}>
        <boxGeometry args={[7.3, 0.08, 0.72]} />
        <GoldMaterial emissiveIntensity={0.32} />
      </mesh>

      {/* Top Keystone Lotus Mandala Emblem */}
      <group position={[0, 5.25, 0.38]}>
        <mesh ref={glowHaloRef}>
          <ringGeometry args={[0.32, 0.55, 16]} />
          <GoldMaterial emissiveIntensity={0.65} transparent opacity={0.85} />
        </mesh>
        <mesh position={[0, 0, 0.02]}>
          <cylinderGeometry args={[0.34, 0.34, 0.06, 12]} rotation={[Math.PI / 2, 0, 0]} />
          <GoldMaterial emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0, 0, 0.06]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <GoldMaterial emissiveIntensity={0.7} />
        </mesh>
      </group>

      {/* ==================== 4. MAIN COLUMNS / PILLARS ==================== */}
      {[-1.95, 1.95].map((x, idx) => (
        <group key={`column-${idx}`} position={[x, 0.55, 0.36]}>
          {/* Base Plinth */}
          <mesh position={[0, 0.22, 0]}>
            <boxGeometry args={[0.82, 0.44, 0.82]} />
            <StoneMaterial />
          </mesh>
          <mesh position={[0, 0.43, 0]}>
            <boxGeometry args={[0.85, 0.04, 0.85]} />
            <GoldMaterial emissiveIntensity={0.35} />
          </mesh>

          {/* Lotus Torus Base Ring */}
          <mesh position={[0, 0.52, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.36, 0.08, 16, 32]} />
            <GoldMaterial emissiveIntensity={0.45} />
          </mesh>

          {/* Fluted Column Shaft */}
          <mesh position={[0, 2.5, 0]}>
            <cylinderGeometry args={[0.34, 0.36, 3.8, 12]} />
            <StoneMaterial roughness={0.82} />
          </mesh>

          {/* Column Gold Ring Accents */}
          {[1.2, 2.5, 3.8].map((yRing, rIdx) => (
            <mesh key={`ring-${rIdx}`} position={[0, yRing, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.36, 0.035, 12, 24]} />
              <GoldMaterial emissiveIntensity={0.38} />
            </mesh>
          ))}

          {/* Pillar Bracket Capital */}
          <mesh position={[0, 4.52, 0]}>
            <boxGeometry args={[0.76, 0.3, 0.76]} />
            <GoldMaterial emissiveIntensity={0.4} />
          </mesh>

          {/* Pillar Top Mini Kalash Finial */}
          <mesh position={[0, 4.85, 0]}>
            <coneGeometry args={[0.18, 0.42, 12]} />
            <GoldMaterial emissiveIntensity={0.6} />
          </mesh>
        </group>
      ))}

      {/* ==================== 5. SIDE WINGS & JALI LATTICE PANELS ==================== */}
      {[-3.42, 3.42].map((x, sIdx) => (
        <group key={`side-wing-${sIdx}`} position={[x, 0.55, 0]}>
          {/* Side Pillar Tower */}
          <mesh position={[0, 2.8, 0]}>
            <boxGeometry args={[0.85, 5.6, 0.68]} />
            <StoneMaterial />
          </mesh>
          {/* Gold Horizontal Moulding Strips */}
          {[1.5, 3.2, 5.0].map((yVal, mIdx) => (
            <mesh key={`side-moulding-${mIdx}`} position={[0, yVal, 0.02]}>
              <boxGeometry args={[0.89, 0.06, 0.7]} />
              <GoldMaterial emissiveIntensity={0.35} />
            </mesh>
          ))}

          {/* Jali Screen Recessed Panel */}
          <group position={[0, 2.8, 0.32]}>
            {/* Backlight plane behind Jali */}
            <mesh position={[0, 0, -0.05]}>
              <planeGeometry args={[0.55, 2.4]} />
              <meshBasicMaterial color={palette.champagne} transparent opacity={isActivated ? 0.35 : 0.18} />
            </mesh>
            {/* Jali Screen Lattice Mesh (Procedural decorative grid) */}
            <mesh>
              <planeGeometry args={[0.55, 2.4, 4, 16]} />
              <JaliMaterial opacity={0.82} emissiveIntensity={isActivated ? 0.55 : 0.3} />
            </mesh>
          </group>

          {/* Side Minaret Chhatri Dome */}
          <group position={[0, 5.65, 0]}>
            <mesh position={[0, 0.15, 0]}>
              <boxGeometry args={[0.9, 0.15, 0.72]} />
              <GoldMaterial emissiveIntensity={0.4} />
            </mesh>
            <mesh position={[0, 0.58, 0]} geometry={onionDomeGeometry}>
              <GoldMaterial emissiveIntensity={0.52} />
            </mesh>
            {/* Kalash Spire */}
            <mesh position={[0, 1.48, 0]}>
              <cylinderGeometry args={[0.02, 0.07, 0.45, 8]} />
              <GoldMaterial emissiveIntensity={0.75} />
            </mesh>
          </group>
        </group>
      ))}

      {/* ==================== 6. DOUBLE GATES (DOORS) ==================== */}
      {/* Left Door Panel */}
      <group position={[-1.34, 0.55, 0]} ref={leftDoorRef}>
        <mesh position={[0.66, 2.2, 0]}>
          <boxGeometry args={[1.32, 4.4, 0.12]} />
          <TimberMaterial />
        </mesh>
        {/* Gold Border Frame */}
        <mesh position={[0.66, 2.2, 0.065]}>
          <boxGeometry args={[1.34, 4.42, 0.02]} />
          <GoldMaterial emissiveIntensity={0.25} />
        </mesh>
        {/* Door Studs (Bosses) */}
        {studCols.map((cx) =>
          studRows.map((ry) => (
            <mesh key={`left-stud-${cx}-${ry}`} position={[0.66 + cx, ry, 0.08]}>
              <sphereGeometry args={[0.038, 12, 12]} />
              <GoldMaterial emissiveIntensity={0.5} />
            </mesh>
          )),
        )}
        {/* Door Ring Knocker Handle */}
        <group position={[1.15, 2.1, 0.1]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.085, 0.018, 12, 24]} />
            <GoldMaterial emissiveIntensity={0.65} />
          </mesh>
          <mesh position={[0, 0.08, -0.01]}>
            <cylinderGeometry args={[0.045, 0.045, 0.03, 12]} rotation={[Math.PI / 2, 0, 0]} />
            <GoldMaterial emissiveIntensity={0.6} />
          </mesh>
        </group>
      </group>

      {/* Right Door Panel */}
      <group position={[1.34, 0.55, 0]} ref={rightDoorRef}>
        <mesh position={[-0.66, 2.2, 0]}>
          <boxGeometry args={[1.32, 4.4, 0.12]} />
          <TimberMaterial />
        </mesh>
        {/* Gold Border Frame */}
        <mesh position={[-0.66, 2.2, 0.065]}>
          <boxGeometry args={[1.34, 4.42, 0.02]} />
          <GoldMaterial emissiveIntensity={0.25} />
        </mesh>
        {/* Door Studs (Bosses) */}
        {studCols.map((cx) =>
          studRows.map((ry) => (
            <mesh key={`right-stud-${cx}-${ry}`} position={[-0.66 - cx, ry, 0.08]}>
              <sphereGeometry args={[0.038, 12, 12]} />
              <GoldMaterial emissiveIntensity={0.5} />
            </mesh>
          )),
        )}
        {/* Door Ring Knocker Handle */}
        <group position={[-1.15, 2.1, 0.1]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.085, 0.018, 12, 24]} />
            <GoldMaterial emissiveIntensity={0.65} />
          </mesh>
          <mesh position={[0, 0.08, -0.01]}>
            <cylinderGeometry args={[0.045, 0.045, 0.03, 12]} rotation={[Math.PI / 2, 0, 0]} />
            <GoldMaterial emissiveIntensity={0.6} />
          </mesh>
        </group>
      </group>

      {/* ==================== 7. WARM INTERIOR LIGHT & BEAM ==================== */}
      <pointLight
        ref={interiorLightRef}
        color="#FFA834"
        intensity={1.6}
        position={[0, 2.4, -0.6]}
        distance={18}
        decay={1.8}
      />
      {/* Secondary golden glow spotlight */}
      <spotLight
        color={palette.champagne}
        intensity={isOpen ? 3.5 : 1.2}
        position={[0, 3.5, -1.2]}
        target-position={[0, 2.0, 4.0]}
        angle={Math.PI / 3}
        penumbra={0.8}
        distance={22}
      />

      {/* ==================== 8. DIYAS / TRADITIONAL LAMPS ==================== */}
      {[
        [-2.4, 0.56, 1.2],
        [2.4, 0.56, 1.2],
        [-1.4, 0.64, 0.8],
        [1.4, 0.64, 0.8],
      ].map((pos, dIdx) => (
        <group key={`diya-${dIdx}`} position={pos}>
          {/* Diya Brass Bowl */}
          <mesh position={[0, 0.04, 0]}>
            <cylinderGeometry args={[0.09, 0.04, 0.07, 12]} />
            <GoldMaterial emissiveIntensity={0.6} />
          </mesh>
          {/* Flame Core */}
          <mesh position={[0, 0.11, 0]}>
            <coneGeometry args={[0.035, 0.09, 10]} />
            <meshBasicMaterial color="#FFD580" />
          </mesh>
          <pointLight color="#FF9900" intensity={0.6} distance={2.5} decay={2} position={[0, 0.15, 0]} />
        </group>
      ))}
    </group>
  )
}
