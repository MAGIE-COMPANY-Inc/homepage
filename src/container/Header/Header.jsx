import { useTranslation } from "react-i18next";
import { SubHeading } from "../../components";
import images from "../../constants/images";
import "./Header.css";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title={t("header.title")} />
        {/* <h1 className="app__header-h1">HACK.BAR</h1> */}
        <div className="logo">
          <img src={images.logo} alt="header_section" />
        </div>
        <p className="p__opensans" style={{ marginTop: "2rem" }}>
          {t("header.description")}
        </p>
        <p className="p__opensans">{t("header.description2")}</p>
        <p className="p__opensans" style={{ marginBottom: "2rem" }}>
          {t("header.description3")}
        </p>
        <div className="app__header__button">
          <button type="button" className="custom__button">
            <a href="https://hack-bar.vercel.app">
              {t("header.subHomepageButton")}
            </a>
          </button>
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_section" />
      </div>
    </div>
  );
};

export default Header;
