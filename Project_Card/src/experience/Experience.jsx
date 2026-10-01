import { Suspense, useCallback } from 'react'
import { Html, RoundedBox, Sparkles } from '@react-three/drei'
import { CinematicCamera } from './camera/CinematicCamera'
import { useExperience } from './ExperienceContext'
import { SCENE_IDS, weddingData } from '../config/experience'
import { palette } from '../config/theme'

function StoryButton({ label, onClick, variant = 'primary' }) {
  return (
    <Html position={[0, -1.6, 0.8]} center className="story-action">
      <button type="button" className={variant === 'primary' ? 'story-button' : 'story-button story-button--muted'} onClick={onClick}>
        {label}
      </button>
    </Html>
  )
}

function Floor({ color = '#100d0b' }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.08, 0]} receiveShadow>
      <planeGeometry args={[52, 52]} />
      <meshStandardMaterial color={color} roughness={0.96} metalness={0.04} />
    </mesh>
  )
}

function StoneArch({ openAmount = 0, accent = 0.45, stage = 'arrival' }) {
  const leftDoorX = -1.4 + openAmount * 1.1
  const rightDoorX = 1.4 - openAmount * 1.1

  return (
    <group position={[0, 0.35, -3.2]}>
      <mesh position={[0, 2.6, 0.15]}>
        <boxGeometry args={[5, 0.3, 0.52]} />
        <meshStandardMaterial color="#201a18" roughness={0.92} metalness={0.05} />
      </mesh>
      <mesh position={[-2.25, 1.2, 0.15]}>
        <boxGeometry args={[0.42, 3.0, 0.52]} />
        <meshStandardMaterial color="#1a1514" roughness={0.95} metalness={0.04} />
      </mesh>
      <mesh position={[2.25, 1.2, 0.15]}>
        <boxGeometry args={[0.42, 3.0, 0.52]} />
        <meshStandardMaterial color="#1a1514" roughness={0.95} metalness={0.04} />
      </mesh>
      <mesh position={[-1.1, 1.1, 0.2]} rotation={[0, 0.04, 0]}>
        <boxGeometry args={[1.1, 2.7, 0.2]} />
        <meshStandardMaterial color="#100d0b" roughness={0.93} metalness={0.03} />
      </mesh>
      <mesh position={[1.1, 1.1, 0.2]} rotation={[0, -0.04, 0]}>
        <boxGeometry args={[1.1, 2.7, 0.2]} />
        <meshStandardMaterial color="#100d0b" roughness={0.93} metalness={0.03} />
      </mesh>
      <mesh position={[-1.15 + openAmount * 0.75, 1.5, 0.45]}>
        <boxGeometry args={[1.3, 2.5, 0.08]} />
        <meshStandardMaterial color="#241d1a" roughness={0.8} metalness={0.08} />
      </mesh>
      <mesh position={[1.15 - openAmount * 0.75, 1.5, 0.45]}>
        <boxGeometry args={[1.3, 2.5, 0.08]} />
        <meshStandardMaterial color="#241d1a" roughness={0.8} metalness={0.08} />
      </mesh>
      <mesh position={[0, 2.35, 0.7]}>
        <boxGeometry args={[3.45, 0.35, 0.18]} />
        <meshStandardMaterial color="#cab17c" roughness={0.52} metalness={0.7} />
      </mesh>
      <pointLight color="#d7b276" intensity={stage === 'arrival' ? 10 : 18} position={[0, 2.6, 2.5]} distance={12} decay={2} />
      <mesh position={[0, 1.1, 1.15]}>
        <boxGeometry args={[2.7, 1.4, 0.04]} />
        <meshStandardMaterial color="#d7b276" emissive="#b98c4c" emissiveIntensity={accent * 0.5} transparent opacity={0.15 + accent * 0.18} />
      </mesh>
      <mesh position={[0, 0.45, 1.7]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 3.6]} />
        <meshStandardMaterial color="#11100e" transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

function LuxuryMandap() {
  return (
    <group position={[0, -0.1, 0]}>
      <Floor color="#120d0b" />
      <mesh position={[0, 0.18, 0]}>
        <cylinderGeometry args={[4.4, 4.9, 0.45, 52]} />
        <meshStandardMaterial color="#1a1513" roughness={0.9} metalness={0.08} />
      </mesh>
      <mesh position={[0, 3.3, 0]}>
        <cylinderGeometry args={[3.6, 3.4, 0.16, 52]} />
        <meshStandardMaterial color="#d3b078" roughness={0.38} metalness={0.88} />
      </mesh>
      {[-2.4, 2.4].map((x) => (
        <group key={x}>
          <mesh position={[x, 1.6, -2.1]}>
            <boxGeometry args={[0.28, 3.2, 0.28]} />
            <meshStandardMaterial color="#2b221d" roughness={0.82} metalness={0.08} />
          </mesh>
          <mesh position={[x, 1.6, 2.1]}>
            <boxGeometry args={[0.28, 3.2, 0.28]} />
            <meshStandardMaterial color="#2b221d" roughness={0.82} metalness={0.08} />
          </mesh>
        </group>
      ))}
      {[-1.8, 1.8].map((x) => (
        <mesh key={x} position={[x, 3.1, 0]}>
          <boxGeometry args={[0.2, 1.1, 4.6]} />
          <meshStandardMaterial color="#d7b276" roughness={0.38} metalness={0.85} />
        </mesh>
      ))}
      <mesh position={[0, 5.1, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[3.7, 1.7, 6]} />
        <meshStandardMaterial color="#2a201d" roughness={0.84} metalness={0.12} />
      </mesh>
      <mesh position={[0, 4.8, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[1.3, 1.3, 0.12, 42]} />
        <meshStandardMaterial color="#d7b276" roughness={0.34} metalness={0.87} />
      </mesh>
      <Sparkles count={18} scale={[8, 5, 8]} size={2.3} color="#d8b67d" speed={0.2} opacity={0.7} />
      <pointLight color="#d8b67d" intensity={8} position={[0, 5, 1.5]} distance={18} />
    </group>
  )
}

function InvitationObject({ open = false, onClick }) {
  return (
    <group position={[0, 0.2, 0]} rotation={[0.35, 0.4, 0]}>
      <RoundedBox args={[2.2, 3.1, 0.08]} radius={0.05} smoothness={4} onClick={onClick} castShadow receiveShadow>
        <meshStandardMaterial color="#f4ebdd" roughness={0.8} metalness={0.04} />
      </RoundedBox>
      <mesh position={[0, 0.18, 0.05]}>
        <boxGeometry args={[1.9, 2.5, 0.02]} />
        <meshStandardMaterial color="#f8f1e5" roughness={0.9} metalness={0.04} />
      </mesh>
      <mesh position={[0, -0.7, 0.06]}>
        <boxGeometry args={[1.2, 0.02, 0.02]} />
        <meshStandardMaterial color="#b89a5a" metalness={0.9} roughness={0.22} />
      </mesh>
      <mesh position={[0, 0.65, 0.06]}>
        <boxGeometry args={[1.5, 0.04, 0.02]} />
        <meshStandardMaterial color="#b89a5a" metalness={0.9} roughness={0.22} />
      </mesh>
      {open && (
        <mesh position={[0, 0, 0.12]}>
          <planeGeometry args={[1.7, 2.2]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      )}
    </group>
  )
}

function DarkScene() {
  const { sceneId, setSceneId } = useExperience()

  const handleEnter = useCallback(() => {
    if (sceneId !== SCENE_IDS.WEDDING_GATE && sceneId !== SCENE_IDS.DARK_ENVIRONMENT) return
    setSceneId(SCENE_IDS.GATE_ACTIVATION)
    const timer1 = window.setTimeout(() => setSceneId(SCENE_IDS.GATE_OPENING), 700)
    const timer2 = window.setTimeout(() => setSceneId(SCENE_IDS.THROUGH_THE_GATE), 2200)
    const timer3 = window.setTimeout(() => setSceneId(SCENE_IDS.GLOWING_MANDALA), 4000)
    return () => {
      window.clearTimeout(timer1)
      window.clearTimeout(timer2)
      window.clearTimeout(timer3)
    }
  }, [sceneId, setSceneId])

  return (
    <>
      <fog attach="fog" args={[palette.void, 16, 42]} />
      <color attach="background" args={[palette.void]} />
      <ambientLight color="#8f775e" intensity={0.25} />
      <directionalLight color="#d8b67d" position={[0, 5, 6]} intensity={0.9} />
      <pointLight color="#d7b276" intensity={18} position={[0, 1.4, 5]} distance={12} decay={2} />
      <Floor color="#0b0908" />
      <StoneArch openAmount={sceneId === SCENE_IDS.GATE_OPENING ? 0.83 : sceneId === SCENE_IDS.THROUGH_THE_GATE ? 1 : 0.18} accent={sceneId === SCENE_IDS.GATE_ACTIVATION ? 0.7 : 0.4} stage="arrival" />
      <Sparkles count={30} scale={[12, 7, 12]} color="#d0a868" size={2.5} speed={0.18} opacity={0.6} />
      {sceneId !== SCENE_IDS.GATE_ACTIVATION && sceneId !== SCENE_IDS.GATE_OPENING && sceneId !== SCENE_IDS.THROUGH_THE_GATE && (
        <Html position={[0, 3.1, 0]} center distanceFactor={12} className="story-annotation">
          <div className="cinematic-caption">
            <span className="caption-line">Two stories</span>
            <span className="caption-line caption-line--secondary">One beginning</span>
          </div>
        </Html>
      )}
      {sceneId === SCENE_IDS.DARK_ENVIRONMENT || sceneId === SCENE_IDS.WEDDING_GATE ? (
        <Html position={[0, -1.55, 1.5]} center distanceFactor={10} className="story-action">
          <button type="button" className="story-button" onClick={handleEnter}>Enter the story</button>
        </Html>
      ) : null}
    </>
  )
}

function RevealScene() {
  const { sceneId } = useExperience()
  const isOpen = sceneId === SCENE_IDS.GATE_OPENING || sceneId === SCENE_IDS.THROUGH_THE_GATE

  return (
    <>
      <fog attach="fog" args={[palette.void, 11, 30]} />
      <color attach="background" args={[palette.void]} />
      <ambientLight color="#8e775f" intensity={0.4} />
      <directionalLight color="#f0d9a9" position={[0, 6, 4]} intensity={1.2} />
      <pointLight color="#d49c4d" intensity={10} position={[0, 2.2, 3.0]} distance={14} />
      <Floor color="#0f0d0c" />
      <StoneArch openAmount={isOpen ? 1 : 0.58} accent={isOpen ? 1 : 0.75} stage="reveal" />
      <Sparkles count={18} scale={[10, 7, 10]} color="#d7b276" size={2} speed={0.28} opacity={0.75} />
    </>
  )
}

function CoupleScene() {
  const { setSceneId } = useExperience()

  return (
    <>
      <fog attach="fog" args={[palette.void, 9, 28]} />
      <color attach="background" args={[palette.void]} />
      <ambientLight color="#8d6f4a" intensity={0.42} />
      <directionalLight color="#f3ddbb" position={[0, 6, 6]} intensity={1.05} />
      <pointLight color="#d6a86f" intensity={14} position={[0, 2.8, 4]} distance={16} />
      <Floor color="#120d0b" />
      <LuxuryMandap />
      <Html position={[0, 2.8, 0]} center distanceFactor={11} className="luxury-couple" >
        <div className="couple-card">
          <span className="couple-kicker">Are getting married</span>
          <div className="couple-name-row">
            <span>{weddingData.couple.groom}</span>
            <span className="couple-ampersand">&</span>
            <span>{weddingData.couple.bride}</span>
          </div>
          <div className="couple-divider" />
          <span className="couple-date">{weddingData.wedding.date}</span>
        </div>
      </Html>
      <StoryButton label="Continue" onClick={() => setSceneId(SCENE_IDS.WEDDING_MANDAP)} />
    </>
  )
}

function MandapScene() {
  const { setSceneId } = useExperience()

  return (
    <>
      <fog attach="fog" args={[palette.void, 10, 34]} />
      <color attach="background" args={[palette.void]} />
      <ambientLight color="#78614d" intensity={0.52} />
      <directionalLight color="#f2d7ab" position={[0, 7, 7]} intensity={1.1} />
      <pointLight color="#d7b276" intensity={12} position={[0, 4.7, 3]} distance={18} />
      <Floor color="#100b09" />
      <LuxuryMandap />
      <Html position={[0, 6.1, 0]} center distanceFactor={12} className="story-annotation">
        <div className="cinematic-caption cinematic-caption--small">
          <span className="caption-line">A quiet beginning</span>
        </div>
      </Html>
      <StoryButton label="Open invitation" onClick={() => setSceneId(SCENE_IDS.INVITATION)} />
    </>
  )
}

function InvitationScene() {
  const { sceneId, setSceneId } = useExperience()
  const isOpened = sceneId === SCENE_IDS.INVITATION_OPEN

  return (
    <>
      <fog attach="fog" args={[palette.void, 10, 32]} />
      <color attach="background" args={[palette.void]} />
      <ambientLight color="#8c7157" intensity={0.45} />
      <directionalLight color="#f2d7a7" position={[3, 7, 5]} intensity={1.1} />
      <pointLight color="#d4a868" intensity={9} position={[0, 2.8, 3]} distance={12} />
      <Floor color="#120d0a" />
      <InvitationObject open={isOpened} onClick={() => setSceneId(SCENE_IDS.INVITATION_OPEN)} />
      <Html position={[0, 0, 2.2]} center distanceFactor={9} className="invitation-shell">
        <div className="invitation-card">
          <span className="invitation-kicker">Invitation</span>
          <h2 className="invitation-names">{weddingData.couple.groom} &amp; {weddingData.couple.bride}</h2>
          <div className="invitation-divider" />
          <span className="invitation-date">{weddingData.wedding.date}</span>
          <p className="invitation-message">{weddingData.wedding.tagline}</p>
        </div>
      </Html>
      {!isOpened && <StoryButton label="Open" onClick={() => setSceneId(SCENE_IDS.INVITATION_OPEN)} />}
      {isOpened && <StoryButton label="View celebrations" onClick={() => setSceneId(SCENE_IDS.EVENT_DETAILS)} variant="muted" />}
    </>
  )
}

function EventScene() {
  const { setSceneId } = useExperience()

  return (
    <>
      <fog attach="fog" args={[palette.void, 10, 30]} />
      <color attach="background" args={[palette.void]} />
      <ambientLight color="#8b775d" intensity={0.35} />
      <directionalLight color="#f0d7aa" position={[0, 6, 6]} intensity={1.1} />
      <pointLight color="#d1a15b" intensity={8} position={[0, 2.6, 3]} distance={14} />
      <Floor color="#100d0b" />
      <Sparkles count={16} scale={[10, 6, 10]} color="#d7b276" size={2.2} speed={0.2} opacity={0.7} />
      <Html position={[0, 2.5, 0]} center distanceFactor={12} className="events-panel">
        <div className="events-stack">
          {weddingData.events.map((event) => (
            <div key={event.name} className="event-item">
              <span className="event-name">{event.name}</span>
              <span className="event-date">{event.date}</span>
              <span className="event-time">{event.time}</span>
            </div>
          ))}
        </div>
      </Html>
      <StoryButton label="Venue" onClick={() => setSceneId(SCENE_IDS.VENUE)} />
    </>
  )
}

function VenueScene() {
  const { setSceneId } = useExperience()

  return (
    <>
      <fog attach="fog" args={[palette.void, 12, 35]} />
      <color attach="background" args={[palette.void]} />
      <ambientLight color="#85725d" intensity={0.4} />
      <directionalLight color="#f0d9af" position={[0, 7, 6]} intensity={1.1} />
      <pointLight color="#d09a58" intensity={10} position={[0, 3, 3]} distance={15} />
      <Floor color="#120d0b" />
      <group position={[0, -0.8, -1.5]}>
        <RoundedBox args={[6.4, 2.7, 0.18]} radius={0.05} smoothness={4} position={[0, 1.2, 0]}>
          <meshStandardMaterial color="#201915" roughness={0.92} metalness={0.08} />
        </RoundedBox>
        <mesh position={[0, 1.8, 0.14]}>
          <boxGeometry args={[2.3, 0.15, 0.12]} />
          <meshStandardMaterial color="#d5b071" roughness={0.38} metalness={0.8} />
        </mesh>
        {[-2.2, 2.2].map((x) => (
          <mesh key={x} position={[x, 1.8, 0.12]}>
            <boxGeometry args={[0.22, 3.2, 0.22]} />
            <meshStandardMaterial color="#2c221e" roughness={0.87} metalness={0.08} />
          </mesh>
        ))}
      </group>
      <Html position={[0, 3.2, 1.3]} center distanceFactor={12} className="venue-panel">
        <div className="venue-card">
          <span className="venue-label">Venue</span>
          <h3>{weddingData.location.venueName}</h3>
          <p>Village {weddingData.location.village}<br />Taluka {weddingData.location.taluka} · District {weddingData.location.district}, {weddingData.location.state}</p>
          <a href={weddingData.location.mapsUrl} target="_blank" rel="noopener noreferrer" className="venue-link">OPEN IN GOOGLE MAPS</a>
        </div>
      </Html>
      <StoryButton label="RSVP" onClick={() => setSceneId(SCENE_IDS.RSVP)} />
    </>
  )
}

function RsvpScene() {
  return (
    <>
      <fog attach="fog" args={[palette.void, 10, 30]} />
      <color attach="background" args={[palette.void]} />
      <ambientLight color="#87715d" intensity={0.36} />
      <directionalLight color="#f0d9b6" position={[0, 6, 6]} intensity={1.1} />
      <pointLight color="#d5a66a" intensity={8} position={[0, 2.7, 3]} distance={13} />
      <Floor color="#120d0b" />
      <Html position={[0, 1.8, 1.3]} center distanceFactor={10} className="rsvp-shell">
        <form className="rsvp-panel">
          <span className="rsvp-kicker">RSVP</span>
          <h2>{weddingData.rsvp.title}</h2>
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Guests
            <select defaultValue="2">
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </label>
          <div className="rsvp-options">
            <label><input type="radio" name="attendance" defaultChecked /> Attending</label>
            <label><input type="radio" name="attendance" /> Regretfully declining</label>
          </div>
          <button type="button" className="story-button story-button--muted">Confirm</button>
        </form>
      </Html>
    </>
  )
}

export function Experience() {
  const { sceneId } = useExperience()

  const sceneById = {
    [SCENE_IDS.DARK_ENVIRONMENT]: <DarkScene />,
    [SCENE_IDS.WEDDING_GATE]: <DarkScene />,
    [SCENE_IDS.GATE_ACTIVATION]: <RevealScene />,
    [SCENE_IDS.GATE_OPENING]: <RevealScene />,
    [SCENE_IDS.THROUGH_THE_GATE]: <RevealScene />,
    [SCENE_IDS.GLOWING_MANDALA]: <CoupleScene />,
    [SCENE_IDS.WEDDING_MANDAP]: <MandapScene />,
    [SCENE_IDS.INVITATION]: <InvitationScene />,
    [SCENE_IDS.INVITATION_OPEN]: <InvitationScene />,
    [SCENE_IDS.EVENT_DETAILS]: <EventScene />,
    [SCENE_IDS.VENUE]: <VenueScene />,
    [SCENE_IDS.RSVP]: <RsvpScene />,
  }

  return (
    <>
      <CinematicCamera sceneId={sceneId} />
      <Suspense fallback={null}>{sceneById[sceneId] ?? <DarkScene />}</Suspense>
    </>
  )
}
