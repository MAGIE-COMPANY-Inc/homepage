import { TwitterHashtagButton, TwitterFollowButton, TwitterTimelineEmbed } from 'react-twitter-embed';
import SubHeading from '../SubHeading/SubHeading';
import './Twitter.css';

const Twitter = () => (
  <div className="app_twitter">
    <div className="app_twitter-heading">
      <SubHeading title="Twitter" />
      <TwitterTimelineEmbed sourceType="profile" screenName="EngineerBarKobe" options={{ height: 400 }} />
      <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem', marginBottom: '3rem' }}>ツイッターでの発信を主に行っています。是非フォローして新着情報をお楽しみにください</p>
      <TwitterHashtagButton tag="ハックバー" />
      <TwitterFollowButton screenName="EngineerBarKobe" />
    </div>
  </div>
);

export default Twitter;
