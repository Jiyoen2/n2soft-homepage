import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../components/css/Header.css";
import N2softLogoWhImg from "../assets/images/N2SOFTlogo-Wh.png";
import N2softLogoRdImg from "../assets/images/N2SOFTlogo-Rd.png";
import N2softLogoMWh from "../assets/images/n2soft-logo-wh.png";
import N2softLogoMRd from "../assets/images/n2soft-logo-rd.png";
import MenuImg from "../assets/images/menu.png";
import MenuBkImg from "../assets/images/menu-bk.png";
import IcoClosed from "../assets/images/ico-closed.png";
import IcoMore from "../assets/images/ico-more.png";
import IcoMinus from "../assets/images/ico-minus.png";

const Header = () => {
  const [background, setBackground] = useState("rgba(0, 0, 0, 0)");
  const [color, setColor] = useState("#ffffff");
  const [boxShadow, setBoxShadow] = useState("none");
  const [activeMenu, setActiveMenu] = useState("");
  const [logo, setLogo] = useState(N2softLogoWhImg);
  const [logoM, setLogoM] = useState(N2softLogoMWh);
  const [Menu, setMenu] = useState(MenuImg);
  const [IcoPC, setIcoPC] = useState(IcoMore);
  const [isScroll, setIsScroll] = useState("menu1");
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuExpanded, setMenuExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menu1Ref = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

  useEffect(() => {
    console.log("Active Menu:", activeMenu);
  }, [activeMenu]);

  const handleScroll = () => {
    console.log("Scroll position:", window.scrollY);
    if (window.scrollY > 50) {
      setBackground("#FFFFFF");
      setColor("#000000");
      setBoxShadow("0 2px 6px rgba(0, 0, 0, 0.12)");
      setLogo(N2softLogoRdImg);
      setLogoM(N2softLogoMRd);
      setMenu(MenuBkImg);
      setIsScroll("menu2");
    } else {
      setBackground("rgba(0, 0, 0, 0)");
      setColor("#ffffff");
      setBoxShadow("none");
      setLogo(N2softLogoWhImg);
      setLogoM(N2softLogoMWh);
      setMenu(MenuImg);
      setIsScroll("menu1");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      console.log("Removing scroll event listener.");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleNavigation = (path) => {
    setActiveMenu(path);
    navigate(path);
    if (menuOpen) setMenuOpen(false);
  };

  const toggleMenuExpansion = () => {
    setMenuExpanded((prev) => !prev);
    setIcoPC((prev) => (menuExpanded ? IcoMore : IcoMinus));
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
          <img src={logoM} alt="N2soft M로고" className="logo-image-m" />
        </Link>
        <div className="menu-icon" id="menu-toggle" onClick={handleMenuToggle}>
          <img
            src={Menu}
            alt="Menu"
            className="menu-toggle-btn"
            id="menu-icon"
          />
        </div>
        <div className={`gnb-m-toggle ${menuOpen ? "open" : ""}`}>
          {menuOpen && (
            <div className="gnb-m-toggle-com">
              <div>
                <Link to="/" className="logo-link-m">
                  <img
                    src={N2softLogoMRd}
                    alt="Menu Toggle"
                    className="menu-toggle-img"
                    onClick={() => setMenuOpen(false)}
                  />
                </Link>
              </div>
              <div>
                <img
                  src={IcoClosed}
                  alt="Menu Toggle"
                  className="menu-toggle-img"
                  onClick={() => setMenuOpen(false)}
                />
              </div>
            </div>
          )}
          <div className="container">
            <ul className="gnb-m">
              <li>
                <div className="gnb-company" onClick={toggleMenuExpansion}>
                  <span
                    style={{
                      color: activeMenu === "/company" ? "#bc1d22" : "#212121",
                      backgroundColor:
                        activeMenu === "/company" ? background : "transparent",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#bc1d22")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        activeMenu === "/company" ? "#bc1d22" : "#212121")
                    }
                  >
                    COMPANY
                  </span>
                  <img
                    src={IcoPC}
                    alt="Expand/Collapse"
                    className="logo-image-m"
                  />
                </div>
                {menuExpanded && (
                  <ul className="gnb-c">
                    <li>
                      <span
                        onClick={() => {
                          handleNavigation("/company?tab=intro");
                          setActiveMenu("/company?tab=intro");
                          setMenuOpen(false);
                        }}
                        style={{
                          cursor: "pointer",
                          color:
                            activeMenu === "/company?tab=intro"
                              ? "#bc1d22"
                              : "#212121",
                          backgroundColor:
                            activeMenu === "/company?tab=intro"
                              ? background
                              : "transparent",
                        }}
                        className={
                          activeMenu === "/company?tab=intro"
                            ? "active-menu"
                            : "inactive-menu"
                        }
                      >
                        회사소개
                      </span>
                    </li>
                    <li
                      onClick={() => {
                        handleNavigation("/company?tab=history");
                        setActiveMenu("/company?tab=history");
                        setMenuOpen(false);
                      }}
                      style={{
                        cursor: "pointer",
                        color:
                          activeMenu === "/company?tab=history"
                            ? "#bc1d22"
                            : "#212121",
                        backgroundColor:
                          activeMenu === "/company?tab=history"
                            ? background
                            : "transparent",
                      }}
                      className={
                        activeMenu === "/company?tab=history"
                          ? "active-menu"
                          : "inactive-menu"
                      }
                    >
                      연혁
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/solution"
                  style={{
                    color: activeMenu === "/solution" ? "#bc1d22" : "#212121",
                    backgroundColor:
                      activeMenu === "/solution" ? background : "transparent",
                  }}
                  onClick={() => {
                    setActiveMenu("/solution");
                    setMenuOpen(false);
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#bc1d22")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      activeMenu === "/solution" ? "#bc1d22" : "#212121")
                  }
                >
                  SOLUTION
                </Link>
              </li>
              <li>
                <Link
                  to="/notice"
                  style={{
                    color: activeMenu === "/notice" ? "#bc1d22" : "#212121",
                    backgroundColor:
                      activeMenu === "/notice" ? background : "transparent",
                  }}
                  onClick={() => {
                    setActiveMenu("/notice");
                    setMenuOpen(false);
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#bc1d22")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      activeMenu === "/notice" ? "#bc1d22" : "#212121")
                  }
                >
                  NOTICE
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  style={{
                    color: activeMenu === "/contact" ? "#bc1d22" : "#212121",
                    backgroundColor:
                      activeMenu === "/contact" ? background : "transparent",
                  }}
                  onClick={() => {
                    setActiveMenu("/contact");
                    setMenuOpen(false);
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#bc1d22")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      activeMenu === "/contact" ? "#bc1d22" : "#212121")
                  }
                >
                  CONTACT US
                </Link>
                <div className="stick-m" style={{ marginBottom: "41px" }}></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
