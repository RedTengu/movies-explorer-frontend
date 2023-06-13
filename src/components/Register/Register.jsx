import AuthRegForm from '../AuthRegForm/AuthRegForm';
import InputForm from '../InputForm/InputForm';

import './Register.css';

function Register() {
  return (
    <main className="main">
      <section className="register">
        <AuthRegForm 
          btnText="Зарегистрироваться" 
          btnLabel="Зарегистрироваться"
          formName="register-form"
          isRegister={true}>
            <InputForm
              inputLabel="Имя"
              type="text"
              name="name"
              id="name"
              placeholder="Ваше имя" />
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

export default Register;