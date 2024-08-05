import React, { useRef } from "react";
import NoticeNewsList from "./NoticeNews/NoticeNewsList";

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
];

const data1 = [
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
  return (
    <div className="notice-main">
      <div className="notice-tit-1">
        <h1>
          <span>금융IT시장을 이끄는</span> 금융솔루션 전문기업
        </h1>
        <p>엔투소프트의 사업 근황과 최신 소식을 알려드립니다.</p>
      </div>
      <div className="notice-feature">
        <div className="notice-rect-1">
          {data.map((News, i) => (
            <div key={i} className="notice-rect">
              <NoticeNewsList
                date={News.date}
                title={News.title}
                content={News.content}
                num={News.num}
              />
            </div>
          ))}
        </div>
        <div className="notice-rect-2">
          {data1.map((News, i) => (
            <div key={i} className="notice-rect">
              <NoticeNewsList
                date={News.date}
                title={News.title}
                content={News.content}
                num={News.num}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
