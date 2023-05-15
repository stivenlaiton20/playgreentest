import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { DataAuth } from '../interfaces'
import { auth } from './firebase'

export function signUp({ email, password }: DataAuth): Promise<UserCredential> {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function signIn({ email, password }: DataAuth): Promise<UserCredential> {
  return signInWithEmailAndPassword(auth, email, password)
}

export function resetPassword(email: string): Promise<void> {
  return sendPasswordResetEmail(auth, email)
}

