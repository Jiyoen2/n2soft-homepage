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
        <p>©COPYRIGHT 2023 n2soft.co.kr. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
