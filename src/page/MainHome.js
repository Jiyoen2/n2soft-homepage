import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../components/css/Common.css";
import "../components/css/Layout.css";
import HomeVideo from "../components/com/home/HomeVideo";
// import HomeContents from "../components/com/home/HomeContents";
import CarouselSlide from "../components/com/home/homeContent/CarouselSlide";
import HomeCust from "../components/com/home/HomeCust";
import HomeNews from "../components/com/home/HomeNews";
import HomeCertifiy from "../components/com/home/HomeCertifiy";
// import { useMediaQuery, MediaQuery } from "react-responsive";

const MainHome = () => {
  return (
    <div>
      <Header />
      <div>
        <HomeVideo />
      </div>
      <div>
        <CarouselSlide />
      </div>
      <div>
        <HomeCust />
      </div>
      <div>
        <HomeNews />
      </div>
      <div>
        <HomeCertifiy />
      </div>
      <Footer />
    </div>
  );
};

export default MainHome;
