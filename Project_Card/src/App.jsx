import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { weddingData } from './config/experience'
import { submitRsvpToFirestore } from './services/firebase'

const openingSteps = ['A little closer', 'The seal releases', 'Unfolding your invitation', 'Welcome to our story']

function App() {
  const [opened, setOpened] = useState(false)
  const [opening, setOpening] = useState(false)
  const [letterOpen, setLetterOpen] = useState(false)
  const [transitioning, setTransitioning] = useState(false)
  const [openingStep, setOpeningStep] = useState(0)
  const [manualControl, setManualControl] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [eventsVisible, setEventsVisible] = useState(false)
  const resumeTimer = useRef(null)
  const autoTimer = useRef(null)
  const sections = useRef([])
  const eventsSection = useRef(null)
  const events = useMemo(() => weddingData.events, [])

  const stopAutoplay = useCallback(() => {
    setManualControl(true)
    window.clearTimeout(autoTimer.current)
    window.clearTimeout(resumeTimer.current)
    resumeTimer.current = window.setTimeout(() => setManualControl(false), 7000)
  }, [opened])

  const openInvitation = useCallback(() => {
    if (opening || opened) return
    setOpening(true)
    setOpeningStep(0)
    window.setTimeout(() => setOpeningStep(1), 650)
    window.setTimeout(() => setOpeningStep(2), 1350)
    window.setTimeout(() => setOpeningStep(3), 2500)
    window.setTimeout(() => { setLetterOpen(true); setOpening(false) }, 3600)
  }, [opened, opening])

  const enterWedding = useCallback(() => {
    if (!letterOpen || transitioning) return
    setTransitioning(true)
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
      window.clearTimeout(resumeTimer.current)
      setLetterOpen(false)
      setOpened(true)
      setManualControl(false)
      setTransitioning(false)
    }, 750)
  }, [letterOpen, transitioning])

  useEffect(() => {
    const controls = ['wheel', 'touchstart', 'pointerdown', 'keydown']
    controls.forEach((type) => window.addEventListener(type, stopAutoplay, { passive: true }))
    return () => {
      controls.forEach((type) => window.removeEventListener(type, stopAutoplay))
      window.clearTimeout(autoTimer.current)
      window.clearTimeout(resumeTimer.current)
    }
  }, [stopAutoplay])

  useEffect(() => {
    if (!opened || manualControl) return undefined
    const sequence = [0, 1, 2, 3, 4]
    let cursor = 0
    const move = () => {
      sections.current[sequence[cursor]]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      cursor += 1
      if (cursor < sequence.length) autoTimer.current = window.setTimeout(move, cursor === 1 ? 8500 : 10500)
    }
    autoTimer.current = window.setTimeout(move, 4500)
    return () => window.clearTimeout(autoTimer.current)
  }, [opened, manualControl])

  useEffect(() => {
    if (!opened) return undefined
    const node = eventsSection.current
    if (!node) return undefined
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEventsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.28 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [opened])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    setSending(true)
    await submitRsvpToFirestore({ name: form.get('name'), guests: form.get('guests'), attendance: form.get('attendance') })
    setSending(false)
    setSubmitted(true)
  }

  return <main className={`wedding-film ${opened ? 'is-opened' : ''} ${opening ? 'is-opening' : ''} ${letterOpen ? 'is-letter-open' : ''}`}>
    {!opened && <section className={`invitation-stage ${transitioning ? 'is-transitioning' : ''}`} aria-label="Wedding invitation">
      <div className="room-glow room-glow--one" /><div className="room-glow room-glow--two" />
      <div className="dust dust--one" /><div className="dust dust--two" /><div className="dust dust--three" />
      {letterOpen ? (
        <article className="invitation-letter" aria-label="Wedding invitation letter">
          <div className="invitation-letter__content">
            <p className="invitation-letter__family">GOSWAMI FAMILY</p>
            <span className="invitation-letter__rule" />
            <p className="invitation-letter__intro">Together with their families,<br />request the pleasure of your presence<br />as they celebrate the wedding of</p>
            <div className="invitation-letter__names"><span>HEMALGIRI</span><i>&amp;</i><span>AAYUSHI</span></div>
            <p className="invitation-letter__verse">Two hearts, two families,<br />and one beautiful beginning.</p>
            <p className="invitation-letter__message">We would be honoured to have you<br />join us and bless the couple<br />as they begin their journey together.</p>
            <p className="invitation-letter__signoff"><span>With love,</span><strong>Goswami Family</strong></p>
          </div>
          <button className="invitation-letter__next" type="button" onClick={enterWedding} disabled={transitioning}>NEXT</button>
        </article>
      ) : (
        <button className="physical-invitation" onClick={openInvitation} disabled={opening || opened} aria-label="Open Hemalgiri and Aayushi's wedding invitation">
          <span className="invitation-shadow" /><span className="invitation-back" />
          <span className="invitation-interior"><span className="inside-ornament">✦</span><span className="inside-kicker">Together with their families</span><strong>HEMALGIRI <i>&amp;</i> AAYUSHI</strong><span className="inside-rule" /><em>Two stories, one beginning.</em><span className="inside-message">invite you to celebrate their wedding<br />25 December 2026 · Jaipur</span></span>
          <span className="invitation-flap invitation-flap--left" /><span className="invitation-flap invitation-flap--right" />
          <span className="invitation-face"><span className="foil-border" /><span className="crest">H<span>&amp;</span>A</span><span className="invitation-type">A wedding invitation</span><span className="ribbon ribbon--vertical" /><span className="ribbon ribbon--horizontal" /><span className="wax-seal"><b>H</b><small>forever</small></span></span>
        </button>
      )}
      <div className="stage-prompt" aria-live="polite">{!opening && !opened && !letterOpen && <><span>Tap to open</span><i /></>}{opening && <span>{openingSteps[openingStep]}</span>}</div>
    </section>}
    {opened && <div className="story-world">
      <section className="story-section story-intro couple-reveal" ref={(node) => { sections.current[0] = node }}><div className="couple-reveal-photo"><img src={weddingData.couple.heroPhoto} alt={`${weddingData.couple.groom} and ${weddingData.couple.bride} together`} fetchPriority="high" /></div><div className="intro-copy reveal"><p className="chapter">Goswami Family</p><span className="fine-line" /><p className="intro-overline">The wedding of</p><h1><span className="opening-name">HEMALGIRI</span><i>&amp;</i><span className="opening-name">AAYUSHI</span></h1><p className="intro-title">Our Wedding</p><p className="intro-note">Two stories, one beginning.</p></div></section>
      <section className="story-section couple-story" ref={(node) => { sections.current[1] = node }}><div className="story-photo"><img src={weddingData.couple.storyPhoto} alt={`${weddingData.couple.groom} and ${weddingData.couple.bride} in a field`} loading="lazy" /></div><div className="story-copy reveal"><p className="chapter">A love story</p><h2>Some stories<br />begin with a moment.</h2><p>Ours began with a smile, grew through a thousand small joys, and now brings us here — to a beautiful beginning shared with the people we love.</p></div></section>
      <section className={`story-section celebrations ${eventsVisible ? 'is-revealed' : ''}`} ref={(node) => { sections.current[2] = node; eventsSection.current = node }}><div className="celebration-heading reveal"><p className="chapter">The celebrations</p><h2>Four chapters,<br />one celebration.</h2></div><div className="event-chapters">{events.map((event, index) => <article className="event-chapter" key={event.chapter} style={{ '--chapter-delay': `${index * 650}ms` }}><span>Chapter {event.chapter}</span><h3>{event.name}</h3><p className="event-chapter__date">{event.date}</p><p className="event-chapter__time">{event.time}</p></article>)}</div></section>
      <section className="story-section venue-scene" ref={(node) => { sections.current[3] = node }}><div className="arch arch--one" /><div className="arch arch--two" /><div className="venue-copy reveal"><p className="chapter">Our destination</p><h2>{weddingData.location.venueName}</h2><p className="venue-address"><span>Village {weddingData.location.village}</span><span>Taluka {weddingData.location.taluka} · District {weddingData.location.district}, {weddingData.location.state}</span></p><a className="venue-map-link" href={weddingData.location.mapsUrl} target="_blank" rel="noopener noreferrer">OPEN IN GOOGLE MAPS <span aria-hidden="true">↗</span></a></div></section>
      <section className="story-section rsvp-scene" ref={(node) => { sections.current[4] = node }}><div className="rsvp-paper reveal"><p className="chapter">RSVP</p><h2>Will you join us?</h2><p>We would be honoured to celebrate with you.</p><form onSubmit={handleSubmit}><label>Your name<input name="name" required placeholder="Full name" /></label><div className="form-row"><label>Guests<select name="guests" defaultValue="2"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option></select></label><label>Response<select name="attendance" defaultValue="attending"><option value="attending">Joyfully attending</option><option value="declining">With regrets</option></select></label></div><button type="submit" disabled={sending}>{submitted ? 'Thank you — received' : sending ? 'Sending…' : 'Confirm RSVP'}</button></form></div><footer>With love, Hemalgiri &amp; Aayushi <span>✦</span> 25 December 2026</footer></section>
    </div>}
    {opened && <div className="control-note">{manualControl ? 'You are in control' : 'A slow story is unfolding'} <span>·</span> scroll or touch anytime</div>}
  </main>
}
export default App





