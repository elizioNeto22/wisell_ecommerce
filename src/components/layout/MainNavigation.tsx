import { Link, Redirect } from 'react-router-dom'
import FormInput from '../SearchBar'
import classes from './MainNavigation.module.css'

interface Props {}

const MainNavigation: React.FC<Props> = () => {
  const logoutHandler = () => {
    // optional: redirect the user
    ;<Redirect to="/" />
  }

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>WISELL RECommerce</div>
      </Link>
      <FormInput />
      <nav>
        <ul>
          <li>
            <Link to="/auth">Entrar</Link>
          </li>
          <li>
            <Link to="/profile">Perfil</Link>
          </li>
          <li>
            <button onClick={logoutHandler}>Sair</button>
          </li>
          <li>
            <label>Olá, Cliente</label>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
