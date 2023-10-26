import { FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { SubHeading } from "../../components";
import Map from "../../components/Footer/GoogleMap";
import { useTranslation } from "react-i18next";

const FindUs = () => {
  const { t } = useTranslation();
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">{t("findUs.address")}</p>
          <p
            className="p__cormorant"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            Opening Hours
          </p>
          <p className="p__opensans">Fri - Sat: 18:00 - 23:00</p>
        </div>
        <div className="app__footer-links_logo">
          <div className="app__footer-links_icons">
            <a
              href="https://twitter.com/HackBarKobe"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter />
            </a>
            <a
              href="https://www.instagram.com/HACK.BAR_kobe/"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/hack-bar/"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default FindUs;
