import React, { useRef } from "react";
import CompanyGoalList from "../companyIntro/companyGoal/CompanyGoalList";

const data = [
  {
    sub: "Experience",
    title: <p>시스템 구축</p>,
    content: (
      <>
        <p>- 30곳 가까운 저축은행 여신관리시스템 구축경험</p>
        <p>- 현업에서 꼭 필요로 하는 금융IT솔루션 제공</p>
        <p>- 채널계 모바일 WEB, APP 개발 경험</p>
        <p>- 유동기관 연동 경험 다수</p>
      </>
    ),
  },
  {
    sub: "Understand",
    title: <p>업무 이해도</p>,
    content: (
      <>
        <p>- 금융업무만을 전문으로 20년간 쌓인 노하우</p>
        <p>- 현업과 고객의 입장에서 제공하는 금융솔루션</p>
        <p>- 여신관리시스템부터 자체 솔루션까지 맞춤 금융시스템 제공</p>
      </>
    ),
  },
];

const data1 = [
  {
    sub: "Organization",
    title: <p>전문 인력 및 조직</p>,
    content: (
      <>
        <p>- 금융권 구축경험이 있는 인재를 위주로 조직구성</p>
        <p>- 채널 UI/UX 경험이 풍부한 전문가 보유</p>
        <p>- 금융 전문 개발자 양성을 위한 교육 프로그램 진행</p>
      </>
    ),
  },
  {
    sub: "Technology",
    title: <p>운영 및 기술</p>,
    content: (
      <>
        <p>- 기획 단계부터 개발 후 관리까지 경험적 만족도 제공</p>
        <p>- ISO27001인증을 통한 개인정보 보안 이슈 확립</p>
        <p>- 금융기관을 기준으로 하는 표준 개발 가이드라인 준수</p>
      </>
    ),
  },
];

const CompanyGoal = () => {
  return (
    <div className="goal-bg">
      <div className="goal-main">
        <div className="goal-tit-1">
          <h1>
            경험적·이해도·조직적·기술적 4개의 목표 바탕
            <span>으로</span>
          </h1>
          <p>고객사의 사업 목표를 성공적으로 수행합니다.</p>
        </div>
        <div className="goal-Rec">
          {data.map((Goal, i) => (
            <div key={i} className="goal-rec">
              <CompanyGoalList
                sub={Goal.sub}
                title={Goal.title}
                content={Goal.content}
              />
            </div>
          ))}
        </div>
        <div className="goal-Rec">
          {data1.map((Goal, i) => (
            <div key={i} className="goal-rec">
              <CompanyGoalList
                sub={Goal.sub}
                title={Goal.title}
                content={Goal.content}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyGoal;
