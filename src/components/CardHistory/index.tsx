import { useState } from 'react'
import { DbData } from '../../interfaces'
import {
  CardCrossIcon,
  CardHeartIcon,
  CardPreviewCard,
  CardTitleHistory,
  ContainerHistory,
} from './style'

type PropsCard = Pick<DbData, 'image' | 'isLike' | 'name'>

const CardHistory = ({ image, isLike, name }: PropsCard) => {
  const [imageLoading, setImageLoading] = useState(true)

  const imageLoaded = () => {
    setImageLoading(false)
  }
  return (
    <ContainerHistory
      initial={{ opacity: 0 }}
      animate={{
        opacity: imageLoading ? 0 : 1,
      }}
      transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
      onLoad={imageLoaded}
    >
      <CardPreviewCard src={image} alt={name} />
      <CardTitleHistory>{name}</CardTitleHistory>
      {isLike ? <CardHeartIcon /> : <CardCrossIcon />}
    </ContainerHistory>
  )
}

export default CardHistory
