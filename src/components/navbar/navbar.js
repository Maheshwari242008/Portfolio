import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import logo from '../../assets/logo3.png'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo1">
        <img src={logo} alt="Logo" className="logo"/>
      </div>

      <div className="navLinks">
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>

        <Link to="about" smooth={true} duration={500}>
          About
        </Link>

        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>

        <Link to="exp" smooth={true} duration={500}>
          Experience
        </Link>

        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>

        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;