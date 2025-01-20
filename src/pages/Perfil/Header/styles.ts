import styled from 'styled-components'
import { cores } from '../../../styles'

export const HeaderContainer = styled.div`
  align-items: center;
  text-decoration: none;
`

export const Imagem = styled.div`
  width: 100%;
  height: 173px;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Logo = styled.img`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 40px;
`

export const LinkH = styled.ul`
  position: absolute;
  top: 59px;
  left: 171px;
  padding-top: 40px;

  font-size: 18px;
  font-weight: bold;

  a {
    text-decoration: none;
    color: ${cores.darkPink};
  }
`

export const Carrinho = styled.div`
  position: absolute;
  top: 59px;
  right: 171px;
  padding-top: 40px;
  color: ${cores.darkPink};
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
`
