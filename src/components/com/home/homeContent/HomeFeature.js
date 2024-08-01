import React from "react";

const HomeFeature = ({ title, content, image }) => {
  return (
    <div className="contents-feature">
      <img src={image} alt="회사 특징 이미지" />
      <h2>{title}</h2>
      <div className="contents-text">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default HomeFeature;
