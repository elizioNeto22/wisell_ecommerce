import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ContactPage from '../pages/ContactPage';
import OrderDetail from '../pages/OrderDetail';
import Orders from '../pages/Orders';

interface Props {}

const OrderRoutes: React.FC<Props> = () => {
  
    return (
        <Switch>
            <Route path='/orders/my-orders/:id'>
                <OrderDetail/>
            </Route>
            <Route path='/orders/my-orders'>
                <Orders/>
            </Route>
            <Route path='*'>
                <ContactPage/>
            </Route>
        </Switch>    
    );

}

export default OrderRoutes;
