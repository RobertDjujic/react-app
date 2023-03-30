import icon from "./../assets/x-mark.svg";

const Tags = () => {
  return (
    <div>
      <div className="tags">
        <div className="tag tag--ultra">
          <span>Ultramarine</span>
          <img className="tag__item" src={icon} alt="X-mark" />
        </div>
        <div className="tag tag--purple">
          <span>Purple</span>
          <img className="tag__item" src={icon} alt="X-mark" />
        </div>
      </div>
    </div>
  );
};

export default Tags;
