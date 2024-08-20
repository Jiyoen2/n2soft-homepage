import React from "react";

const SolutionTop = ({ setActiveTab, activeTab }) => {
  return (
    <div className="solution-bg">
      {/* <div style={{ height: "80px" }}></div> */}
      <div className="top-tit">
        <h1>SOLUTION</h1>
      </div>
      <div>
        <div className="top-menu-com">
          <div
            className={`top-menu-1 ${activeTab === "solution" ? "active" : ""}`}
            onClick={() => setActiveTab("solution")}
          >
            솔루션
          </div>
        </div>
        <div className="top-stick"></div>
      </div>
    </div>
  );
};

export default SolutionTop;
