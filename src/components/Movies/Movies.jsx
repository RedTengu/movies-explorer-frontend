import useResize from '../../hooks/useResize';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './Movies.css';

function Movies() {
  let size = useResize();

  return (
    <main className="main">
      <div className={`container ${size.width <= 550 ? "container_movies-mobile" : ""}`}>
        <SearchForm />
        <MoviesCardList />
      </div>
    </main>
  )
}

export default Movies;