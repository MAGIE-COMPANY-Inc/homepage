import { SubHeading } from "../../components";
import images from "../../constants/images";
import "./Staff.css";
import { useTranslation } from "react-i18next";

const Staff = () => {
  const { t } = useTranslation();

  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Owner's word" />
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className="app__staff-content">
          <div className="app__staff-content_quote">
            <img src={images.quote} alt="quote_image" />
            <p className="p__opensans">{t("staff.ownersWord1")}</p>
          </div>
          <p className="p__opensans">{t("staff.ownersWord2")}</p>
        </div>

        <div className="app__staff-sign">
          <p>Shouhi Ide</p>
          <p className="p__opensans">Owner & Founder</p>
        </div>
      </div>
    </div>
  );
};

export default Staff;
