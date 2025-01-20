import ProductList from '../../components/ProductList'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

export type Restaurant = {
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

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header />
      <ProductList restaurants={restaurantes} title="Restaurantes" />
    </>
  )
}

export default Home
