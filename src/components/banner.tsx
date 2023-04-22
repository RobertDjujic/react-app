import tutor from "./../assets/saly.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__text">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non
        vulputate leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum non vulputate leo.”
      </div>
      <div className="banner__img">
        <img className="banner__img__item" src={tutor} alt="Image of a tutor" />
        <div className="banner__img__title">John Doe</div>
        <div className="banner__img__subtitle">Tutor</div>
      </div>
    </div>
  );
};

export default Banner;
