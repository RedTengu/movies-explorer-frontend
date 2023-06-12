import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css'

function SearchForm() {
  return (
    <section className="search">
      <div className="search__wrapper">
        <div className="search__field">
          <span className="search__icon"></span>
          <input className="search__input" type="text" name="search" id="search" placeholder="Фильм" />
          <button className="search__btn hover-opacity-btn" type="submit" name="search-button" aria-label="Найти" />
        </div>
        <FilterCheckbox />
      </div>
    </section>
  )
}

export default SearchForm;