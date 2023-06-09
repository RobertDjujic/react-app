import { GameType } from "./data/types";
import { genres } from "./data/genres";
import { useState } from "react";
import Grid from "./components/grid";
import Modal from "./components/modal";
import steamLogo from "./../../assets/steam-logo-transparent.png";

const Genres = () => {
  const [activeGenre, setActiveGenre] = useState<GameType[] | null>(null);
  const [modal, setModal] = useState<boolean>(false);

  const findGames = (id: number) => {
    genres.forEach((genre) => {
      if (genre.id === id) {
        setActiveGenre(genre.games);
      }
    });
  };

  return (
    <div className="container--genres">
      <div className="container">
        <div className="genres">
          <img
            className="genres__steam-logo"
            src={steamLogo}
            alt="The Steam logo."
          />
          <h1 className="genres__title">Steam Categories</h1>
          <Grid findGames={findGames} modal={modal} setModal={setModal} />
        </div>
      </div>
      <Modal activeGenre={activeGenre} modal={modal} setModal={setModal} />
    </div>
  );
};

export default Genres;
