import { App } from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAkUEC8shXJKnQOpmWBw2T9-VrYh2j9Rzc",
  authDomain: "darticle-fbac5.firebaseapp.com",
  projectId: "darticle-fbac5",
  storageBucket: "darticle-fbac5.appspot.com",
  messagingSenderId: "655215360725",
  appId: "1:655215360725:web:de1a6f6b1c8b9a040ac05c"
}

export const createFirebase = (app: App) => {
  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()
  const auth = firebase.auth()

  if (location.hostname === 'localhost') {
    db.useEmulator('localhost', 8080)
    auth.useEmulator('http://localhost:9099/')
  }

  app.provide('db', db)
  app.provide('auth', auth)
}