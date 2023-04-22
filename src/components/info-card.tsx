type InfoCardProps = {
  infoCardImg?: string;
  infoCardAlt?: string;
  infoCardTitle?: string;
  infoCardText?: string;
};

const InfoCard = ({
  infoCardImg,
  infoCardAlt,
  infoCardTitle,
  infoCardText,
}: InfoCardProps) => {
  return (
    <div className="card--info">
      <div className="card--info__img">
        <img src={infoCardImg} alt={infoCardAlt} />
      </div>
      <div className="card--info__title">{infoCardTitle}</div>
      <div className="card--info__text">{infoCardText}</div>
    </div>
  );
};

export default InfoCard;
