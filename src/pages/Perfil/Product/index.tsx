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

import pizza from '../../../assets/images/pizza.png'
import fechar from '../../../assets/images/close 1.png'

type ProductProps = {
  title: string
  description: string
  image: string
  price: number
}

const Product = ({ title, description, image, price }: ProductProps) => {
  const [modalAberto, setModalAberto] = useState(false)
  const [carrinho, setCarrinho] = useState<ProductProps[]>([]) // Estado do carrinho

  const adicionarAoCarrinho = () => {
    const produto = { title, description, image, price }
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
            <img src={pizza} alt="Imagem pizza" />
          </Imagem>
          <ModalContent>
            <h4>Pizza Marguerita</h4>
            <p>{description}</p>
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
