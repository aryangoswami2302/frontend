import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MusicPlayer, MusicPlayerProvider } from './experience/MusicPlayer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MusicPlayerProvider startAt={41}>
      <App />
      <MusicPlayer />
    </MusicPlayerProvider>
  </StrictMode>,
)
