import { genres } from "../data/genres";
import { GenreType, GridProps } from "../data/types";

const Grid: React.FC<GridProps> = ({ findGames, modal, setModal }) => {
  return (
    <div className="genres__item__grid">
      {genres.map((genre: GenreType) => {
        return (
          <div
            className="genres__item"
            onClick={() => {
              findGames(genre.id);
              setModal(!modal);
            }}
          >
            <img
              className="genres__item__img"
              src={genre.img}
              alt={`The image for the ${genre.name} category.`}
            />
            <div className="genres__item__gradient"></div>
            <div className="genres__item__label">{genre.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
