import footballLogo from "./../assets/premier-league-logo.png";
import Toggle from "./toggle";

type Card3Props = {
  title?: string;
};

const Card3 = ({ title }: Card3Props) => {
  return (
    <div className="card-3">
      <header className="card-3__header">
        <div className="card-3__logo">
          <img
            className="card-3__logo__item"
            src={footballLogo}
            alt="Premier League logo"
          />
        </div>
        <div>
          <div className="card-3__header__week">Gameweek 17</div>
          <div className="card-3__header__league">{title}</div>
        </div>
      </header>
      <main className="card-3__main">
        <div>
          <div className="card-3__main__label">Winning prize</div>
          <div className="card-3__main__prize">Signed BVB Jersey</div>
        </div>
        <div className="card-3__main__banner">14 Days</div>
      </main>
      <hr />
      <footer className="card-3__footer">
        <div>
          <div className="card-3__footer__label">Game points</div>
          <div className="card-3__footer__number">1000</div>
        </div>
        <div>
          <div className="card-3__footer__label">Game entries</div>
          <div className="card-3__footer__number">1452</div>
        </div>
        <div>
          <div className="card-3__footer__label">Reminder</div>
          <Toggle />
        </div>
      </footer>
    </div>
  );
};

export default Card3;
