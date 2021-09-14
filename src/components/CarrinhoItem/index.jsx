import React from 'react'
import { BiTrash, BiPlusCircle, BiMinusCircle } from 'react-icons/bi'
import './styles.scss'
import './styles-mobile.scss'

const CarrinhoItem = () => {
  return (
    <div className="carrinho-wrapper">
      <div className="cart-item">
        <img src="../../assets/products/pulverizador.png" alt="" />
        <div className="item-info">
          <p className="paragraph">Pulverizador Quadriciclo</p>
          <div>
            <span className="quantity-icon">
              <BiPlusCircle />
            </span>
            <span className="quantity">1</span>
            <span className="quantity-icon">
              <BiMinusCircle />
            </span>
          </div>
          <p className="paragraph">$8829.29</p>
          <BiTrash />
        </div>
      </div>
    </div>
  )
}

export default CarrinhoItem
