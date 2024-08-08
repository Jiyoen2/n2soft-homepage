import React, { useState } from "react";

const NoticeNewsList = ({ title, content, date, num }) => {
  return (
    <div>
      <div className="noti-text-date">{date}</div>
      <div className="noti-text-tit">{title}</div>
      <div className="noti-text-cont">{content}</div>
      <div className="noti-text-num">{num}</div>
    </div>
  );
};

export default NoticeNewsList;
