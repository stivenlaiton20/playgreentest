import { Auth, UserCredential, User} from 'firebase/auth'
import { ReactNode } from 'react'

export interface DataAuth {
  email: string
  password: string
  confirmPassword?: string
}

export interface AuthProviderProps {
  children?: ReactNode
}

export interface UserContextState {
  isAuthenticated: boolean
  isLoading: boolean
  id?: string
}

export interface AuthContextModel {
  logout: (auth: Auth) => Promise<void>
  user: User | null
  loadingGetUser: boolean
}

export interface SignsAuth {
  signIn: (email: string, password: string) => Promise<UserCredential>
  signUp: (email: string, password: string) => Promise<UserCredential>
  sendPasswordResetEmail?: (email: string) => Promise<void>
}
