import { useTranslation } from "react-i18next";
import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <span className="H_background">Hack</span>
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_section" className="spoon__img" />
          <p className="p__opensans">{t("aboutUs.description1")}</p>
          <p className="p__opensans">{t("aboutUs.description2")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
