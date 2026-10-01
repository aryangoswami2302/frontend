import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { FOUNDATION_SCENE } from '../config/experience'

const ExperienceContext = createContext(null)

export function ExperienceProvider({ children }) {
  const [sceneId, setSceneId] = useState(FOUNDATION_SCENE)
  const [qualityTier, setQualityTier] = useState('high')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // 1. Mobile screen detection
    const mobileWidth = window.innerWidth <= 768
    setIsMobile(mobileWidth)

    // 2. Hardware capability detection for low-end devices / Android
    const isAndroid = /Android/i.test(navigator.userAgent)
    const cores = navigator.hardwareConcurrency || 4
    const memory = navigator.deviceMemory || 4

    let tier = 'high'
    if (mobileWidth || isAndroid || cores <= 4 || memory <= 4) {
      tier = 'low'
    } else if (window.innerWidth <= 1024 || cores <= 6) {
      tier = 'medium'
    }

    setQualityTier(tier)

    const handleResize = () => {
      const isMob = window.innerWidth <= 768
      setIsMobile(isMob)
      if (isMob && qualityTier !== 'low') {
        setQualityTier('low')
      }
    }

    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [qualityTier])

  const particleMultiplier = useMemo(() => {
    if (qualityTier === 'low') return 0.38
    if (qualityTier === 'medium') return 0.65
    return 1.0
  }, [qualityTier])

  const value = useMemo(
    () => ({
      sceneId,
      setSceneId,
      qualityTier,
      setQualityTier,
      isMobile,
      particleMultiplier,
    }),
    [sceneId, qualityTier, isMobile, particleMultiplier],
  )

  return <ExperienceContext.Provider value={value}>{children}</ExperienceContext.Provider>
}

export function useExperience() {
  const context = useContext(ExperienceContext)
  if (!context) {
    throw new Error('useExperience must be used inside ExperienceProvider')
  }
  return context
}
