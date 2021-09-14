import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Homepage from '../pages/Homepage'
import Carrinho from '../pages/Carrinho'
import Products from '../pages/Products'
import ProductDetail from '../components/Produto-detalhe'
import ContactPage from '../pages/ContactPage'
import BuyRoutes from './BuyRoutes'
import OrderRoutes from './OrderRoutes'
import AdminRoutes from './AdminRoutes'

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <>
      <Switch>
        <Route path="/buy">
          {/* Subrota */}
          <BuyRoutes />
        </Route>
        <Route path="/orders">
          {/* Subrota */}
          <OrderRoutes />
        </Route>
        <Route path="/admin">
          {/* Subrota */}
          <AdminRoutes />
        </Route>
        <Route path="/products/:id">
          <ProductDetail />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/cart" exact>
          <Carrinho />
        </Route>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="*">
          <ContactPage />
        </Route>
      </Switch>
    </>
  )
}

export default Routes
