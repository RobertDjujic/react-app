import appleBadge from "./../assets/app-store-badge.png";
import googleBadge from "./../assets/google-play-badge.png";

const Footer = () => {
  return (
    <div className="footer__wrap">
      <footer className="footer">
        <div className="footer__info">
          <div>
            <div className="footer__info__item">MLINAR</div>
            <div className="footer__info__item">
              MLINAR pekarska industrija d.o.o.
            </div>{" "}
            <div className="footer__info__item">Radnička cesta 228c</div>
            <div className="footer__info__item">10000 Zagreb, Hrvatska</div>
          </div>
          <div>
            <div className="footer__info__item">KONTAKT</div>
            <div className="footer__info__item">T: +385 1 23 82 300</div>
            <div className="footer__info__item">F: +385 1 23 82 303</div>
            <div className="footer__info__item">Email: info@mlinar.eu.com</div>
          </div>
        </div>
        <div className="footer__links">
          <nav className="footer__links__nav">
            <div className="footer__links__item">Proizvodi</div>
            <div className="footer__links__item">Lokacije</div>
            <div className="footer__links__item">Karijere</div>
            <div className="footer__links__item">Naša priča</div>
            <div className="footer__links__item">Kontakt</div>
          </nav>
          <div className="footer__links__badges">
            <div>
              <img src={googleBadge} alt="Google Play link" />
            </div>
            <div>
              <img src={appleBadge} alt="App Store link" />
            </div>
          </div>
          <div className="footer__links__item gray">
            © MLINAR pekarska industrija d.o.o. | Made by: Reroot
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
