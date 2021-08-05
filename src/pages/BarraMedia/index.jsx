import { Link, Redirect } from 'react-router-dom'
import SearchBar from '../../components/SearchBar'
import { FiUser, FiShoppingCart } from 'react-icons/fi'
import { ReactComponent as Logo } from '../../assets/logo3.svg'

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
        {/* <div className="logo">
        </div> */}
        <SearchBar />
        <nav>
          <ul>
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
