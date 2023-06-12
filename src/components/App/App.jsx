import { Routes, Route, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

import './App.css';

function App() {
  let location = useLocation();

  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];

  return (
    <>
      {headerPaths.includes(location.pathname) ? <Header /> : "" }
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="movies" element={<Movies />} />
          <Route path="saved-movies" element={<SavedMovies />} />
          <Route path="signup" element="" />
          <Route path="signin" element="" />
          <Route path="profile" element="" />
          <Route path="*" element={<NotFound />} />
      </Routes>
      {footerPaths.includes(location.pathname) ? <Footer /> : "" }
    </>
  )
}

export default App;
