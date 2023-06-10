import XMark from "../../../assets/x-mark";
import { ModalProps } from "../types";

const Modal = ({ handlePost, modal, setModal }: ModalProps) => {
  return (
    <div className={modal ? "modal--instagram" : "modal--instagram--hidden"}>
      <div className="modal--instagram__close" onClick={() => setModal(false)}>
        <XMark />
      </div>
      <label className="modal--instagram__label" htmlFor="description">
        Description
      </label>
      <textarea
        className="modal--instagram__input desc"
        id="description"
        name="description"
        placeholder="Write your description here."
        cols={30}
        rows={10}
      />
      <label className="modal--instagram__label" htmlFor="">
        Hashtags
      </label>
      <input
        className="modal--instagram__input"
        id="hashtags"
        name="hashtags"
        placeholder="Write your hashtags here."
        type="text"
      />
      <label className="modal--instagram__label" htmlFor="image">
        Image URL
      </label>
      <input
        className="modal--instagram__input"
        id="image"
        name="image"
        placeholder="Paste your image URL here."
        type="text"
      />
      <div>
        <button className="button" onClick={() => handlePost()}>
          Objavi
        </button>
      </div>
    </div>
  );
};

export default Modal;
