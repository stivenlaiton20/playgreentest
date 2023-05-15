import styled from '@emotion/styled'

export const Buttonauth = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 22px 38px;
  gap: 10px;
  width: 122px;
  height: 66px;
  border: 0;
  color: #fff;
  transition: all .3s ease-in-out;
  background: linear-gradient(99deg, #236bfe 6.69%, #0d4ed3 80.95%);
  box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
  border-radius: 25px;

  &:active {
    scale: 90%
  }

  &:disabled {
    background: #777777;
  }
`
