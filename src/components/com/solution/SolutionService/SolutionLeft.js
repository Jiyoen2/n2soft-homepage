import React from "react";
import SolutionList from "./SolutionList";
import SolutionImage from "./SolutionImage";

const SolutionLeft = ({ title, content, image }) => {
  return (
    <>
      <div className="solu-text-L">
        <SolutionList title={title} content={content} />
      </div>
      <div className="solu-img-L">
        <SolutionImage image={image} />
      </div>
    </>
  );
};

export default SolutionLeft;
