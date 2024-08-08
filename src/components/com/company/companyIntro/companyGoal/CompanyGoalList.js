import React, { useState } from "react";

const CompanyGoalList = ({ title, content, sub }) => {
  return (
    <div className="goal-text">
      <div className="goal-text-sub">{sub}</div>
      <div className="goal-text-tit">{title}</div>
      <div className="goal-text-cont">{content}</div>
    </div>
  );
};

export default CompanyGoalList;
