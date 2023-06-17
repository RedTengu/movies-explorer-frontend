import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import SubmitButton from '../SubmitButton/SubmitButton';

import './AuthRegForm.css';

function AuthRegForm({ btnText, btnLabel, formName, isRegister, children }) {
  return (
    <div className="form-wrapper">
      <div className="form-header">
        <Logo />
        {isRegister
          ? <h1 className="form-header__title">Добро пожаловать!</h1>
          : <h1 className="form-header__title">Рады видеть!</h1>
        }
      </div>
      <form className="form" name={formName}>
        <div className="form__inputs">
          {children}
        </div>
        <span className="form__error"></span>
        <div className={isRegister ? "form__btn-wrapper" : "form__btn-wrapper_type_login"}>
          <SubmitButton text={btnText} label={btnLabel} />
        </div>
      </form>
      <div className="form-redirect">
          {isRegister
            ? 
              <>
                <span className="form-redirect__text">Уже зарегистрированы?</span> 
                <Link className="form-redirect__link hover-opacity-link" to="/signin">Войти</Link>
              </>
              
            : 
              <>
                <span className="form-redirect__text">Ещё не зарегистрированы?</span> 
                <Link className="form-redirect__link hover-opacity-link" to="/signup">Регистрация</Link>
              </>
          }
        </div>
    </div>
  )
}

export default AuthRegForm;