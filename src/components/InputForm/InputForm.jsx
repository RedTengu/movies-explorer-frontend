import './InputForm.css';

function InputForm({ inputLabel, type, name, id, placeholder }) {
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
            defaultValue="" 
            required/>
      </div>
    </>
  )
}

export default InputForm;