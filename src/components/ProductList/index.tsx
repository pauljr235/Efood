import { Restaurant } from '../../pages/Home'
import Product from '../Product'
import { List } from './styles'

export type Props = {
  title: string
  restaurants: Restaurant[]
}

const ProductList = ({ restaurants }: Props) => {
  return (
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Product
            key={restaurant.id}
            image={restaurant.capa}
            destaque={restaurant.destacado}
            rating={restaurant.avaliacao}
            description={restaurant.descricao}
            infos={restaurant.tipo}
            title={restaurant.titulo}
          />
        ))}
      </List>
    </div>
  )
}

export default ProductList
