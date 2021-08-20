import React from 'react'
import BarraSuperior from '../../pages/BarraSuperior'
import BarraMedia from '../../pages/BarraMedia'
import BarraMenu from '../../pages/BarraMenu'
import Newsletter from '../../components/Newsletter'
import MapaDoSite from '../../pages/MapaDoSite'
import Footer from '../../pages/Footer'
import Filtro from '../Filtro'

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <BarraSuperior />
      <BarraMedia />
      <BarraMenu />
      <Newsletter />
      <div className="page">{children}</div>
      <MapaDoSite />
      <Footer />
      <Filtro />
    </>
  )
}

export default Layout
