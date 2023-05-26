import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { genres } from "../data/genres";
import { GameType, GenreType } from "./genres";

const GenreGame = () => {
  const { id } = useParams<{ id: string }>();
  const [gameData, setGameData] = useState<GameType[] | null>(null);
  const gameId = id ? parseInt(id, 10) : 0;
  const game = gameData?.find((game: GameType) => game.id === gameId);

  const dfs = (genres: any, targetId: number) => {
    for (const genre of genres) {
      if (genre.games) {
        for (const game of genre.games) {
          if (game.id === targetId) {
            return game;
          }
        }
      }
    }

    return null;
  };

  useEffect(() => {
    const game = dfs(genres, 8);
    if (game) {
      setGameData([game]);
    } else {
      setGameData(null);
    }

    const fetchGameData = async () => {
      try {
        const response = await fetch("http://localhost:5173/");
        const data = await response.json();
        setGameData(data);
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
    };

    fetchGameData();
  }, []);

  return (
    <div className="container">
      <h1>Genre Game</h1>
      <div>
        {gameData
          ? gameData.map((game: GameType) => {
              return <div key={game.id}>{game.name}</div>;
            })
          : `No game with name ${gameId}`}
      </div>
    </div>
  );
};

export default GenreGame;
