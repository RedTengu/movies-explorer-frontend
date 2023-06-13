import { Routes, Route, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

import './App.css';

function App() {
  let location = useLocation();

  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];

  // ФОКУС ФОРМ!
  // Стили кнопок и ссылок
  // Редактирование
  return (
    <>
      {headerPaths.includes(location.pathname) ? <Header /> : "" }
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="movies" element={<Movies />} />
          <Route path="saved-movies" element={<SavedMovies />} />
          <Route path="signup" element={<Register />} />
          <Route path="signin" element="" />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      {footerPaths.includes(location.pathname) ? <Footer /> : "" }
    </>
  )
}

export default App;
