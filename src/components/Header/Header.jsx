import { Link, NavLink, useLocation } from 'react-router-dom';

import Logo from '../Logo/Logo';

import './Header.css';

function Header() {
  let location = useLocation();

  return (
    <>
      {location.pathname === '/'
        ?
          <header className="header header_background_pink">
            <div className="container">
              <nav className="header__nav">
                <Logo />
                <ul className="header__nav-list header__nav-list_type_main">
                  <li>
                    <Link className="header__nav-link header__nav-link_type_main hover-opacity-link" to="/signup">
                      Регистрация
                    </Link>
                  </li>
                  <li>
                    <Link className="header__nav-link header__nav-link_type_main header__nav-link_type_signin hover-opacity-btn" to="/signin">
                      Войти
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        :
          <header className="header">
            <div className="container">
              <nav className="header__nav">
                <Logo />
                <ul className="header__nav-list">
                  <li>
                    <NavLink to="/movies" className={({isActive}) => `header__nav-link ${isActive ? "header__nav-link_active" : ""}`} href="#">
                      Фильмы
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/saved-movies" className={({isActive}) => `header__nav-link ${isActive ? "header__nav-link_active" : ""}`} href="#">
                      Сохраненные фильмы
                    </NavLink>
                  </li>
                </ul>
                <Link className="header__nav-link header__nav-link_type_profile hover-opacity-btn" to="/profile">
                  Аккаунт
                </Link>
              </nav>
            </div>
          </header>
      }
    </>
  )
}

export default Header;