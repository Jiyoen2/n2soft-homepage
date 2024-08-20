import React from "react";
import SolutionList from "./SolutionList";
import SolutionImage from "./SolutionImage";

const SolutionRight = ({ title, content, golink, image }) => {
  return (
    <>
      <div className="solu-img-R">
        <SolutionImage image={image} />
      </div>
      <div className="solu-text-R">
        <SolutionList
          // num={num}
          title={title}
          content={content}
          golink={golink}
        />
      </div>
    </>
  );
};

export default SolutionRight;
