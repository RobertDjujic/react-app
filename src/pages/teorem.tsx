import Header2 from "../components/header-2";
import Hero from "../components/hero";

const Teorem = () => {
  return (
    <div className="container">
      <div className="container--teorem">
        <Header2 />
        <main>
          <div>
            <Hero
              heroTitle="Start tutoring online"
              heroText="Give lessons whenever you want, from the comfort of your home."
              heroImg={true}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Teorem;
