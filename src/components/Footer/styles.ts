import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.div`
  height: 298px;
  background-color: ${cores.lightPink};
  position: relative;
`

export const FooterImg = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 40px;
`

export const SocialLinks = styled.div`
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
  color: ${cores.darkPink};
`

export const SocialLink = styled.i`
  color: ${cores.darkPink};
  font-size: 24px;
  padding: 8px;
  border-radius: 20px;
`

export const Descricao = styled.p`
  position: absolute;
  top: 235px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: ${cores.darkPink};
`
