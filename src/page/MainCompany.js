import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../components/css/Common.css";
import "../components/css/Layout.css";
import CompanyTop from "../components/com/company/CompanyTop";
import CompanyHistory from "../components/com/company/CompanyHistory";
import CompanyIntro from "../components/com/company/CompanyIntro";

const MainCompany = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("intro");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [location.search]);

  const handleTabClick = (tabName) => {
    navigate(`?tab=${tabName}`);
    setActiveTab(tabName);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "intro":
        return <CompanyIntro key="intro" />;
      case "history":
        return <CompanyHistory key="history" />;
      default:
        return null;
    }
  };

  return (
    <div className="main" style={{ height: "900px" }}>
      <CompanyTop setActiveTab={handleTabClick} activeTab={activeTab} />
      <div id="content-area">{renderContent()}</div>
      <Footer />
    </div>
  );
};

export default MainCompany;
