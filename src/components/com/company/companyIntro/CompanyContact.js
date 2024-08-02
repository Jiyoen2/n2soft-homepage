import React, { useState } from "react";
import ContactMapOne from "../companyIntro/companyContact/CompanyMapOne";
import ContactMapTwo from "../companyIntro/companyContact/CompanyMapTwo";

const HomeContact = () => {
  // 상태를 정의합니다. 초기값은 'ContactMapOne'입니다.
  const [activeMap, setActiveMap] = useState("ContactMapOne");

  // 버튼 클릭 시 호출되는 함수입니다.
  const handleButtonClick = (mapType) => {
    setActiveMap(mapType);
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
