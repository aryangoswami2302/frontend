import { useState, useCallback } from 'react'
import { IndianWeddingMandap } from '../objects/IndianWeddingMandap'
import { MandapTitleSequence } from '../interaction/MandapTitleSequence'
import { SubtleParticles } from '../effects/SubtleParticles'
import { palette } from '../../config/theme'

export function SceneWeddingMandap() {
  const [step, setStep] = useState(0)

  const handleStepChange = useCallback((newStep) => {
    setStep(newStep)
  }, [])

  return (
    <group position={[0, 0, 0]}>
      {/* Dark Void Fog & Atmosphere */}
      <fog attach="fog" args={[palette.void, 14, 48]} />
      <color attach="background" args={[palette.void]} />

      {/* Cinematic Lighting System */}
      <ambientLight color={palette.antique} intensity={0.22} />
      <directionalLight
        color={palette.champagne}
        intensity={1.25}
        position={[4, 8, 6]}
      />
      <spotLight
        color="#FFA834"
        intensity={step >= 1 ? 3.6 : 2.4}
        position={[0, 9.5, 0]}
        angle={Math.PI / 3}
        penumbra={0.7}
        distance={20}
      />
      <pointLight
        color={palette.burgundy}
        intensity={0.45}
        position={[-6, 4, -6]}
        distance={22}
      />

      {/* Dedicated Golden Light Spot for 3D Movie Title Sequence */}
      <pointLight
        color="#FFB347"
        intensity={step >= 4 ? 4.2 : step >= 1 ? 2.8 : 0.8}
        position={[0, 2.6, 2.8]}
        distance={10}
        decay={1.8}
      />

      {/* Polished Ground Reflection Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <circleGeometry args={[26, 48]} />
        <meshStandardMaterial
          color={palette.void}
          roughness={0.88}
          metalness={0.12}
          emissive={palette.burgundy}
          emissiveIntensity={0.03}
        />
      </mesh>

      {/* Main 3D Wedding Mandap Environment Structure */}
      <IndianWeddingMandap />

      {/* Cinematic Movie Title Sequence: Hemal & Aayushi, OUR WEDDING, 25 DECEMBER 2026 */}
      <MandapTitleSequence onStepChange={handleStepChange} />

      {/* Floating Shimmer Particles */}
      <SubtleParticles count={280} />
    </group>
  )
}
