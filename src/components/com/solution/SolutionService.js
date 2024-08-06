import React from "react";
import SolutionList from "./SolutionService/SolutionList";
import SolutionImage from "./SolutionService/SolutionImage";
import SoluImg01 from "../../../assets/images/solution01.png";
import SoluImg02 from "../../../assets/images/solution02.png";
import SoluImg03 from "../../../assets/images/solution03.png";
import SoluImg04 from "../../../assets/images/solution04.png";

const data = [
  {
    title: (
      <>
        <p>통합여신관리 시스템</p>
      </>
    ),
    content: (
      <>
        <p>
          금융기관 마다 필수로 사용 되어지는 채권관리를 중심으로 하여 다양한
          금융상품들을 관리하고 업무를 편리하게 하는 시스템
        </p>
      </>
    ),
    num: "01.",
    image: SoluImg01,
  },
  {
    title: (
      <>
        <p>QUPID 서비스</p>
      </>
    ),
    content: (
      <>
        <p>
          고객들에게 발송하는 문서를 전자우편 전자문서의형태로 발송하고
          배달이력을 전산화하여관리하는 서비스
        </p>
      </>
    ),
    num: "02.",
    image: SoluImg02,
  },
  {
    title: (
      <>
        <p>가상 FAX 시스템</p>
      </>
    ),
    content: (
      <>
        <p>
          상담사별 혹은 고객별 가상 FAX번호를 부여하여 FAX 업무 진행시 효율성을
          높일 수 있는 서비스
        </p>
      </>
    ),
    num: "03.",
    image: SoluImg03,
  },
  {
    title: (
      <>
        <p>MO 서비스</p>
      </>
    ),
    content: (
      <>
        <p>
          문자내용 및 이미지를 전산으로 받아 고객 원장에 바로 등록되어 업무
          편의성을 향상시키는 서비스
        </p>
      </>
    ),
    num: "04.",
    image: SoluImg04,
  },
];

const SolutionService = () => {
  return (
    <div className="solu-main">
      <div className="solu-feature">
        <div className="solu-rect-com">
          {data.map((solu, i) => (
            <div key={i} className="solu-rect">
              <SolutionList
                title={solu.title}
                content={solu.content}
                num={solu.num}
              />
              <SolutionImage image={solu.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionService;
