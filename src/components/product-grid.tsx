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
import Product from "./product";

const ProductGrid = () => {
  return (
    <div className="product">
      <div className="product__grid">
        <Product
          imgAlt="Slika kruha"
          imgDesc="Kruhovi ravno iz peći"
          imgSrc={bread}
          imgTitle="Kruh"
        />

        <Product
          imgAlt="Slika peciva"
          imgDesc="Tradicionalna, ukusna i jednostavna"
          imgSrc={pastries}
          imgTitle="Peciva"
        />

        <Product
          imgAlt="Slika slanih peciva"
          imgDesc="Neodoljivi slani zalogaji"
          imgSrc={savoury}
          imgTitle="Slano"
        />

        <Product
          imgAlt="Slika slatkih peciva"
          imgDesc="Najslađe od finih peciva"
          imgSrc={sweet}
          imgTitle="Slatko"
        />

        <Product
          imgAlt="Slika bureka"
          imgDesc="Sočni okusi tradicije"
          imgSrc={burek}
          imgTitle="Burek"
        />

        <Product
          imgAlt="Slika pizze"
          imgDesc="Svježe, bogate i slasne"
          imgSrc={pizza}
          imgTitle="Pizza"
        />

        <Product
          imgAlt="Slika sendviča"
          imgDesc="Bogati i neodoljivi"
          imgSrc={sandwich}
          imgTitle="Sendviči"
        />

        <Product
          imgAlt="Slika salate"
          imgDesc="Zdrav obrok u žurbi"
          imgSrc={salad}
          imgTitle="Salata"
        />

        <Product
          imgAlt="Slika horece"
          imgDesc="Prednost vašeg poslovanja"
          imgSrc={horeca}
          imgTitle="Horeca"
        />

        <Product
          imgAlt="Slika kruha"
          imgDesc="Dugotrajni i puni okusa"
          imgSrc={packed}
          imgTitle="Pakirano"
        />

        <Product
          imgAlt="Slika kolača"
          imgDesc="Bogati okusom"
          imgSrc={cakes}
          imgTitle="Kolači"
        />

        <Product
          imgAlt="Slika torte"
          imgDesc="Kraljevski ukusne slastice"
          imgSrc={cake}
          imgTitle="Torte"
        />

        <Product
          imgAlt="Slika rođendanske torte"
          imgDesc="Torte za sve prigode"
          imgSrc={celebratoryCake}
          imgTitle="Prigodne torte"
        />
      </div>
    </div>
  );
};

export default ProductGrid;
