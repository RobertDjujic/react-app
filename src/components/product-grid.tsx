import bread from "./../assets/bread.png";
import pastries from "./../assets/pastries.png";
import savoury from "./../assets/savoury.png";
import sweet from "./../assets/sweet.png";
import burek from "./../assets/burek.png";
import pizza from "./../assets/pizza.png";
import sandwich from "./../assets/sandwich.png";
import salad from "./../assets/salad.png";
import horeca from "./../assets/horeca.png";
import packed from "./../assets/packed.png";
import cakes from "./../assets/cakes.png";
import cake from "./../assets/cake.png";
import celebratoryCake from "./../assets/celebratory-cake.png";

const ProductGrid = () => {
  return (
    <div className="product">
      <div className="product__grid">
        <div>
          <img src={bread} alt="Image of a piece of bread" />
          <div className="product__info">
            <div className="product__info__name">KRUH</div>
            <div className="product__info__desc">Kruhovi ravno iz peći</div>
          </div>
        </div>

        <div>
          <img src={pastries} alt="Image of pastries" />
          <div className="product__info">
            <div className="product__info__name">PECIVA</div>
            <div className="product__info__desc">
              Tradicionalna, ukusna i jednostavna
            </div>
          </div>
        </div>

        <div>
          <img src={savoury} alt="Image of savoury pastries" />
          <div className="product__info">
            <div className="product__info__name">SLANO</div>
            <div className="product__info__desc">Neodoljivi slani zalogaji</div>
          </div>
        </div>

        <div>
          <img src={sweet} alt="Image of sweet pastries" />
          <div className="product__info">
            <div className="product__info__name">SLATKO</div>
            <div className="product__info__desc">Najslađe od finih peciva</div>
          </div>
        </div>

        <div>
          <img src={burek} alt="Image of a burek" />
          <div className="product__info">
            <div className="product__info__name">BUREK</div>
            <div className="product__info__desc">Sočni okusi tradicije</div>
          </div>
        </div>

        <div>
          <img src={pizza} alt="Image of a pizza" />
          <div className="product__info">
            <div className="product__info__name">PIZZA</div>
            <div className="product__info__desc">Svježe, bogate i slasne</div>
          </div>
        </div>

        <div>
          <img src={sandwich} alt="Image of a sandwich" />
          <div className="product__info">
            <div className="product__info__name">SENDVIČI</div>
            <div className="product__info__desc">Najslađe od finih peciva</div>
          </div>
        </div>

        <div>
          <img src={salad} alt="Image of a salad" />
          <div className="product__info">
            <div className="product__info__name">SLATKO</div>
            <div className="product__info__desc">Najslađe od finih peciva</div>
          </div>
        </div>

        <div>
          <img src={horeca} alt="Image of a horeca" />
          <div className="product__info">
            <div className="product__info__name">SLATKO</div>
            <div className="product__info__desc">Najslađe od finih peciva</div>
          </div>
        </div>

        <div>
          <img src={packed} alt="Image of packed bread" />
          <div className="product__info">
            <div className="product__info__name">SLATKO</div>
            <div className="product__info__desc">Najslađe od finih peciva</div>
          </div>
        </div>

        <div>
          <img src={cakes} alt="Image of cakes" />
          <div className="product__info">
            <div className="product__info__name">KOLAČI</div>
            <div className="product__info__desc">Bogati okusom</div>
          </div>
        </div>

        <div>
          <img src={cake} alt="Image of a cake" />
          <div className="product__info">
            <div className="product__info__name">TORTE</div>
            <div className="product__info__desc">
              Kraljevski ukusne slastice
            </div>
          </div>
        </div>

        <div>
          <img src={celebratoryCake} alt="Image of a birthday cake" />
          <div className="product__info">
            <div className="product__info__name">PRIGODNE TORTE</div>
            <div className="product__info__desc">Torte za sve prigode</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
