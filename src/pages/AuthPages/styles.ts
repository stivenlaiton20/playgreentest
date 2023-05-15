import styled from '@emotion/styled'
import { ThemeObject } from '../../interfaces/theme'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Authpage = styled(motion.section)`
  display: flex;
  flex-direction: column;
  padding: 22px;
  flex-direccion: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  background-color: ${({ theme }: ThemeObject) => theme?.background};
`

export const ContainerInputs = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
`

export const InputEmail = styled.input`
  box-sizing: border-box;
  padding-left: 10px;
  outline: none;
  width: 330px;
  height: 67px;
  color: ${({ theme }: ThemeObject) => theme?.textColor};
  background: ${({ theme }: ThemeObject) => theme?.backgroundInputs};
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  :placeholder {
    color: ${({ theme }: ThemeObject) => theme?.textColor};
    background: ${({ theme }: ThemeObject) => theme?.backgroundInputs};
  }
`

export const InputPass = styled.input`
  box-sizing: border-box;
  padding-left: 10px;
  outline: none;
  width: 330px;
  height: 67px;
  color: ${({ theme }: ThemeObject) => theme?.textColor};
  background: ${({ theme }: ThemeObject) => theme?.backgroundInputs};
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  :placeholder {
    color: ${({ theme }: ThemeObject) => theme?.textColor};
    background: ${({ theme }: ThemeObject) => theme?.backgroundInputs};
  }
`

export const TitleLogin = styled.h1`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
  color: ${({ theme }: ThemeObject) => theme?.textColor};
  display: flex;
  justify-content: center;
  text-align: center;
`

export const SubTitleLogin = styled.h3`
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  width: 322px;
  display: flex;
  text-align: center;
  margin: 0 auto;
  color: ${({ theme }: ThemeObject) => theme?.textColorSecundary};
  margin-bottom: 16px;
  opacity: 0.8;
`

export const TitlePassword = styled.span`
  margin: 10px 0 18px 0;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }: ThemeObject) => theme?.textColorSecundary};
  display: flex;
  align-items: center;
`

export const LabelEmail = styled.label`
  width: 31px;
  height: 17px;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }: ThemeObject) => theme?.textColor};
  display: flex;
  opacity: 0.6;
`

export const LabelPassword = styled.label`
  height: 17px;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }: ThemeObject) => theme?.textColor};
  display: flex;
  opacity: 0.6;
`

export const LabelSign = styled(Link)`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 17px;
  color: ${({ theme }: ThemeObject) => theme?.colorIconHome};
  display: flex;
  opacity: 0.6;
  margin-bottom: 16px;
`

export const ErrorMsg = styled.p`
  max-width: 350px;
  color: #f21e08;
  padding: 2px 0;
  margin-top: 2px;
  font-size: 14px;
  font-weight: 300;
`
