import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../components/css/Common.css";
import "../components/css/Layout.css";
import CompanyTop from "../components/com/company/CompanyTop";
import CompanyHistory from "../components/com/company/CompanyHistory";
import CompanyIntro from "../components/com/company/CompanyIntro";

const MainCompany = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const renderContent = () => {
    switch (activeTab) {
      case "intro":
        return <CompanyIntro />;
      case "history":
        return <CompanyHistory />;
      default:
        return null;
    }
  };

  return (
    <div className="main">
      <CompanyTop setActiveTab={setActiveTab} activeTab={activeTab} />
      {renderContent()}
      <Footer />
    </div>
  );
};

export default MainCompany;
