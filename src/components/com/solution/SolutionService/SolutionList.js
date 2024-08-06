import React from "react";

const SolutionList = ({ num, title, content, golink }) => {
  return (
    <div className="solu-text">
      <p className="solu-text-num">{num}</p>
      <p className="solu-text-tit">{title}</p>
      <p className="solu-text-cont">{content}</p>
      <p className="solu-text-link">{golink}</p>
    </div>
  );
};

export default SolutionList;
