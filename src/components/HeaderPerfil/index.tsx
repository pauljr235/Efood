import { Carrinho, Div, Logo, Nome, Vector } from './styles'

import vectorImg from '../../assets/images/Vector.png'
import logoImage from '../../assets/images/logo.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Link } from 'react-router-dom'

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <Vector style={{ backgroundImage: `url(${vectorImg})` }}>
        <Div>
          <Link style={{ textDecoration: 'none' }} to="/">
            <Nome>Restaurantes</Nome>
          </Link>
          <Logo src={logoImage} alt="logo da marca" />
          <Carrinho onClick={openCart}>
            {items.length} produto(s) no carrinho
          </Carrinho>
        </Div>
      </Vector>
    </>
  )
}

export default HeaderPerfil
