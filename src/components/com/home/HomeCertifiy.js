import React, { useRef, useState, useEffect } from "react";
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
  { image: Crti01, text: "혁신성장형 벤처기업 인증" },
  { image: Crti02, text: "기술연구소 인증서" },
  { image: Crti03, text: "한국산업기술진흥협회 회원증" },
  { image: Crti04, text: "강소기업확인서" },
];

const data1 = [
  { image: Crti05, text: "특허증" },
  { image: Crti06, text: "경영혁신 중소기업 확인서" },
  { image: Crti07, text: "2020 기술역량우수기업인증서" },
  { image: Crti08, text: "ISO27001 인증" },
];

const HomeCertifiy = () => {
  return (
    <div className="certi-main">
      <div className="certi-tit">
        <h2>
          <span>OUR </span>
          CERTIFICATION
        </h2>
        <p>주요 기술에 대한 특허와 인증서를 보유하고 있습니다</p>
        <div className="detail-com">
          {data.map((certi, i) => (
            <CertItem key={i} image={certi.image}>
              {certi.text}
            </CertItem>
          ))}
        </div>
        <div className="detail-com">
          {data1.map((certi, i) => (
            <CertItem key={i} image={certi.image}>
              {certi.text}
            </CertItem>
          ))}
        </div>
      </div>
    </div>
  );
};

// 애니메이션 적용
const CertItem = ({ image, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom >= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`certi-ani-rec ${isVisible ? "animate" : ""}`}
      style={{ position: "relative" }}
    >
      <HomeCertiImg image={image} />
      {children && <div className="overlay-text">{children}</div>}
    </div>
  );
};

export default HomeCertifiy;
