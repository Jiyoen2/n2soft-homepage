import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../components/css/Common.css";
import "../components/css/Layout.css";
import ContactUsTop from "../components/mainContactUsCom/ContactUsTop";
import HomeContents from "../components/mainHomeCom/HomeContents";
import HomeCust from "../components/mainHomeCom/HomeCust";
import HomeNews from "../components/mainHomeCom/HomeNews";
import HomeContact from "../components/mainHomeCom/HomeContact";
import { useNavigate } from "react-router-dom";
// import ContactHeader from "../components/mainContactUsCom/ContactHeader";
// import { useMediaQuery, MediaQuery } from "react-responsive";

const MainContactUs = () => {
  return (
    <div className="main">
      <Header />
      {/* <div className="main-video"> */}
      <ContactUsTop />
      {/* </div> */}
      {/* <div className="main-contents"><HomeContents /></div> */}
      {/* <div className="main-cust"><HomeCust /></div> */}
      {/* <div className="main-news"><HomeNews /></div> */}
      {/* <div className="main-news"><HomeContact /></div> */}
      <Footer />
    </div>
  );
};

export default MainContactUs;
