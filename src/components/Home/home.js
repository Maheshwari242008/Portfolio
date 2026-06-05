import React from "react";
import "./home.css";
// import profile2 from "../../assets/photo.jpg"; // your image
import profile from "../../assets/pf2.avif"; 
import {  FaLinkedin } from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiReact,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">

        {/* Left Side */}
        <div className="home-content">
          <p className="greeting">👋 Hello, I'm</p>

          <h1 className="home-name">
            Pankaj <br />
            Menkudale
          </h1>

          <h2 className="home-role">
            Java Full Stack Developer
          </h2>

          <p className="home-description">
            Passionate Java Full Stack Developer with experience in
            Java, Spring Boot, React.js, REST APIs, MySQL and MongoDB.
            Building scalable, secure and user-friendly applications.
          </p>

          <div className="home-buttons">
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>

            <a href="#about" className="btn-secondary">
              About Me
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="home-image">

  <div className="floating-icon java">
    <FaJava />
  </div>

  <div className="floating-icon react">
    <SiReact />
  </div>

  <div className="floating-icon spring">
    <SiSpringboot />
  </div>

  <div className="floating-icon mysql">
    <SiMysql />
  </div>

  <div className="floating-icon mongodb">
    <SiMongodb />
  </div>
  
  <div className="floating-icon linkedin">
    <FaLinkedin />
  </div>


  <img src={profile} alt="Pankaj Menkudale" />
</div>
      </div>
    </section>
  );
};

export default Home;