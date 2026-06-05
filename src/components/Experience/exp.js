import React, { useState } from "react";
import "./exp.css";
import image from '../../assets/exp.jpg';
const Experience = () => {
  const [activeProject, setActiveProject] = useState("project1");

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">Work Experience</h2>

        <div className="company-card">
            <div className="img">
                <div className="left">
                  <h3 id="name">Software Engineer</h3>
                  <h4 id="name2">Delfine India Technology</h4>
                  <span className="timeline">
                    March 2023 - April 2026
                  </span>
                  <p className="exp-tagline">
                    Building scalable enterprise applications using
                    Java, Spring Boot, React.js and Microservices.
                  </p>
                </div>

                <div className="right">
                  <img src={image} alt="expimage"/>
                </div>
            </div>

          {/* Project Buttons */}
          <div className="project-tabs">
            <button
              className={activeProject === "project1" ? "active" : ""}
              onClick={() => setActiveProject("project1")}
            >
              🚢 EYMS
            </button>

            <button
              className={activeProject === "project2" ? "active" : ""}
              onClick={() => setActiveProject("project2")}
            >
              🏦 CBTPS
            </button>
          </div>

          {/* Project 1 */}
          {activeProject === "project1" && (
            <div className="project-card">
              <h3>🚢 Empty Yard Management System (EYMS)</h3>

              <div className="tech-stack">
                <span>React.js</span>
                <span>Spring Boot</span>
                <span>MySQL</span>
                <span>Team Size: 8</span>
              </div>

              <p>
                Full-stack web application designed to optimize
                management of empty shipping containers with
                real-time tracking, allocation and yard utilization.
              </p>

              <ul>
                <li>Developed responsive dashboards using React.js.</li>
                <li>Built REST APIs using Spring Boot.</li>
                <li>Integrated frontend and backend systems.</li>
                <li>Implemented container tracking modules.</li>
                <li>Automated report generation.</li>
                <li>Worked with MySQL and Spring Data JPA.</li>
                <li>Tested APIs using Postman.</li>
              </ul>
            </div>
          )}

          {/* Project 2 */}
          {activeProject === "project2" && (
            <div className="project-card">
              <h3>🏦 Core Banking Transaction Processing System</h3>

              <div className="tech-stack">
                <span>React.js</span>
                <span>Spring Boot</span>
                <span>Microservices</span>
                <span>MySQL</span>
              </div>

              <p>
                Banking application designed for secure financial
                transactions including deposits, withdrawals,
                fund transfers and account management.
              </p>

              <ul>
                <li>Developed responsive banking interfaces.</li>
                <li>Built account and transaction APIs.</li>
                <li>Implemented secure transaction validation.</li>
                <li>Created Account, Payment & Transaction services.</li>
                <li>Applied ACID transaction management.</li>
                <li>Optimized database queries.</li>
                <li>Tested APIs using Postman.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;