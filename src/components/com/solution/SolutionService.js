import React from "react";
import SolutionRight from "./SolutionService/SolutionRight";
import SolutionLeft from "./SolutionService/SolutionLeft";
import SoluImg01 from "../../../assets/images/solution_01.png";
import SoluImg02 from "../../../assets/images/solution_02.png";
import SoluImg03 from "../../../assets/images/solution_03.png";
import SoluImg04 from "../../../assets/images/solution_04.png";
import ArrRightRd from "../../../assets/images/arr_right_red.png";

const data = [
  {
    // num: "01.",
    title: "통합여신관리 시스템",
    content:
      "금융기관 마다 필수로 사용 되어지는 채권관리를 중심으로 하여 다양한 금융상품들을 관리하고 업무를 편리하게 하는 시스템",
    image: SoluImg01,
    layout: "text-left", // 왼쪽에 텍스트, 오른쪽에 이미지
  },
  {
    // num: "02.",
    title: "QUPID 서비스",
    golink: (
      <>
        <a
          href="https://www.qupid.co.kr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            큐피드 서비스
            <span>&nbsp;바로가기</span>
            <img
              src={ArrRightRd}
              alt="오른쪽 화살표"
              className="arr-right-red"
              style={{ width: "40px", height: "40px" }}
            />
          </p>
        </a>
      </>
    ),
    content:
      "고객들에게 발송하는 문서를 전자우편 전자문서의형태로 발송하고 배달이력을 전산화하여관리하는 서비스",
    image: SoluImg02,
    layout: "text-right", // 왼쪽에 이미지, 오른쪽에 텍스트
  },
  {
    // num: "03.",
    title: "가상 FAX 시스템",
    content:
      "상담사별 혹은 고객별 가상 FAX번호를 부여하여 FAX 업무 진행시 효율성을 높일 수 있는 서비스",
    image: SoluImg03,
    layout: "text-left",
  },
  {
    // num: "04.",
    title: "MO 서비스",
    content:
      "문자내용 및 이미지를 전산으로 받아 고객 원장에 바로 등록되어 업무 편의성을 향상시키는 서비스",
    image: SoluImg04,
    layout: "text-right",
  },
];

const SolutionService = () => {
  return (
    <div className="solu-main">
      <div className="solu-feature">
        <div className="solu-rect-com">
          {data.map((solu, i) => (
            <div key={i} className={`solu-rect ${solu.layout}`}>
              {solu.layout === "text-left" ? (
                <SolutionLeft
                  title={solu.title}
                  content={solu.content}
                  // num={solu.num}
                  image={solu.image}
                />
              ) : (
                <SolutionRight
                  title={solu.title}
                  content={solu.content}
                  golink={solu.golink}
                  // num={solu.num}
                  image={solu.image}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionService;
