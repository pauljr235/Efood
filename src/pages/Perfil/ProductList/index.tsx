import Product from '../Product'
import { List } from './styles'

export type CardapioItem = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

export type Props = {
  title: string
  cardapios: CardapioItem[]
}

const ProductList = ({ title, cardapios }: Props) => {
  return (
    <>
      <h2>{title}</h2>
      <List className="container">
        {cardapios.map((cardapio) => (
          <Product
            key={cardapio.id}
            title={cardapio.nome}
            description={cardapio.descricao}
            image={cardapio.foto}
            price={cardapio.preco}
            portion={cardapio.porcao}
            id={0}
          />
        ))}
      </List>
    </>
  )
}

export default ProductList
