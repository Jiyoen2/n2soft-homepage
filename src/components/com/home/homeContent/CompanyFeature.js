import React from "react";

const CompanyFeature = ({ title, content, image }) => {
  return (
    <div className="company-feature">
      <img src={image} alt="회사 특징 이미지" />
      <h2>{title}</h2>
      <div className="company-text">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CompanyFeature;
