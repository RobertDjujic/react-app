import logo from "./../assets/logo.png";
import hamburger from "./../assets/icon-hamburger.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div>
          <img className="header__logo" src={logo} alt="Logo" />
        </div>
        <div className="header__actions">
          <nav className="header__nav">
            <a className="header__nav__item" href="#">
              Mac
            </a>
            <a className="header__nav__item" href="#">
              iPad
            </a>
            <a className="header__nav__item" href="#">
              iPhone
            </a>
          </nav>
          <div className="header__inis">R. Dj.</div>
        </div>
        <div className="header__hamburger">
          <img src={hamburger} alt="Hamburger" />
        </div>
      </div>
    </header>
  );
};

export default Header;
