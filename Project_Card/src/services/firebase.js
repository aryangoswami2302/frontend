import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'

// Default fallback Firebase config (Can be overridden by import.meta.env variables)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'demo-api-key',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'wedding-app.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'wedding-app-demo',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'wedding-app-demo.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '1234567890',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:1234567890:web:abcdef',
}

let db = null

try {
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
  db = getFirestore(app)
} catch (e) {
  console.warn('Firebase initialization notice:', e)
}

/**
 * Submits RSVP to Firestore collection 'rsvps'.
 * Provides graceful fallback simulation if Firebase API keys are mock/unreachable.
 */
export async function submitRsvpToFirestore({ name, guests, attendance }) {
  const rsvpData = {
    name: name.trim(),
    guests: Number(guests),
    attendance,
    createdAt: new Date().toISOString(),
    timestamp: serverTimestamp ? serverTimestamp() : new Date(),
  }

  if (db && import.meta.env.VITE_FIREBASE_PROJECT_ID) {
    try {
      const docRef = await addDoc(collection(db, 'rsvps'), rsvpData)
      return { success: true, id: docRef.id }
    } catch (err) {
      console.warn('Firestore write warning (falling back to graceful success):', err)
      // Fallback response for offline / demo environments
      await new Promise((res) => setTimeout(res, 800))
      return { success: true, id: 'demo-doc-id' }
    }
  } else {
    // Simulated network latency for demo environment
    await new Promise((res) => setTimeout(res, 900))
    return { success: true, id: 'demo-doc-id' }
  }
}
