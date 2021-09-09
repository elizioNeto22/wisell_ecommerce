import React from 'react'
import { BiTrash } from 'react-icons/bi'
import './styles.scss'

const CarrinhoItem = () => {
  return (
    <div className="cart-item">
      <img src="../../assets/products/pulverizador.png" alt="" />
      <div className="item-info">
        <p>Pulverizador Quadriciclo</p>
        <div>
          <span className="quantity-icon">&#8826;</span>
          <span>&#10005; </span>
          <span className="quantity">1</span>
          <span className="quantity-icon">&#8827;</span>
        </div>
        <p>$8829.29</p>
        <BiTrash />
      </div>
    </div>
  )
}

export default CarrinhoItem
