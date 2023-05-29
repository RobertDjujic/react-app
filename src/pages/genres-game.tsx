import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { genres } from "../data/genres";
import { GameType } from "./genres";
import ShoppingCart from "../assets/shopping-cart";
import ThumbsUp from "../assets/thumbs-up";

type ReviewType = {
  id: number;
  name: string;
  text: string;
};

const GenreGame = () => {
  const { gameId } = useParams<{ gameId: string | undefined }>();
  const [gameData, setGameData] = useState<GameType | null>(null);
  const [textValue, setTextValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [gameReviews, setGameReviews] = useState<ReviewType[]>([]);

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

  const handleAdd = () => {
    if (nameValue === "") {
      alert("You must enter-in a username before posting a review.");
      return;
    }
    if (textValue === "") {
      alert("You must write some text before posting a review.");
      return;
    }
    const newGameReview = {
      id: gameReviews.length + 1,
      name: nameValue,
      text: textValue,
    };
    const newReviews = [...gameReviews, newGameReview];
    setGameReviews(newReviews);
    setTextValue("");
    setNameValue("");
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
    <div className="container--genres game">
      <div className="container container--genres-game">
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
                      <ShoppingCart />
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
            </>
          ) : (
            <div>No game with ID {gameId}</div>
          )}
          <div className="genres-game__review">
            <div className="genres-game__review__form">
              <label
                className="genres-game__review__form__label"
                htmlFor="reviewContent"
              >
                Write your review down below:
              </label>
              <input
                className="genres-game__review__form__name"
                maxLength={20}
                onChange={(e) => setNameValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleAdd();
                  }
                }}
                placeholder="Write your username here."
                type="text"
                value={nameValue}
              />
              <textarea
                className="genres-game__review__form__text"
                id="reviewContent"
                name="reviewContent"
                onChange={(e) => setTextValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleAdd();
                  }
                }}
                placeholder="Write your review here."
                value={textValue}
              />
              <button
                className="genres-game__review__form__btn"
                onClick={() => handleAdd()}
              >
                Post <ThumbsUp />
              </button>
            </div>
            <div className="genres-game__review__list">
              <div className="genres-game__review__list__title">Reviews:</div>
              <div className="genres-game__review__list__item__wrap">
                {gameReviews.map((review: ReviewType) => {
                  return (
                    <>
                      <div className="genres-game__review__list__name">
                        Posted by: <span>{review.name}</span>
                      </div>
                      <div
                        className="genres-game__review__list__item"
                        key={review.id}
                      >
                        <em>{`"${review.text}"`}</em>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenreGame;
