import React from 'react'
import ProductItem from '../../components/products/ProductItem'
import BannerCarrossel from '../../components/BannerCarrossel'

import { products } from '../../data/products'

import './styles.scss'

const Homepage = () => {
  return (
    <div className="home-container">
      <BannerCarrossel />
      <div className="page--products">
        <div className="products">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Homepage
