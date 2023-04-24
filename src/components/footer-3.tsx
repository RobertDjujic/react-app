import teoremLogoWhite from "./../assets/teorem-logo-white.png";
import tablet from "./../assets/tablet.png";
import stripe from "./../assets/stripe.png";
import visa from "./../assets/visa.png";
import masterCard from "./../assets/mastercard.png";
import dinersClub from "./../assets/diners-club.png";
import maestro from "./../assets/maestro.png";

const Footer3 = () => {
  return (
    <footer className="footer--teorem">
      <div className="footer--teorem__main">
        <div>
          <img src={teoremLogoWhite} alt="Teorem logo" />
        </div>
        <div className="footer--teorem__main__title">
          If you have additional questions, feel free to contact us via email
          info@teorem.hr
        </div>
        <div className="footer--teorem__main__info">
          <div>
            <div className="footer--teorem__main__header">Teorem d.o.o.</div>
            <div className="footer--teorem__main__text">Address 69, Zagreb</div>
            <div className="footer--teorem__main__text">+385 1 3434 620</div>
            <div className="footer--teorem__main__text">info@teorem.hr</div>
          </div>
          <div>
            <div className="footer--teorem__main__header">About Teorem</div>
            <nav>
              <div className="footer--teorem__main__link">Legal notice</div>
              <div className="footer--teorem__main__link">Privacy policy</div>
              <div className="footer--teorem__main__link">Become a tutor</div>
            </nav>
          </div>
          <div>
            <div className="footer--teorem__main__header">Payment Methods</div>
            <div className="footer--teorem__main__text payment">
              Lorem ipsum dolor sit amet
            </div>
            <div>
              <img src={stripe} alt="Logo of Stripe" />
              <img src={visa} alt="Logo of Visa" />
              <img src={masterCard} alt="Logo of MasterCard" />
              <img src={dinersClub} alt="Logo of Diners-Club" />
              <img src={maestro} alt="Logo of Maestro" />
            </div>
          </div>
        </div>
        <div className="footer--teorem__main__copyright">© Teorem 2021</div>
      </div>
      <div>
        <img src={tablet} alt="A pair of hands holding an iPad" />
      </div>
    </footer>
  );
};

export default Footer3;
