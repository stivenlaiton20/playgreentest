import styled from '@emotion/styled'
import { ThemeObject } from '../../interfaces'

export const StyledSpinner = styled.div`
  width: 56px;
  height: 56px;
  z-index: 9999;
  display: grid;
  border: 4.5px solid #0000;
  border-radius: 50%;
  border-color: #dbdcef #0000;
  animation: spinner-e04l1k 1s infinite linear;

::before,
::after {
  content: "";
  grid-area: 1/1;
  margin: 2.2px;
}

&::before {
  content: "";
  grid-area: 1/1;
  margin: 2.2px;
  animation: inherit;
  animation-duration: 0.5s;
  animation-direction: reverse;
}

&::after {
  
  margin: 8.9px;
}

@keyframes spinner-e04l1k {
  100% {
    transform: rotate(1turn);
  }
}
`

export const ContainerSpinner = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 999;
  background-color: ${({ theme }: ThemeObject) => theme?.backgroundInputs};
`
