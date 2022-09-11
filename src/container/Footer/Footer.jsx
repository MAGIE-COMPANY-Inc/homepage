import { FooterOverlay } from '../../components';
import Twitter from '../../components/Footer/Twitter';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Twitter />

    <div className="footer__copyright">
      <p className="p__opensans">2022 Hack.BAR. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
