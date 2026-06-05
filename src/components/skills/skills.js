import React, { useState } from "react";
import "./skills.css";
import css from '../../assets/css2.png';
import html from '../../assets/html2.png';
import api from '../../assets/api.png';
import aws from '../../assets/aws.png';
import mysql from '../../assets/mysql2.png';
import spring from '../../assets/spring2.png';
import tailwind from '../../assets/tailwind.png';
import vscode from '../../assets/vscode.png';
import bootstrap from '../../assets/bootstrap.jpg';
import java from '../../assets/java2.png';
import react from '../../assets/react.jpg';
import mongodb from '../../assets/mongodb.jpg';
import oracle from '../../assets/oraclee.jpg';
import js from '../../assets/js.jpg';
import hibernate from '../../assets/hibernate2.png';
import git from '../../assets/gitt.png';
import github from '../../assets/githubb.jpg';
import intel from '../../assets/intel.jpg';
import sql from '../../assets/sql.jpg';
import springboot from '../../assets/springboot2.png';




// import { FaJava, FaReact, FaGitAlt } from "react-icons/fa";
// import { SiSpringboot, SiMongodb, SiMysql } from "react-icons/si";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const skills = [
    // Frontend
    { name: "HTML", category: "Frontend", image:html},
    { name: "CSS", category: "Frontend",  image:css},
    { name: "JavaScript", category: "Frontend",image:js },
    { name: "React.js", category: "Frontend",image:react },
    { name: "Bootstrap", category: "Frontend", image:bootstrap},
    { name: "tailwind", category: "Frontend", image:tailwind},

    // Backend
    { name: "Java", category: "Backend",image:java },
    { name: "Spring Boot", category: "Backend",image:springboot },
    { name: "Spring", category: "Frontend", image:spring},
    { name: "Hibernate", category: "Backend",image:hibernate },
    { name: "REST APIs", category: "Backend", image:api },
   

    // Database
    { name: "MySQL", category: "Database", image:mysql },
    { name: "MongoDB", category: "Database", image:mongodb },
    { name: "Oracle", category: "Database", image:oracle },
    { name: "SQL", category: "Database", image:sql },

    // Tools & Technologies
    { name: "Git", category: "Tools",image:git },
    { name: "GitHub", category: "Tools",image:github },
    { name: "VS Code", category: "Tools",image:vscode},
    { name: "IntelliJ IDEA", category: "Tools",image:intel },
    { name: "AWS", category: "Tools",image:aws},
    
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>

        <div className="skill-filters">
          <button
            className={activeCategory === "All" ? "active" : ""}
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>

          <button
            className={activeCategory === "Frontend" ? "active" : ""}
            onClick={() => setActiveCategory("Frontend")}
          >
            Frontend
          </button>

          <button
            className={activeCategory === "Backend" ? "active" : ""}
            onClick={() => setActiveCategory("Backend")}
          >
            Backend
          </button>

          <button
            className={activeCategory === "Database" ? "active" : ""}
            onClick={() => setActiveCategory("Database")}
          >
            Database
          </button>

          <button
            className={activeCategory === "Tools" ? "active" : ""}
            onClick={() => setActiveCategory("Tools")}
          >
            Tools & Technologies
          </button>
        </div>

        <div className="skills-grid">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="skill-image"
                />
                <h4>{skill.name}</h4>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;