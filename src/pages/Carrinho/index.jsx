import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../../components/Button'
import CarrinhoItem from '../../components/CarrinhoItem'

import './styles.scss'

const Carrinho = () => (
  <div class="carrinho">
    <div class="carrinho-content">
      <div>
        <CarrinhoItem />
        <CarrinhoItem />
      </div>
    </div>

    <div className="cart-pay">
      <div className="carrinho-frete">
        <input type="number" name="cep" placeholder="Digite o seu cep" />
      </div>
      <p>Total: R$ 8829.29</p>
      <CustomButton>Fechar Pedido</CustomButton>
    </div>
  </div>
)

export default Carrinho
