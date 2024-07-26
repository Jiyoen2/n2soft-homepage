import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../components/css/Common.css";
import "../components/css/Layout.css";
import HomeVideo from "../components/mainHomeCom/HomeVideo";
import HomeContents from "../components/mainHomeCom/HomeContents";
import HomeCust from "../components/mainHomeCom/HomeCust";
import HomeNews from "../components/mainHomeCom/HomeNews";
import HomeContact from "../components/mainHomeCom/HomeContact";
// import { useMediaQuery, MediaQuery } from "react-responsive";

const MainHome = () => {
  return (
    <div className="main">
      <Header />
      <div className="main-video">
        <HomeVideo />
      </div>
      <div className="main-contents">
        <HomeContents />
      </div>
      <div className="main-cust">
        <HomeCust />
      </div>
      <div className="main-news">
        <HomeNews />
      </div>
      <div className="main-news">
        <HomeContact />
      </div>
      <Footer />
    </div>
  );
};

export default MainHome;
