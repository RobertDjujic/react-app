import Footer from "../components/footer";
import Footer2 from "../components/footer-2";
import ProductGrid from "../components/product-grid";
import Tags2 from "../components/tags-2";

const Mlinar = () => {
  return (
    <div className="container--dark">
      <div className="mlinar">
        <div className="mlinar__main">
          <div>
            <h1 className="mlinar__hero-title">
              <span>Najukusniji</span> pekarski{" "}
              <span>proizvodi u susjedstvu.</span>
            </h1>
          </div>
          <Tags2 />
          <ProductGrid />
          <Footer />
          <Footer2 />
        </div>
      </div>
    </div>
  );
};

export default Mlinar;
