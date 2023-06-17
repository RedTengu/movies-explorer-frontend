import { useLocation } from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard({ movie }) {
  let location = useLocation();

  return (
    <li className="card">
      <div className="card__info-wrapper">  
        <div className="card__info">
          <h2 className="card__title">33 слова о дизайне</h2>
          <span className="card__duration">1ч 47м</span>
        </div>
        {location.pathname === '/movies' 
          ? <button className="card__btn card__btn_type_save hover-opacity-btn" type="button" name="save-movie" aria-label="Добавить в избранное" />
          : <button className="card__btn card__btn_type_delete hover-opacity-btn" type="button" name="delete-movie" aria-label="Убрать из избранного" />}
      </div>
      <img className="card__poster" src={movie.thumbnail} alt="Постер фильма 33 слова о дизайне" />
    </li>
  )
}

export default MoviesCard;