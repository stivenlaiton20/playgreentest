import styled from '@emotion/styled'
import { ThemeObject } from '../../interfaces/theme'
import { BsHeartFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { devices } from '../../utils'
import { motion } from 'framer-motion'

export const ContainerHistory = styled(motion.div)`
  position: relative;
  width: 326px;
  height: 77px;
  display: flex;
  margin: 16px 0;
  background-color: ${({ theme }: ThemeObject) => theme?.backgroundInputs};
  border-radius: 12px;

  @media only screen and ${devices.md} {
    width: 100%;
    height: 90px;
  }
`

export const CardTitleHistory = styled.h5`
  padding: 16px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  z-index: 50;
  display: flex;
  letter-spacing: -0.045em;
  flex-shrink: 1;
  flex-grow: 1;
  color: ${({ theme }: ThemeObject) => theme?.textColor};
`

export const CardPreviewCard = styled.img`
  position: absolute;
  width: 258px;
  height: 77px;
  object-fit: cover;
  object-position: center;
  background: rgba(0, 0, 0, 0.51);
  border-radius: 12px;

  @media only screen and ${devices.md} {
    width: 600px;
    height: 90px;
  }
`

export const CardHeartIcon = styled(BsHeartFill)`
  align-self: center;
  width: 36px;
  height: 36px;
  color: ${({ theme }: ThemeObject) => theme?.colorIconHome};
  z-index: 40;
  margin-right: 16px;
`

export const CardCrossIcon = styled(RxCross2)`
  align-self: center;
  width: 36px;
  height: 36px;
  color: #d36060;
  z-index: 40;
  margin-right: 16px;
`
