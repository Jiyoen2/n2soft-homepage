import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../components/css/Common.css";
import "../components/css/Layout.css";
import CompanyTop from "../components/mainCompanyCom/CompanyTop";
// import { useMediaQuery, MediaQuery } from "react-responsive";

const MainCompany = () => {
  return (
    <div className="main">
      <Header />
      <CompanyTop />
      {/* <div className="main-contents"><HomeContents /></div> */}
      {/* <div className="main-cust"><HomeCust /></div> */}
      {/* <div className="main-news"><HomeNews /></div> */}
      {/* <div className="main-news"><HomeContact /></div> */}
      <Footer />
    </div>
  );
};

export default MainCompany;
