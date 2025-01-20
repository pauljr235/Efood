import styled from 'styled-components'
import { cores } from '../../../styles'

export const Card = styled.div`
  border: 1px solid ${cores.darkPink};
  padding: 8px;
  max-width: 472px;
  position: relative;
  border-radius: 8px;
  color: ${cores.lightPink};
  background-color: ${cores.darkPink};
  img {
    width: 100%;
    height: 167px;
  }
`

export const Titulo = styled.h4`
  font-size: 18px;
  font-weight: bold;
  padding: 8px;
  line-height: 22px;
  color: ${cores.lightPink};
  max-width: 472px;
`

export const Descricao = styled.p`
  color: ${cores.lightPink};
  padding-bottom: 16px;
  padding-left: 8px;
`

export const Button = styled.button`
  width: 100%;
  padding: 4px;
  font-weight: bold;
  font-size: 16px;
  color: ${cores.darkPink};
  background-color: ${cores.lightPink};
  border: none;
`
export const Modal = styled.div`
  position: fixed;
  top: 200px;
  left: 329px;
  padding: 32px;
  max-width: 1024px;
  max-height: 344px;
  display: none;
  background-color: ${cores.darkPink};
  z-index: 20; /* Colocar o modal acima do overlay */

  &.visivel {
    display: flex;
  }

  header {
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px;
  }
`
export const ModalContent = styled.div`
  padding-left: 24px;
  color: ${cores.whitePink};
  h4 {
    padding-bottom: 16px;
  }
`

export const Imagem = styled.div`
  img {
    height: 280px;
    width: 280px;
  }
`
export const ModalButton = styled.button`
  padding: 4px 6px;
  background-color: ${cores.lightPink};
  color: ${cores.darkPink};
  border: none;
  margin-bottom: 8px;
  margin-top: 24px;
  font-weight: bold;
  object-fit: cover;
`

export const Overlay = styled.div`
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); /* Fundo escuro e semitransparente */
  z-index: 10; /* Certifique-se de que o overlay esteja abaixo do modal */
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  display: flex;
`
