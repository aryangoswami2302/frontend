export const palette = {
  void: '#0C0A09',
  champagne: '#C8A96B',
  ivory: '#F4EBDD',
  burgundy: '#651F35',
  antique: '#8E7447',
  stone: '#161110',
  timber: '#241016',
}

export const fog = {
  color: palette.void,
  near: 18,
  far: 52,
}

export const lighting = {
  ambient: {
    color: palette.antique,
    intensity: 0.1,
  },
  key: {
    color: palette.champagne,
    intensity: 1.05,
    position: [0, 7.2, 7],
  },
  rim: {
    color: palette.burgundy,
    intensity: 0.22,
    position: [-5.5, 3.2, -6],
  },
  fill: {
    color: palette.ivory,
    intensity: 0.07,
    position: [5.2, 2.2, 6],
  },
}
