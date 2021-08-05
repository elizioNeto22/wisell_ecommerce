import React from 'react'
import BarraSuperior from '../../pages/BarraSuperior'
import NavBar from '../nav/Navbar'
import BarraMedia from '../../pages/BarraMedia'
import BarraMenu from '../../pages/BarraMenu'

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <BarraSuperior />
      <BarraMedia />
      <BarraMenu />
      {/* <NavBar /> */}
      <div className="page">{children}</div>
    </>
  )
}

export default Layout
