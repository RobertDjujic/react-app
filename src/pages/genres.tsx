import { useState } from "react";
import { genres } from "../data/genres";
import ArrowDown from "../assets/arrow-down-a-z-solid";
import ArrowUp from "../assets/arrow-up-a-z-solid";
import XMark from "../assets/x-mark";
import { Link } from "react-router-dom";
import steamLogo from "./../assets/steam-logo-transparent.png";

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
      <div className="container--genres">
        <div className="container">
          <div className="genres">
            <img
              className="genres__steam-logo"
              src={steamLogo}
              alt="The Steam logo."
            />
            <h1 className="genres__title">Steam Categories</h1>
            <div className="genres__item__grid">
              {genres.map((genre: GenreType) => {
                return (
                  <div
                    className="genres__item"
                    onClick={() => {
                      findGames(genre.id);
                      setModal(!modal);
                    }}
                  >
                    <img
                      className="genres__item__img"
                      src={genre.img}
                      alt={`The image for the ${genre.name} category.`}
                    />
                    <div className="genres__item__gradient"></div>
                    <div className="genres__item__label">{genre.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={modal ? "genres__modal" : "genres__modal hidden"}>
          <div
            className="genres__modal__close"
            onClick={() => {
              setModal(false);
            }}
          >
            <XMark />
          </div>
          <div
            className="genres__modal__order"
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
                    <div className="genres__modal__item">
                      <div className="genres__modal__item__img" key={index}>
                        <Link to={`/genres/${game.id}`}>
                          {" "}
                          <img
                            src={game.img}
                            alt={`The front cover for ${game.name}`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="genres__modal__item__name"
                          to={`/genres/${game.id}`}
                        >
                          {game.name}
                        </Link>
                        <div className="genres__modal__item__desc">
                          {game.desc}
                        </div>
                        <span className="genres__modal__item__price">
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
    </>
  );
};

export default Genres;
