import { ButtonError, ContainerError, GifError } from './styles'

const Error404 = () => {
  return (
    <ContainerError>
      <GifError src='https://giphy.com/embed/S8rEAbtG4WA2ULH7CH'
        width='480'
        height='480'
        frameBorder='0'
        allowFullScreen>
      </GifError>
      <ButtonError to="/">Home</ButtonError>
    </ContainerError>
  )
}

export default Error404
