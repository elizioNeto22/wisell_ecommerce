import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ContactPage from '../pages/ContactPage';
import ManageOrderDetail from '../pages/ManageOrderDetail';
import ManageOrders from '../pages/ManageOrders';
import ManageProducts from '../pages/ManageProducts';
import ManageUsers from '../pages/ManageUsers';

interface Props {}

const AdminRoutes: React.FC<Props> = () => {
  
    return (
        <Switch>
            <Route path='/admin/manage-orders/:id'>
                <ManageOrderDetail/>
            </Route>
            <Route path='/admin/manage-orders'>
                <ManageOrders/>
            </Route>
            <Route path='/admin/manage-products'>
                <ManageProducts/>
            </Route>
            <Route path='/admin/manage-users'>
                <ManageUsers/>
            </Route>
            <Route path='*'>
                <ContactPage/>
            </Route>
        </Switch>    
    );

}

export default AdminRoutes;
