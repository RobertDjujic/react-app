import Button from "./button";

type CardProps = {
  title?: string;
};

const Card2 = ({ title }: CardProps) => {
  return (
    <div className="card--secondary">
      <div className="card--secondary__img">
        <img
          className="card--secondary__img__item"
          src="https://source.unsplash.com/random/?design"
          alt="Card hero image"
        />
      </div>
      <div className="card--secondary__title">{title}</div>
      <div className="card--secondary__description">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div className="card--secondary__footer">
        <Button color="green" value="OK" />
        <Button value="Cancel" />
      </div>
    </div>
  );
};

export default Card2;
