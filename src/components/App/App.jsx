import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

import './App.css';

function App() {
  // Стейт бургера
  const [ isBurgerOpen, setIsBurgerOpen ] = useState(false);

  // Эффект для закрытия меню-бургера
  useEffect(() => {
    if (isBurgerOpen) {
      document.addEventListener('keydown', handleEscClose);
      document.addEventListener('mousedown', handleOverlayClose);
      document.addEventListener('click', handleLinkClose)
    }

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('mousedown', handleOverlayClose);
      document.removeEventListener('click', handleLinkClose)
    };
  }, [isBurgerOpen]);

  // Отслеживаем роуты
  let location = useLocation();

  // Список путей для хэдера и футера
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];

  // Клик по бургеру
  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  }
  
  // Закрыть бургер
  const closeBurger = () => {
    setIsBurgerOpen(false)
  }

  // Закрытие бургера по клавише
  const handleEscClose = (e) => {
    if (e.key === "Escape") {
      closeBurger();
    }
  }

  // Закрытие бургера по клику на оверлей
  const handleOverlayClose = (e) => {
    if (e.target.classList.contains('burger-menu_opened')) {
      closeBurger();
    }
  }

  // Закрытие бургера по клику на ссылку
  const handleLinkClose = (e) => {
    if (e.target.tagName === 'A') {
      closeBurger();
    }
  }

  return (
    <>
      {headerPaths.includes(location.pathname) ? <Header burgerClick={handleBurgerClick} /> : "" }
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="movies" element={<Movies />} />
          <Route path="saved-movies" element={<SavedMovies />} />
          <Route path="signup" element={<Register />} />
          <Route path="signin" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      {footerPaths.includes(location.pathname) ? <Footer /> : "" }

      <BurgerMenu isOpen={isBurgerOpen} onClose={closeBurger} />
    </>
  )
}

export default App;
