import React, { useState } from "react";
import CompanyFeature from "./homeContent/CompanyFeature";
import SolutionImage1 from "./../../images/solution01.jpg";
import SolutionImage2 from "./../../images/solution02.jpg";
import SolutionImage3 from "./../../images/solution03.jpg";
import Chevronleft from "./../../images/chevron-left.png";
import ChevronRight from "./../../images/chevron-right.png";

const data = [
  {
    title: "통합여신관리 시스템",
    content: (
      <>
        <p>금융기관 마다 필수로 사용 되어지는 채권관리를 중심으로 하여</p>
        <p>다양한 금융상품들을 관리하고 업무를 편리하게 하는 시스템</p>
      </>
    ),
    image: SolutionImage1,
  },
  {
    title: "QUPID 서비스",
    content: (
      <>
        <p>고객들에게 발송하는 문서를 전자우편과 전자문서의 형태로</p>
        <p>발송하고 배달이력을 전산화하여 관리하는 서비스</p>
      </>
    ),
    image: SolutionImage2,
  },
  {
    title: "MO 서비스",
    content: (
      <>
        <p>금융기관 마다 필수로 사용 되어지는 채권관리를 중심으로 하여</p>
        <p>다양한 금융상품들을 관리하고 업무를 편리하게 하는 시스템</p>
      </>
    ),
    image: SolutionImage1,
  },
];

const HomeContents = () => {
  const [position, setPosition] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const slideWidth = 200;
  const slideCount = data.length;
  const maxSlides = 2;
  const maxPosition = 0;
  const minPosition = -(slideWidth * (slideCount - 1));

  const getStickPosition = () => {
    const maxClicks = 3;
    const stepSize = 300 / maxClicks;
    return clickCount * stepSize;
  };

  const handlePrevClick = () => {
    setClickCount((prevCount) => {
      const newCount = Math.max(prevCount - 1, 0);
      setPosition((prevPosition) =>
        Math.min(prevPosition + slideWidth, maxPosition)
      );
      return newCount;
    });
  };

  const handleNextClick = () => {
    setClickCount((prevCount) => {
      const newCount = Math.min(prevCount + 1, maxSlides);
      setPosition((prevPosition) =>
        Math.max(prevPosition - slideWidth, minPosition)
      );
      return newCount;
    });
  };

  return (
    <div className="contents-main">
      <div className="container">
        <div className="title-one">
          <h2>
            <span>OUR </span>
            SERVICE
          </h2>
          <p>엔투소프트는 고객사와 함께 성장할 수 있도록 노력하겠습니다.</p>
        </div>
        <div className="chevron">
          <img
            src={Chevronleft}
            alt="왼쪽 화살표"
            className="chevron-left"
            onClick={handlePrevClick}
            style={{ marginRight: "24px" }}
          />
          <img
            src={ChevronRight}
            alt="오른쪽 화살표"
            className="chevron-right"
            onClick={handleNextClick}
          />
        </div>
      </div>
      <div
        className="company-feature-com"
        style={{ transform: `translateX(${position}px)` }}
      >
        {data.map((content, i) => (
          <CompanyFeature
            key={i}
            title={content.title}
            content={content.content}
            image={content.image}
          />
        ))}
      </div>
      <div className="stick-com">
        <div
          className="stick-red"
          style={{ transform: `translateX(${getStickPosition()}%)` }}
        ></div>
        <div className="stick-gray"></div>
      </div>
    </div>
  );
};

export default HomeContents;
