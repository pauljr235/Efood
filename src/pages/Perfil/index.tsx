import { useEffect, useState } from 'react'
import Header from './Header'
import Hero2 from './Hero2'
import ProductList from './ProductList'

export type Cardapio = {
  title: string
  infos: string
  destaque: string
  description: string
  rating: string
  media: any
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  preco: number
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Perfil = () => {
  const [cardaps, setCardaps] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//1.webp')
      .then((res) => res.json())
      .then((res) => setCardaps(res))
  }, [])
  return (
    <>
      <Header cartCount={0} />
      <Hero2 />
      <ProductList cardapios={cardaps} title={''} />
    </>
  )
}

export default Perfil
