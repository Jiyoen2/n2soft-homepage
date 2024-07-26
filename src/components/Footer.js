import "../components/css/Footer.css";
import N2softLogoImage from "./images/n2soft-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <img src={N2softLogoImage} alt="N2soft 로고" className="logo-image" />
        <p>©COPYRIGHT 2023 n2soft.co.kr. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
