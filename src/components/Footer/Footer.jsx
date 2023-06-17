import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__info">
          <p className="footer__copyright">&copy; 2023</p>
          <ul className="footer__links">
            <li>
              <a className="footer__link hover-opacity-link" href="https://practicum.yandex.ru/" target="_blank">
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a className="footer__link hover-opacity-link" href="https://github.com/RedTengu" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;