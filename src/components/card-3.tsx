import footballLogo from "./../assets/premier-league-logo.png";
import Toggle from "./toggle";

type Card3Props = {
  title?: string;
};

const Card3 = ({ title }: Card3Props) => {
  return (
    <div className="card--tertiary">
      <header className="card--tertiary__header">
        <div>
          <img
            className="card--tertiary__logo"
            src={footballLogo}
            alt="Premier League logo"
          />
        </div>
        <div>
          <div className="card--tertiary__header__week">Gameweek 17</div>
          <div className="card--tertiary__header__league">{title}</div>
        </div>
      </header>
      <main className="card--tertiary__main">
        <div>
          <div className="card--tertiary__main__label">Winning prize</div>
          <div className="card--tertiary__main__prize">Signed BVB Jersey</div>
        </div>
        <div className="card--tertiary__main__banner">14 Days</div>
      </main>
      <hr />
      <footer className="card--tertiary__footer">
        <div>
          <div className="card--tertiary__footer__label">Game points</div>
          <div className="card--tertiary__footer__number">1000</div>
        </div>
        <div>
          <div className="card--tertiary__footer__label">Game entries</div>
          <div className="card--tertiary__footer__number">1452</div>
        </div>
        <div>
          <div className="card--tertiary__footer__label">Reminder</div>
          <Toggle />
        </div>
      </footer>
    </div>
  );
};

export default Card3;
