import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaLinkedin,
  FaSearch,
} from "react-icons/fa";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // track which dropdown is open

  const socialLinks = [
    { name: "instagram", icon: <FaInstagram /> },
    { name: "facebook", icon: <FaFacebook /> },
    { name: "twitter", icon: <FaTwitter /> },
    { name: "dribbble", icon: <FaDribbble /> },
    { name: "behance", icon: <FaBehance /> },
    { name: "linkedin", icon: <FaLinkedin /> },
  ];

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="hello-text">Hello World!</div>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a key={index} href="#" className="social-icon" title={social.name}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <div className="logo-text">Delicious</div>
            <div className="logo-subtitle">FOOD BLOG</div>
          </div>

          {/* Navigation */}
          <nav className="navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/HomePage" className="nav-link active">HOME</a>
              </li>

              {/* Pages Dropdown */}
              <li
                className={`nav-item dropdown ${
                  openDropdown === "pages" ? "open" : ""
                }`}
                onMouseEnter={() => setOpenDropdown("pages")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="nav-link">
                  PAGES <span className="chevron">▼</span>
                </button>
                <ul className="dropdown-menu">
                  <li><Link to="/aboutus">About Us</Link></li>
                  <li><Link to="/ContactUsPage">Contact</Link></li>
                   <li> <Link to="/TeamService">Team Service</Link></li>
                 
                </ul>
              </li>

              {/* Mega Menu */}
              <li
                className={`nav-item dropdown ${
                  openDropdown === "mega" ? "open" : ""
                }`}
                onMouseEnter={() => setOpenDropdown("mega")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="nav-link">
                  MEGA MENU <span className="chevron">▼</span>
                </button>
                <ul className="dropdown-menu">
                   <li><Link to="/BreakFastMenu">Breakfast</Link></li>
                    <li><Link to="/Lunch">Lunch</Link></li>
                     <li><Link to="/Dinner">Dinner</Link></li>
                     <li><Link to="/DessertMenu">Desserts</Link></li>
                  
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/RecipePage" className="nav-link" >RECEIPIES</Link>
            
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">4 VEGANS</a>
              </li>
              <li className="nav-item">
              <Link to="/ContactUsPage" className="nav-link" >CONTACT</Link>
                
              </li>
            </ul>
          </nav>

          {/* Search Icon */}
          <div className="search-icon">
            <button className="search-btn" title="Search">
              <FaSearch size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
