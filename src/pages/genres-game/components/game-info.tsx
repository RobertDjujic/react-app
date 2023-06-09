import { GameInfoProps } from "../../genres/data/types";
import { genres } from "../../genres/data/genres";
import ShoppingCart from "../../../assets/shopping-cart";

const GameInfo: React.FC<GameInfoProps> = ({ gameData, findGenreById }) => {
  const genre = gameData ? findGenreById(genres, gameData.id) : null;

  return (
    <>
      {gameData && (
        <>
          <h1 className="genres-game__title">{gameData.name}</h1>
          <main className="genres-game__info">
            <img
              className="genres-game__info__img"
              src={gameData.img}
              alt={`The front cover of ${gameData.name}`}
            />
            <div className="genres-game__info__text">
              <div className="genres-game__info__text__desc">
                <div>About this game</div>
                {gameData.desc}
              </div>
              <div className="genres-game__info__text__price__wrap">
                <div className="genres-game__info__text__price">
                  {`${gameData.price}€`}
                  <ShoppingCart />
                </div>
              </div>
              <div className="genres-game__info__text__category__wrap">
                <a className="genres-game__info__text__category" href="/genres">
                  Category
                </a>
              </div>
              <div className="genres-game__info__text__tag">
                {genre && <div>{genre}</div>}
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default GameInfo;
