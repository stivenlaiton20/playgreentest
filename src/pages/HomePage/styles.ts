import styled from '@emotion/styled'
import { ThemeObject } from '../../interfaces/theme'
import { RxCross2 } from 'react-icons/rx'
import { motion } from 'framer-motion'

export const Homepage = styled(motion.main)`
  display: flex;
flex-direction: column;
justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }: ThemeObject) => theme?.background};
`

export const Buttoncross = styled.button`
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border: 0;
  border-radius: 100%;
  transition: all 0.1s ease-in-out;
  background: ${({ theme }: ThemeObject) => theme?.backgroundInputs};
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  align-self: center;
  &:active {
    scale: 90%;
  }
`

export const CrossIcon = styled(RxCross2)`
  width: 24px;
  height: 24px;
  color: ${({ theme }: ThemeObject) => theme?.colorIconCross};
`

export const Buttonlike = styled.button`
  padding: 20px;
  width: 86px;
  height: 86px;
  border: 0;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
  background: linear-gradient(125.02deg, #236bfe -17.11%, #063ba8 98.58%);
  box-shadow: 0px 10px 25px rgba(35, 107, 254, 0.2);
  align-self: center;
  &:active {
    scale: 90%;
  }
`

export const ContainerButtonHome = styled.div`
display: flex;
flex-grow: 1;
  justify-content: center;
  gap: 32px;
  margin: 0 auto;
  width: 100%;
`