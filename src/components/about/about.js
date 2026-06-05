import React from "react";
import "./about.css";
import profileImage from "../../assets/photo.jpg"; // Update path as needed

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-layout">
          {/* Left Side Content */}
          <div className="about-content" >
            <h3 id="name">Pankaj Menkudale</h3>
            <h4>Java Full Stack Developer</h4>

            <p className="about-description">
              Java Developer with 3.1 years of experience creating reliable and
              scalable software solutions using Java, Spring Boot, REST APIs,
              React.js, and databases like MySQL and MongoDB. Experienced in
              developing microservices-based applications and integrating modern
              AI tools such as ChatGPT and GitHub Copilot to improve development
              efficiency, debugging, and code quality.
            </p>

            <div className="about-card">
              <h3>Professional Experience</h3>
              <p>
                Currently working as a Software Engineer at Delfine India
                Technology. Experienced in developing enterprise applications,
                banking systems, and logistics management solutions using
                React.js and Spring Boot.
              </p>
            </div>

            <div className="about-card">
              <h3>Education</h3>
              <p>
                <strong>MCA</strong> – Siddhant College of Engineering,
                Sudumbare (2024) | CGPA: 8.49
              </p>

              <p>
                <strong>B.Sc. Computer Science</strong> – Vidnyan Mahavidyalay,
                Sangola (2022) | CGPA: 9.49
              </p>
            </div>

            <div className="about-card">
              <h3>Certifications</h3>
              <ul>
                <li>Programming in Java – Udemy</li>
                <li>Spring Boot & Microservices Certification – Udemy</li>
              </ul>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="about-image">
            <img src={profileImage} alt="Pankaj Menkudale" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;