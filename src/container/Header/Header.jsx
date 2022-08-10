import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="エンジニアが集まるバー" />
      <h1 className="app__header-h1">Hack.BAR</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>神戸三宮駅から徒歩5分。「エンジニアが集まるバー」としてオープンしました</p>
      <button type="button" className="custom__button">
        <a href="#menu">
          Explore Menu
        </a>
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_section" />
    </div>
  </div>
);

export default Header;
