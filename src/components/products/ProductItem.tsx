import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'
import './styles-mobile.scss'

import { Product } from '../../model/'

interface Props {
  product: Product
}

const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="product">
        <img src={product.imageUrl} alt={product.title} className="product__detail-image" />
        <div className="product__detail">
          <h4 className="reader--center">{product.title}</h4>
          <p className="paragraph--center paragraph--bold paragraph--orange">R$ {product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
