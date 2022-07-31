import { AboutUs, Footer, Gallery, Header, Menu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className="container">
    <Navbar />
    <Header />
    <AboutUs />
    <Menu />
    <Gallery />
    <Footer />
  </div>
);

export default App;
