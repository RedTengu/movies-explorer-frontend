import './Profile.css';

function Profile() {
  return (
    <main className="main">
      <section className="profile">
        <form className="profile__form" name="profile-form">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <div className="profile__inputs">
            <label className="profile__form-label" htmlFor="name">
              Имя 
              <input className="profile__form-input" type="text" name="name" id="name" defaultValue="Виталий" readOnly />
            </label>
            <label className="profile__form-label" htmlFor="email">
              E-mail 
              <input className="profile__form-input" type="text" name="email" id="email" defaultValue="pochta@yandex.ru" readOnly />
            </label>
          </div>
          <div className="profile__btns">
            <button className="profile__btn hover-opacity-btn" type="button" aria-label="Редактировать профиль">
              Редактировать
            </button>
            <button className="profile__btn profile__btn_type_signout hover-opacity-btn" type="button" aria-label="Выйти из аккаунта">
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Profile;