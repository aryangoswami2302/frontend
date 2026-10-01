import { fog, lighting, palette } from '../../config/theme'
import { SubtleParticles } from '../effects/SubtleParticles'

export function SceneDarkEnvironment() {
  return (
    <group>
      <fog attach="fog" args={[fog.color, fog.near, fog.far]} />
      <color attach="background" args={[palette.void]} />

      <ambientLight color={lighting.ambient.color} intensity={lighting.ambient.intensity} />
      <directionalLight
        color={lighting.key.color}
        intensity={lighting.key.intensity}
        position={lighting.key.position}
      />
      <pointLight
        color={lighting.rim.color}
        intensity={lighting.rim.intensity}
        position={lighting.rim.position}
        distance={28}
        decay={2}
      />
      <pointLight
        color={lighting.fill.color}
        intensity={lighting.fill.intensity}
        position={lighting.fill.position}
        distance={18}
        decay={2}
      />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow={false}>
        <circleGeometry args={[22, 48]} />
        <meshStandardMaterial
          color={palette.void}
          roughness={0.92}
          metalness={0.08}
          emissive={palette.burgundy}
          emissiveIntensity={0.04}
        />
      </mesh>

      <mesh position={[0, 0.015, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.15, 1.28, 64]} />
        <meshStandardMaterial
          color={palette.champagne}
          emissive={palette.champagne}
          emissiveIntensity={0.45}
          metalness={0.7}
          roughness={0.28}
          transparent
          opacity={0.55}
        />
      </mesh>

      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.4, 2.48, 64]} />
        <meshStandardMaterial
          color={palette.antique}
          emissive={palette.burgundy}
          emissiveIntensity={0.2}
          metalness={0.55}
          roughness={0.4}
          transparent
          opacity={0.32}
        />
      </mesh>

      <mesh position={[0, 3.4, -6]}>
        <planeGeometry args={[28, 14]} />
        <meshBasicMaterial color={palette.void} />
      </mesh>

      <SubtleParticles />
    </group>
  )
}
