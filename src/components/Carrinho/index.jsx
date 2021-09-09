import React from 'react'
import CustomButton from '../Button'
import CarrinhoItem from '../CarrinhoItem'

import './styles.scss'

const Dropdown = ({ children, items, ...props }) => (
  <div class="carrinho">
    <button class="carrinhobtn">{children}</button>
    <div class="carrinho-content">
      <div>
        <CarrinhoItem />
        {/* <CarrinhoItem /> */}
        <CustomButton>Fechar Pedido</CustomButton>
      </div>
    </div>
  </div>
)

export default Dropdown
