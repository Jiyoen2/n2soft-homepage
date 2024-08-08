import React from "react";

const ContactTop = ({ setActiveTab, activeTab }) => {
  return (
    <div className="contactus-img">
      <div className="top-tit">
        <h1>CONTACT US</h1>
      </div>
      <div>
        <div className="top-menu-com">
          <div
            className={`top-menu-1 ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            문의하기
          </div>
        </div>
        <div className="top-stick"></div>
      </div>
    </div>
  );
};

export default ContactTop;
