import LanguageIcon from "../assets/language-icon";
import teoremLogo from "./../assets/teorem-logo.png";

const Header2 = () => {
  return (
    <header className="header--teorem">
      <div className="header--teorem__logo">
        <img src={teoremLogo} alt="Teorem logo" />
      </div>
      <nav className="header--teorem__nav">
        <div className="header--teorem__nav__item">How it works</div>
        <div className="header--teorem__nav__item">Pricing</div>
        <div className="header--teorem__nav__item">Become a Tutor</div>
      </nav>
      <div className="header--teorem__btn">
        <div className="header--teorem__btn__item">
          <div>Sign in</div>
          <div>Try for free</div>
        </div>
        <div className="header--teorem__btn__lang">
          <LanguageIcon />
          <div>EN</div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
