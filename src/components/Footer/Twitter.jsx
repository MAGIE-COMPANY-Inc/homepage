import {
  TwitterHashtagButton,
  TwitterFollowButton,
  TwitterTimelineEmbed,
} from "react-twitter-embed";
import SubHeading from "../SubHeading/SubHeading";
import "./Twitter.css";
import { useTranslation } from "react-i18next";

const Twitter = () => {
  const { t } = useTranslation();
  return (
    <div className="app_twitter">
      <div className="app_twitter-heading">
        <SubHeading title="Twitter" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="EngineerBarKobe"
          options={{ height: 400 }}
          tweetLimit="5"
        />
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem", marginBottom: "3rem" }}
        >
          {t("twitter.description")}
        </p>
        <TwitterHashtagButton tag="ハックバー" />
        <TwitterFollowButton screenName="EngineerBarKobe" />
      </div>
    </div>
  );
};

export default Twitter;
