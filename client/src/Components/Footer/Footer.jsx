import React from "react";
import "./Footer.css";


import footer_logo from '../../Assets/footer_logo.png';
import instagram_icon from '../../Assets/instagram_icon.png';
import pinterest_icon from '../../Assets/pintester_icon.png';



import whatsapp_icon from '../../Assets/whatsapp_icon.png';
import { Link } from "react-router-dom"; // ✅ Link import

const Footer = () => {
  return (
    <div className="footer">
      {/* ── Logo section ── */}
      <div className="footer-logo">
        <img src={footer_logo} alt="Shopper Logo" width="50" />
        <p>SHOPPER</p>
      </div>

      {/* ── Navigation links with routing ── */}
      <ul className="footer-links">
        <li><Link to="/company" style={{ textDecoration: "none", color: "inherit" }}>Company</Link></li>
        <li><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Products</Link></li>
        <li><Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>Offices</Link></li>
        <li><Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>About</Link></li>
        <li><Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>Contact</Link></li>
      </ul>

      {/* ── Social Media Icons ── */}
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram_icon} alt="Instagram" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <img src={pinterest_icon} alt="Pinterest" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp_icon} alt="Whatsapp" />
          </a>
        </div>
      </div>

      {/* ── Footer bottom ── */}
      <div className="footer-copyright">
        <hr />
        <p>© 2025 Shopper. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
