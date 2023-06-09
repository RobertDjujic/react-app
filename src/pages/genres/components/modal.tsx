import { GameType, ModalProps } from "../data/types";
import { genres } from "../data/genres";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ArrowDown from "./../../../assets/arrow-down-a-z-solid";
import ArrowUp from "./../../../assets/arrow-up-a-z-solid";
import XMark from "./../../../assets/x-mark";

const Modal: React.FC<ModalProps> = ({ activeGenre, modal, setModal }) => {
  const [activeOrder, setActiveOrder] = useState<boolean>(false);
  const [ascendingOrder, setAscendingOrder] = useState<boolean>(false);

  const handleOrder = () => {
    const newGameList = [...genres];
    newGameList.forEach((genre) => {
      genre.games.sort((a: { name: string }, b: { name: string }) => {
        return ascendingOrder
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name);
      });
    });

    setAscendingOrder(!ascendingOrder);
  };

  useEffect(() => {
    handleOrder();
  }, []);

  return (
    <>
      <div className={modal ? "overlay" : ""}></div>
      <div className={modal ? "genres__modal" : "genres__modal hidden"}>
        <div
          className="genres__modal__close"
          onClick={() => {
            setModal(false);
          }}
        >
          <XMark />
        </div>
        <div
          className="genres__modal__order"
          onClick={() => {
            setActiveOrder(!activeOrder);
            handleOrder();
          }}
        >
          {activeOrder ? <ArrowUp /> : <ArrowDown />}
        </div>
        <div>
          {activeGenre
            ? activeGenre.map((game: GameType, index) => {
                return (
                  <div className="genres__modal__item">
                    <div className="genres__modal__item__img" key={index}>
                      <Link to={`/genres/${game.id}`}>
                        {" "}
                        <img
                          src={game.img}
                          alt={`The front cover for ${game.name}`}
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="genres__modal__item__name"
                        to={`/genres/${game.id}`}
                      >
                        {game.name}
                      </Link>
                      <div className="genres__modal__item__desc">
                        {game.desc}
                      </div>
                      <span className="genres__modal__item__price">
                        {`${game.price}€`}
                      </span>
                    </div>
                  </div>
                );
              })
            : "Nothing has been selected."}
        </div>
      </div>
    </>
  );
};

export default Modal;
