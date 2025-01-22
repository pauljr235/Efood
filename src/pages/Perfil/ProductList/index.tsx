import Product from '../Product'
import { List } from './styles'
import pizza from '../../../assets/images/pizza.png'
import { Cardapio } from '..'

export type Props = {
  title: string
  cardapios: Cardapio[]
}

const ProductList = ({ title, cardapios }: Props) => {
  return (
    <>
      <List className="container">
        {cardapios.map((cardapio) => (
          <Product
            key={cardapio.id}
            image={cardapio.capa}
            description={cardapio.descricao}
            title={cardapio.titulo}
            price={cardapio.preco}
          />
        ))}
      </List>
    </>
  )
}

export default ProductList
