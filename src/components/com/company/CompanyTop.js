import React from "react";

const CompanyTop = ({ setActiveTab, activeTab }) => {
  return (
    <div className="company-img">
      <div className="top-tit">
        <h1>COMPANY</h1>
      </div>
      <div>
        <div>
          <div className="top-stick">
            <div
              className={`top-menu-1 ${activeTab === "intro" ? "active" : ""}`}
              onClick={() => setActiveTab("intro")}
            >
              회사소개
            </div>
            {/* <div
              className={`top-menu-2 ${activeTab === "mgmt" ? "active" : ""}`}
              onClick={() => setActiveTab("mgmt")}
            >
              경영철학
            </div> */}
            <div
              className={`top-menu-2 ${
                activeTab === "history" ? "active" : ""
              }`}
              onClick={() => setActiveTab("history")}
            >
              연혁
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTop;
