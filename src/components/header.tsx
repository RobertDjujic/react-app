import Hamburger from "../assets/icon-hamburger";
import algebraLogo from "./../assets/algebra-logo-new.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div>
          <img className="header__logo" src={algebraLogo} alt="Logo" />
        </div>
        <div className="header__actions">
          <nav className="header__nav">
            <a className="header__nav__item" href="/">
              Početna
            </a>
            <a className="header__nav__item" href="/exe">
              Vježbe
            </a>
            <a className="header__nav__item" href="/ispit">
              CSS ispit
            </a>
          </nav>
          <div className="header__inis">R. Dj.</div>
        </div>
        <div className="header__hamburger">
          <Hamburger />
        </div>
      </div>
    </header>
  );
};

export default Header;
