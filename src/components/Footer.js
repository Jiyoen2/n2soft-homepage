import "../components/css/Footer.css";
import N2softLogoWhImg from "../assets/images/N2SOFTlogo-Wh.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <img
          src={N2softLogoWhImg}
          alt="N2soft 흰로고"
          className="foot-logo-image"
        />
        <p>(주) 엔투소프트 | 대표이사 김성훈 </p>
        <p>경기 성남시 중원구 갈마치로 288번길 14 SKV1타워 A동 728~730호</p>
        <p>TEL:1877-1977 | FAX:070-8677-4240 | MAIL:hbchoi@n2soft.co.kr</p>
        <p>©COPYRIGHT 2024 n2soft.co.kr. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
