import React from "react";

const NoticeTop = ({ setActiveTab, activeTab }) => {
  return (
    <div className="notice-bg">
      <div className="top-tit">
        <h1>NEWS</h1>
      </div>
      <div>
        <div>
          <div className="top-stick">
            <div
              className={`top-menu-1 ${activeTab === "notice" ? "active" : ""}`}
              onClick={() => setActiveTab("notice")}
            >
              소식
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeTop;
