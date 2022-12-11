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
        <h1 className="app__header-h1">Hack.BAR</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          {t("header.description")}
        </p>
        <button type="button" className="custom__button">
          <a href="https://hack-bar.vercel.app">
            {t("header.subHomepageButton")}
          </a>
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_section" />
      </div>
    </div>
  );
};

export default Header;
