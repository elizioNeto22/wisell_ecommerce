import React from 'react'
import { Link } from 'react-router-dom'
import { BiDollarCircle, BiHeart } from 'react-icons/bi'

import './styles.scss'
import './styles-mobile.scss'

import { Product } from '../../model/'

interface Props {
  product: Product
}

const ProductItem: React.FC<Props> = ({ product }) => {
  const originalPrice = product.price.toFixed(2)
  return (
    <div className="product-container">
      <Link to={`/products/${product.id}`}>
        <div className="product-icons">
          <BiDollarCircle />
          <BiHeart />
        </div>

        <div className="product-image">
          <img src={product.imageUrl} alt={product.title} />

          <div className="product-description">
            <h4>{product.title}</h4>

            <div className="product-prices">
              <div className="product-sale">
                <p>{originalPrice}</p>
                <p>{product.price.toFixed(2)}</p>
              </div>

              <div className="product-sale-result">
                <p>Economize</p>
                <p>R$ 80,00</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>

    // <Link to={`/products/${product.id}`}>
    //   <div className="product">
    //     <img src={product.imageUrl} alt={product.title} className="product__detail-image" />
    //     <div className="product__detail">
    //       <h4 className="reader--center">{product.title}</h4>
    //       <p className="paragraph--center paragraph--bold paragraph--orange">R$ {product.price.toFixed(2)}</p>
    //     </div>
    //   </div>
    // </Link>
  )
}

export default ProductItem
