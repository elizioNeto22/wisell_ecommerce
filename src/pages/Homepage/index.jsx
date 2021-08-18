import React from 'react'
import ProductItem from '../../components/products/ProductItem'
import BannerCarrossel from '../../components/BannerCarrossel'
import BannerFixo from '../../components/BannerFixo'

import { products } from '../../data/products'

import './styles.scss'
import './styles-mobile.scss'

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
      <BannerFixo />
    </div>
  )
}

export default Homepage
