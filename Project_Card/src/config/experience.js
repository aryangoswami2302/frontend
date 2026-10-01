import couplePortrait from '../assets/couple-portrait.jpeg'
import coupleStory from '../assets/couple-story.jpeg'

export const SCENE_IDS = {
  DARK_ENVIRONMENT: 'dark-environment',
  WEDDING_GATE: 'wedding-gate',
  GATE_ACTIVATION: 'gate-activation',
  GATE_OPENING: 'gate-opening',
  THROUGH_THE_GATE: 'through-the-gate',
  GLOWING_MANDALA: 'glowing-mandala',
  WEDDING_MANDAP: 'wedding-mandap',
  COUPLE_NAMES: 'couple-names',
  WEDDING_RING: 'wedding-ring',
  INVITATION: 'invitation',
  INVITATION_OPEN: 'invitation-open',
  EVENT_DETAILS: 'event-details',
  VENUE: 'venue',
  RSVP: 'rsvp',
}

export const weddingData = {
  couple: {
    groom: 'Hemalgiri',
    bride: 'Aayushi',
    initials: 'H & A',
    family: 'with love',
    heroPhoto: couplePortrait,
    storyPhoto: coupleStory,
  },
  wedding: {
    date: '25 December 2026',
    tagline: 'Two stories. One beginning.',
    subtitle: 'A celebration of love',
  },
  events: [
    { chapter: 'I', name: 'Ganesh Sthapana', date: '10 December 2026', time: '8:30 AM' },
    { chapter: 'II', name: 'Haldi', date: '11 December 2026', time: '11:30 AM' },
    { chapter: 'III', name: "Groom's Raas Garba Entry", date: '11 December 2026', time: '10:00 PM' },
    { chapter: 'IV', name: "The Groom's Baraat", date: '12 December 2026', time: '8:00 AM' },
  ],
  location: {
    venueName: 'Goswami Math',
    village: 'Sarsoli',
    taluka: 'Bayad',
    district: 'Aravalli',
    state: 'Gujarat',
    mapsUrl: 'https://maps.app.goo.gl/hz7YPQLBuyLuYsP98',
  },
  rsvp: {
    title: 'Will you join us?',
    note: 'We would be honoured to celebrate with you.',
  },
  theme: {
    background: '#080706',
    ivory: '#F4EBDD',
    champagne: '#C8A96B',
    wine: '#651F35',
    stone: '#171210',
  },
}

export const SCENE_ORDER = [
  SCENE_IDS.DARK_ENVIRONMENT,
  SCENE_IDS.WEDDING_GATE,
  SCENE_IDS.GATE_ACTIVATION,
  SCENE_IDS.GATE_OPENING,
  SCENE_IDS.THROUGH_THE_GATE,
  SCENE_IDS.GLOWING_MANDALA,
  SCENE_IDS.WEDDING_MANDAP,
  SCENE_IDS.WEDDING_RING,
  SCENE_IDS.INVITATION,
  SCENE_IDS.INVITATION_OPEN,
  SCENE_IDS.EVENT_DETAILS,
  SCENE_IDS.VENUE,
  SCENE_IDS.RSVP,
]

export const cameraDestinations = {
  [SCENE_IDS.DARK_ENVIRONMENT]: {
    position: [0, 2.15, 14.2],
    lookAt: [0, 2.55, 0],
    lerp: 0.035,
    breath: 0.04,
  },
  [SCENE_IDS.WEDDING_GATE]: {
    position: [0, 2.15, 14.2],
    lookAt: [0, 2.55, 0],
    lerp: 0.035,
    breath: 0.04,
  },
  [SCENE_IDS.GATE_ACTIVATION]: {
    position: [0, 2.05, 10.5],
    lookAt: [0, 2.45, -0.1],
    lerp: 0.025,
    breath: 0.022,
  },
  [SCENE_IDS.GATE_OPENING]: {
    position: [0, 2.0, 7.2],
    lookAt: [0, 2.4, -1.2],
    lerp: 0.02,
    breath: 0.015,
  },
  [SCENE_IDS.THROUGH_THE_GATE]: {
    position: [0, 1.9, 2.8],
    lookAt: [0, 2.2, -4.0],
    lerp: 0.022,
    breath: 0.012,
  },
  [SCENE_IDS.GLOWING_MANDALA]: {
    position: [0, 1.8, 10.5],
    lookAt: [0, 2.0, 0],
    lerp: 0.025,
    breath: 0.03,
  },
  [SCENE_IDS.WEDDING_MANDAP]: {
    position: [0, 2.4, 12.8],
    lookAt: [0, 1.8, 0],
    lerp: 0.025,
    breath: 0.035,
    orbit: true,
  },
  [SCENE_IDS.WEDDING_RING]: {
    position: [0, 2.1, 4.2],
    lookAt: [0, 1.9, 0],
    lerp: 0.022,
    breath: 0.02,
  },
  [SCENE_IDS.INVITATION]: {
    position: [0, 1.85, 7.2],
    lookAt: [0, 1.8, 0],
    lerp: 0.028,
    breath: 0.025,
  },
  [SCENE_IDS.INVITATION_OPEN]: {
    position: [0, 1.8, 4.8],
    lookAt: [0, 1.8, 0],
    lerp: 0.025,
    breath: 0.015,
  },
  [SCENE_IDS.EVENT_DETAILS]: {
    position: [0, 1.8, 8.5],
    lookAt: [0, 1.8, 0],
    lerp: 0.025,
    breath: 0.015,
  },
  [SCENE_IDS.VENUE]: {
    position: [0, 2.2, 9.2],
    lookAt: [0, 1.9, 0],
    lerp: 0.028,
    breath: 0.02,
  },
  [SCENE_IDS.RSVP]: {
    position: [0, 1.8, 10.0],
    lookAt: [0, 1.8, 0],
    lerp: 0.022,
    breath: 0.008, // Very subtle, calm breathing for RSVP form entry
  },
}

export const GATE_SCENE_IDS = [
  SCENE_IDS.WEDDING_GATE,
  SCENE_IDS.GATE_ACTIVATION,
  SCENE_IDS.GATE_OPENING,
  SCENE_IDS.THROUGH_THE_GATE,
]

export const FOUNDATION_SCENE = SCENE_IDS.WEDDING_GATE

export const pointerParallax = {
  strength: 0.14,
  lerp: 0.045,
}


