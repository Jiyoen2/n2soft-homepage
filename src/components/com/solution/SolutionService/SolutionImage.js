import React from "react";

const SolutionImage = ({ image }) => {
  return (
    <div className="solu-text-img-com">
      <img src={image} alt="Solution" className="solu-text-img" />
    </div>
  );
};

export default SolutionImage;
