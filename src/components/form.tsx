import icon from "./../assets/x-circle.svg";
import logo from "./../assets/google-logo.svg";

const Form = () => {
  return (
    <div className="card">
      <div className="head">
        <div className="head__title">Sign up</div>
        <div className="head__close">
          <img src={icon} alt="Close icon" />
        </div>
      </div>
      <div className="head__btn">
        <button className="head__btn__item">
          {" "}
          <img className="google-logo" src={logo} /> Sign up with Google
        </button>
      </div>
      <div className="main">
        <form className="form" action="">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <br />
          <input
            className="form__input"
            type="text"
            name="name"
            id="name"
            placeholder="John Smith"
          />
          <br />
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <br />
          <input
            className="form__input"
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
          />
          <br />
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <br />
          <input
            className="form__input"
            type="text"
            name="password"
            id="password"
            placeholder="At least 8 characters"
          />
        </form>
      </div>
      <div className="footer">
        <div className="footer__terms">
          I agree with{" "}
          <a href="#" className="footer__link">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="footer__link">
            Privacy
          </a>
        </div>
        <button className="footer__btn">Sign up</button>
        <div className="footer__log-in">
          Already have an account?
          <br />
          <a href="#" className="footer__link">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Form;
