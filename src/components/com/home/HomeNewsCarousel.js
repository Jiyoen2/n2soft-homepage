import React, { useState, useRef } from "react";
import Slider from "react-slick";
// import ServiceImage1 from "../../../assets/images/main_service_01.png";
// import ServiceImage2 from "../../../assets/images/main_service_02.png";
// import ServiceImage3 from "../../../assets/images/main_service_03.png";
// import ServiceImage4 from "../../../assets/images/main_service_04.png";
import ArrRight from "../../../assets/images/arr_right.png";
import ArrLeft from "../../../assets/images/arr_left.png";
import ArrRightRd from "../../../assets/images/arr_right_red.png";

function HomeNewsCarousel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSlideIndex(next),
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev(); // 슬라이드를 이전으로 이동
  };

  const goToNext = () => {
    sliderRef.current.slickNext(); // 슬라이드를 다음으로 이동
  };

  return (
    <div className="slider-container-2">
      <div className="news-main">
        <div className="news-feature">
          <div className="news-com">
            <div className="news-tit">
              <h2>
                <span style={{ fontWeight: 500 }}>N2SOFT </span>
                NEWS
              </h2>
              <p>엔투소프트의</p>
              <p>최신 근황을 알려드립니다.</p>
            </div>
            <div className="news-arr">
              <img
                src={ArrLeft}
                alt="이전"
                className="newsArrLeft"
                onClick={goToPrev}
              />
              <img
                src={ArrRight}
                alt="다음"
                className="newsArrRight"
                onClick={goToNext}
              />
            </div>
          </div>
          <Slider ref={sliderRef} {...settings}>
            <div className="rectangle-com">
              <div className="rectangle">
                <div className="news-text-date">2024.05.17</div>
                <div className="news-text-tit">
                  <p>스마트저축은행</p>
                  <p>여신관리시스템 고도화</p>
                  <p>프로젝트 수주</p>
                  <div className="news-text-cont">
                    <p>
                      사용자에 최적화된 화면 제공과 엔투소프트의 기술력이 더하여
                      소비자 채권관리 시스템의 High-end 버전을 목표로 합니다.
                    </p>
                  </div>
                  <div className="news-text-num">01</div>
                </div>
              </div>
            </div>
            <div className="rectangle-com">
              <div className="rectangle">
                <div className="news-text-date">2024.04.25</div>
                <div className="news-text-tit">
                  <p>상상인플러스저축은행</p>
                  <p> 통합여신관리 시스템</p>
                  <p> 개발 수주</p>
                  <div className="news-text-cont">
                    <p>
                      통합여신관리시스템을 n.Tree솔루션으로 전환하여 소비자
                      채권관리에 업무효율성 향상을 목표로 합니다.
                    </p>
                  </div>
                  <div className="news-text-num">02</div>
                </div>
              </div>
            </div>
            <div className="rectangle-com">
              <div className="rectangle">
                <div className="news-text-date">2024.04.13</div>
                <div className="news-text-tit">
                  <p>HB저축은행</p>
                  <p> NPL 채권관리시스템 구축</p>
                  <div className="news-text-cont">
                    <p>
                      NPL채권관리를 전산화 하여 최소한의 인력으로 최대 효율을 낼
                      수 있도록 시스템을 구축합니다.
                    </p>
                  </div>
                  <div className="news-text-num">03</div>
                </div>
              </div>
            </div>
            <div className="rectangle-com">
              <div className="rectangle">
                <div className="news-text-date">2024.03.17</div>
                <div className="news-text-tit">
                  <p>HB저축은행</p>
                  <p> NPL 채권관리시스템 구축</p>
                  <div className="news-text-cont">
                    <p>
                      NPL채권관리를 전산화 하여 최소한의 인력으로 최대 효율을 낼
                      수 있도록 시스템을 구축합니다.
                    </p>
                  </div>
                  <div className="news-text-num">04</div>
                </div>
              </div>
            </div>
            <div className="rectangle-com">
              <div className="rectangle">
                <div className="news-text-date">2024.02.15</div>
                <div className="news-text-tit">
                  <p>HB저축은행</p>
                  <p> NPL 채권관리시스템 구축</p>
                  <div className="news-text-cont">
                    <p>
                      NPL채권관리를 전산화 하여 최소한의 인력으로 최대 효율을 낼
                      수 있도록 시스템을 구축합니다.
                    </p>
                  </div>
                  <div className="news-text-num">05</div>
                </div>
              </div>
            </div>
            <div className="rectangle-com">
              <div className="rectangle">
                <div className="news-text-date">2024.01.20</div>
                <div className="news-text-tit">
                  <p>HB저축은행</p>
                  <p> NPL 채권관리시스템 구축</p>
                  <div className="news-text-cont">
                    <p>
                      NPL채권관리를 전산화 하여 최소한의 인력으로 최대 효율을 낼
                      수 있도록 시스템을 구축합니다.
                    </p>
                  </div>
                  <div className="news-text-num">06</div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <input
          className="slider-range-2"
          onChange={(e) => sliderRef.current.slickGoTo(e.target.value)}
          value={slideIndex}
          type="range"
          min={0}
          max={5}
        />
      </div>
    </div>
  );
}

export default HomeNewsCarousel;
