import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Message from '../Message/Message';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

import authApi from '../../utils/AuthApi';
import MainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

import './App.css';

function App() {
  // Внедрить прелоадер
  // Доделать работу c MoviesApi

  // Перемещаем в нужный роут
  const navigate = useNavigate();
  // Отслеживаем пути роутов
  const location = useLocation();
  // Список путей для хэдера и футера
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];
  // Инициализация MainApi
  const mainApi = new MainApi({
    url: 'https://api.redtengu.nomoredomains.rocks',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  });

  // Стейты

  // Бургер
  const [ isBurgerOpen, setIsBurgerOpen ] = useState(false);
  // Уведомление
  const [ isMessageOpen, setIsMessageOpen ] = useState(false);
  // Тексты ошибок
  const [ errorMessage, setErrorMessage ] = useState('');
  // Тексты уведомлений
  const [ textMessage, setTextMessage ] = useState('');
  // Уведомление успешно?
  const [ isSucces, setIsSucces ] = useState(false);
  // Залогинен?
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  // Текущий пользователь
  const [ currentUser, setCurrentUser ] = useState({});
  // Фильмы
  const [ movies, setMovies ] = useState([]);

  // Стейт кнопки редактирования
  const [ isEditClicked, setIsEditClicked ] = useState(false);
 
  // Стейт атрибута readOnly
  const [ readOnly, setReadOnly ] = useState(true);

  // Эффекты
  
  // При монтировании проверяем jwt токен
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      authApi.checkToken(jwt)
        .then(res => {
          if (res) {
            setIsLoggedIn(true);

            navigate(location.pathname, { replace: true })
          }
        })
        .catch((error) => console.log(error));
    }
  }, []);

  // Уведомление исчезает через какое то время
  useEffect(() => {
    setTimeout(() => {
      setIsMessageOpen(false);
    }, 3000);
  }, [isMessageOpen]);

  // Получаем данные пользователя и фильмов с сервера, если залогинен
  useEffect(() => {
    isLoggedIn &&
      Promise.all([mainApi.getProfileInfo(), mainApi.getMovies()])
        .then(([user, movies]) => {
          setCurrentUser(user);

          setMovies(movies);
      })
        .catch(err => console.log(err));
  }, [isLoggedIn]);

  // Закрытие меню-бургера
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

  // Функции

  // Обработка ошибок Api
  const handleError = (err) => {
    if(err.includes('400')) {
      setErrorMessage('Введены некорректные данные.');
    }
    if(err.includes('401')) {
      setErrorMessage('Неверный логин или пароль.');
    }
    if(err.includes('409')) {
      setErrorMessage('Такой пользователь уже существует.');
    }
  }

  // Регистрация
  const handleRegister = (name, email, password) => {
    authApi.register(name, email, password)
      .then(() => {
        handleLogin(email, password);

        setIsSucces(true);
        setIsMessageOpen(true);
      })
      .catch(err => {
        setIsSucces(false);
        setIsMessageOpen(true);
        handleError(err);
        console.log(err)
      });
  };

  // Авторизация
  const handleLogin = (email, password) => {
    authApi.authorization(email, password)
      .then(res => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setIsLoggedIn(true);
          navigate('/movies', {replace: true});

          setIsSucces(true);
          setIsMessageOpen(true);
          setTextMessage('Вы успешно вошли!');
        }
      })
      .catch(err => {
        setIsSucces(false);
        setIsMessageOpen(true);
        handleError(err);
        console.log(err);
      });
  };

  // Редактирование профиля
  const handleUpdateUser = (name, email) => {
    mainApi.patchProfileInfo(name, email)
      .then(() => {
        setCurrentUser({...currentUser, name, email});

        setIsSucces(true);
        setIsMessageOpen(true);
        setTextMessage('Профиль успешно обновлен!');
      })
      .then(() => {
        // Скрываем кнопку, только если запрос удачный
        setIsEditClicked(false);
        setReadOnly(true);
      })
      .catch(err => {
        setIsSucces(false);
        setIsMessageOpen(true);
        handleError(err);
        console.log(err);
      });
  }

  // При нажатии на "Редактировать" убираем readOnly и показываем кнопку "Сохранить"
  const handleEditUser = () => {
    setReadOnly(false);
    setIsEditClicked(true);
  }

  // Выход
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
    navigate('/', { replace: true });
    
    setIsSucces(true);
    setIsMessageOpen(true);
    setTextMessage('Вы вышли из аккаунта.');
  }

  // Открыть бургер
  const handleBurgerClick = () => {
    setIsBurgerOpen(isBurgerOpen);
  };
  
  // Закрыть бургер
  const handleCloseBurger = () => {
    setIsBurgerOpen(false)
  };

  // Закрыть уведомление
  const handleCloseMessage = () => {
    setIsMessageOpen(false)
  };

  // Закрытие бургера по клавише esc
  const handleEscClose = (e) => {
    if (e.key === "Escape") {
      handleCloseBurger();
    }
  };

  // Закрытие бургера по клику на оверлей
  const handleOverlayClose = (e) => {
    if (e.target.classList.contains('burger-menu_opened')) {
      handleCloseBurger();
    }
  };

  // Закрытие бургера по клику на ссылку
  const handleLinkClose = (e) => {
    if (e.target.tagName === 'A') {
      handleCloseBurger();
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {headerPaths.includes(location.pathname) 
        ? 
          <Header 
            burgerClick={handleBurgerClick} 
            isLoggedIn={isLoggedIn} /> 
        : "" }
      <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Main />} />
          <Route path="signup" element={<Register onRegister={handleRegister} />} />
          <Route path="signin" element={<Login onLogin={handleLogin} />} />

          <Route path="movies" element={
            <ProtectedRoute 
              isLoggedIn={isLoggedIn}
              element={Movies} />} />

          <Route path="saved-movies" element={
            <ProtectedRoute 
              isLoggedIn={isLoggedIn}
              element={SavedMovies} />} />
              
          <Route path="profile" element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              element={Profile}
              onLogout={handleLogout}
              onUpdateUser={handleUpdateUser} 
              readOnly={readOnly} 
              isEditClicked={isEditClicked}
              onEditUser={handleEditUser} />} />
      </Routes>
      {footerPaths.includes(location.pathname) ? <Footer /> : "" }

      <BurgerMenu isOpen={isBurgerOpen} onClose={handleCloseBurger} />

      <Message 
        isOpen={isMessageOpen} 
        isSucces={isSucces} 
        text={textMessage}
        errorText={errorMessage} 
        onClose={handleCloseMessage} />

    </CurrentUserContext.Provider>
  )
}

export default App;
