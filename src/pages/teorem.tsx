import Banner from "../components/banner";
import Header2 from "../components/header-2";
import Hero from "../components/hero";
import InfoCardGrid from "../components/info-card-grid";
import calender from "./../assets/calender.jpg";

const Teorem = () => {
  return (
    <div className="container--teorem">
      <div className="container">
        <Header2 />
        <main>
          <Hero
            heroTitle="Start tutoring online"
            heroTitleClass="hero__title hero__title--first"
            heroText="Give lessons whenever you want, from the comfort of your home."
            heroTextClass="hero__text"
            heroImg={true}
          />
          <img
            className="container--teorem__img"
            src={calender}
            alt="A picture of a Teorem calender"
          />
          <Hero
            heroTitle="Teorem's online tutoring makes your life easier"
            heroTitleClass="hero__title hero__title--second"
            heroText="We'll provide you with everything you need to teach online. We help you find students and manage lessons."
            heroTextClass="hero__text hero__text--second"
            heroImg={false}
          />
          <InfoCardGrid />
          <Banner />
          <Hero
            heroTitle="Set your own price and availability!"
            heroTitleClass="hero__title"
            heroText="Use our tools to track how much you're making and increase your client base!"
            heroTextClass="hero__text hero__text--third"
          />
          <img
            className="container--teorem__img--second"
            src={calender}
            alt="A picture of a Teorem calender"
          />
          <Hero
            heroTitle="We are here to help you grow"
            heroTitleClass="hero__title hero__title--third"
          />
          <Banner />
        </main>
      </div>
    </div>
  );
};

export default Teorem;
