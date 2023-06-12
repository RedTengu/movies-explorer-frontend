import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './Movies.css';

function Movies() {
  return (
    <main className="main">
      <div className="container">
        <SearchForm />
        <MoviesCardList />
      </div>
    </main>
  )
}

export default Movies;