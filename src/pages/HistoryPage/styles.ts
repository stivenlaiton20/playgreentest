import styled from '@emotion/styled'
import { ThemeObject } from '../../interfaces/theme'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { devices } from '../../utils'
import { motion } from 'framer-motion'

export const Historypage = styled(motion.main)`
  display: flex;
  padding: 22px;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }: ThemeObject) => theme?.background};
`

export const IconLeft = styled(HiOutlineArrowLeft)`
  width: 30px;
  height: 30px;
  scale: 150%;
  margin: 14px 0;
  transition: all 0.3s ease-in-out;
  color: ${({ theme }: ThemeObject) => theme?.textColor};

  &:active {
    scale: 130%;
  }
`

export const TitleHistory = styled.h2`
  width: 133px;
  height: 51px;
  margin-bottom: 14px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
  color: ${({ theme }: ThemeObject) => theme?.textColor};
  display: flex;
  align-items: center;
  letter-spacing: -0.055em;
`

export const SubtitleHistory = styled.h4`
  width: 325px;
  height: 54px;
  margin-bottom: 14px;
  color: ${({ theme }: ThemeObject) => theme?.textColorSecundary};
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  display: flex;
  align-items: center;

  color: ${({ theme }: ThemeObject) => theme?.textColor};

  opacity: 0.8;
`

export const ContainerCardsHistory = styled.div`
  overflow-y: auto;
  height: 550px;

  @media only screen and ${devices.md} {
    height: 600px;
  }
`
