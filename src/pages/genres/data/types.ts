export type GameInfoProps = {
  findGenreById: (genres: GenreType[], gameId: number) => string | null;
  gameData: GameType | null;
};

export type GameType = {
  desc: string;
  img: string;
  name: string;
  price: number;
  id: number;
};

export type GenreType = {
  games: GameType[];
  id: number;
  img: string;
  name: string;
};

export type GridProps = {
  findGames: (id: number) => void;
  modal: boolean;
  setModal: (value: boolean) => void;
};

export type ModalProps = {
  activeGenre: GameType[] | null;
  modal: boolean;
  setModal: (value: boolean) => void;
};

export type ReviewFormProps = {
  handleAdd: () => void;
  handleRatingChange: (newRating: number) => void;
  nameValue: string;
  setNameValue: (value: string) => void;
  textValue: string;
  setTextValue: (value: string) => void;
};

export type ReviewListProps = {
  gameReviews: ReviewType[];
};

export type ReviewType = {
  id: number;
  name: string;
  rating: number;
  text: string;
};

export type StarRatingProps = {
  maxStars: number;
  onChange: (rating: number) => void;
  selectedStars: number;
  setSelectedStars: (rating: number) => void;
};
