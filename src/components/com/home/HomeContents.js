import React, { useState } from "react";
import HomeFeature from "./homeContent/HomeFeature";
import ServiceImage1 from "./../../images/main_service_01.png";
import ServiceImage2 from "./../../images/main_service_02.png";
import ServiceImage3 from "./../../images/main_service_03.png";
import ServiceImage4 from "./../../images/main_service_04.png";
import ArrRight from "./../../images/arr_right.png";
import ArrLeft from "./../../images/arr_left.png";
import ArrRightRd from "./../../images/arr_right_red.png";

const data = [
  {
    title: "통합여신관리 시스템",
    content: (
      <>
        <p>금융기관 마다 필수로 사용 되어지는 채권관리를 중심으로 하여</p>
        <p>다양한 금융상품들을 관리하고 업무를 편리하게 하는 시스템</p>
      </>
    ),
    image: ServiceImage1,
  },
  {
    title: (
      <div className="arr-with-image">
        QUPID 서비스
        <img
          src={ArrRightRd}
          alt="오른쪽 화살표"
          className="arr-right-red"
          style={{ width: "40px", height: "40px" }}
        />
      </div>
    ),
    content: (
      <>
        <p>고객들에게 발송하는 문서를 전자우편과 전자문서의 형태로</p>
        <p>발송하고 배달이력을 전산화하여 관리하는 서비스</p>
      </>
    ),
    image: ServiceImage2,
  },
  {
    title: "가상 FAX 시스템",
    content: (
      <>
        <p>상담사별 혹은 고객별 가상 FAX번호를 부여하여</p>
        <p>FAX 업무 진행시 효율성을 높일 수 있는 서비스</p>
      </>
    ),
    image: ServiceImage3,
  },
  {
    title: "MO 서비스",
    content: (
      <>
        <p>문자내용 및 이미지를 전산으로 받아</p>
        <p>고객 원장에 바로 등록되어 업무 편의성을 향상시키는 서비스</p>
      </>
    ),
    image: ServiceImage4,
  },
];

const HomeContents = () => {
  return (
    <div className="contents-main">
      <div className="contents-cont">
        <div className="main-tit-2">
          <h2>
            <span>OUR </span>
            SERVICE
          </h2>
          <p>
            금융거래 정보를 추적, 운영하는 디지털환경의 통합대출관리 시스템
            서비스를 제공합니다.
          </p>
        </div>
        <div className="contents-arr">
          <img src={ArrLeft} alt="왼쪽 화살표" className="arr-left" />
          <img src={ArrRight} alt="오른쪽 화살표" className="arr-right" />
        </div>
      </div>
      <div className="contents-feature-com">
        {data.map((content, i) => (
          <HomeFeature
            key={i}
            title={content.title}
            content={content.content}
            image={content.image}
          />
        ))}
      </div>
      <div className="stick-com">
        <div className="stick-gray">
          <div className="stick-red"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeContents;
