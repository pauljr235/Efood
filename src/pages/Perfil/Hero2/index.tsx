import massa from '../../../assets/images/pasta.png'
import { ImagemHero, TituloHero, Italiana } from './styles'

export const Hero2 = () => (
  <>
    <ImagemHero style={{ backgroundImage: `url(${massa})` }}></ImagemHero>
    <div>
      <Italiana>Italiana</Italiana>
      <TituloHero>La Dolce Vita Trattoria</TituloHero>
    </div>
  </>
)

export default Hero2
