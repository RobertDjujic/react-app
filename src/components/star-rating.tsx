import React, { useState } from "react";

type StarRatingProps = {
  maxStars: number;
  onChange: (rating: number) => void;
};

const StarRating: React.FC<StarRatingProps> = ({ maxStars, onChange }) => {
  const [selectedStars, setSelectedStars] = useState<number>(0);
  const [hoveredStar, setHoveredStar] = useState<number>(0);

  const handleStarClick = (starIndex: number) => {
    const rating = starIndex + 1;
    setSelectedStars(rating);
    onChange(rating);
  };

  const handleStarHover = (starIndex: number) => {
    setHoveredStar(starIndex + 1);
  };

  const handleStarHoverEnd = () => {
    setHoveredStar(0);
  };

  return (
    <div className="star-rating">
      {[...Array(maxStars)].map((_, index) => {
        const starNumber = index + 1;
        const isActive =
          starNumber <= selectedStars || starNumber <= hoveredStar;
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
