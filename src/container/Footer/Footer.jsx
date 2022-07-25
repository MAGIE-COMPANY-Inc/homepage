import { FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { FooterOverlay } from '../../components';
import Map from '../../components/Footer/GoogleMap';
import Twitter from '../../components/Footer/Twitter';
import images from '../../constants/images';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Twitter />
    <Map />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext" id="contact">Contact Us</h1>
        <p className="p__opensans">〒650-0001 兵庫県神戸市中央区加納町４丁目７−２６ 藤嶋ビル 地下一階</p>
        <p className="p__opensans">090-9253-2515</p>
      </div>

      <div className="app__footer-links_logo">
        <p className="p__opensans">&quot;世界中のエンジニアとの交流も支援しています&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiTwitter />
          <FiInstagram />
          <FiLinkedin />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Opening Hours</h1>
        <p className="p__opensans">Friday-Saturday:</p>
        <p className="p__opensans">18:00 - 23:00 </p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Hack.BAR. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
