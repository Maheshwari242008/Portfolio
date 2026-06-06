import React from "react";
import "./footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <h2 className="footer-logo">
          Pankaj Menkudale<span>.</span>
        </h2>

        <p className="footer-text">
          Software Engineer | React Developer | Java Developer
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience & Projects</a>
          {/* <a href="#projects">Projects</a> */}
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">

          <a
            href=" https://share.google/N0XIwYQU4IIj5n7EY"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/pankaj4186"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="pankajme07@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <a href="#home" className="scroll-top">
          <FaArrowUp />
        </a>

        <p className="copyright">
          © {new Date().getFullYear()} Pankaj Menkudale. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;