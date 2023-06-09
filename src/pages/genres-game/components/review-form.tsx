import { ReviewFormProps } from "../../genres/data/types";
import { useState } from "react";
import StarRating from "./star-rating";
import ThumbsUp from "../../../assets/thumbs-up";

const ReviewForm: React.FC<ReviewFormProps> = ({
  handleAdd,
  handleRatingChange,
  nameValue,
  setNameValue,
  textValue,
  setTextValue,
}) => {
  const [selectedStars, setSelectedStars] = useState<number>(0);

  return (
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
            setSelectedStars(0);
          }
        }}
        placeholder="Write your username here."
        type="text"
        value={nameValue}
      />
      <StarRating
        maxStars={5}
        onChange={handleRatingChange}
        selectedStars={selectedStars}
        setSelectedStars={setSelectedStars}
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
            setSelectedStars(0);
          }
        }}
        placeholder="Write your review here."
        value={textValue}
      />
      <button
        className="genres-game__review__form__btn"
        onClick={() => {
          handleAdd();
          setSelectedStars(0);
        }}
      >
        Post <ThumbsUp />
      </button>
    </div>
  );
};

export default ReviewForm;
