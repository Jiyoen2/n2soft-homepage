import React from "react";

const CompanyContent = ({}) => {
  const TimelineItem = ({ date, items }) => (
    <div className="company-com">
      <div class="Line-31"></div>
      <p>{date}</p>
      {items.map((item, index) => (
        <div className="company-s" key={index}>
          <span
            className={`company-num ${item.isBold ? "company-num-bold" : ""}`}
          >
            {item.num}
          </span>
          <span
            className={`company-text ${item.isBold ? "company-text-bold" : ""}`}
          >
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );

  const TimelineItem2 = ({ date, items }) => (
    <div className="company-com">
      <div class="Line-32"></div>
      <p>{date}</p>
      {items.map((item, index) => (
        <div className="company-s" key={index}>
          <span
            className={`company-num ${item.isBold ? "company-num-bold" : ""}`}
          >
            {item.num}
          </span>
          <span
            className={`company-text ${item.isBold ? "company-text-bold" : ""}`}
          >
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CompanyContent;
