import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <a className="header__nav-link hover-opacity-btn" href="/"><img src={logo} alt="Логотип Movies Explorer" /></a>
          <ul className="header__nav-list">
            <li><a className="header__nav-link hover-opacity-link" href="#">Регистрация</a></li>
            <li><a className="header__nav-link header__nav-link_signin hover-opacity-btn" href="#">Войти</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;