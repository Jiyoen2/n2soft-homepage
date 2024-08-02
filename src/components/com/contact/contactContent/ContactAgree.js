import React, { useState } from "react";
import CheckGrImg from "../../../images/check-circle-Gr.png";
import CheckRdImg from "../../../images/check-circle-Rd.png";

const ContactAgree = ({ onAgreeChange, isChecked }) => {
  // isChecked를 props로 받음
  const handleClick = () => {
    const newState = !isChecked;
    onAgreeChange(newState);
  };

  return (
    <div>
      <div>
        <span className="contactus-tit-4">
          개인정보 수집 및 이용 동의
          <span className="contactus-st"> *</span>
        </span>
        <div className="contactus-agree">
          <div className="agree-cont">
            <p>1. 목적 : 제안/문의사항 따른 연락처 정보 확인</p>
            <p>2. 항목 : 이름, 회사명, 연락처, 이메일</p>
            <p>
              3. 보유기간 : 제휴 제안 사항 삼담서비스를 위해 검토 완료 후 3개월
              간 보관하며, 이후 해당 덩보를 지체없이 파기합니다.
            </p>
          </div>
          <span>
            위 정보 수집에 대한 동의를 거부할 권리가, 있으며, 동의 거부시에는
            문의 접수가 제한될 수 있습니다.
          </span>
        </div>
        <div className="contactus-check" onClick={handleClick}>
          <img
            src={isChecked ? CheckRdImg : CheckGrImg}
            alt={isChecked ? "빨간 체크" : "회색 체크"}
            className="check-circle-Gr"
          />
          <p>개인정보 수집 및 이용에 동의합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactAgree;
