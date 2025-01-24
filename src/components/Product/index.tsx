import { Link } from 'react-router-dom'
import estrela from '../../assets/images/star.png'

import { BotaoContainer } from '../Button/styles'
import Tag from '../Tag'

import {
  Card,
  Descricao,
  HeaderCard,
  Infos,
  Rating,
  TituloCard
} from './styles'

type Props = {
  id: number
  image: string
  title: string
  rating: string
  description: string
  infos: string
  destaque?: boolean
  to?: string
}

const Product = ({
  image,
  id,
  title,
  rating,
  description,
  infos,
  destaque
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 197) + '...'
    }
    return descricao
  }

  return (
    <>
      <Card className="container">
        <img src={image} />
        <Infos>
          {destaque && <Tag>Destaque da semana</Tag>}
          <Tag>{infos}</Tag>
        </Infos>
        <HeaderCard>
          <TituloCard>{title}</TituloCard>
          <Rating>
            <h3>{rating}</h3>
            <img src={estrela} alt="Estrela" />
          </Rating>
        </HeaderCard>
        <Descricao>{getDescricao(description)}</Descricao>
        <Link to={`/perfil/${id}`}>
          <BotaoContainer type="button" title="Saiba mais">
            Saiba mais
          </BotaoContainer>
        </Link>
      </Card>
    </>
  )
}

export default Product
