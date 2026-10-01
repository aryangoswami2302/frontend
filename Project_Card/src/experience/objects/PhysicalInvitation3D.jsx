import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { GoldMaterial } from './gateMaterials'
import { palette } from '../../config/theme'

export function PhysicalInvitation3D({ isOpen = false, onToggle }) {
  const cardGroupRef = useRef(null)
  const leftFlapRef = useRef(null)
  const rightFlapRef = useRef(null)

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()

    // Gentle 3D floating animation
    if (cardGroupRef.current) {
      cardGroupRef.current.position.y = 1.8 + Math.sin(t * 1.2) * 0.06
      cardGroupRef.current.rotation.x = Math.sin(t * 0.8) * 0.04
      cardGroupRef.current.rotation.y = Math.cos(t * 0.6) * 0.05
    }

    // 3D Flap opening rotation interpolation
    const leftTarget = isOpen ? -Math.PI * 0.82 : 0
    const rightTarget = isOpen ? Math.PI * 0.82 : 0

    if (leftFlapRef.current) {
      leftFlapRef.current.rotation.y += (leftTarget - leftFlapRef.current.rotation.y) * delta * 3.5
    }
    if (rightFlapRef.current) {
      rightFlapRef.current.rotation.y += (rightTarget - rightFlapRef.current.rotation.y) * delta * 3.5
    }
  })

  return (
    <group ref={cardGroupRef} position={[0, 1.8, 0]}>
      {/* 3D Invitation Back Base Panel (Cream Paper Material) */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 4.4, 0.06]} />
        <meshStandardMaterial color="#F5EFEB" roughness={0.7} metalness={0.08} />
      </mesh>
      {/* Outer Gold Foil Trim Border */}
      <mesh position={[0, 0, 0.032]}>
        <boxGeometry args={[3.24, 4.44, 0.01]} />
        <GoldMaterial emissiveIntensity={0.35} />
      </mesh>

      {/* INSIDE PANEL REVEAL (Rendered when open) */}
      {isOpen && (
        <Html position={[0, 0, 0.06]} center distanceFactor={8} className="invitation-inside-card">
          <div className="invitation-inside">
            <div className="invitation-inside__header">~ YOU ARE CORDIALLY INVITED ~</div>
            <h1 className="invitation-inside__names">HEMAL &amp; AAYUSHI</h1>
            <div className="invitation-inside__divider">
              <span className="line" />
              <span className="symbol">❖</span>
              <span className="line" />
            </div>
            <div className="invitation-inside__title">OUR WEDDING</div>
            <div className="invitation-inside__date">25 DECEMBER 2026</div>
            <div className="invitation-inside__prompt">[ TAP FOR EVENT DETAILS ]</div>
          </div>
        </Html>
      )}

      {/* LEFT FLAP HINGE (Opens outwards left) */}
      <group position={[-1.6, 0, 0.035]} ref={leftFlapRef}>
        <mesh position={[0.8, 0, 0]}>
          <boxGeometry args={[1.6, 4.38, 0.04]} />
          <meshStandardMaterial color="#F5EFEB" roughness={0.7} metalness={0.08} />
        </mesh>
        <mesh position={[0.8, 0, 0.022]}>
          <boxGeometry args={[1.62, 4.4, 0.01]} />
          <GoldMaterial emissiveIntensity={0.3} />
        </mesh>

        {/* Left Flap Front Embossed Crest Seal */}
        {!isOpen && (
          <group position={[1.5, 0, 0.03]}>
            <mesh>
              <cylinderGeometry args={[0.35, 0.35, 0.04, 24]} rotation={[Math.PI / 2, 0, 0]} />
              <GoldMaterial emissiveIntensity={0.6} />
            </mesh>
            <mesh position={[0, 0, 0.025]}>
              <sphereGeometry args={[0.12, 12, 12]} />
              <GoldMaterial emissiveIntensity={0.8} />
            </mesh>
          </group>
        )}
      </group>

      {/* RIGHT FLAP HINGE (Opens outwards right) */}
      <group position={[1.6, 0, 0.035]} ref={rightFlapRef}>
        <mesh position={[-0.8, 0, 0]}>
          <boxGeometry args={[1.6, 4.38, 0.04]} />
          <meshStandardMaterial color="#F5EFEB" roughness={0.7} metalness={0.08} />
        </mesh>
        <mesh position={[-0.8, 0, 0.022]}>
          <boxGeometry args={[1.62, 4.4, 0.01]} />
          <GoldMaterial emissiveIntensity={0.3} />
        </mesh>
      </group>

      {/* FLOATING TAP TO OPEN PROMPT BUTTON WHEN CLOSED */}
      {!isOpen && (
        <Html position={[0, -2.6, 0.1]} center distanceFactor={8.5}>
          <button type="button" onClick={onToggle} className="invitation-open-btn">
            OPEN INVITATION
          </button>
        </Html>
      )}
    </group>
  )
}
