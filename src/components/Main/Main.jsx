import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';

import './Main.css';

function Main() {
  return (
    <main className="main">
      <Promo />
      <NavTab />
      <div className="container">
        <AboutProject />
      </div>
    </main>
  )
}

export default Main;