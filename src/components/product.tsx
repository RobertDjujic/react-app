type ProductProps = {
  imgAlt?: string;
  imgDesc?: string;
  imgSrc?: string;
  imgTitle?: string;
};

const Product = ({ imgAlt, imgDesc, imgSrc, imgTitle }: ProductProps) => {
  return (
    <div>
      <div className="product__img">
        <div className="product__img__title">{imgTitle}</div>
        <img className="product__img__item" src={imgSrc} alt={imgAlt} />
      </div>
      <div className="product__info">
        <div className="product__info__name">{imgTitle}</div>
        <div className="product__info__desc">{imgDesc}</div>
      </div>
    </div>
  );
};

export default Product;
