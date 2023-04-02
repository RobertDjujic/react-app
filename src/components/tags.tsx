import XMark from "../assets/x-mark";
import icon from "./../assets/x-mark.svg";

const Tags = () => {
  return (
    <div className="tags">
      <div className="tag tag--ultra">
        <span>Ultramarine</span>
        <XMark />
      </div>
      <div className="tag tag--purple">
        <span>Purple</span>
        <XMark />
      </div>
    </div>
  );
};

export default Tags;
