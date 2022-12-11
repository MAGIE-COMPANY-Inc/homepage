import { AboutUs, FindUs, Calender, Footer, Gallery, Header, Menu, Staff } from './container';
import { Navbar } from './components';
import './App.css';
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/config'

const App = () => (
  <I18nextProvider i18n={i18n}>
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
  </I18nextProvider>
);

export default App;
