import './SubmitButton.css';

function SubmitButton({ text, label }) {
  return (
    <button className="submit-btn hover-opacity-btn" type="submit" name="submit-btn" aria-label={label}>{text}</button>
  )
}

export default SubmitButton;