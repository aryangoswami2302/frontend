import { useState, useCallback } from 'react'
import { Html } from '@react-three/drei'
import { submitRsvpToFirestore } from '../../services/firebase'
import { SubtleParticles } from '../effects/SubtleParticles'
import { palette } from '../../config/theme'

export function SceneRsvp() {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState('2')
  const [attendance, setAttendance] = useState("I'll be there")
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [validationError, setValidationError] = useState('')

  const handleSubmit = useCallback(
    async (e) => {
      e?.preventDefault()

      if (!name.trim()) {
        setValidationError('Please enter your full name')
        return
      }

      setValidationError('')
      setStatus('loading')

      try {
        const res = await submitRsvpToFirestore({ name, guests, attendance })
        if (res.success) {
          setStatus('success')
        } else {
          setStatus('error')
        }
      } catch (err) {
        console.error('RSVP submission error:', err)
        setStatus('error')
      }
    },
    [name, guests, attendance],
  )

  return (
    <group position={[0, 0, 0]}>
      {/* Calm 3D Background Atmosphere */}
      <fog attach="fog" args={[palette.void, 12, 45]} />
      <color attach="background" args={[palette.void]} />

      <ambientLight color={palette.antique} intensity={0.25} />
      <directionalLight color={palette.champagne} intensity={1.1} position={[0, 6, 6]} />
      <pointLight color="#FFB347" intensity={2.8} position={[0, 2.5, 3.0]} distance={14} />

      {/* 3D Integrated RSVP Card & Confirmation Interface */}
      <Html position={[0, 1.8, 2.0]} center distanceFactor={8.5} className="rsvp-card-container">
        <div className="rsvp-card">
          {status === 'success' ? (
            <div className="rsvp-success-card">
              <div className="rsvp-success__sparkle">✦</div>
              <h2 className="rsvp-success__heading">THANK YOU</h2>
              <div className="rsvp-success__line" />
              <p className="rsvp-success__message">"Your place in our story is reserved."</p>
              <div className="rsvp-success__sub">WE CANNOT WAIT TO CELEBRATE WITH YOU</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rsvp-form">
              <h2 className="rsvp-form__title">Will you join us?</h2>
              <div className="rsvp-form__subtitle">HEMAL &amp; AAYUSHI'S WEDDING</div>
              <div className="rsvp-form__divider" />

              {validationError && <div className="rsvp-form__error">{validationError}</div>}
              {status === 'error' && (
                <div className="rsvp-form__error">Submission failed. Please try again.</div>
              )}

              {/* Field 1: Name */}
              <div className="rsvp-form__group">
                <label htmlFor="rsvp-name" className="rsvp-form__label">
                  YOUR NAME
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rsvp-form__input"
                  disabled={status === 'loading'}
                />
              </div>

              {/* Field 2: Number of Guests */}
              <div className="rsvp-form__group">
                <label htmlFor="rsvp-guests" className="rsvp-form__label">
                  NUMBER OF GUESTS
                </label>
                <select
                  id="rsvp-guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="rsvp-form__select"
                  disabled={status === 'loading'}
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={`guest-${num}`} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 3: Attendance */}
              <div className="rsvp-form__group">
                <span className="rsvp-form__label">ATTENDANCE</span>
                <div className="rsvp-form__options">
                  <label
                    className={`rsvp-form__option ${attendance === "I'll be there" ? 'is-active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="I'll be there"
                      checked={attendance === "I'll be there"}
                      onChange={(e) => setAttendance(e.target.value)}
                    />
                    I'll be there
                  </label>

                  <label
                    className={`rsvp-form__option ${attendance === "Sorry, can't make it" ? 'is-active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="Sorry, can't make it"
                      checked={attendance === "Sorry, can't make it"}
                      onChange={(e) => setAttendance(e.target.value)}
                    />
                    Sorry, can't make it
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`rsvp-form__submit ${status === 'loading' ? 'is-loading' : ''}`}
              >
                {status === 'loading' ? 'RESERVING YOUR PLACE...' : 'CONFIRM RSVP'}
              </button>
            </form>
          )}
        </div>
      </Html>

      {/* Subtle Floating Gold Particles */}
      <SubtleParticles count={200} />
    </group>
  )
}
