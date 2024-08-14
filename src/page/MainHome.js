import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../components/css/Common.css";
import "../components/css/Layout.css";
import HomeVideo from "../components/com/home/HomeVideo";
// import HomeContents from "../components/com/home/HomeContents";
import HomeContCarousel from "../components/com/home/HomeContCarousel";
import HomeCust from "../components/com/home/HomeCust";
import HomeNewsCarousel from "../components/com/home/HomeNewsCarousel";
// import HomeNews from "../components/com/home/HomeNews";
import HomeCertifiy from "../components/com/home/HomeCertifiy";
// import { useMediaQuery, MediaQuery } from "react-responsive";

const MainHome = () => {
  return (
    <div>
      <div>
        <HomeVideo />
      </div>
      <div>
        <HomeContCarousel />
      </div>
      <div>
        <HomeCust />
      </div>
      <div>
        <HomeNewsCarousel />
      </div>
      <div>
        <HomeCertifiy />
      </div>
      <Footer />
    </div>
  );
};

export default MainHome;
