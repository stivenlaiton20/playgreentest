import styled from '@emotion/styled'
import { ThemeObject } from '../../interfaces'
import { Link } from 'react-router-dom'

export const ContainerError = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: ThemeObject) => theme?.background};
`

export const GifError = styled.iframe`
    max-width: 15rem;
    height: 15rem;
    top: 50%;
    left: 50%;
    margin-bottom: 16px;
    transform: translate(-50%, 50%):
`

export const ButtonError = styled(Link)`
    width: 72px;
    height: 64px;
    border: 0;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    border-radius: 24px;
    background-color: ${({ theme }: ThemeObject) => theme?.textColor};
    color: ${({ theme }: ThemeObject) => theme?.backgroundInputs};
    box-shadow: 0px 10px 25px #000;

`