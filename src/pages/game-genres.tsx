import { useState } from "react";
import { gameGenres } from "../data/gameGenres";

export type GameGenresType = {
  genreImg: string;
  genreName: string;
  genreGames: GameInfoType[];
  id: number;
};

type GameInfoType = {
  gameImg: string;
  gameName: string;
  gameDesc: string;
  gamePrice: number;
};

const GameGenres = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [activeGenre, setActiveGenre] = useState<GameInfoType[] | null>(null);

  const findGames = (id: number) => {
    gameGenres.forEach((genre) => {
      if (genre.id === id) {
        setActiveGenre(genre.genreGames);
      }
    });
  };

  return (
    <div className="container">
      <h1>Game Genres</h1>
      <div className="game-genres">
        <div className="game-genres__item__grid">
          {gameGenres.map((genre: GameGenresType) => {
            return (
              <div
                onClick={() => {
                  findGames(genre.id);
                }}
                className="game-genres__item"
              >
                <img
                  className="game-genres__item__img"
                  src={genre.genreImg}
                  alt="An image representing a specific game genre."
                />
                <div className="game-genres__item__gradient"></div>
                <div className="game-genres__item__label">
                  {genre.genreName}
                </div>
              </div>
            );
          })}
        </div>
        <div className="game-genres__modal">
          {activeGenre
            ? activeGenre.map((genre: GameInfoType) => {
                return (
                  <div className="game-genres__modal__item">
                    <div className="game-genres__modal__item__img">
                      <img src={genre.gameImg} alt="An image of a game." />
                    </div>
                    <div>
                      <div className="game-genres__modal__item__name">
                        {genre.gameName}
                      </div>
                      <div className="game-genres__modal__item__desc">
                        {genre.gameDesc}
                      </div>
                      <span className="game-genres__modal__item__price">
                        {`${genre.gamePrice}€`}
                      </span>
                    </div>
                  </div>
                );
              })
            : "Nije ništa odabrano."}
        </div>
      </div>
    </div>
  );
};

export default GameGenres;
