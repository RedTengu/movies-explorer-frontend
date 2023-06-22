import { useState } from 'react';

import AuthRegForm from '../AuthRegForm/AuthRegForm';
import InputForm from '../InputForm/InputForm';

import './Login.css';

function Login({ onLogin }) {
  const [ formValues, setFormValues ] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { email, password } = formValues;

    onLogin(email, password);
  }

  return (
    <main className="main">
      <section className="login">
        <AuthRegForm 
          btnText="Войти" 
          btnLabel="Войти"
          formName="login-form"
          isRegister={false}
          onSubmit={handleSubmit}>
            <InputForm
              inputLabel="E-mail"
              type="text"
              name="email"
              id="email"
              placeholder="example@mail.com" 
              onChange={handleChange}
              value={formValues.email}/>
            <InputForm
              inputLabel="Пароль"
              type="password"
              name="password"
              id="password"
              placeholder="Ваш пароль"
              onChange={handleChange}
              value={formValues.password} />
        </AuthRegForm>
      </section>
    </main>
  )
}

export default Login;