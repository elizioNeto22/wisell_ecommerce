import React from 'react'
import BarraSuperior from '../../pages/BarraSuperior'
import BannerCarrossel from '../../components/BannerCarrossel'
import BarraMedia from '../../pages/BarraMedia'
import BarraMenu from '../../pages/BarraMenu'

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <BarraSuperior />
      <BarraMedia />
      <BarraMenu />
      {/* <BannerCarrossel /> */}
      <div className="page">{children}</div>
    </>
  )
}

export default Layout
