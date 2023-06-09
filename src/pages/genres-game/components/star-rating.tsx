import { StarRatingProps } from "../../genres/data/types";
import React, { useState } from "react";

const StarRating: React.FC<StarRatingProps> = ({
  maxStars,
  onChange,
  selectedStars,
  setSelectedStars,
}) => {
  const [hoveredStars, setHoveredStars] = useState<number>(0);

  const handleStarClick = (starIndex: number) => {
    const rating = starIndex + 1;
    setSelectedStars(rating);
    onChange(rating);
  };

  const handleStarHover = (starIndex: number) => {
    setHoveredStars(starIndex + 1);
  };

  const handleStarHoverEnd = () => {
    setHoveredStars(0);
  };

  return (
    <div className="star-rating">
      {[...Array(maxStars)].map((_, index) => {
        const starNumber = index + 1;
        const isActive =
          starNumber <= selectedStars || starNumber <= hoveredStars;
        return (
          <span
            key={index}
            className="star-rating__item"
            style={{ color: isActive ? "#ffff00" : "inherit" }}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarHover(index)}
            onMouseLeave={handleStarHoverEnd}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
