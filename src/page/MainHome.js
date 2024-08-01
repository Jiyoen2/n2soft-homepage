import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../components/css/Common.css";
import "../components/css/Layout.css";
import HomeVideo from "../components/com/home/HomeVideo";
import HomeContents from "../components/com/home/HomeContents";
import HomeCust from "../components/com/home/HomeCust";
import HomeNews from "../components/com/home/HomeNews";
import HomeContact from "../components/com/home/HomeContact";
// import { useMediaQuery, MediaQuery } from "react-responsive";

const MainHome = () => {
  return (
    <div>
      <Header />
      <div>
        <HomeVideo />
      </div>
      <div>
        <HomeContents />
      </div>
      <div>
        <HomeCust />
      </div>
      <div>
        <HomeNews />
      </div>
      <div>
        <HomeContact />
      </div>
      <Footer />
    </div>
  );
};

export default MainHome;
