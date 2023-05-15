import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const PreviewContainer = styled(motion.div)`
  width: 100%;
  position: relative;
  height: 564px;
  z-index: 0;
  border: 0;
  border-radius: 0px 0px 32px 32px;
`

export const Previewimg = styled.img`
  border: 0;
  width: 100%;
  border-radius: 0px 0px 32px 32px;
  object-fit: cover;
`

export const PreviewTitle = styled.h2`
  position: absolute;
  height: 48px;
  left: 21px;
  top: 490px;
  z-index: 3;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  display: flex;
  align-items: center;

  color: #fefefe;
`

export const PreviewShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  left: 0px;
  top: 464px;
  background: linear-gradient(360deg, #000000 0%, #000000 58.85%, rgba(0, 0, 0, 0) 100%);
  border-radius: 0px 0px 32px 32px;
`
