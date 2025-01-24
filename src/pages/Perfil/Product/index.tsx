import { useState } from 'react'
import {
  Button,
  Card,
  Container,
  Descricao,
  Imagem,
  Modal,
  ModalButton,
  ModalContent,
  Overlay,
  Titulo
} from './styles'

import fechar from '../../../assets/images/close 1.png'

export type ProductProps = {
  title: string
  description: string
  image: string
  price: number
  portion: string
  id: number
}

const Product = ({
  title,
  description,
  image,
  price,
  portion,
  id
}: ProductProps) => {
  const [modalAberto, setModalAberto] = useState(false)
  const [carrinho, setCarrinho] = useState<ProductProps[]>([]) // Estado do carrinho

  const adicionarAoCarrinho = () => {
    const produto = { title, description, image, price, portion, id }
    setCarrinho([...carrinho, produto]) // Adiciona o produto ao carrinho
    alert(`O produto "${title}" foi adicionado ao carrinho!`)
    setModalAberto(false) // Fecha o modal após adicionar
  }

  return (
    <>
      <Card>
        <img src={image} />
        <Titulo>{title}</Titulo>
        <Descricao>{description}</Descricao>
        <Button onClick={() => setModalAberto(true)}>Mais detalhes</Button>
      </Card>

      <Modal className={modalAberto ? 'visivel' : ''}>
        <Container>
          <header>
            <img
              onClick={() => setModalAberto(false)}
              src={fechar}
              alt="ìcone de fechar"
            />
          </header>
          <Imagem>
            <img src={image} alt={title} />
          </Imagem>
          <ModalContent>
            <h4>{title}</h4>
            <p>PREÇO: {description}</p>
            <p>PORÇÃO: {portion}</p>
            <ModalButton onClick={adicionarAoCarrinho}>
              Adicionar ao carrinho - {price}
            </ModalButton>
            <div className="overlay"></div>
          </ModalContent>
        </Container>
      </Modal>
      <Overlay className="overlay"></Overlay>
    </>
  )
}

export default Product
