import React from "react";

const SolutionList = ({ num, title, content, golink }) => {
  return (
    <div className="solu-text">
      <div className="solu-text-num">{num}</div>
      <div className="solu-text-tit">{title}</div>
      <div className="solu-text-cont">{content}</div>
      <div className="solu-text-link">{golink}</div>
    </div>
  );
};

export default SolutionList;
