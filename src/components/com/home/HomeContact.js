import React, { useState } from "react";
import ContactMapOne from "./homeContact/ContactMapOne.js";
import ContactMapTwo from "./homeContact/ContactMapTwo.js";

const HomeContact = () => {
  // 상태를 정의합니다. 초기값은 'ContactMapOne'입니다.
  const [activeMap, setActiveMap] = useState("ContactMapOne");

  // 버튼 클릭 시 호출되는 함수입니다.
  const handleButtonClick = (mapType) => {
    setActiveMap(mapType);
  };

  return (
    <div className="common-main">
      <div className="contact-section">
        <div className="contact-title">
          <h2 style={{ fontSize: "48px" }}>
            CONTACT
            <span style={{ fontSize: "48px", fontWeight: "normal" }}> US</span>
          </h2>
          <p style={{ fontSize: "20px", padding: "19px 0 60px 0" }}>
            엔투소프트는 고객사와 함께 성장할 수 있도록 노력하겠습니다.
          </p>
        </div>
        <div className="map-button">
          <button
            className={`map-button ${
              activeMap === "ContactMapOne" ? "map-black" : "map-white"
            }`}
            onClick={() => handleButtonClick("ContactMapOne")}
          >
            성남 본사
          </button>
          <button
            className={`map-button ${
              activeMap === "ContactMapTwo" ? "map-black" : "map-white"
            }`}
            onClick={() => handleButtonClick("ContactMapTwo")}
          >
            동천 사옥
          </button>
        </div>
      </div>
      <div className="contact-com">
        {activeMap === "ContactMapOne" && <ContactMapOne />}
        {activeMap === "ContactMapTwo" && <ContactMapTwo />}
      </div>
    </div>
  );
};

export default HomeContact;
