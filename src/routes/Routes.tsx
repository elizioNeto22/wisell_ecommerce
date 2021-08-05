import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Index from '../pages/Index'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'
import ContactPage from '../pages/ContactPage'
import BuyRoutes from './BuyRoutes'
import OrderRoutes from './OrderRoutes'
import AdminRoutes from './AdminRoutes'

interface Props {}

const Routes: React.FC<Props> = () => {
  
    return (
        <>
            <Switch>
                <Route path='/buy'>
                    {/* Subrota */}
                    <BuyRoutes/>
                </Route>
                <Route path='/orders'>
                    {/* Subrota */}
                    <OrderRoutes/>
                </Route>
                <Route path='/admin'> 
                    {/* Subrota */}
                    <AdminRoutes/>
                </Route>
                <Route path='/products/:id'>
                    <ProductDetail/>
                </Route>
                <Route path='/products'>
                    <Products/>
                </Route>
                <Route path='/' exact>
                    <Index/>
                </Route>
                <Route path='*'>
                    <ContactPage/>
                </Route>
            </Switch>
        </>    
    );

}

export default Routes;
