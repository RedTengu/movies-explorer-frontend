import { useLocation } from 'react-router-dom';
import useResize from '../../hooks/useResize';

import MoviesCard from '../MoviesCard/MoviesCard';
import testMovies from '../../utils/testMovies';

import './MoviesCardList.css';

function MoviesCardList() {
  let location = useLocation();
  let size = useResize();

  const movies = location.pathname === '/saved-movies'
    ? testMovies.filter(movie => movie.isLiked)
    : testMovies

  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {size.width <= 768
          ?
            size.width <= 480
              ?
                movies.slice(0, 5).map((movie, i) => {
                  return <MoviesCard key={i} movie={movie} />
                })
              :
                movies.slice(0, 8).map((movie, i) => {
                  return <MoviesCard key={i} movie={movie} />
                })
          :
            movies.map((movie, i) => {
              return <MoviesCard key={i} movie={movie} />
            })
        }
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