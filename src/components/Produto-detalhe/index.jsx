import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { products } from '../../data/products'
// import { Product } from '../../model'
import ContactPage from '../../pages/ContactPage'
import { BiDollarCircle, BiHeart, BiPlusCircle, BiMinusCircle } from 'react-icons/bi'
import CustomButton from '../Button'
import Dropdown from '../Dropdown'
import BannerFixo from '../BannerFixo'
import Carrossel from '../Carrossel'
import ProdutoFichaTecnica from '../Produto-FichaTecnica'

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
  category: '', //ProductCategory
  inventory: 0,
}

const ProductDetail = () => {
  const params = useParams()

  const [product, setProduct] = useState(Product) //ESTADO LOCAL

  const pagamentos = [
    `1x sem juros de ${product.price.toFixed(2)}`,
    `2x sem juros de ${(product.price / 2).toFixed(2)}`,
    `3x sem juros de ${(product.price / 3).toFixed(2)}`,
    `4x sem juros de ${(product.price / 4).toFixed(2)}`,
  ]
  useEffect(() => {
    const prod = products.find((item) => item.id === params.id)

    if (prod) setProduct(prod)
    else setProduct(undefined)
  }, [params])

  if (!product) return <ContactPage />

  return (
    <div className="produto-wrapper">
      <div className="produto-container">
        <div className="produto-img-container">
          <BiHeart />
          <div className="img-container">
            <img src={product.imageUrl} alt={product.title} className="produto-img" />
          </div>
          <Carrossel />
        </div>

        <div className="produto-descricao">
          <div className="produto-descricao-header">
            <div className="produto-promocao">
              <BiDollarCircle />
              Promoção
            </div>
            <div className="produto-avaliacao">
              <a href="#ss">Avaliar Produto</a>
            </div>
          </div>

          <div className="produto-titulo">
            {product.title}
            <p>{product.description}</p>
          </div>

          <div className="produto-valores">
            <div className="produto-precos">
              <p>{product.price}</p>
              <p>{product.price.toFixed(2)}</p>
            </div>

            <div className="produto-quantidade">
              <BiPlusCircle />
              <p>1</p>
              <BiMinusCircle />
            </div>
          </div>

          <CustomButton className="produto-btn-comprar">COMPRAR</CustomButton>

          <div className="produto-frete">
            <div>
              <p>Consulte as opçoes de envio</p>
              <input type="number" name="cep" placeholder="Digite o seu cep" />
            </div>

            <div>
              <Dropdown items={pagamentos}>Meios de Pagamento</Dropdown>
            </div>
          </div>
        </div>
      </div>
      <ProdutoFichaTecnica />
    </div>
  )
}

export default ProductDetail
