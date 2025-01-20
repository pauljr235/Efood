import { Carrinho, LinkH, HeaderContainer, Imagem, Logo } from './styles'
import logo from '../../../assets/images/logo.png'
import headerImg from '../../../assets/images/fundo.png'
import { Link as RouterLink } from 'react-router-dom'

type HeaderProps = {
  cartCount: number
}

const Header = ({ cartCount }: HeaderProps) => (
  <HeaderContainer>
    <Imagem style={{ backgroundImage: `url(${headerImg})` }}></Imagem>
    <Logo src={logo} alt="Logo efood" />
    <nav>
      <LinkH>
        <RouterLink to="/">Restaurantes</RouterLink>
      </LinkH>
    </nav>
    <Carrinho>{cartCount} produto(s) no carrinho</Carrinho>
  </HeaderContainer>
)

export default Header
