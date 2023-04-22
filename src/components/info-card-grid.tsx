import InfoCard from "./info-card";
import remote from "./../assets/remote.png";
import camera from "./../assets/video-camera.png";
import dollarBill from "./../assets/dollar-bill.png";
import dollarCoin from "./../assets/dollar-coin.png";
import chatBubble from "./../assets/chat-bubble.png";
import chart from "./../assets/chart.png";

const InfoCardGrid = () => {
  return (
    <div className="card--info__grid">
      <InfoCard
        infoCardImg={remote}
        infoCardAlt="A picture of a computer screen"
        infoCardTitle="Fully remote"
        infoCardText="All you need is a laptop and wifi."
      />
      <InfoCard
        infoCardImg={camera}
        infoCardAlt=""
        infoCardTitle="Tools you need"
        infoCardText="Booking system, chat, video calls & more."
      />
      <InfoCard
        infoCardImg={dollarBill}
        infoCardAlt=""
        infoCardTitle="Secure income"
        infoCardText="We make sure you get paid."
      />
      <InfoCard
        infoCardImg={dollarCoin}
        infoCardAlt=""
        infoCardTitle="Set Your Price"
        infoCardText="No limitations on what you can earn."
      />
      <InfoCard
        infoCardImg={chatBubble}
        infoCardAlt=""
        infoCardTitle="24/7 Support"
        infoCardText="We make sure all your issues are solved."
      />
      <InfoCard
        infoCardImg={chart}
        infoCardAlt=""
        infoCardTitle="Improve Your Teaching"
        infoCardText="We take care of administration, you just focus on the lessons."
      />
    </div>
  );
};

export default InfoCardGrid;
