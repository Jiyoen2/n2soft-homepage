import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../../components/css/MainCompany.css";
import "../../components/css/MainCommon.css";
// import { useMediaQuery, MediaQuery } from "react-responsive";

const MainCompanyIntro = () => {
  return (
    <div className="main">
      <Header />
      {/* <div className="main-video"><HomeVideo /></div> */}
      {/* <div className="main-contents"><HomeContents /></div> */}
      {/* <div className="main-cust"><HomeCust /></div> */}
      {/* <div className="main-news"><HomeNews /></div> */}
      {/* <div className="main-news"><HomeContact /></div> */}
      <Footer />
    </div>
  );
};

export default MainCompanyIntro;
