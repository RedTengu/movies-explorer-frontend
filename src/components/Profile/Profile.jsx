import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import SubmitButton from "../SubmitButton/SubmitButton";

import './Profile.css';

function Profile({ onLogout, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const [ formValues, setFormValues ] = useState({
    name: '',
    email: ''
  });
  
  const [ isEditClicked, setIsEditClicked ] = useState(false);

  useEffect(() => {
    setFormValues({
      name: currentUser.name,
      email: currentUser.email
    });
  }, [currentUser]); 

  const handleChange = (e) => {
    const {name, value} = e.target;
    
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleEditUser = () => {
    const inputsList = document.querySelectorAll('input');

    inputsList.forEach(input => {
      input.removeAttribute('readOnly');
    });

    inputsList[0].focus();

    setIsEditClicked(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email } = formValues;

    onUpdateUser(name, email);

    setIsEditClicked(false);
  }

  return (
    <main className="main">
      <section className="profile">
        <form className="profile__form" name="profile-form" onSubmit={handleSubmit}>
          <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
          <div className="profile__inputs">
            <label className="profile__form-label" htmlFor="name">
              Имя 
              <input 
                className="profile__form-input" 
                type="text" 
                name="name" 
                id="name"
                placeholder="Ваше имя"
                onChange={handleChange}
                value={formValues.name || ''}
                readOnly 
                required/>
            </label>
            <label className="profile__form-label" htmlFor="email">
              E-mail 
              <input 
                className="profile__form-input" 
                type="text" 
                name="email" 
                id="email"
                placeholder="example@mail.com"
                onChange={handleChange}
                value={formValues.email || ''}
                readOnly 
                required/>
            </label>
          </div>
          <div className="profile__btns">
            {isEditClicked
              ?
                <SubmitButton text="Сохранить" label="Сохранить информацию" />
              :
                <>
                  <button 
                    className="profile__btn hover-opacity-link" 
                    type="button" 
                    aria-label="Редактировать профиль"
                    onClick={handleEditUser}>
                    Редактировать
                  </button>
                  <button 
                    className="profile__btn profile__btn_type_signout hover-opacity-link" 
                    type="button" 
                    aria-label="Выйти из аккаунта"
                    onClick={onLogout}>
                    Выйти из аккаунта
                  </button>
                </>
            }
          </div>
        </form>
      </section>
    </main>
  )
}

export default Profile;