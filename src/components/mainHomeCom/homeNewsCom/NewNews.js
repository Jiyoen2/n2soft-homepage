import React, { useState } from "react";

const NewNews = ({ title, content, date }) => {
  return (
    <div className="news-text">
      <p style={{ fontSize: "20px", color: "#da1c3e", fontWeight: "500" }}>
        {date}
      </p>
      <p style={{ fontSize: "32px", fontWeight: "bold" }}>{title}</p>
      <p style={{ fontSize: "20px", fontWeight: "300", paddingTop: "48px" }}>
        {content}
      </p>
    </div>
  );
};

export default NewNews;
