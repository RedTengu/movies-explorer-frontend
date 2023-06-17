import LandingTitle from '../LandingTitle/LandingTitle';

import './Techs.css';

function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="container">
        <LandingTitle text="Технологии" />
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__list-elem">HTML</li>
          <li className="techs__list-elem">CSS</li>
          <li className="techs__list-elem">JS</li>
          <li className="techs__list-elem">React</li>
          <li className="techs__list-elem">Git</li>
          <li className="techs__list-elem">Express.js</li>
          <li className="techs__list-elem">mongoDB</li>
        </ul>
      </div>
    </section>
  )
}

export default Techs;