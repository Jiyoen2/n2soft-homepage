import React from "react";
import "../../css/Common.css";
import "../../css/Layout.css";
import CompanyOverview from "./companyIntro/CompanyOverview";
import CompanyGoal from "./companyIntro/CompanyGoal";
import CompanyContact from "../company/companyIntro/CompanyContact";

const MainHome = () => {
  return (
    <>
      <div className="company-main">
        <CompanyOverview />
      </div>
      <div className="goal-bg">
        <div className="company-main">
          <CompanyGoal />
        </div>
      </div>
      <div className="company-main">
        <CompanyContact />
      </div>
    </>
  );
};

export default MainHome;
