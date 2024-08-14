import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../components/css/Common.css";
import "../components/css/Layout.css";
import ContactTop from "../components/com/contact/ContactTop";
import { ContactMail } from "../components/com/contact/ContactMail";

const MainContactUs = () => {
  const [activeTab, setActiveTab] = useState("contact");

  const renderContent = () => {
    // switch (activeTab) {
    //   case "contact":
    //     return <ContactTop />;
    //   default:
    //     return null;
    // }
  };

  return (
    <div className="main">
      <ContactTop setActiveTab={setActiveTab} activeTab={activeTab} />
      {renderContent()}
      <ContactMail />
      <Footer />
    </div>
  );
};

export default MainContactUs;
