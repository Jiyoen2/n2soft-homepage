import React from "react";
import HomeCustImg from "./homeCust/HomeCustImg";

const HomeCust = () => {
  return (
    <div className="cust-main">
      <div className="cust-com">
        <div className="cust-tit">
          <h2>
            <span>OUR </span>
            PARTNERS
          </h2>
          <p>엔투소프트는 고객사와 함께 성장할 수 있도록 노력하겠습니다.</p>
        </div>
      </div>
      <div className="cust-img"></div>
      <HomeCustImg />
    </div>
  );
};

export default HomeCust;
