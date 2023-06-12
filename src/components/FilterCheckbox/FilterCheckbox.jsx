import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <div className="search__filter">
      <label className="search__checkbox-label-wrapper" htmlFor="checkbox-filter">
        <input className="search__checkbox" type="checkbox" name="checkbox-filter" id="checkbox-filter" />
        <span className="slider round"></span>
      </label>
      <label className="search__checkbox-label" htmlFor="checkbox-filter">Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;