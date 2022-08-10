import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <span className="H_background">Hack</span>
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_section" className="spoon__img" />
        <p className="p__opensans">2022年5月に神戸三宮に「エンジニアが集まるバー」としてオープンいたしました</p>
        <p className="p__opensans">エンジニア同士だからこそ繰り広げられるこの空間をどうぞお楽しみください</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
