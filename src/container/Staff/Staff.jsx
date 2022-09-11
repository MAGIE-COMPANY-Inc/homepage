import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Staff.css';

const Staff = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.shouhi} alt="owner_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Owner's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__staff-content">
        <div className="app__staff-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">日本だけでなく世界中のエンジニアがハックバーという環境で出会い・繋がり、かけがえのない時間やきっかけを生み出す。</p>
        </div>
        <p className="p__opensans">コロナ禍の影響によりリモートワークが推奨された日本ではオフラインの交流が減ったのではないでしょうか？私は、オンラインにより失われた交流や出会いをこのハックバーを通して取り戻したいと考えています。</p>
      </div>

      <div className="app__staff-sign">
        <p>Shouhi Ide</p>
        <p className="p__opensans">Owner & Founder</p>
      </div>
    </div>
  </div>
);

export default Staff;
