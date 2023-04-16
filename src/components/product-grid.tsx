import bread from "./../assets/bread.png";
import pastries from "./../assets/pastries.png";
import savoury from "./../assets/savoury.png";

const ProductGrid = () => {
  return (
    <div className="product">
      <div className="product__grid">
        <div>
          <div>
            <div>
              <img src={bread} alt="Image of a piece of bread" />
            </div>
            <div className="product__info">
              <div className="product__name">KRUH</div>
              <div className="product__desc">Kruhovi ravno iz peći</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={pastries} alt="Image of pastries" />
          </div>
          <div className="product__info">
            <div className="product__name">PECIVA</div>
            <div className="product__desc">
              Tradicionalna, ukusna i jednostavna
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={savoury} alt="Image of savoury pastries" />
          </div>
          <div className="product__info">
            <div className="product__name">SLANO</div>
            <div className="product__desc">Neodoljivi slani zalogaji</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
