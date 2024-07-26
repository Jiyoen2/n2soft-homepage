import React from "react";
import NewNews from "./homeNewsCom/NewNews";
import NewsPlus from "../images/plus.png";
import NumberImg01 from "../images/news-01.png";
import NumberImg02 from "../images/news-02.png";
import NumberImg03 from "../images/news-03.png";

const data = [
  {
    title: (
      <>
        <p>스마트저축은행</p>
        <p> 여신관리시스템 고도화</p>
        <p>프로젝트 수주</p>
      </>
    ),
    content: (
      <>
        <p>사용자에 최적화된 화면 제공과 엔투소프트</p>
        <p> 의 기술력을 더하여 소비자 채권관리 시스</p>
        <p> 템의 High-end 버전을 목표로 합니다.</p>
      </>
    ),
    date: "2024.05.17",
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
        <p>통합여신관리시스템을 n.Tree 솔루션으로</p>
        <p> 전환하여 소비자 채권관리에 업무효율성 향</p>
        <p> 상을 목표로 합니다.</p>
      </>
    ),
    date: "2024.04.25",
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
        <p>NPL채권관리를 전산화 하여 최소한의 인력</p>
        <p>으로 최대 효율을 낼 수 있도록 시스템을 구</p>
        <p>축합니다.</p>
      </>
    ),
    date: "2024.04.13",
  },
];

const HomeNews = () => {
  return (
    <div className="news-feature">
      <div className="container">
        <div className="title-one" style={{ padding: "0px 0px 0px 120px" }}>
          <h2>
            <span>N2SOFT </span>
            NEWS
          </h2>
          <p>엔투소프트의 최근 새로운 소식입니다.</p>
        </div>
        <div className="plus">
          <img src={NewsPlus} alt="더보기" className="newsPlusImg" />
        </div>
      </div>
      {/* <div className="container"> */}
      <div className="num-com">
        <img src={NumberImg01} alt="순번01" className="numberImg01" />
        <div class="stick-line01"></div>
        <img src={NumberImg02} alt="순번02" className="numberImg02" />
        <div class="stick-line02"></div>
        <img src={NumberImg03} alt="순번03" className="numberImg03" />
      </div>
      <div className="rectangle-container">
        {data.map((News, i) => (
          <div key={i} className="rectangle">
            <NewNews
              date={News.date}
              title={News.title}
              content={News.content}
            />
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default HomeNews;
