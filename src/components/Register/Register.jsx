import { useState } from 'react';

import AuthRegForm from '../AuthRegForm/AuthRegForm';
import InputForm from '../InputForm/InputForm';

import './Register.css';

function Register({ onRegister }) {
  const [ formValues, setFormValues ] = useState({
    name: '',
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
    
    const { name, email, password } = formValues;

    onRegister(name, email, password);
  }

  return (
    <main className="main">
      <section className="register">
        <AuthRegForm 
          btnText="Зарегистрироваться" 
          btnLabel="Зарегистрироваться"
          formName="register-form"
          isRegister={true}
          onSubmit={handleSubmit}>
            <InputForm
              inputLabel="Имя"
              type="text"
              name="name"
              id="name"
              placeholder="Ваше имя"
              onChange={handleChange}
              value={formValues.name} />
            <InputForm
              inputLabel="E-mail"
              type="text"
              name="email"
              id="email"
              placeholder="example@mail.com"
              onChange={handleChange}
              value={formValues.email} />
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

export default Register;