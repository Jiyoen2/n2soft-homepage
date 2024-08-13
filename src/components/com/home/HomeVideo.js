import React from "react";
import heroVideo from "../../../assets/videos/hero_n2soft.mp4";

const HomeVideo = () => {
  return (
    <div className="video-main">
      <video autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <h1>최상의 서비스를 더하는</h1>
      <h1>금융시스템 솔루션 전문 IT기업</h1>
      <div className="video-stick"></div>
      <h2>저축은행 여신관리시스템 최다 고객사 보유 기업 엔투소프트</h2>
      <span class="scroll">scroll</span>
      <div class="video-stick-wh"></div>
    </div>
  );
};

export default HomeVideo;
