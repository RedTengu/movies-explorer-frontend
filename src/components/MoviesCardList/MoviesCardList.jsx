import { useLocation } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard';
import testMovies from '../../utils/testMovies';

import './MoviesCardList.css';

function MoviesCardList() {
  let location = useLocation();

  const movies = location.pathname === '/saved-movies'
    ? testMovies.filter(movie => movie.isLiked)
    : testMovies

  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {movies.map((movie, i) => {
          return <MoviesCard key={i} movie={movie} />
        })}
      </ul>
      {location.pathname === '/movies'
       ?
        <div className="movies-cards__more">
          <button className="movies-cards__more-btn hover-opacity-btn" type="button" name="more-btn" aria-label="Показать больше фильмов">
          Ещё
          </button>
        </div>
       : 
        ""}
    </section>
  )
}

export default MoviesCardList;