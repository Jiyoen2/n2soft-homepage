import React, { useRef } from "react";
import HomeNewsList from "./homeNews/HomeNewsList";
import ArrRight from "../../../assets/images/arr_right.png";
import ArrLeft from "../../../assets/images/arr_left.png";

const data = [
  {
    title: (
      <>
        <p>스마트저축은행</p>
        <p>여신관리시스템 고도화</p>
        <p>프로젝트 수주</p>
      </>
    ),
    content: (
      <>
        <p>
          사용자에 최적화된 화면 제공과 엔투소프트의 기술력이 더하여 소비자
          채권관리 시스템의 High-end 버전을 목표로 합니다.
        </p>
      </>
    ),
    date: "2024.05.17",
    num: "01",
  },
  {
    title: (
      <>
        <p>상상인플러스저축은행</p>
        <p> 통합여신관리 시스템</p>
        <p> 개발 수주</p>
      </>
    ),
    content: (
      <>
        <p>
          통합여신관리시스템을 n.Tree솔루션으로 전환하여 소비자 채권관리에
          업무효율성 향상을 목표로 합니다.
        </p>
      </>
    ),
    date: "2024.04.25",
    num: "02",
  },
  {
    title: (
      <>
        <p>HB저축은행</p>
        <p> NPL 채권관리시스템 구축</p>
      </>
    ),
    content: (
      <>
        <p>
          NPL채권관리를 전산화 하여 최소한의 인력으로 최대 효율을 낼 수 있도록
          시스템을 구축합니다.
        </p>
      </>
    ),
    date: "2024.04.13",
    num: "03",
  },
  {
    title: (
      <>
        <p>HB저축은행</p>
        <p> NPL 채권관리시스템 구축</p>
      </>
    ),
    content: (
      <>
        <p>
          NPL채권관리를 전산화 하여 최소한의 인력으로 최대 효율을 낼 수 있도록
          시스템을 구축합니다.
        </p>
      </>
    ),
    date: "2024.03.17",
    num: "04",
  },
  {
    title: (
      <>
        <p>HB저축은행</p>
        <p> NPL 채권관리시스템 구축</p>
      </>
    ),
    content: (
      <>
        <p>
          NPL채권관리를 전산화 하여 최소한의 인력으로 최대 효율을 낼 수 있도록
          시스템을 구축합니다.
        </p>
      </>
    ),
    date: "2024.02.15",
    num: "05",
  },
  {
    title: (
      <>
        <p>HB저축은행</p>
        <p> NPL 채권관리시스템 구축</p>
      </>
    ),
    content: (
      <>
        <p>
          NPL채권관리를 전산화 하여 최소한의 인력으로 최대 효율을 낼 수 있도록
          시스템을 구축합니다.
        </p>
      </>
    ),
    date: "2024.01.20",
    num: "06",
  },
];

const HomeNews = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.offsetWidth / 2, // 한 번에 화면의 절반 너비만큼 스크롤
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.offsetWidth / 2, // 한 번에 화면의 절반 너비만큼 스크롤
        behavior: "smooth",
      });
    }
  };

  return (
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
              onClick={scrollLeft}
            />
            <img
              src={ArrRight}
              alt="더보기"
              className="newsArrRight"
              onClick={scrollRight}
            />
          </div>
        </div>
        <div className="rectangle-com" ref={containerRef}>
          {data.map((News, i) => (
            <div key={i} className="rectangle">
              <HomeNewsList
                date={News.date}
                title={News.title}
                content={News.content}
                num={News.num}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="news-stick-com">
        <div className="news-stick-gr">
          <div className="news-stick-rd"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
