import { Link, Redirect } from 'react-router-dom'
import SearchBar from '../../components/SearchBar'
import { FiUser, FiShoppingCart } from 'react-icons/fi'
import { ReactComponent as Logo } from '../../assets/logo3.svg'
import CustomLink from '../../components/Link'

import './styles.scss'

const BarraMedia = () => {
  const logoutHandler = () => {
    ;<Redirect to="/" />
  }

  return (
    <div className="media-container">
      <header className="header">
        <Link to="/">
          <Logo />
        </Link>
        <SearchBar />
        <nav>
          <ul>
            <li>
              <p>
                <span>Bem-vindo :)</span>
                <CustomLink size="sm">Entre ou Cadastre-se</CustomLink>
              </p>
            </li>
            <li>
              <FiShoppingCart />
            </li>
            <li>
              <FiUser />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default BarraMedia
