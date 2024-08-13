import React, { useRef, useState, useEffect } from "react";
import ContactAgree from "../contact/contactContent/ContactAgree";
import emailjs from "@emailjs/browser";

export const ContactMail = () => {
  const form = useRef();
  const contactMainRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgreeChange = (status) => {
    setIsAgreed(status);
  };

  const resetAgree = () => {
    setIsAgreed(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

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
      alert("연락처를 입력해주세요.");
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

  const handleScroll = () => {
    const rect = contactMainRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom >= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 렌더링 시 체크

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div
        ref={contactMainRef}
        className={`contactus-main ${isVisible ? "animate" : ""}`}
      >
        <div className="contactus-tit">
          <h1>문의내용</h1>
          <span className="contactus-tit-2">
            <span className="contactus-st">* </span>
            필수입력사항
          </span>
        </div>
        <div className="slide-up">
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
          <ContactAgree
            onAgreeChange={handleAgreeChange}
            isChecked={isAgreed}
          />
          <div className="contactus-button">
            <input className="button-sub" type="submit" value="제출" />
          </div>
        </div>
      </div>
    </form>
  );
};
