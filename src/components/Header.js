import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../components/css/Header.css";
import N2softLogoWhImg from "./images/N2SOFTlogo-Wh.png";
import N2softLogoRdImg from "./images/N2SOFTlogo-Rd.png";

const Header = () => {
  const [background, setBackground] = useState("rgba(0, 0, 0, 0)");
  const [color, setColor] = useState("white");
  const [boxShadow, setBoxShadow] = useState("none");
  const [activeMenu, setActiveMenu] = useState("");

  const location = useLocation();

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBackground("#FFFFFF");
      setColor("black");
      setBoxShadow("0 2px 6px rgba(0, 0, 0, 0.12)");
    } else {
      setBackground("rgba(0, 0, 0, 0)");
      setColor("white");
      setBoxShadow("none");
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
        color: color,
        boxShadow: boxShadow,
      }}
    >
      <Link to="/" className="logo-link">
        <img src={N2softLogoWhImg} alt="N2soft 흰로고" className="logo-image" />
      </Link>
      <ul className="menu-li">
        <li className="menu">
          <Link
            to="/company"
            style={{ color: activeMenu === "/company" ? "#ff0000" : color }}
          >
            COMPANY
          </Link>
          {activeMenu === "/company" && <div className="stick-header"></div>}
        </li>
        <li className="menu">
          <Link
            to="/solution"
            style={{ color: activeMenu === "/solution" ? "#ff0000" : color }}
          >
            SOLUTION
          </Link>
          {activeMenu === "/solution" && <div className="stick-header"></div>}
        </li>
        <li className="menu">
          <Link
            to="/notice"
            style={{ color: activeMenu === "/notice" ? "#ff0000" : color }}
          >
            NOTICE
          </Link>
          {activeMenu === "/notice" && <div className="stick-header"></div>}
        </li>
      </ul>
      <div className="menu1">
        <Link
          to="/contact"
          style={{ color: activeMenu === "/contact" ? "#ff0000" : color }}
        >
          CONTACT US
        </Link>
        {activeMenu === "/contact" && <div className="stick-header-1"></div>}
      </div>
    </header>
  );
};

export default Header;
