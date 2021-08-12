import { Link, Redirect } from 'react-router-dom'
import SearchBar from '../../components/SearchBar'
import { FiUser, FiShoppingCart } from 'react-icons/fi'
import { ReactComponent as Logo } from '../../assets/logo3.svg'
import CustomLink from '../../components/Link'
import HamburgerMenu from '../../components/HamburgerMenu'
import BarraMediaMobile from './index-mobile'

import './styles.scss'
import './styles-mobile.scss'

const BarraMedia = () => {
  const logoutHandler = () => {
    ;<Redirect to="/" />
  }

  return (
    <div className="media-container">
      <header className="header">
        <HamburgerMenu />
        <div className="logo-container">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <SearchBar />
        <nav>
          <ul>
            <li className="login-link">
              <p>
                <span>Bem-vindo :)</span>
                <CustomLink size="sm">Entre ou Cadastre-se</CustomLink>
              </p>
            </li>
            <li className="carrinho-icone">
              <FiShoppingCart />
            </li>
            <li className="user-icone">
              <FiUser />
            </li>
          </ul>
        </nav>
      </header>
      <SearchBar />
    </div>
  )
}

export default BarraMedia
