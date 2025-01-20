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
}

const Product = ({ title, description, image }: ProductProps) => {
  const [modalAberto, setModalAberto] = useState(false)
  const [carrinho, setCarrinho] = useState<ProductProps[]>([]) // Estado do carrinho

  const adicionarAoCarrinho = () => {
    const produto = { title, description, image }
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
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião. <br />
              <br />
              Serve: de 2 a 3 pessoas
            </p>
            <ModalButton onClick={adicionarAoCarrinho}>
              Adicionar ao carrinho - R$ 60,90
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
