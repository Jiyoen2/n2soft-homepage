import React, { useState, useRef } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import ServiceImage1 from "../../../../assets/images/main_service_01.png";
import ServiceImage2 from "../../../../assets/images/main_service_02.png";
import ServiceImage3 from "../../../../assets/images/main_service_03.png";
import ServiceImage4 from "../../../../assets/images/main_service_04.png";
import ArrRight from "../../../../assets/images/arr_right.png";
import ArrLeft from "../../../../assets/images/arr_left.png";
import ArrRightRd from "../../../../assets/images/arr_right_red.png";

function CarouselSlide() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
  };

  return (
    <div className="slider-container">
      <div className="contents-main">
        <div className="contents-cont">
          <div className="contents-tit">
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
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div className="contents-feature">
            <img src={ServiceImage1} alt="Service2" />
            <h2>통합여신관리 시스템</h2>
            <div className="contents-text">
              <p>금융기관 마다 필수로 사용 되어지는 채권관리를 중심으로 하여</p>
              <p>다양한 금융상품들을 관리하고 업무를 편리하게 하는 시스템</p>
            </div>
          </div>
          <div className="contents-feature">
            <img src={ServiceImage2} alt="Service2" />
            <div className="arr-with-image">
              QUPID 서비스
              <img
                src={ArrRightRd}
                alt="오른쪽 화살표"
                className="arr-right-red"
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <div className="contents-text">
              <p>고객들에게 발송하는 문서를 전자우편과 전자문서의 형태로</p>
              <p>발송하고 배달이력을 전산화하여 관리하는 서비스</p>
            </div>
          </div>
          <div className="contents-feature">
            <img src={ServiceImage3} alt="Service2" />
            <h2>가상 FAX 시스템</h2>
            <div className="contents-text">
              <p>상담사별 혹은 고객별 가상 FAX번호를 부여하여</p>
              <p>FAX 업무 진행시 효율성을 높일 수 있는 서비스</p>
            </div>
          </div>
          <div className="contents-feature">
            <img src={ServiceImage2} alt="Service2" />
            <h2>MO 서비스</h2>
            <div className="contents-text">
              <p>문자내용 및 이미지를 전산으로 받아</p>
              <p>고객 원장에 바로 등록되어 업무 편의성을 향상시키는 서비스</p>
            </div>
          </div>
        </Slider>
      </div>
      <input
        onChange={(e) => sliderRef.slickGoTo(e.target.value)}
        value={slideIndex}
        type="range"
        min={0}
        max={3}
      />
    </div>
  );
}

export default CarouselSlide;
