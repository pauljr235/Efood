import Product from '../Product'
import { List } from './styles'
import pizza from '../../../assets/images/pizza.png'

const ProductList = () => {
  return (
    <>
      <List className="container">
        <Product
          title="Pizza Marguerita"
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
          }
          image={pizza}
        />
        <Product
          title="Pizza Marguerita"
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
          }
          image={pizza}
        />
        <Product
          title="Pizza Marguerita"
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
          }
          image={pizza}
        />
        <Product
          title="Pizza Marguerita"
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
          }
          image={pizza}
        />
        <Product
          title="Pizza Marguerita"
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
          }
          image={pizza}
        />
        <Product
          title="Pizza Marguerita"
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
          }
          image={pizza}
        />
      </List>
    </>
  )
}

export default ProductList
