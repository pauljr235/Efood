import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
`
export const Logo = styled.img`
  position: absolute;
  top: 0;
  padding-top: 40px;
  left: 50%;
  transform: translateX(-50%);
`

export const Titulo = styled.h1`
  text-align: center;
  position: absolute;
  top: 270px;
  left: 50%;
  transform: translateX(-50%);
  color: ${cores.darkPink};
`
