import React, { useState } from "react";

const SolutionList = ({ title, content, image, num }) => {
  return (
    <div className="solu-text">
      <p className="solu-text-tit">{title}</p>
      <p className="solu-text-cont">{content}</p>
      <img src={image} alt="Solution" className="solu-text-img" />
      <p className="solu-text-num">{num}</p>
    </div>
  );
};

export default SolutionList;
