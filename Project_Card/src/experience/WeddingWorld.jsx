import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr, PerformanceMonitor } from '@react-three/drei'
import { Experience } from './Experience'
import { palette } from '../config/theme'

export function WeddingWorld({ onCreated }) {
  return (
    <Canvas
      className="wedding-canvas"
      dpr={[1, 1.5]}
      performance={{ min: 0.5, max: 1, debounce: 200 }}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
        stencil: false,
      }}
      camera={{ fov: 38, near: 0.1, far: 80, position: [0, 1.2, 16] }}
      onCreated={({ gl }) => {
        gl.setClearColor(palette.void, 1)
        onCreated?.()
      }}
    >
      <PerformanceMonitor />
      <AdaptiveDpr pixelated={false} />
      <Experience />
    </Canvas>
  )
}
