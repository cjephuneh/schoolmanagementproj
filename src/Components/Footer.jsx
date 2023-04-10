import React from "react";
import "./Footer.css";
import Barner from '../assets/logo2.jpg'

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <img src={Barner} alt="" />
        <p>Website and mobile apps for the parents, students, and teachers</p>
      </div>
      <div className="footer-social">
        <a href="https://twitter.com">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://facebook.com">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/contact">Contact Us</a>
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
      </div>
    </footer>
  );
}

export default Footer;
