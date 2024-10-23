import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo-pro.webp";
import insta_icon from "../Assets/instagram.png";
import facebook_icon from "../Assets/facebook.png";
import whatsapp_icon from "../Assets/whatsapp.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img
          src={footer_logo}
          alt="Footer Logo"
          style={{ width: "190px", height: "180px" }}
        />
        <p>SHOP MART</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={insta_icon} alt="Instagram Icon" style={{ width: '50px', height: '50px' }} />
        </div>
        <div className="footer-icons-container">
          <img src={facebook_icon} alt="Facebook Icon" style={{ width: '50px', height: '50px' }} />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="WhatsApp Icon" style={{ width: '50px', height: '50px' }} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
