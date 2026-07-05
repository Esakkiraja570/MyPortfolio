import React from "react";
import vscode from "../Pages/images/download.jpg"
import eclipse from "../Pages/images/eclipse.png"
import mysql from "../Pages/images/mysql.png"
import figma from "../Pages/images/figma.png"
import github from "../Pages/images/download.png"
const skills = {
  "Frontend": ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap",<img src={vscode} width="100px"/>,],
  "Backend": ["Java", "Spring Boot",<img src={eclipse} width="280px" style={{marginTop:"50px"}}/>],
  "Database": ["MySQL",<img src={mysql} width="280px"style={{marginTop:"50px"}}/>],
  "UI / UX": ["Figma", "Canva", "Adobe Photoshop", "Illustrator",<img src={figma}/>],
  "Tools": ["Git", "VS Code", "Eclipse", "Postman",<img src={github}/>]
};

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="title">Skills</h2>

      <div className="skills-container">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-card">
            <h3>{category}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
                
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
