import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="max-width">
        <div className="footer-container">
          <img className="footer-logo" src="./images/white-logo.svg" alt="" />
          <h3>
            Learning, enjoying & leveling up <br /> one step at a time.
          </h3>
          <div className="footer-links">
            <i onClick={() => window.open("https://github.com/ronitguptaaa","_blank")} class="fab fa-github"></i>
            <i onClick={() => window.open("https://www.linkedin.com/in/ronit-gupta-507519216/","_blank")}class="fab fa-linkedin"></i>
            <i onClick={() => window.open("https://www.youtube.com/","_blank")}class="fab fa-youtube"></i>  
          </div>
          <p>
            Designed & Built by Ronit Gupta © 2022 <br />
            Hyderabad, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
