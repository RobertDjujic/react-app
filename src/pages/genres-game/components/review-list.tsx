import { ReviewListProps, ReviewType } from "../../genres/data/types";

const ReviewList: React.FC<ReviewListProps> = ({ gameReviews }) => {
  return (
    <div className="genres-game__review__list">
      <div className="genres-game__review__list__title">Reviews:</div>
      <div className="genres-game__review__list__item__wrap">
        {gameReviews.map((review: ReviewType) => (
          <div className="genres-game__review__list__item" key={review.id}>
            <div className="genres-game__review__list__name">
              Posted by: <span>{review.name}</span>
            </div>
            <div className="genres-game__review__list__rating">
              {[...Array(review.rating)].map((_, index) => (
                <span
                  key={index}
                  className="genres-game__review__list__rating__star"
                >
                  &#9733;
                </span>
              ))}
            </div>
            <em>{`"${review.text}"`}</em>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
