import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../components/css/Header.css";
import N2softLogoWhImg from "../assets/images/N2SOFTlogo-Wh.png";
import N2softLogoRdImg from "../assets/images/N2SOFTlogo-Rd.png";

const Header = () => {
  const [background, setBackground] = useState("rgba(0, 0, 0, 0)");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBackground("#FFFFFF");
    } else {
      setBackground("rgba(0, 0, 0, 0)");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className="header"
      style={{
        backgroundColor: background,
      }}
    >
      <div className="header-com">
        <Link to="/" className="logo-link">
          <img src={N2softLogoRdImg} alt="N2soft 로고" className="logo-image" />
        </Link>
        <ul className="menu-li">
          <li className="menu">
            <Link to="/company">COMPANY</Link>
          </li>
          <li className="menu">
            <Link to="/solution">SOLUTION</Link>
          </li>
          <li className="menu">
            <Link to="/notice">NOTICE</Link>
          </li>
        </ul>
        <div className="menu1">
          <Link to="/contact">CONTACT US</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
