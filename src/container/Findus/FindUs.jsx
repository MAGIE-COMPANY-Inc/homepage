import { SubHeading } from '../../components';
import Map from '../../components/Footer/GoogleMap';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">〒650-0001 兵庫県神戸市中央区加納町４丁目７−２６ 藤嶋ビル 地下一階</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Fri - Sat: 18:00 pm - 23:00 pm</p>
      </div>
    </div>

    <Map />
  </div>
);

export default FindUs;