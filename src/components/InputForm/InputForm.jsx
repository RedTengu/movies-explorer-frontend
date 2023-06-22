import './InputForm.css';

function InputForm({ inputLabel, type, name, id, placeholder, onChange, value }) {
  return (
    <>
      <label className="input__label" htmlFor={id}>
          {inputLabel}
      </label>
      <div className="input-wrapper">
        <input 
            className="input" 
            type={type} 
            name={name} 
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            value={value} 
            required/>
      </div>
    </>
  )
}

export default InputForm;