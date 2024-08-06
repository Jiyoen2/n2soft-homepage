import React from "react";

const SolutionDetail = ({ title, content, num }) => {
  return (
    <div className="solu-text">
      <div className="solu-text-tit">{title}</div>
      <div className="solu-text-cont">{content}</div>
      <div className="solu-text-num">{num}</div>
    </div>
  );
};

export default SolutionDetail;
