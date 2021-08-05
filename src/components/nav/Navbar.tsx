import React from 'react'
import {NavLink} from 'react-router-dom'


interface Props {}

const NavBar: React.FC<Props> = () => {

    return (
        <header className='head'>
            <div className='head__section'>
                <NavLink to='/' className='list-link'>Home</NavLink>   
                <NavLink to='/products' className='list-link'>Produtos</NavLink>    
                <NavLink to='/buy/my-cart' className='list-link'>Carrinho de Compras</NavLink>    
                <NavLink to='/buy/select-address' className='list-link'>Endereço</NavLink>    
                <NavLink to='/buy/checkout' className='list-link'>Pagamento</NavLink>    
                <NavLink to='/orders/my-orders' className='list-link'>Meus Pedidos</NavLink>   
                <NavLink to='/admin/manage-products' className='list-link'>Gerenciar Produtos</NavLink>   
                <NavLink to='/admin/manage-orders' className='list-link'>Gerenciar Pedidos</NavLink>   
                <NavLink to='/orders/manage-users' className='list-link'>Gerenciar Usuários</NavLink> 
                <NavLink to='/question' className='list-link'>Dúvidas</NavLink>    
            </div>
        </header>
    );
}

export default NavBar;