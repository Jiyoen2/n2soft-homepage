import React, { useState, useRef, useEffect } from "react";
import N2LogoImg from "../../../../assets/images/n2-logo.png";

const CompanyOverview = () => {
  return (
    <div className="overview-main">
      <img src={N2LogoImg} alt="N2soft 로고" className="overview-image" />
      <p>
        (주)엔투소프트는 저축은행을 비롯한 여러 금융기관에 금융시스템 구축
        경험을 바탕으로 성공적인 사업을 수행합니다.
      </p>
      <OverItem />
    </div>
  );
};

// 애니메이션 적용
const OverItem = () => {
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
    <div ref={ref} className={`ani-rec ${isVisible ? "animate" : ""}`}>
      <div className="slide-up">
        <ul className="overview-cont">
          <li>
            <p>누적 고객사</p>
            <span>30</span>
          </li>
          <li>
            <p>프로젝트 수주</p>
            <span>100+</span>
          </li>
          <li>
            <p>엔투소프트 설립</p>
            <span>2005</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyOverview;
