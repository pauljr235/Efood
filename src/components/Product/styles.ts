import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  border: 1px solid ${cores.darkPink};
  max-width: 472px;

  position: relative;
  background-color: #fff;
  img {
    width: 100%;
    height: 314px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 16px;
  }
`

export const TituloCard = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.darkPink};
  max-width: 472px;
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  font-weight: bold;

  img {
  width
  }
`

export const Descricao = styled.p`
  color: ${cores.darkPink};
  padding-bottom: 16px;
  padding-left: 8px;
`

export const Rating = styled.div`
  color: ${cores.darkPink};
  gap: 8px;
  display: flex;
  img {
    widht: 18px;
    height: 18px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 0;
  right: 8px;

  justify-content: space-between;
`

export const LinkH = styled.div`
  position: absolute;
  top: 59px;
  left: 171px;
  padding-top: 40px;

  font-size: 18px;
  font-weight: bold;

  a {
    text-decoration: none;
  }
`
