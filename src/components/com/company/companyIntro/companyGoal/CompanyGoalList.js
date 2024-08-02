import React, { useState } from "react";

const CompanyGoalList = ({ title, content, sub }) => {
  return (
    <div className="goal-text">
      <p className="goal-text-sub">{sub}</p>
      <p className="goal-text-tit">{title}</p>
      <p className="goal-text-cont">{content}</p>
    </div>
  );
};

export default CompanyGoalList;
