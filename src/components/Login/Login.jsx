import AuthRegForm from '../AuthRegForm/AuthRegForm';
import InputForm from '../InputForm/InputForm';

import './Login.css';

function Login() {
  return (
    <main className="main">
      <section className="login">
        <AuthRegForm 
          btnText="Войти" 
          btnLabel="Войти"
          formName="login-form"
          isRegister={false}>
            <InputForm
              inputLabel="E-mail"
              type="text"
              name="email"
              id="email"
              placeholder="example@mail.com" />
            <InputForm
              inputLabel="Пароль"
              type="password"
              name="password"
              id="password"
              placeholder="Ваш пароль" />
        </AuthRegForm>
      </section>
    </main>
  )
}

export default Login;