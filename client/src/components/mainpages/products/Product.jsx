import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import ProductList from '../utils/ProductLists/ProductList'

const Product = () => {
  const state = useContext(GlobalState)
  const [products] = state.productsAPI.products
  const [isAdmin] = state.userAPI.isAdmin

  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">      
      {
        products.map(product => {
          return <ProductList key={product._id} product={product} isAdmin={isAdmin}/>
        })
      }      
    </div>
  )
}

export default Product
