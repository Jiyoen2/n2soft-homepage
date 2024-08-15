import React from "react";

const CompanyTwo = ({ date, items }) => (
  <div className="company-com-2">
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

export default CompanyTwo;
