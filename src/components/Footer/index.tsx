import logo from '../../assets/images/logo.png'
import {
  Descricao,
  FooterContainer,
  FooterImg,
  SocialLink,
  SocialLinks
} from './styles'

const Footer = () => (
  <FooterContainer>
    <FooterImg src={logo} alt="Logo E-food" />
    <SocialLinks>
      <a href="#">
        <SocialLink className="bi bi-instagram"></SocialLink>
      </a>
      <a href="#">
        <SocialLink className="bi bi-facebook"></SocialLink>
      </a>
      <a href="#">
        <SocialLink className="bi bi-twitter"></SocialLink>
      </a>
    </SocialLinks>
    <Descricao>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Descricao>
  </FooterContainer>
)

export default Footer
