import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../components/css/Header.css";
import N2softLogoWhImg from "../assets/images/N2SOFTlogo-Wh.png";
import N2softLogoRdImg from "../assets/images/N2SOFTlogo-Rd.png";
import MenuImg from "../assets/images/menu.png";

const Header = () => {
  const [background, setBackground] = useState("rgba(0, 0, 0, 0)");
  const [color, setColor] = useState("#ffffff");
  const [boxShadow, setBoxShadow] = useState("none");
  const [activeMenu, setActiveMenu] = useState("");
  const [logo, setLogo] = useState(N2softLogoWhImg);
  const [Menu, setMenu] = useState(MenuImg);
  const [isScroll, setIsScroll] = useState("menu1");
  const [menuOpen, setMenuOpen] = useState(false); // 모바일 메뉴 열림 상태
  const location = useLocation();
  const menu1Ref = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    console.log("Location changed:", location.pathname);
    setActiveMenu(location.pathname);
  }, [location]);

  const handleScroll = () => {
    console.log("Scroll position:", window.scrollY);
    if (window.scrollY > 50) {
      console.log("Scrolled more than 50px, updating header style.");
      setBackground("#FFFFFF");
      setColor("#000000");
      setBoxShadow("0 2px 6px rgba(0, 0, 0, 0.12)");
      setLogo(N2softLogoRdImg);
      setIsScroll("menu2");
    } else {
      console.log("Scrolled less than 50px, resetting header style.");
      setBackground("rgba(0, 0, 0, 0)");
      setColor("#ffffff");
      setBoxShadow("none");
      setLogo(N2softLogoWhImg);
      setIsScroll("menu1");
    }
  };

  useEffect(() => {
    console.log("Adding scroll event listener.");
    window.addEventListener("scroll", handleScroll);
    return () => {
      console.log("Removing scroll event listener.");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
    console.log("Menu toggle clicked, new state:", !menuOpen);
  };

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
                color: activeMenu === "/company" ? "#bc1d22" : color,
                backgroundColor:
                  activeMenu === "/company" ? background : "transparent",
              }}
              onClick={() => {
                console.log("Menu clicked: COMPANY");
                setActiveMenu("/company");
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
                color: activeMenu === "/solution" ? "#bc1d22" : color,
                backgroundColor:
                  activeMenu === "/solution" ? background : "transparent",
              }}
              onClick={() => {
                console.log("Menu clicked: SOLUTION");
                setActiveMenu("/solution");
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
                color: activeMenu === "/notice" ? "#bc1d22" : color,
                backgroundColor:
                  activeMenu === "/notice" ? background : "transparent",
              }}
              onClick={() => {
                console.log("Menu clicked: NOTICE");
                setActiveMenu("/notice");
              }}
            >
              NOTICE
            </Link>
            {activeMenu === "/notice" && <div className="stick-header"></div>}
          </li>
        </ul>
        <div className={`contact-link ${isScroll}`} ref={menu1Ref}>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
            }}
            onClick={() => {
              console.log("Menu clicked: CONTACT US");
              setActiveMenu("/contact");
            }}
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
                  color: activeMenu === "/contact" ? "#ffffff" : color,
                }}
              >
                CONTACT US
              </span>
            </div>
          </Link>
          {activeMenu === "/contact" && <div className="stick-header-1"></div>}
        </div>
        <Link to="/" className="logo-link-m">
          <img src={logo} alt="N2soft 로고" className="logo-image" />
        </Link>
        <div className="menu-icon" id="menu-toggle" onClick={handleMenuToggle}>
          <img
            src={MenuImg}
            alt="Menu"
            className="menu-toggle-btn"
            id="menu-icon"
          />
        </div>
        <div className={`gnb-m-toggle ${menuOpen ? "open" : ""}`}>
          {menuOpen && (
            <div className="gnb-m-toggle-com">
              <img
                src={N2softLogoRdImg}
                alt="Menu Toggle"
                className="menu-toggle-img"
              />
            </div>
          )}
          <div className="container">
            <ul className="gnb-m">
              <li>
                <Link
                  to="/company"
                  onClick={() => {
                    console.log("Mobile menu clicked: COMPANY");
                    setActiveMenu("/company");
                    setMenuOpen(false); // 메뉴 클릭 시 닫기
                  }}
                >
                  COMPANY
                </Link>
              </li>
              <li>
                <Link
                  to="/solution"
                  onClick={() => {
                    console.log("Mobile menu clicked: SOLUTION");
                    setActiveMenu("/solution");
                    setMenuOpen(false); // 메뉴 클릭 시 닫기
                  }}
                >
                  SOLUTION
                </Link>
              </li>
              <li>
                <Link
                  to="/notice"
                  onClick={() => {
                    console.log("Mobile menu clicked: NOTICE");
                    setActiveMenu("/notice");
                    setMenuOpen(false); // 메뉴 클릭 시 닫기
                  }}
                >
                  NOTICE
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => {
                    console.log("Mobile menu clicked: CONTACT US");
                    setActiveMenu("/contact");
                    setMenuOpen(false); // 메뉴 클릭 시 닫기
                  }}
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
