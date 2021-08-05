import React from 'react'
import NavBar from '../nav/Navbar'
import MainNavigation from './MainNavigation';

interface Props {}

const Layout: React.FC<Props> = ({children}) => {

    return (
        <>
            <MainNavigation />
            <NavBar />
            <div className="page">
                {children}
            </div>
        </>
    );
}

export default Layout;