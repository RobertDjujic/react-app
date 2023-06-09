import { GameType, GenreType, ReviewType } from "../genres/data/types";
import { genres } from "../genres/data/genres";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameInfo from "./components/game-info";
import ReviewForm from "./components/review-form";
import ReviewList from "./components/review-list";

const GenresGame = () => {
  const { gameId } = useParams<{ gameId: string | undefined }>();
  const [gameData, setGameData] = useState<GameType | null>(null);
  const [gameReviews, setGameReviews] = useState<ReviewType[]>([]);
  const [rating, setRating] = useState<number>(0);
  const [nameValue, setNameValue] = useState<string>("");
  const [textValue, setTextValue] = useState<string>("");

  const findGameById = (
    genres: GenreType[],
    gameId: number
  ): GameType | null => {
    for (const genre of genres) {
      if (genre.games) {
        for (const game of genre.games) {
          if (game.id === gameId) {
            return game;
          }
        }
      }
    }

    return null;
  };

  const findGenreById = (
    genres: GenreType[],
    gameId: number
  ): string | null => {
    for (const genre of genres) {
      if (genre.games) {
        for (const game of genre.games) {
          if (game.id === gameId) {
            return genre.name;
          }
        }
      }
    }

    return null;
  };

  const handleAdd = () => {
    if (nameValue === "") {
      alert("You must write your username first.");
      return;
    }
    if (textValue === "") {
      alert("You must write your review first.");
      return;
    }
    const newGameReview = {
      id: gameReviews.length + 1,
      name: nameValue,
      text: textValue,
      rating: rating,
    };
    const newReviews = [...gameReviews, newGameReview];
    setGameReviews(newReviews);
    setTextValue("");
    setNameValue("");
    setRating(0);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
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
    <div className="container--genres game">
      <div className="container container--genres-game">
        <div className="genres-game">
          <GameInfo findGenreById={findGenreById} gameData={gameData} />
          <div className="genres-game__review">
            <ReviewForm
              handleAdd={handleAdd}
              handleRatingChange={handleRatingChange}
              nameValue={nameValue}
              setNameValue={setNameValue}
              textValue={textValue}
              setTextValue={setTextValue}
            />
            <ReviewList gameReviews={gameReviews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenresGame;
