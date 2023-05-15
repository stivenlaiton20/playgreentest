import { useAuth } from '../../contexts/AuthContext'
import { Buttonauth } from './styles'
import { ReactNode } from 'react'

type PropsAuth = {
  children: ReactNode
}

const ButtonAuth = ({ children }: PropsAuth) => {
  const { loadingGetUser } = useAuth()
  return (
    <Buttonauth type='submit' disabled={loadingGetUser}>
      {children}
    </Buttonauth>
  )
}

export default ButtonAuth
