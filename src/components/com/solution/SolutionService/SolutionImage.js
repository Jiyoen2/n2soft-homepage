import React from "react";

const SolutionImage = ({ image }) => {
  return (
    <div className="solu-img-com">
      <img src={image} alt="Solution" className="solu-img" />
    </div>
  );
};

export default SolutionImage;
