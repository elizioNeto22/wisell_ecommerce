import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { products } from '../../data/products'
// import { Product } from '../../model'
import ContactPage from '../../pages/ContactPage'
import { BiDollarCircle, BiHeart, BiPlusCircle, BiMinusCircle } from 'react-icons/bi'
import CustomButton from '../Button'
import Dropdown from '../Dropdown'
import BannerFixo from '../BannerFixo'

import './styles.scss'
import './styles-mobile.scss'

const Product = {
  id: '',
  title: '',
  description: '',
  imageUrl: '',
  imageRef: '',
  imageFileName: '',
  price: 0,
  category: '',
  inventory: 0,
}

const ProdutoFichaTecnica = () => {
  const params = useParams()

  const [product, setProduct] = useState(Product)

  useEffect(() => {
    const prod = products.find((item) => item.id === params.id)

    if (prod) setProduct(prod)
    else setProduct(undefined)
  }, [params])

  if (!product) return <ContactPage />

  return (
    <div className="table-wrapper">
      <div className="table-container">
        <div className="table-content">
          <h5>Nome</h5>
          <p>{product.description}</p>
        </div>
        <div className="table-content">
          <h5>Preço</h5>
          <p>{product.price}</p>
        </div>
        <div className="table-content">
          <h5>Estoque</h5>
          <p>{product.inventory}</p>
        </div>
      </div>
    </div>
  )
}

export default ProdutoFichaTecnica
