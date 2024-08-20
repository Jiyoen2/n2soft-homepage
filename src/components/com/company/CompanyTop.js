import React from "react";

const CompanyTop = ({ setActiveTab, activeTab }) => {
  return (
    <div className="company-bg">
      <div className="top-tit">
        <h1>COMPANY</h1>
      </div>
      <div className="top-menu-com">
        <div
          className={`top-menu-1 ${activeTab === "intro" ? "active" : ""}`}
          onClick={() => setActiveTab("intro")}
        >
          회사소개
        </div>
        <div
          className={`top-menu-2 ${activeTab === "history" ? "active" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          연혁
        </div>
      </div>
      <div className="top-stick"></div>
    </div>
  );
};

export default CompanyTop;
