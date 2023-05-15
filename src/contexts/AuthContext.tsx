import { useEffect, useState, useContext, createContext } from 'react'
import { auth } from '../services/firebase'
import { User, signOut } from 'firebase/auth'
import { AuthContextModel, AuthProviderProps, UserContextState, initialState } from '../interfaces'

export const UserStateContext = createContext(initialState as UserContextState)

export const AuthContext = createContext(initialState as AuthContextModel)

export function useAuth(): AuthContextModel {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null)
  const [loadingGetUser, setLoadingGetUser] = useState(true)

  useEffect(() => {
    const unsubsrcibe = auth.onAuthStateChanged((user) => {
      setUser(user)
      console.log(user)
      setLoadingGetUser(false)
    })
    return unsubsrcibe
  }, [])

  const logout = () => signOut(auth)

  const values = {
    user,
    logout,
    loadingGetUser,
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export const useUserContext = (): UserContextState => {
  return useContext(UserStateContext)
}
