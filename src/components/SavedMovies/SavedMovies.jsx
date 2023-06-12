import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css';

function SavedMovies() {
  return (
    <main className="main">
      <div className="container">
        <SearchForm />
        <MoviesCardList />
      </div>
    </main>
  )
}

export default SavedMovies;