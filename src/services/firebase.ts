import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBuAIjfkTcDo8-T1yb8Ib6BQmlNVZrrcUI",
  authDomain: "playgreentest.firebaseapp.com",
  projectId: "playgreentest",
  storageBucket: 'playgreentest.appspot.com',
  messagingSenderId: '419126213653',
  appId: '1:419126213653:web:15f50c649f8e958318221c',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

