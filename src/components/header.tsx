import logo from "./../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
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
    </header>
  );
};

export default Header;
