import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../components/css/Common.css";
import "../components/css/Layout.css";
import CompanyTop from "../components/com/company/CompanyTop";
import CompanyHistory from "../components/com/company/CompanyHistory";
import CompanyIntro from "../components/com/company/CompanyIntro";
import { useLocation } from "react-router-dom";

const MainCompany = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const initialTab = query.get("tab") || "intro";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setActiveTab(query.get("tab") || "intro");
  }, [location.search]);

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
    <div className="main" style={{ height: "900px" }}>
      <CompanyTop setActiveTab={setActiveTab} activeTab={activeTab} />
      {renderContent()}
      <Footer />
    </div>
  );
};

export default MainCompany;
