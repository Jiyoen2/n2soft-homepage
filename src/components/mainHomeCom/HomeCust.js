import React from "react";
import CustImg from "./homeCustCom/CustImg";

const HomeCust = () => {
  return (
    <div className="cust-main">
      <div className="title-one" style={{ padding: "180px 0px 60px 320px" }}>
        <h2>
          <span>OUR </span>
          PARTNERS
        </h2>
        <p>엔투소프트는 고객사와 함께 성장할 수 있도록 노력하겠습니다.</p>
      </div>
      <div className="cust-img"></div>
      <CustImg />
    </div>
  );
};

export default HomeCust;
