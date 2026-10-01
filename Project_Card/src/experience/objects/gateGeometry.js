import { useMemo } from 'react'
import * as THREE from 'three'

/**
 * Creates the outer gateway wall shape with an authentic Indian cusped (scalloped) arch cutout.
 */
export function createCuspedGatewayShape() {
  const shape = new THREE.Shape()
  const outerW = 3.65
  const outerH = 6.2

  // Outer frame rect
  shape.moveTo(-outerW, 0)
  shape.lineTo(-outerW, outerH)
  shape.lineTo(outerW, outerH)
  shape.lineTo(outerW, 0)
  shape.closePath()

  // Inner cutout: Indian multi-foil scalloped arch
  const hole = new THREE.Path()
  const w = 1.38
  const springH = 2.65
  const peakH = 4.65

  hole.moveTo(-w, 0)
  hole.lineTo(-w, springH)

  // 5-cusp scalloped arch path
  // Left lower scallop
  hole.bezierCurveTo(-w, springH + 0.45, -w + 0.25, springH + 0.75, -w + 0.38, springH + 0.95)
  // Left mid scallop
  hole.bezierCurveTo(-w + 0.52, springH + 1.15, -0.65, peakH - 0.65, -0.48, peakH - 0.45)
  // Center lotus arch peak
  hole.bezierCurveTo(-0.25, peakH - 0.18, 0, peakH + 0.15, 0, peakH + 0.22)
  hole.bezierCurveTo(0, peakH + 0.15, 0.25, peakH - 0.18, 0.48, peakH - 0.45)
  // Right mid scallop
  hole.bezierCurveTo(0.65, peakH - 0.65, w - 0.52, springH + 1.15, w - 0.38, springH + 0.95)
  // Right lower scallop
  hole.bezierCurveTo(w - 0.25, springH + 0.75, w, springH + 0.45, w, springH)

  hole.lineTo(w, 0)
  hole.closePath()

  shape.holes.push(hole)
  return shape
}

/**
 * Creates a decorative 3D moulding curve that highlights the inner scalloped arch line.
 */
export function createCuspedArchCurveShape() {
  const shape = new THREE.Shape()
  const w = 1.38
  const springH = 2.65
  const peakH = 4.65
  const thickness = 0.14

  // Outer curve path
  shape.moveTo(-w - thickness, 0)
  shape.lineTo(-w - thickness, springH)
  shape.bezierCurveTo(-w - thickness, springH + 0.5, -w + 0.15, springH + 0.85, -w + 0.28, springH + 1.05)
  shape.bezierCurveTo(-w + 0.42, springH + 1.25, -0.75, peakH - 0.55, -0.55, peakH - 0.32)
  shape.bezierCurveTo(-0.3, peakH - 0.05, 0, peakH + 0.32, 0, peakH + 0.4)
  shape.bezierCurveTo(0, peakH + 0.32, 0.3, peakH - 0.05, 0.55, peakH - 0.32)
  shape.bezierCurveTo(0.75, peakH - 0.55, w - 0.42, springH + 1.25, w - 0.28, springH + 1.05)
  shape.bezierCurveTo(w - 0.15, springH + 0.85, w + thickness, springH + 0.5, w + thickness, springH)
  shape.lineTo(w + thickness, 0)
  shape.lineTo(w, 0)

  // Inner cutout (same as arch opening)
  shape.lineTo(w, springH)
  shape.bezierCurveTo(w - 0.25, springH + 0.45, w - 0.38, springH + 0.95, w - 0.52, springH + 1.15)
  shape.bezierCurveTo(-0.65, peakH - 0.65, 0.48, peakH - 0.45, 0, peakH + 0.22)
  shape.bezierCurveTo(0, peakH + 0.22, -0.48, peakH - 0.45, -0.65, peakH - 0.65)
  shape.bezierCurveTo(-w + 0.52, springH + 1.15, -w + 0.38, springH + 0.95, -w + 0.25, springH + 0.45)
  shape.lineTo(-w, springH)
  shape.lineTo(-w, 0)
  shape.closePath()

  return shape
}

/**
 * Creates an Indian Chhatri onion dome profile geometry.
 */
export function createOnionDomeGeometry(radius = 0.55, height = 0.9, segments = 32) {
  const points = []
  const numPoints = 20

  for (let i = 0; i <= numPoints; i += 1) {
    const t = i / numPoints
    let r = 0
    let y = t * height

    if (t < 0.15) {
      // Base flared neck ring
      r = radius * (0.8 + 0.2 * (t / 0.15))
    } else if (t < 0.6) {
      // Swollen bulbous middle curve
      const angle = ((t - 0.15) / 0.45) * Math.PI
      r = radius * (1 + 0.28 * Math.sin(angle))
    } else {
      // Tapering lotus tip spire point
      const angle = ((t - 0.6) / 0.4) * (Math.PI / 2)
      r = radius * 1.28 * Math.cos(angle)
    }

    points.push(new THREE.Vector2(Math.max(r, 0.001), y))
  }

  return new THREE.LatheGeometry(points, segments)
}

/**
 * Hook for memoized gateway shapes.
 */
export function useGatewayShape() {
  return useMemo(() => ({
    gatewayShape: createCuspedGatewayShape(),
    archMouldingShape: createCuspedArchCurveShape(),
    onionDomeGeometry: createOnionDomeGeometry(),
  }), [])
}

export const gateExtrude = {
  depth: 0.68,
  bevelEnabled: true,
  bevelThickness: 0.05,
  bevelSize: 0.032,
  bevelSegments: 2,
  curveSegments: 24,
}

export const trimExtrude = {
  depth: 0.08,
  bevelEnabled: true,
  bevelThickness: 0.02,
  bevelSize: 0.015,
  bevelSegments: 1,
  curveSegments: 24,
}
