import { useCallback, useEffect, useRef, useState } from 'react'
import { MusicPlayerContext } from './MusicPlayerContext'
import { useMusicPlayer } from './useMusicPlayer'

const MUSIC_SOURCE = '/music/gud-nalon-ishq-mitha.mp3'
const DEFAULT_VOLUME = 0.5
const FADE_DURATION = 1200

export function MusicPlayerProvider({ children, startAt = 0 }) {
  const audioRef = useRef(null)
  const fadeFrameRef = useRef(null)
  const pendingSeekRef = useRef(null)
  const hasStartedRef = useRef(false)
  const resumeOnReturnRef = useRef(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showHint, setShowHint] = useState(true)

  const fadeIn = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    window.cancelAnimationFrame(fadeFrameRef.current)
    audio.volume = 0
    const startedAt = performance.now()

    const step = (now) => {
      const progress = Math.min((now - startedAt) / FADE_DURATION, 1)
      audio.volume = DEFAULT_VOLUME * progress
      if (progress < 1) fadeFrameRef.current = window.requestAnimationFrame(step)
    }

    fadeFrameRef.current = window.requestAnimationFrame(step)
  }, [])

  const startMusic = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if (!hasStartedRef.current) {
      hasStartedRef.current = true
      audio.volume = 0
      try {
        audio.currentTime = Math.max(0, startAt)
      } catch {
        pendingSeekRef.current = Math.max(0, startAt)
      }
    }

    // Call play() directly from the guest's tap to satisfy mobile autoplay policies.
    try {
      const playback = audio.play()
      playback.then(() => {
        setIsPlaying(true)
        if (audio.volume === 0) fadeIn()
      }).catch((error) => {
        console.warn('Background music could not start:', error)
        setIsPlaying(false)
      })
    } catch (error) {
      console.warn('Background music could not start:', error)
      setIsPlaying(false)
    }
  }, [fadeIn, startAt])

  const toggleMusic = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      if (!hasStartedRef.current) {
        startMusic()
        return
      }
      try {
        audio.play().then(() => {
          setIsPlaying(true)
          if (audio.volume === 0) fadeIn()
        }).catch((error) => {
          console.warn('Background music could not resume:', error)
        })
      } catch (error) {
        console.warn('Background music could not resume:', error)
      }
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }, [fadeIn, startMusic])

  useEffect(() => {
    const hintTimer = window.setTimeout(() => setShowHint(false), 5000)
    return () => {
      window.clearTimeout(hintTimer)
      window.cancelAnimationFrame(fadeFrameRef.current)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return undefined

    const seekWhenReady = () => {
      if (pendingSeekRef.current === null) return
      audio.currentTime = Math.min(pendingSeekRef.current, Math.max(0, audio.duration - 0.1))
      pendingSeekRef.current = null
    }

    const restartFromStartAt = () => {
      audio.currentTime = Math.min(startAt, Math.max(0, audio.duration - 0.1))
      audio.play().then(() => setIsPlaying(true)).catch((error) => {
        console.warn('Background music could not restart:', error)
        setIsPlaying(false)
      })
    }

    const pauseWhileHidden = () => {
      if (document.hidden) {
        resumeOnReturnRef.current = !audio.paused
        if (resumeOnReturnRef.current) {
          audio.pause()
          setIsPlaying(false)
        }
      } else if (resumeOnReturnRef.current) {
        resumeOnReturnRef.current = false
        try {
          audio.play().then(() => setIsPlaying(true)).catch((error) => {
            console.warn('Background music could not resume:', error)
          })
        } catch (error) {
          console.warn('Background music could not resume:', error)
        }
      }
    }

    audio.addEventListener('loadedmetadata', seekWhenReady)
    audio.addEventListener('ended', restartFromStartAt)
    document.addEventListener('visibilitychange', pauseWhileHidden)
    window.addEventListener('pageshow', pauseWhileHidden)
    return () => {
      audio.removeEventListener('loadedmetadata', seekWhenReady)
      audio.removeEventListener('ended', restartFromStartAt)
      document.removeEventListener('visibilitychange', pauseWhileHidden)
      window.removeEventListener('pageshow', pauseWhileHidden)
    }
  }, [startAt])

  return (
    <MusicPlayerContext.Provider value={{ startMusic, toggleMusic, isPlaying, showHint }}>
      {children}
      <audio ref={audioRef} src={MUSIC_SOURCE} preload="metadata" playsInline />
    </MusicPlayerContext.Provider>
  )
}

export function MusicPlayer() {
  const { toggleMusic, isPlaying, showHint } = useMusicPlayer()

  return (
    <div className="music-player">
      {showHint && <span className="music-player__hint">Tap to play music</span>}
      <button
        className={`music-player__button${isPlaying ? ' is-playing' : ''}`}
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        aria-pressed={isPlaying}
      >
        <span className={`music-player__icon${isPlaying ? '' : ' is-paused'}`} aria-hidden="true">
          {isPlaying ? '♫' : '▶'}
        </span>
      </button>
    </div>
  )
}