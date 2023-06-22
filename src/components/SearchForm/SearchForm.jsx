import useResize from '../../hooks/useResize';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css'

function SearchForm() {
  let size = useResize();

  return (
    <>
      {
        size.width <= 550
          ? 
            <section className="search">
              <form className="search__form">
                <div className="search__field">
                  <input 
                    className="search__input" 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="Фильм" />
                  <button 
                    className="search__btn hover-opacity-btn" 
                    type="submit" 
                    name="search-button" 
                    aria-label="Найти" />
                </div>
              </form>
              <FilterCheckbox />
            </section>   
          :
            <section className="search">
              <form className="search__form">
                <div className="search__field">
                  <span className="search__icon"></span>
                  <input 
                    className="search__input" 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="Фильм" 
                    required />
                  <button 
                    className="search__btn hover-opacity-btn"
                    type="submit" 
                    name="search-button" 
                    aria-label="Найти" />
                </div>
                <FilterCheckbox />
              </form>
            </section>
      }
    </>
  )
}

export default SearchForm;