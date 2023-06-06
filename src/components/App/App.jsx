import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
