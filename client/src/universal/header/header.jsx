import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div className="nav-background">
        <nav>
          <div className="app-logo">
            <img
              src="https://indiahemporganics.com/cdn/shop/files/brown_logo_1_110x.png?v=1677160910"
              alt="Loading Error"
            />
          </div>
          <div className="menu" onClick={() => { setMenuOpen(!menuOpen)}}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={menuOpen ? "open-menu" : "navigation-items"}>
            <div className="nav-links">
              <NavLink to="">
                <div className="nav-item">Resources</div>
              </NavLink>
              <NavLink to="">
                <div className="nav-item">Membership</div>
              </NavLink>
              <NavLink to="">
                <div className="nav-item">Consultation</div>
              </NavLink>
              <NavLink to="">
                <div className="nav-item">Shop</div>
              </NavLink>
              <NavLink to="">
                <div className="nav-item">About</div>
              </NavLink>
            </div>
            <div className="app-utilities">
              <div className="search-icon">
                <img src="/searchIcon.png" alt="Loading Error" />
              </div>
              <div className="user-icon">
                <img src="/userIcon.png" alt="Loading Error" />
              </div>
              <div className="cart-icon">
                <img src="cartIcon.png" alt="Loading Error" />
              </div>
            </div>
          </div>
        </nav>
        <hr className="nav-line" />
        <div className="main-heading">
          <h1>Glossary</h1>
        </div>
      </div>
    </header>
  );
};
