import React from "react";
import HomeCertiImg from "./homeCerti/HomeCertiImg";
import Crti01 from "../../../assets/images/crti_01.jpg";
import Crti02 from "../../../assets/images/crti_02.jpg";
import Crti03 from "../../../assets/images/crti_03.jpg";
import Crti04 from "../../../assets/images/crti_04.jpg";
import Crti05 from "../../../assets/images/crti_05.jpg";
import Crti06 from "../../../assets/images/crti_06.jpg";
import Crti07 from "../../../assets/images/crti_07.jpg";
import Crti08 from "../../../assets/images/crti_08.jpg";

const data = [
  { image: Crti01 },
  { image: Crti02 },
  { image: Crti03 },
  { image: Crti04 },
];

const data1 = [
  { image: Crti05 },
  { image: Crti06 },
  { image: Crti07 },
  { image: Crti08 },
];

const specialStyle = {
  width: "100%",
  height: "450px",
  borderRadius: "10px",
  border: "solid 1px #bdbdbd",
  backgroundColor: "black",
  boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  // zIndex: 10, // 앞으로 오도록 설정
  // position: "relative", // z-index와 함께 사용
};

const HomeCertifiy = () => {
  return (
    <div className="certi-main">
      <div className="certi-tit">
        <h2>
          <span>OUR </span>
          CERTIFICATION
        </h2>
        <p>주요 기술에 대한 특허와 인증서를 보유하고 있습니다</p>
      </div>
      <div className="certi-list-com">
        {data.map((certi, i) => (
          <HomeCertiImg
            key={i}
            image={certi.image}
            style={certi.image === Crti01 ? specialStyle : {}}
          />
        ))}
      </div>
      <div className="certi-list-com">
        {data1.map((certi, i) => (
          <HomeCertiImg key={i} image={certi.image} />
        ))}
      </div>
    </div>
  );
};

export default HomeCertifiy;
