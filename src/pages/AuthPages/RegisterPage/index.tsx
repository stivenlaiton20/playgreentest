import { ButtonAuth } from '../../../components'
import { DataAuth } from '../../../interfaces'
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
import { signUp } from '../../../services'

const RegisterPage = () => {
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
    getValues,
    formState: { errors },
  } = useForm<DataAuth>()

  const onSubmit = async (data: DataAuth) => {
    const { email, password } = data

    try {
      await signUp({ email, password })
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

          <LabelPassword htmlFor='confirmPassword'>Confirm Password</LabelPassword>
          <InputPass
            type='password'
            placeholder='your password again'
            {...register('confirmPassword', {
              required: 'Confirm password is required.',
              minLength: {
                value: 6,
                message: 'Password should be at-least 6 characters.',
              },
              validate: (value) => {
                const { password } = getValues()
                if (password !== value) return 'Your password does not match'
              },
            })}
          />

          {errors.confirmPassword && <ErrorMsg>{errors.confirmPassword?.message}</ErrorMsg>}
        </ContainerInputs>
        <TitlePassword>Do you want to register or...</TitlePassword>
        <LabelSign to='/login'>SignIn</LabelSign>
        <ButtonAuth>Register</ButtonAuth>
      </form>
    </Authpage>
  )
}

export default RegisterPage
