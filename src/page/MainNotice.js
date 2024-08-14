import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../components/css/Common.css";
import "../components/css/Layout.css";
import NoticeTop from "../components/com/notice/NoticeTop";
import NoticeNews from "../components/com/notice/NoticeNews";

const MainNotice = () => {
  const [activeTab, setActiveTab] = useState("notice");

  const renderContent = () => {
    // switch (activeTab) {
    //   case "contact":
    //     return <ContactTop />;
    //   default:
    //     return null;
    // }
  };

  return (
    <div className="main">
      <NoticeTop setActiveTab={setActiveTab} activeTab={activeTab} />
      {renderContent()}
      <NoticeNews />
      <Footer />
    </div>
  );
};

export default MainNotice;
