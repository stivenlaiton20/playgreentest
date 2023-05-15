import { ButtonAuth } from '../../../components'
import { DataAuth } from '../../../interfaces'
import { signIn } from '../../../services/AuthServices'
import {
  Authpage,
  InputEmail,
  InputPass,
  TitleLogin,
  SubTitleLogin,
  ContainerInputs,
  TitlePassword,
  LabelEmail,
  LabelPassword,
  ErrorMsg,
  LabelSign,
} from '../styles'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '../../../contexts/AuthContext'

const LoginPage = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [navigate, user])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataAuth>()

  const onSubmit = async (data: DataAuth) => {
    try {
      await signIn(data)
      navigate('/')
    } catch (error: unknown) {
      let errorMessage = 'error.unknown'
      if (typeof error === 'string') {
        errorMessage = error.toUpperCase()
      } else if (error instanceof Error) {
        errorMessage = error.message
      }
      console.log(errorMessage)
    }
  }

  return (
    <Authpage initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <TitleLogin>Welcome</TitleLogin>
      <SubTitleLogin>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </SubTitleLogin>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContainerInputs>
          <LabelEmail htmlFor='email'>User</LabelEmail>
          <InputEmail
            type='email'
            placeholder='correo@gmail.com'
            {...register('email', {
              required: 'Email is required.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.',
              },
            })}
          />

          {errors.email && <ErrorMsg>{errors.email?.message}</ErrorMsg>}

          <LabelPassword htmlFor='password'>Password</LabelPassword>
          <InputPass
            type='password'
            placeholder='your password'
            {...register('password', {
              required: 'Password is required.',
              minLength: {
                value: 6,
                message: 'Password should be at-least 6 characters.',
              },
            })}
          />

          {errors.password && <ErrorMsg>{errors.password?.message}</ErrorMsg>}
        </ContainerInputs>
        <TitlePassword>Forgot your password or...</TitlePassword>
        <LabelSign to='/register'>SignUp</LabelSign>
        <ButtonAuth>Login</ButtonAuth>
      </form>
    </Authpage>
  )
}

export default LoginPage
