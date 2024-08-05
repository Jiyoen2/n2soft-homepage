import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../components/css/Common.css";
import "../components/css/Layout.css";
import SolutionTop from "../components/com/solution/SolutionTop";
import SolutionService from "../components/com/solution/SolutionService";

const MainSolution = () => {
  const [activeTab, setActiveTab] = useState("solution");

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
      <Header />
      <SolutionTop setActiveTab={setActiveTab} activeTab={activeTab} />
      {renderContent()}
      <SolutionService />
      <Footer />
    </div>
  );
};

export default MainSolution;
