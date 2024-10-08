import React, { useRef, useState, useEffect } from "react";
import CompanyGoalList from "../companyIntro/companyGoal/CompanyGoalList";
import IcoCompany01 from "../../../../assets/images/ico_company_01.png";
import IcoCompany02 from "../../../../assets/images/ico_company_02.png";
import IcoCompany03 from "../../../../assets/images/ico_company_03.png";
import IcoCompany04 from "../../../../assets/images/ico_company_04.png";

const data = [
  {
    sub: (
      <div className="ico-com">
        <img
          src={IcoCompany01}
          alt="Experience"
          className="ico-company"
          style={{ width: "48px", height: "48px", marginRight: "20px" }}
        />
        Experience
      </div>
    ),
    title: <div>시스템 구축</div>,
    content: (
      <div>
        <div>- 30곳 가까운 저축은행 여신관리시스템 구축경험</div>
        <div>- 현업에서 꼭 필요로 하는 금융IT솔루션 제공</div>
        <div>- 채널계 모바일 WEB, APP 개발 경험</div>
        <div>- 유동기관 연동 경험 다수</div>
      </div>
    ),
  },
  {
    sub: (
      <div className="ico-com">
        <img
          src={IcoCompany02}
          alt="Understand"
          className="ico-company"
          style={{ width: "48px", height: "48px", marginRight: "20px" }}
        />
        Understand
      </div>
    ),
    title: <div>업무 이해도</div>,
    content: (
      <div>
        <div>- 금융업무만을 전문으로 20년간 쌓인 노하우</div>
        <div>- 현업과 고객의 입장에서 제공하는 금융솔루션</div>
        <div>- 여신관리시스템부터 자체 솔루션까지 맞춤 금융시스템 제공</div>
      </div>
    ),
  },
];

const data1 = [
  {
    sub: (
      <div className="ico-com">
        <img
          src={IcoCompany03}
          alt="Organization"
          className="ico-company"
          style={{ width: "48px", height: "48px", marginRight: "20px" }}
        />
        Organization
      </div>
    ),
    title: <div>전문 인력 및 조직</div>,
    content: (
      <div>
        <div>- 금융권 구축경험이 있는 인재를 위주로 조직구성</div>
        <div>- 채널 UI/UX 경험이 풍부한 전문가 보유</div>
        <div>- 금융 전문 개발자 양성을 위한 교육 프로그램 진행</div>
      </div>
    ),
  },
  {
    sub: (
      <div className="ico-com">
        <img
          src={IcoCompany04}
          alt="Technology"
          className="ico-company"
          style={{ width: "48px", height: "48px", marginRight: "20px" }}
        />
        Technology
      </div>
    ),
    title: <div>운영 및 기술</div>,
    content: (
      <div>
        <div>- 기획 단계부터 개발 후 관리까지 경험적 만족도 제공</div>
        <div>- ISO27001인증을 통한 개인정보 보안 이슈 확립</div>
        <div>- 금융기관을 기준으로 하는 표준 개발 가이드라인 준수</div>
      </div>
    ),
  },
];

const CompanyGoal = () => {
  return (
    <div className="goal-main">
      <div className="goal-tit-1">
        <h1>
          경험적·이해도·조직적·기술적 4개의 목표 바탕
          <span>으로</span>
        </h1>
        <p>고객사의 사업 목표를 성공적으로 수행합니다.</p>
      </div>
      <div className="slide-up">
        <div className="goal-rec-com">
          {data.map((Goal, i) => (
            <GoalItem key={i} {...Goal} />
          ))}
        </div>
        <div className="goal-rec-com">
          {data1.map((Goal, i) => (
            <GoalItem key={i} {...Goal} />
          ))}
        </div>
      </div>
    </div>
  );
};

// 애니메이션 적용
const GoalItem = ({ sub, title, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom >= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false); // 요소가 뷰포트에서 벗어나면 애니메이션을 다시 시작하도록 설정
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 렌더링 시 체크

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className={`goal-rec ${isVisible ? "animate" : ""}`}>
      <CompanyGoalList sub={sub} title={title} content={content} />
    </div>
  );
};

export default CompanyGoal;
