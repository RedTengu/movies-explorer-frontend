import { Route, Routes } from 'react-router-dom';

import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <header className="header header_background_pink">
            <div className="container">
              <nav className="header__nav">
                <a className="header__nav-link hover-opacity-btn" href="/"><img src={logo} alt="Логотип Movies Explorer" /></a>
                <ul className="header__nav-list header__nav-list_type_main">
                  <li><a className="header__nav-link header__nav-link_type_main hover-opacity-link" href="#">Регистрация</a></li>
                  <li><a className="header__nav-link header__nav-link_type_main header__nav-link_type_signin hover-opacity-btn" href="#">Войти</a></li>
                </ul>
              </nav>
            </div>
          </header>
        } />
        <Route path='/*' element={
          <header className="header">
            <div className="container">
              <nav className="header__nav">
                <a className="header__nav-link hover-opacity-btn" href="/"><img src={logo} alt="Логотип Movies Explorer" /></a>
                <ul className="header__nav-list">
                  <li><a className="header__nav-link hover-opacity-link" href="#">Фильмы</a></li>
                  <li><a className="header__nav-link hover-opacity-link" href="#">Сохраненные фильмы</a></li>
                </ul>
                <a className="header__nav-link header__nav-link_type_profile hover-opacity-btn" href="#">Аккаунт</a>
              </nav>
            </div>
          </header>
        } />
      </Routes>
    </>
  )
}

export default Header;