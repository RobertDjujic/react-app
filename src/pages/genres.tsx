import { useState } from "react";
import { genres } from "../data/genres";
import ArrowDown from "../assets/arrow-down-a-z-solid";
import ArrowUp from "../assets/arrow-up-a-z-solid";
import XMark from "../assets/x-mark";
import { Link } from "react-router-dom";

export type GenreType = {
  games: GameType[];
  id: number;
  img: string;
  name: string;
};

export type GameType = {
  desc: string;
  img: string;
  name: string;
  price: number;
  id: number;
};

const Genres = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [activeGenre, setActiveGenre] = useState<GameType[] | null>(null);
  const [activeOrder, setActiveOrder] = useState<boolean>(false);
  const [ascendingOrder, setAscendingOrder] = useState<boolean>();

  const findGames = (id: number) => {
    genres.forEach((genre) => {
      if (genre.id === id) {
        setActiveGenre(genre.games);
      }
    });
  };

  const handleOrder = () => {
    const newGameList = [...genres];
    newGameList.forEach((genre) => {
      genre.games.sort((a, b) => {
        return ascendingOrder
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name);
      });
    });

    setAscendingOrder(!ascendingOrder);
  };

  return (
    <>
      <div className={modal ? "overlay" : ""}></div>
      <div className="container">
        <h1>Game Genres</h1>
        <div className="game-genres">
          <div className="game-genres__item__grid">
            {genres.map((genre: GenreType) => {
              return (
                <div
                  className="game-genres__item"
                  onClick={() => {
                    findGames(genre.id);
                    setModal(!modal);
                  }}
                >
                  <img
                    className="game-genres__item__img"
                    src={genre.img}
                    alt="An image representing a specific game genre."
                  />
                  <div className="game-genres__item__gradient"></div>
                  <div className="game-genres__item__label">{genre.name}</div>
                </div>
              );
            })}
          </div>
          <div
            className={
              modal ? "game-genres__modal" : "game-genres__modal hidden"
            }
          >
            <div
              className="game-genres__modal__close"
              onClick={() => {
                setModal(false);
              }}
            >
              <XMark />
            </div>
            <div
              className="game-genres__modal__order"
              onClick={() => {
                setActiveOrder(!activeOrder);
                handleOrder();
              }}
            >
              {activeOrder ? <ArrowDown /> : <ArrowUp />}
            </div>
            <div>
              {activeGenre
                ? activeGenre.map((game: GameType, index) => {
                    return (
                      <div className="game-genres__modal__item">
                        <div
                          className="game-genres__modal__item__img"
                          key={index}
                        >
                          <a href={`/genres/${game.name.toLocaleLowerCase()}`}>
                            {" "}
                            <img src={game.img} alt="An image of a game." />
                          </a>
                        </div>
                        <div>
                          <Link
                            className="game-genres__modal__item__name"
                            to={`/genres/${game.id}`}
                          >
                            {game.name}
                          </Link>
                          <div className="game-genres__modal__item__desc">
                            {game.desc}
                          </div>
                          <span className="game-genres__modal__item__price">
                            {`${game.price}€`}
                          </span>
                        </div>
                      </div>
                    );
                  })
                : "Nothing has been selected."}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Genres;
