import React from "react";

import { FaFacebookF, FaTwitter, FaInstagram, FaBehance, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
// Sample Instagram images (replace with your own)
import img1 from "../asstes/r1.jpg";
import img2 from "../asstes/r2.jpg";
import img3 from "../asstes/r3.jpg";
import img4 from "../asstes/r4.jpg";
import img5 from "../asstes/r5.jpg";
import img6 from "../asstes/r6.jpg";


const Footer = () => {
  const instaImages = [img1, img2, img3, img4, img5, img6];

  return (
    <footer className="footer">
      {/* Instagram Section */}
      <div className="footer-insta">
        <h4>Follow Us Instagram</h4>
        <div className="insta-gallery">
          {instaImages.map((img, index) => (
            <div key={index} className="insta-item">
              <img src={img} alt={`insta-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaBehance /></a>
          <a href="#"><FaLinkedin /></a>
        </div>

        <div className="footer-logo">Delicious <span>FOOD BLOG</span></div>

        <div className="footer-copy">
          Copyright ©2025 All rights reserved | This template is made with 
          <span style={{ color: "red" }}> ♥ </span> by Colorlib
        </div>
      </div>

      {/* Back to Top */}
      <a href="#top" className="back-to-top">↑</a>
    </footer>
  );
};

export default Footer;
