import GoogleLogo from "./../assets/google-logo";
import XCircle from "../assets/x-circle";

const Card = () => {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__title">Sign up</div>
        <div className="card__close">
          <XCircle />
        </div>
      </div>
      <div className="card__google">
        <button className="card__google__btn">
          <span className="card__google__logo">
            <GoogleLogo />
          </span>
          Sign up with Google
        </button>
      </div>

      <form className="card__form" action="">
        <label className="card__form__label" htmlFor="name">
          Name hereeeee!
        </label>
        <input
          className="card__form__input"
          type="text"
          name="name"
          id="name"
          placeholder="John Smith"
        />
        <label className="card__form__label" htmlFor="email">
          Email
        </label>
        <input
          className="card__form__input"
          type="email"
          name="email"
          id="email"
          placeholder="example@mail.com"
        />
        <label className="card__form__label" htmlFor="password">
          Password
        </label>
        <input
          className="card__form__input"
          type="text"
          name="password"
          id="password"
          placeholder="At least 8 characters"
        />
      </form>
      <div className="card__footer">
        <div className="card__footer__terms">
          I agree with{" "}
          <a href="#" className="card__footer__link">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="card__footer__link">
            Privacy
          </a>
        </div>
        <button className="card__footer__btn">Sign up</button>
        <div className="card__footer__log-in">
          Already have an account?
          <br />
          <a href="#" className="card__footer__link">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
