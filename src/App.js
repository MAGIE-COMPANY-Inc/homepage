import { AboutUs, FindUs, Calender, Footer, Gallery, Header, Menu, Staff } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className="container">
    <Navbar />
    <Header />
    <AboutUs />
    <Menu />
    <Staff />
    <Gallery />
    <FindUs />
    <Calender />
    <Footer />
  </div>
);

export default App;
