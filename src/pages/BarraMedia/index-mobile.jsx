import { Link, Redirect } from 'react-router-dom'
import SearchBar from '../../components/SearchBar'
import { FiShoppingCart } from 'react-icons/fi'
import { ReactComponent as Logo } from '../../assets/logo3.svg'
import CustomLink from '../../components/Link'
import HamburgerMenu from '../../components/HamburgerMenu'

import './styles.scss'
import './styles-mobile.scss'

const BarraMediaMobile = () => {
  const logoutHandler = () => {
    ;<Redirect to="/" />
  }

  return (
    <header className="header">
      <HamburgerMenu />
      <div className="logo-container">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div>
        <FiShoppingCart />
      </div>
    </header>
  )
}

export default BarraMediaMobile
