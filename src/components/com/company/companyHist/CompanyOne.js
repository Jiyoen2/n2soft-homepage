import React from "react";

const CompanyOne = ({ date, items, isNotLineDot }) => (
  <div className="company-com-1">
    {!isNotLineDot && <div className="line-dot-1"></div>}
    <p>{date}</p>
    {items.map((item, index) => (
      <div className="company-s" key={index}>
        <span
          className={`company-num ${item.isInside ? "company-num-inside" : ""}`}
        >
          {item.num}
        </span>
        <span
          className={`company-text ${
            item.isInside ? "company-text-inside" : ""
          }`}
          style={{ whiteSpace: "pre-wrap" }}
        >
          {item.text}
        </span>
      </div>
    ))}
  </div>
);

export default CompanyOne;
