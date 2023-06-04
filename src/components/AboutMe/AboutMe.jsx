import LandingTitle from '../LandingTitle/LandingTitle';

import './AboutMe.css';
import me from '../../images/me.jpg'

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="container">
        <LandingTitle text="Студент" />
        <div className="about-me__info-wrapper">
          <div className="about-me__info">
            <h3 className="about-me__name large-text">Мурат</h3>
            <p className="about-me__description">Фронтенд-разработчик, 27 лет</p>
            <p className="about-me__bio">
              Закончил экономический факультет СтГАУ, специальность "Информационные системы и технологии". Увлекаюсь искусством во всех его проявлениях. Нахожусь в поиске работы.
            </p>
            <a className="about-me__github hover-opacity-link" href="https://github.com/RedTengu" target="_blank">Github</a>
          </div>
          <img className="about-me__photo" src={me} alt="Фото студента" />
        </div>
        <div className="about-me__portfolio">
          <h4 className="about-me__portfolio-title">Портфолио</h4>
          <ul className="about-me__portfolio-links">
            <li className="about-me__portfolio-item">
              <a className="about-me__portfolio-link hover-opacity-link" href="#" target="_blank">
                Статичный сайт
              </a>
            </li>
            <li className="about-me__portfolio-item">
              <a className="about-me__portfolio-link hover-opacity-link" href="https://redtengu.github.io/russian-travel/" target="_blank">
                Адаптивный сайт
              </a>
            </li>
            <li className="about-me__portfolio-item">
              <a className="about-me__portfolio-link hover-opacity-link" href="https://tengu.nomoredomains.monster/sign-in" target="_blank">
                Одностраничное приложение
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;