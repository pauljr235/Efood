import Header from './Header'
import Hero2 from './Hero2'
import ProductList from './ProductList'
import { useEffect, useState } from 'react'

const Perfil = () => {
  return (
    <>
      <Header cartCount={0} />
      <Hero2 />
      <ProductList />
    </>
  )
}

export default Perfil
