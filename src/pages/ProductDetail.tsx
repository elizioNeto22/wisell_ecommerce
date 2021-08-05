import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {products} from '../data/products'
import {Product} from '../model'
import ContactPage from '../pages/ContactPage'
import Button from '../components/UI/Button'
import {FaPlus, FaMinus} from 'react-icons/fa'

interface Props {}

const ProductDetail: React.FC<Props> = () => {

  const params = useParams() as {id: string};

  const [product, setProduct] = useState<Product | undefined>(); //ESTADO LOCAL

  useEffect( () => {
    const prod = products.find(item => item.id === params.id)
    
    if (prod)
      setProduct(prod)
    else
      setProduct(undefined)

  },[params]);

  if (!product)
    return <ContactPage/>

  return ( 
  
    <div className="page--product-detail">
      <div className="product-detail__section">
        <img src={product.imageUrl} alt={product.title} className="product-image" />
      </div>
      <div className="product-detail__section">
        <div className="product-detail__sub-section">
          <h3 className="header">{product.title}</h3>
          <p className="paragraph">{product.description}</p>
        </div>
        <div className="product-detail__sub-section">
          <p className="paragraph">
            Preço:{' '}
            <span className="paragraph--orange">
              R$ {product.price.toFixed(2)}
            </span>
          </p>
        </div>
        <div className="product-detail__sub-section product-detail__sub-section--stock ">
          <p className="paragraph">
            Disponibilidade: <span className="paragraph--success">Em Estoque</span>
          </p>
        </div>
        <div className="product-detail__sub-section quantity-control">
          <Button style={{backgroundColor: '#aba6c2'}} width='50px' height='50px'>
            <FaMinus />
          </Button>
          <div className="qty-action qty-action--qty">
            <p className="paragraph">1</p>
          </div>
          <Button style={{backgroundColor: '#aba6c2'}} width='50px' height='50px'>
            <FaPlus />
          </Button>
        </div>
        <Button style={{backgroundColor: 'black'}} width='160px'>Comprar</Button>
      </div>

    </div>

  );
}

export default ProductDetail
