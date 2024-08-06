import React from "react";
import "../../css/Common.css";
import "../../css/Layout.css";
import CompanyOverview from "./companyIntro/CompanyOverview";
import CompanyGoal from "./companyIntro/CompanyGoal";
import CompanyContact from "../company/companyIntro/CompanyContact";

const MainHome = () => {
  return (
    <div className="company-main">
      <div>
        <CompanyOverview />
      </div>
      <div>
        <CompanyGoal />
      </div>
      <div>
        <CompanyContact />
      </div>
    </div>
  );
};

export default MainHome;
