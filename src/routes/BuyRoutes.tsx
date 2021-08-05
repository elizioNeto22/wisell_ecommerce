import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Checkout from '../pages/Checkout';
import ContactPage from '../pages/ContactPage';
import MyCart from '../pages/MyCart';
import SelectAddress from '../pages/SelectAddress';

interface Props {}

const BuyRoutes: React.FC<Props> = () => {
  
    return (
        <Switch>
            <Route path='/buy/mycart'>
                <MyCart/>
            </Route>
            <Route path='/buy/select-address'>
                <SelectAddress/>
            </Route>
            <Route path='/buy/checkout'>
                <Checkout/>
            </Route>
            <Route path='*'>
                <ContactPage/>
            </Route>
        </Switch>    
    );

}

export default BuyRoutes;
