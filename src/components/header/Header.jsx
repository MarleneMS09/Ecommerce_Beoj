import React, { useState } from "react";
import "../header/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // Estado para el enlace activo

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Actualiza el enlace activo
    setIsMenuOpen(false); // Cierra el menú en dispositivos móviles al hacer clic
  };

  return (
    <header className="header">
      <nav className="nav">
        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links-container ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                className={activeLink === "home" ? "active" : ""}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#product"
                className={activeLink === "product" ? "active" : ""}
                onClick={() => handleLinkClick("product")}
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#featured"
                className={activeLink === "featured" ? "active" : ""}
                onClick={() => handleLinkClick("featured")}
              >
                Featured
              </a>
            </li>
            <li>
              <a
                href="#accessories"
                className={activeLink === "accessories" ? "active" : ""}
                onClick={() => handleLinkClick("accessories")}
              >
                Accessories
              </a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <a href="#home" className="logo">
          <h1>Beojnamu</h1>
          <p>벗나무</p>
        </a>
        
        {/* Header Actions */}
        <div className="header-actions">
          <div className="search-bar-container">
            <input type="text" placeholder="Search" className="search-bar" />
            <i className="fas fa-search search-icon"></i>
          </div>
          <button className="icon-button">
            <i className="fas fa-heart"></i>
          </button>
          <button className="icon-button">
            <i className="fas fa-user"></i>
          </button>
          <button className="shop-button">Shop</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
