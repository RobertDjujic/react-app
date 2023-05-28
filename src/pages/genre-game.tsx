import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { genres } from "../data/genres";
import { GameType } from "./genres";

const GenreGame = () => {
  const { gameId } = useParams<{ gameId: string | undefined }>();
  const [gameData, setGameData] = useState<GameType | null>(null);

  const findGameById = (genres: any[], gameId: number): GameType | null => {
    for (const genre of genres) {
      if (genre.games) {
        for (const game of genre.games) {
          if (game.id === gameId) {
            return game;
          }
        }
      }
      if (genre.subgenres) {
        const subgenreGame = findGameById(genre.subgenres, gameId);
        if (subgenreGame) {
          return subgenreGame;
        }
      }
    }

    return null;
  };

  const findGenreById = (genres: any[], gameId: number): string | null => {
    for (const genre of genres) {
      if (genre.games) {
        for (const game of genre.games) {
          if (game.id === gameId) {
            return genre.name;
          }
        }
      }
      if (genre.subgenres) {
        const subgenreGenre = findGenreById(genre.subgenres, gameId);
        if (subgenreGenre) {
          return subgenreGenre;
        }
      }
    }

    return null;
  };

  useEffect(() => {
    if (gameId) {
      const parsedGameId = parseInt(gameId, 10);
      const game = findGameById(genres, parsedGameId);
      if (game) {
        setGameData(game);
      } else {
        setGameData(null);
      }
    }
  }, [gameId]);

  const genre = gameData ? findGenreById(genres, gameData.id) : null;

  return (
    <div className="container--game">
      <div className="container container--game-inner">
        <div className="genres-game">
          {gameData ? (
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
                  <div>
                    <div className="genres-game__info__text__price">
                      {`${gameData.price}€`}
                    </div>
                  </div>
                  <div>
                    <a
                      className="genres-game__info__text__category"
                      href="/genres"
                    >
                      Category
                    </a>
                  </div>
                  <div>{genre && <div>{genre}</div>}</div>
                </div>
              </main>
              <div className="genres-game__review"></div>
              <div></div>
            </>
          ) : (
            <div>No game with ID {gameId}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenreGame;
