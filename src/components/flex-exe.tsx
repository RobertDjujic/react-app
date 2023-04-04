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
      <div className="flex__wrapper special">
        <div className="flex flex--fourth">
          <div>
            <h3>Lorem Ipsum</h3>
          </div>
          <div className="flex--fourth__text">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div>
            <button className="button">Lorem Ipsum</button>
          </div>
        </div>
        <div className="flex flex--fourth">
          <div>
            <h3>Lorem Ipsum</h3>
          </div>
          <div className="flex--fourth__text">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div>
            <button className="button">Lorem Ipsum</button>
          </div>
        </div>
        <div className="flex flex--fourth">
          <div>
            <h3>Lorem Ipsum</h3>
          </div>
          <div className="flex--fourth__text">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div>
            <button className="button">Lorem Ipsum</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlexExe;
