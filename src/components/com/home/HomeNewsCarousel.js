import React, { useState, useRef } from "react";
import Slider from "react-slick";
import ArrRight from "../../../assets/images/arr_right.png";
import ArrLeft from "../../../assets/images/arr_left.png";

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
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const slides = [
    {
      date: "2024.05.17",
      title: "스마트저축은행 여신관리시스템 고도화 프로젝트 수주",
      content:
        "사용자에 최적화된 화면 제공과 엔투소프트의 기술력이 더하여 소비자 채권관리 시스템의 High-end 버전을 목표로 합니다.",
      num: "01",
    },
    {
      date: "2024.04.25",
      title: "상상인플러스저축은행 통합여신관리 시스템 개발 수주",
      content:
        "통합여신관리시스템을 n.Tree솔루션으로 전환하여 소비자 채권관리에 업무효율성 향상을 목표로 합니다.",
      num: "02",
    },
    {
      date: "2024.04.13",
      title: "HB저축은행 NPL 채권관리시스템 구축",
      content:
        "NPL채권관리를 전산화 하여 최소한의 인력으로 최대 효율을 낼 수 있도록 시스템을 구축합니다.",
      num: "03",
    },
    {
      date: "2024.03.17",
      title: "HB저축은행 NPL 채권관리시스템 구축",
      content:
        "NPL채권관리를 전산화 하여 최소한의 인력으로 최대 효율을 낼 수 있도록 시스템을 구축합니다.",
      num: "04",
    },
    {
      date: "2024.02.15",
      title: "HB저축은행 NPL 채권관리시스템 구축",
      content:
        "NPL채권관리를 전산화 하여 최소한의 인력으로 최대 효율을 낼 수 있도록 시스템을 구축합니다.",
      num: "05",
    },
    {
      date: "2024.01.20",
      title: "HB저축은행 NPL 채권관리시스템 구축",
      content:
        "NPL채권관리를 전산화 하여 최소한의 인력으로 최대 효율을 낼 수 있도록 시스템을 구축합니다.",
      num: "06",
    },
  ];

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
                alt="더보기"
                className="newsArrLeft"
                onClick={goToPrev}
              />
              <img
                src={ArrRight}
                alt="더보기"
                className="newsArrRight"
                onClick={goToNext}
              />
            </div>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {slides.map((item, index) => (
              <div
                key={index}
                className={`rectangle-com ${
                  slideIndex === index ? "first-slide" : "tilted-slide"
                }`}
              >
                <div className="rectangle">
                  <div className="news-text-date">{item.date}</div>
                  <div className="news-text-tit">
                    {item.title}
                    {/* <p>{item.title.split(" ")[0]}</p>
                    <p>{item.title.split(" ")[1]}</p>
                    <p>{item.title.split(" ")[2]}</p>
                    <p>{item.title.split(" ")[3]}</p> */}
                    <div className="news-text-cont">
                      <p>{item.content}</p>
                    </div>
                    <div className="news-text-num">{item.num}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <input
          className="slider-range-2"
          onChange={(e) => sliderRef.current.slickGoTo(e.target.value)}
          value={slideIndex}
          type="range"
          min={0}
          max={slides.length - 1}
        />
      </div>
    </div>
  );
}

export default HomeNewsCarousel;
