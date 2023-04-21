type HeroProps = {
  heroTitle?: string;
  heroText?: string;
  heroImg?: boolean;
};

const Hero = ({ heroTitle, heroText, heroImg }: HeroProps) => {
  return (
    <div className="hero">
      <div className="hero__title__wrap">
        <h2 className="hero__title">{heroTitle}</h2>
        <div
          className={`${heroImg ? "hero__img__wrap" : "hero__img__wrap--none"}`}
        >
          <div className="hero__img hero__img--upper"></div>
          <div className="hero__ellipse hero__ellipse--upper"></div>
        </div>
        <div
          className={`${heroImg ? "hero__img__wrap" : "hero__img__wrap--none"}`}
        >
          <div className="hero__img hero__img--bottom"></div>
          <div className="hero__ellipse hero__ellipse--bottom"></div>
        </div>
      </div>
      <div className="hero__text">{heroText}</div>
    </div>
  );
};

export default Hero;
