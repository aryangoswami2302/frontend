import { palette } from '../../config/theme'

export function StoneMaterial({ color = palette.stone, emissiveIntensity = 0.035, roughness = 0.86, metalness = 0.12 }) {
  return (
    <meshStandardMaterial
      color={color}
      roughness={roughness}
      metalness={metalness}
      emissive={palette.burgundy}
      emissiveIntensity={emissiveIntensity}
    />
  )
}

export function GoldMaterial({
  color = palette.champagne,
  emissiveIntensity = 0.28,
  roughness = 0.28,
  metalness = 0.85,
  transparent = false,
  opacity = 1,
}) {
  return (
    <meshStandardMaterial
      color={color}
      roughness={roughness}
      metalness={metalness}
      emissive={color}
      emissiveIntensity={emissiveIntensity}
      transparent={transparent}
      opacity={opacity}
    />
  )
}

export function TimberMaterial({ color = palette.timber, roughness = 0.72, metalness = 0.16 }) {
  return (
    <meshStandardMaterial
      color={color}
      roughness={roughness}
      metalness={metalness}
      emissive={palette.burgundy}
      emissiveIntensity={0.06}
    />
  )
}

export function JaliMaterial({ opacity = 0.75, emissiveIntensity = 0.35 }) {
  return (
    <meshStandardMaterial
      color={palette.champagne}
      roughness={0.4}
      metalness={0.7}
      emissive={palette.champagne}
      emissiveIntensity={emissiveIntensity}
      transparent
      opacity={opacity}
      side={2} // THREE.DoubleSide
    />
  )
}

export function WarmGlowMaterial({ color = '#FFB347', intensity = 2.2 }) {
  return (
    <meshBasicMaterial
      color={color}
      transparent
      opacity={0.85}
    />
  )
}
