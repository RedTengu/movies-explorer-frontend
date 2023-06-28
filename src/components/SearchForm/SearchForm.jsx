import { useState, useEffect } from 'react';
import useResize from '../../hooks/useResize';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css'

function SearchForm({ searchReq, onMoviesFilter }) {
  const isChecked = JSON.parse(localStorage.getItem('filterCheckbox'));

  let size = useResize();

  const [isShortFilm, setIsShortFilm] = useState(isChecked);
  const [searchValue, setSearchValue] = useState('');
  
  useEffect(() => {
    if (searchReq.searchValue) {
      setSearchValue(searchReq.searchValue);
    }
  }, [searchReq.searchValue]);

  const checkFilterCheckbox = () => {
    if (searchValue !== '') {
      setIsShortFilm(!isShortFilm);

      onMoviesFilter({
        searchValue,
        isShortFilm: !isShortFilm
      });
    } else {
      setIsShortFilm(!isShortFilm);

      onMoviesFilter({
        searchValue: searchReq.searchValue,
        isShortFilm: !isShortFilm
      });
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onMoviesFilter({ searchValue, isShortFilm });
  };

  return (
    <>
      {
        size.width <= 550
          ? 
            <section className="search">
              <form className="search__form" name="search-form" onSubmit={handleSubmit}>
                <div className="search__field">
                  <input 
                    className="search__input" 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="Фильм"
                    value={searchValue || ''}
                    onChange={handleChange}
                    required />
                  <button 
                    className="search__btn hover-opacity-btn" 
                    type="submit" 
                    name="search-button" 
                    aria-label="Найти" />
                </div>
              </form>
              <FilterCheckbox 
                isChecked={searchReq.isShortFilm}
                onCheckbox={checkFilterCheckbox} />
            </section>   
          :
            <section className="search">
              <form className="search__form" name="search-form" onSubmit={handleSubmit}>
                <div className="search__field">
                  <span className="search__icon"></span>
                  <input 
                    className="search__input" 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="Фильм"
                    value={searchValue || ''}
                    onChange={handleChange} 
                    required />
                  <button 
                    className="search__btn hover-opacity-btn"
                    type="submit" 
                    name="search-button" 
                    aria-label="Найти" />
                </div>
                <FilterCheckbox
                  isChecked={searchReq.isShortFilm}
                  onCheckbox={checkFilterCheckbox} />
              </form>
            </section>
      }
    </>
  )
}

export default SearchForm;