import DollarIcon from "../assets/dollar-icon";
import sunLogo from "./../assets/sun-logo.png";

const FlexExe = () => {
  return (
    <>
      <div className="flex__wrapper">
        <div className="flex flex--first">
          <div className="flex--first__item">
            <img className="flex__img" src={sunLogo} alt="Retro Sun logo" />
            <h3 className="flex--first__title">Lorem Ipsum</h3>
          </div>
          <div className="flex__icon">
            <DollarIcon />
          </div>
        </div>
      </div>
      <div className="flex__wrapper">
        <div className="flex flex--second">
          <h3>Lorem Ipsum</h3>
          <div className="flex__icon">
            <DollarIcon />
          </div>
        </div>
      </div>
      <div className="flex__wrapper">
        <div className="flex flex--third">
          <img className="flex__img" src={sunLogo} alt="Retro Sun logo" />
          <h3>Lorem Ipsum</h3>
        </div>
      </div>
      <div className="flex__wrapper">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default FlexExe;
