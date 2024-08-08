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

  const location = useLocation();
  const menu1Ref = useRef(null);

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBackground("#FFFFFF");
      setColor("black");
      setBoxShadow("0 2px 6px rgba(0, 0, 0, 0.12)");
      setLogo(N2softLogoRdImg);
      if (menu1Ref.current) {
        menu1Ref.current.style.backgroundColor = "gray";
      }
    } else {
      setBackground("rgba(0, 0, 0, 0)");
      setColor("white");
      setBoxShadow("none");
      setLogo(N2softLogoWhImg);
      if (menu1Ref.current) {
        menu1Ref.current.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
      }
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
                backgroundColor:
                  activeMenu === "/company" ? background : "transparent",
              }}
            >
              COMPANY
            </Link>
            {activeMenu === "/company" && <div className="stick-header"></div>}
          </li>
          <li className="menu">
            <Link
              to="/solution"
              style={{
                color: activeMenu === "/solution" ? "#ff0000" : color,
                backgroundColor:
                  activeMenu === "/solution" ? background : "transparent",
              }}
            >
              SOLUTION
            </Link>
            {activeMenu === "/solution" && <div className="stick-header"></div>}
          </li>
          <li className="menu">
            <Link
              to="/notice"
              style={{
                color: activeMenu === "/notice" ? "#ff0000" : color,
                backgroundColor:
                  activeMenu === "/notice" ? background : "transparent",
              }}
            >
              NOTICE
            </Link>
            {activeMenu === "/notice" && <div className="stick-header"></div>}
          </li>
        </ul>
        <div className="menu1" ref={menu1Ref}>
          <Link
            to="/contact"
            style={{
              color: activeMenu === "/contact" ? "#ff0000" : color,
              backgroundColor:
                activeMenu === "/contact" ? background : "transparent",
            }}
          >
            CONTACT US
          </Link>
          {activeMenu === "/contact" && <div className="stick-header-1"></div>}
        </div>
      </div>
    </header>
  );
};

export default Header;
