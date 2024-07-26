import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/css/Header.css";
import N2softLogoImage from "./images/n2soft-logo.png";

const Header = () => {
  const [background, setBackground] = useState("rgba(0, 0, 0, 0)");
  const [color, setColor] = useState("white");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBackground("#FFFFFF");
      setColor("black");
      // 로고 바꾸는 추가
    } else {
      setBackground("rgba(0, 0, 0, 0)");
      setColor("white");
      // 로고 바꾸는 추가
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
      style={{ backgroundColor: background, color: color }}
    >
      <Link to="/" className="logo-link">
        <img src={N2softLogoImage} alt="N2soft 로고" className="logo-image" />
      </Link>
      <ul className="menu-li">
        <li className="menu">
          <Link to="/company" style={{ color: color }}>
            COMPANY
          </Link>
        </li>
        <li className="menu">
          <Link to="/solution" style={{ color: color }}>
            SOLUTION
          </Link>
        </li>
        <li className="menu">
          <Link to="/notice" style={{ color: color }}>
            NOTICE
          </Link>
        </li>
      </ul>
      <div className="menu1">
        <Link to="/contact" style={{ color: color }}>
          CONTACT US
        </Link>
      </div>
    </header>
  );
};

export default Header;
