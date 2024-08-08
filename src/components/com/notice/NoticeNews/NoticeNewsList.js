import React, { useState } from "react";

const NoticeNewsList = ({ title, content, date, num }) => {
  return (
    <div className="news-text">
      <div className="news-text-date">{date}</div>
      <div className="news-text-tit">{title}</div>
      <div className="news-text-cont">{content}</div>
      <div className="news-text-num">{num}</div>
    </div>
  );
};

export default NoticeNewsList;
