import React from "react";
import p1 from "../../Assets/images/Screenshot 2026-01-09 152943.jpg";
import p2 from "../../Assets/images/Screenshot 2026-01-09 153103.jpg";

const projects = [
  {
    title: "Portfolio",
    image: p1, 
    description:
      "A personal portfolio website showcasing my skills, projects, and experience in full-stack development. It demonstrates my technical knowledge, creativity, and ability to build responsive and user-friendly web applications..",
    tech: ["Html","CSS3", "JavaScript", "Responsive Design"],
    link: "https://your-ecommerce-demo-link.com",
    github: "https://github.com/yourrepo/ecommerce",
  },
  {
    title: "Hospital Website",
    image: p2, 
    description:
      "A hospital website provides online access to hospital services, doctor details, appointment booking, and contact information. It improves patient convenience, communication, and healthcare accessibility through a secure and user-friendly interface.",
    tech: ["Html", "CSS","javascript","boostrap"],
    link: "https://your-portfolio-demo.com",
    github: "https://github.com/yourrepo/portfolio",
  },
];

const Projects = () => {
  return (
    <div className="Project">
      <section className="projects-section">
        <h1 className="title">Projects</h1>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                style={{width:"100%"}}
              />

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <h4>Tech Used:</h4>
              <ul>
                {project.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>

              <div className="project-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    🔗 Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    📦 GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
