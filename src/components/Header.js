import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../components/css/Header.css";
import N2softLogoWhImg from "../assets/images/N2SOFTlogo-Wh.png";
import N2softLogoRdImg from "../assets/images/N2SOFTlogo-Rd.png";

const Header = () => {
  const [background, setBackground] = useState("rgba(0, 0, 0, 0)");
  const [color, setColor] = useState("white");
  const [boxShadow, setBoxShadow] = useState("none");
  const [activeMenu, setActiveMenu] = useState("");
  const [logo, setLogo] = useState(N2softLogoWhImg);
  const [isScroll, setIsScroll] = useState("menu1");

  const location = useLocation();
  const menu1Ref = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBackground("#FFFFFF");
      setColor("black");
      setBoxShadow("0 2px 6px rgba(0, 0, 0, 0.12)");
      setLogo(N2softLogoRdImg);
      setIsScroll("menu2");
    } else {
      setBackground("rgba(0, 0, 0, 0)");
      setColor("white");
      setBoxShadow("none");
      setLogo(N2softLogoWhImg);
      setIsScroll("menu1");
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
      ref={headerRef}
      style={{
        backgroundColor: background,
        color: color,
        boxShadow: boxShadow,
      }}
    >
      <div className="header-com">
        <Link to="/" className="logo-link">
          <img src={logo} alt="N2soft 로고" className="logo-image" />
        </Link>
        <ul className="menu-li">
          <li className="menu">
            <Link
              to="/company"
              style={{
                color: activeMenu === "/company" ? "#ff0000" : color,
                backgroundColor: activeMenu === "/company" && background,
              }}
              onClick={() => setActiveMenu("/company")}
            >
              COMPANY
            </Link>
            {activeMenu === "/company" && <div className="stick-header"></div>}
          </li>
          <li className="menu">
            <Link
              to="/solution"
              style={{
                color: activeMenu === "/solution" ? "#bc1d22" : color,
                backgroundColor: activeMenu === "/solution" && background,
              }}
              onClick={() => setActiveMenu("/solution")}
            >
              SOLUTION
            </Link>
            {activeMenu === "/solution" && <div className="stick-header"></div>}
          </li>
          <li className="menu">
            <Link
              to="/notice"
              style={{
                color: activeMenu === "/notice" ? "#bc1d22" : color,
                backgroundColor: activeMenu === "/notice" && background,
              }}
              onClick={() => setActiveMenu("/notice")}
            >
              NOTICE
            </Link>
            {activeMenu === "/notice" && <div className="stick-header"></div>}
          </li>
        </ul>
        <div className={isScroll} ref={menu1Ref}>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
            }}
            onClick={() => setActiveMenu("/contact")}
          >
            <div
              style={{
                position: "relative",
                width: "109px",
                height: "37px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px",
                fontFamily: "Pretendard",
                backgroundColor:
                  activeMenu === "/contact" ? "#bc1d22" : "transparent",
              }}
            >
              <span
                style={{
                  color: activeMenu === "/contact" ? "#fff" : color,
                }}
              >
                CONTACT US
              </span>
            </div>
          </Link>
          {activeMenu === "/contact" && <div className="stick-header-1"></div>}
        </div>
      </div>
    </header>
  );
};

export default Header;
