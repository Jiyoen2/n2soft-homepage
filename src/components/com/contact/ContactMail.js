import React, { useRef, useState } from "react";
import ContactAgree from "../contact/contactContent/ContactAgree";
import emailjs from "@emailjs/browser";

export const ContactMail = () => {
  const form = useRef();
  const [isAgreed, setIsAgreed] = useState(false); // 동의 상태를 관리

  const handleAgreeChange = (status) => {
    setIsAgreed(status);
  };

  const resetAgree = () => {
    setIsAgreed(false); // 동의 상태를 초기화
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // 필수 입력 체크
    const formData = new FormData(form.current);
    const fromName = formData.get("from_name");
    const fromCompany = formData.get("from_company");
    const fromEmail = formData.get("from_email");
    const fromPhone = formData.get("from_phone");
    const Message = formData.get("message");

    if (!fromName) {
      alert("이름을 입력해주세요.");
      return;
    }

    if (!fromCompany) {
      alert("회사명을 입력해주세요.");
      return;
    }

    if (!fromEmail) {
      alert("이메일을 입력해주세요.");
      return;
    }

    if (!fromPhone) {
      alert("연락처을 입력해주세요.");
      return;
    }

    if (!Message) {
      alert("내용을 입력해주세요.");
      return;
    }

    if (!isAgreed) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    emailjs
      .sendForm("service_lp3u7s7", "template_ggtv6u7", form.current, {
        publicKey: "rQiYEvghBWH2KfgiP",
      })
      .then(
        () => {
          alert("제출이 완료되었습니다.");
          form.current.reset();
          resetAgree();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="contactus-main">
        <div className="contactus-tit">
          <h1>문의내용</h1>
          <span className="contactus-tit-2">
            <span className="contactus-st">* </span>
            필수입력사항
          </span>
        </div>
        <div className="contactus-con">
          <div>
            <span className="contactus-tit-3">
              이름
              <span className="contactus-st"> *</span>
            </span>
            <input
              className="contactus-box"
              type="text"
              name="from_name"
              placeholder="홍길동"
            />
          </div>
          <div>
            <span className="contactus-tit-3">
              회사명
              <span className="contactus-st"> *</span>
            </span>
            <input
              className="contactus-box"
              type="text"
              name="from_company"
              placeholder="엔투소프트"
            />
          </div>
          <div>
            <span className="contactus-tit-3">
              이메일
              <span className="contactus-st"> *</span>
            </span>
            <input
              className="contactus-box"
              type="email"
              name="from_email"
              placeholder="example@n2soft.co.kr"
            />
          </div>
          <div>
            <span className="contactus-tit-3">
              연락처
              <span className="contactus-st"> *</span>
            </span>
            <input
              className="contactus-box"
              type="tel"
              name="from_phone"
              placeholder="010-0123-4567"
            />
          </div>
          <div>
            <span className="contactus-tit-3">
              내용
              <span className="contactus-st"> *</span>
            </span>
            <textarea
              className="contactus-text"
              name="message"
              placeholder="문의할 내용을 입력해 주세요."
            />
          </div>
        </div>
        <ContactAgree onAgreeChange={handleAgreeChange} isChecked={isAgreed} />{" "}
        {/* 동의 상태를 전달 */}
        <div className="contactus-button">
          <input className="button-sub" type="submit" value="제출" />
        </div>
      </div>
    </form>
  );
};
