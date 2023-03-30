const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__head">Lorem Ipsum</div>
      <div className="modal__main">Lorem ipsum dolor sit amet?</div>
      <div className="modal__footer">
        <button className="modal__btn modal__btn--error">Cancel</button>
        <button className="modal__btn modal__btn--success">Yes</button>
      </div>
    </div>
  );
};

export default Modal;
