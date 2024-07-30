import React from "react";

const ContactTop = ({ setActiveTab, activeTab }) => {
  return (
    <div className="contact-img">
      <div className="top-title">
        <h1>CONTACT US</h1>
      </div>
      <div>
        <div>
          <div className="top-stick">
            <div
              className={`top-menu-1 ${
                activeTab === "contact" ? "active" : ""
              }`}
              onClick={() => setActiveTab("contact")}
            >
              문의하기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTop;
