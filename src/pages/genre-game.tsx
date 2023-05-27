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

  return (
    <div className="container">
      <h1>Genre Game</h1>
      {gameData ? (
        <div>{gameData.name}</div>
      ) : (
        <div>No game with ID {gameId}</div>
      )}
    </div>
  );
};

export default GenreGame;
