import React, { useState } from "react";
import ContactMapOne from "../companyIntro/companyContact/CompanyMapOne";
import ContactMapTwo from "../companyIntro/companyContact/CompanyMapTwo";

const HomeContact = () => {
  const [activeMap, setActiveMap] = useState("ContactMapOne");
  const [mapPosition, setMapPosition] = useState("0px");
  const [activeButton, setActiveButton] = useState("ContactMapOne");

  const handleButtonClick = (mapType, position) => {
    setActiveMap(mapType);
    setMapPosition(position);
    setActiveButton(mapType);
  };

  return (
    <div className="contact-main">
      <div className="contact-section">
        <div className="goal-tit-1">
          <h1>
            (주)엔투소프트
            <span>로</span>
          </h1>
          <p>찾아오시는 길을 안내합니다.</p>
        </div>
        <div className="map-button">
          <button
            className={`map-button ${
              activeButton === "ContactMapOne" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("ContactMapOne", "0px")}
          >
            <span className="map-button-text">성남 본사</span>
          </button>
          <button
            className={`map-button ${
              activeButton === "ContactMapTwo" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("ContactMapTwo", "220px")}
          >
            <span className="map-button-text">동천 사옥</span>
          </button>
          <div className="map-go" style={{ left: mapPosition }} />
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
