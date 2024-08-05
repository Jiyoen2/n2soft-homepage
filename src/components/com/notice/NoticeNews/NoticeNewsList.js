import React, { useState } from "react";

const NoticeNewsList = ({ title, content, date, num }) => {
  return (
    <div className="news-text">
      <p className="news-text-date">{date}</p>
      <p className="news-text-tit">{title}</p>
      <p className="news-text-cont">{content}</p>
      <p className="news-text-num">{num}</p>
    </div>
  );
};

export default NoticeNewsList;
