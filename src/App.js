import React, { useEffect } from "react";
import ReactGA from "react-ga";
import {
  AboutUs,
  FindUs,
  Calender,
  Footer,
  Gallery,
  Header,
  Menu,
  Staff,
  // TestCalender,
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/config";

const App = () => {
  useEffect(() => {
    // Google AnalyticsのトラッキングIDを設定します
    ReactGA.initialize("UA-164898966-1");
    // ページビューを送信します
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
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
        {/* <TestCalender /> */}
        <Footer />
      </div>
    </I18nextProvider>
  );
};

export default App;
