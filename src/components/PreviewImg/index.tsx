import { useState } from 'react'
import { Serie } from '../../interfaces'
import { PreviewContainer, PreviewShadow, PreviewTitle, Previewimg } from './styles'

type PropsPreview = Pick<Serie, 'image' | 'name'>

const PreviewImg = ({ name, image }: PropsPreview) => {
  const [imageLoading, setImageLoading] = useState(true)

  const imageLoaded = () => {
    setImageLoading(false)
  }
  
  return (
    <PreviewContainer
      initial={{ opacity: 0 }}
      animate={{
        opacity: imageLoading ? 0 : 1,
      }}
      transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
      onLoad={imageLoaded}
    >
      <Previewimg src={image} alt={`preview image ${name}`} />
      <PreviewTitle>{name}</PreviewTitle>
      <PreviewShadow />
    </PreviewContainer>
  )
}

export default PreviewImg
