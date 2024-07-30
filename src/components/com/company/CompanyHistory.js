import React from "react";

const TimelineItem = ({ date, items }) => (
  <div className="company-com">
    <div class="line-dot-1"></div>
    <p>{date}</p>
    {items.map((item, index) => (
      <div className="company-s" key={index}>
        <span
          className={`company-num ${item.isInside ? "company-num-inside" : ""}`}
        >
          {item.num}
        </span>
        <span
          className={`company-text ${
            item.isInside ? "company-text-inside" : ""
          }`}
          style={{ whiteSpace: "pre-wrap" }}
        >
          {item.text}
        </span>
      </div>
    ))}
  </div>
);

const TimelineItem2 = ({ date, items }) => (
  <div className="company-com">
    <div class="line-dot-2"></div>
    <p>{date}</p>
    {items.map((item, index) => (
      <div className="company-s" key={index}>
        <span
          className={`company-num ${item.isInside ? "company-num-inside" : ""}`}
        >
          {item.num}
        </span>
        <span
          className={`company-text ${
            item.isInside ? "company-text-inside" : ""
          }`}
          style={{ whiteSpace: "pre-wrap" }}
        >
          {item.text}
        </span>
      </div>
    ))}
  </div>
);

const CompanyHistory = () => {
  const historyData = [
    {
      date: "2024",
      items: [
        {
          num: "05.",
          text: "스마트저축은행 여신관리시스템 고도화 프로젝트 수주",
        },
        {
          num: "04.",
          text: "상상인플러스저축은행 통합 여신관리시스템 개발 수주",
        },
        { num: "03.", text: "IBK저축은행 모바일APP 고도화 개발" },
        { num: "02.", text: "HB저축은행 NPL채권관리시스템 구축" },
        {
          text: "진주저축은행 햇살론 특례보증상품 중앙회 모바일웹 연동개발",
          isInside: true,
        },
      ],
    },
    {
      date: "2022",
      items: [
        {
          num: "11.",
          text: "한화저축은행 디지털플랫폼 및 여신관리시스템 구축",
        },
        { num: "05.", text: "동원제일저축은행 스마트뱅킹 모바일 APP 구축" },
        { text: "진주저축은행 스마트뱅킹 모바일 APP 구축", isInside: true },
        { num: "02.", text: "고용노동부 청년친화강소기업 선정" },
        { num: "01.", text: "DB저축은행 여신관리시스템 구축" },
        {
          text: "모아저축은행 디지털채널고도화 모바일 APP 구축",
          isInside: true,
        },
      ],
    },
    {
      date: "2020",
      items: [
        {
          num: "06.",
          text: "2020기술역량 우수기업 인증서 획득\n        (우수기술:저축은행 통합여신관리시스템 개발 기술)",
        },
        {
          num: "05.",
          text: "상상인플러스저축은행 통합 여신관리시스템 개발 수주",
        },
        { num: "01.", text: "IBK저축은행 모바일APP 고도화 개발" },
      ],
    },
    {
      date: "2018",
      items: [
        {
          num: "11.",
          text: "IBK저축은행 모바일앱 구축",
        },
        {
          text: "세람저축은행 통합여신관리시스템 구축",
          isInside: true,
        },
        {
          text: "한화저축은행 중도금대출시스템 구축",
          isInside: true,
        },
        {
          text: "한국투자저축은행 MIS 시스템 구축",
          isInside: true,
        },
      ],
    },
    {
      date: "2014",
      items: [
        {
          num: "11.",
          text: "가상팩스 이미지보안솔루션 특허등록",
        },
      ],
    },
    {
      date: "2012",
      items: [
        {
          num: "03.",
          text: "벤처기업 등록",
        },
      ],
    },
    {
      date: "2005",
      items: [
        {
          num: "05.",
          text: "주식회사엔투소프트 설립",
        },
        {
          text: "통합여신관리시스템(nTree) Ver 1.0 개발\n        (스타, 예가람, 모아, 고려저축은행 등 공급)",
          isInside: true,
        },
      ],
    },
  ];

  const historyData2 = [
    {
      date: "2023",
      items: [
        {
          num: "11.",
          text: "스마트저축은행 여신관리시스템 고도화 프로젝트 수주 ",
        },
        {
          num: "07.",
          text: "상상인플러스저축은행 통합 여신관리시스템 개발 수주",
        },
        { num: "06.", text: "IBK저축은행 모바일APP 고도화 개발" },
        { num: "01.", text: "HB저축은행 NPL채권관리시스템 구축" },
        {
          text: "진주저축은행 햇살론 특례보증상품 중앙회 모바일웹 연동개발",
          isInside: true,
        },
      ],
    },
    {
      date: "2021",
      items: [
        {
          num: "10.",
          text: "BNK저축은행 소비자금융시스템 고도화 구축",
        },
        {
          text: "진주저축은행, 고려저축은행 여신관리시스템 구축",
          isInside: true,
        },
        {
          num: "01.",
          text: "ES저축은행 여신관리시스템 고도화 사업 및 모바일 APP 구축",
        },
        {
          text: "인성저축은행 여신관리시스템 고도화 사업 및 모바일 APP 구축",
          isInside: true,
        },
      ],
    },
    {
      date: "2019",
      items: [
        {
          num: "10.",
          text: "The-K저축은행 정보통합관리시스템(MIS) 구축 ",
        },
        {
          num: "05.",
          text: "한국투자저축은행 여신시스템통합 구축",
        },
      ],
    },
    {
      date: "2017",
      items: [
        {
          num: "11.",
          text: "nTree.Works 공급\n        (IBK, 한국투자, 모아, 유진, 머스트삼일, 융창저축은행 등 공급)",
        },
      ],
    },
    {
      date: "2013",
      items: [
        {
          num: "12.",
          text: "한국산업기술진흥협회 회원 등록",
        },
        {
          text: "연구전담부서 설립",
          isInside: true,
        },
      ],
    },
    {
      date: "2009",
      items: [
        {
          num: "12.",
          text: "통합여신관리시스템(nTree) Ver 2.0 개발\n        (한국투자, 모아, 현대, 예가람, 고려, IBK, NH농협, BNK, MS, 신한,\n        조은, 동원제일 저축은행 등 공급)",
        },
      ],
    },
  ];

  return (
    <div className="company-main">
      <div className="company-content">
        <div className="timeline-container">
          <div className="timeline-items">
            <div className="company-title">
              <h1>연혁</h1>
            </div>
            {historyData.map((data, index) => (
              <TimelineItem key={index} date={data.date} items={data.items} />
            ))}
          </div>
          <div className="line-long">
            <div className="Ellipse-1"></div>
            <div className="Ellipse-2"></div>
            <div className="Ellipse-3"></div>
            <div className="Ellipse-4"></div>
            <div className="Ellipse-5"></div>
            <div className="Ellipse-6"></div>
            <div className="Ellipse-7"></div>
            <div className="Ellipse-8"></div>
            <div className="Ellipse-9"></div>
            <div className="Ellipse-10"></div>
            <div className="Ellipse-11"></div>
            <div className="Ellipse-12"></div>
            <div className="Ellipse-13"></div>
          </div>
          <div className="timeline-items2">
            {historyData2.map((data, index) => (
              <TimelineItem2 key={index} date={data.date} items={data.items} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;
