import { useEffect, useState } from 'react'
import Header from './Header'
import Hero2 from './Hero2'
import ProductList from './ProductList'

export type CardapioItem = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

export type Cardapio = {
  id: number
  titulo: string
  descricao: string
  capa: string
  tipo: string
  avaliacao: string
  destacado: boolean
  cardapio: CardapioItem[]
}

const Perfil = () => {
  const [cardapios, setCardapios] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/efood')
      .then((res) => res.json())
      .then((res) => setCardapios(res))

    fetch('https://fake-api-tau.vercel.app/efood')
      .then((res) => res.json())
      .then((res) => setCardapios(res))
  }, [])
  return (
    <>
      <Header cartCount={0} />
      <Hero2 />
      {cardapios.map((cardapio) => (
        <ProductList
          key={cardapio.id}
          title={cardapio.titulo}
          cardapios={cardapio.cardapio}
        />
      ))}
    </>
  )
}

export default Perfil
