import React from "react";

const projects = [
  {
    icon: "📊",
    title: "Daily Management System (DMS)",
    subtitle: "Full Stack Web Application",
    description:
      "A web-based billing management system for small service providers such as milk vendors, newspaper distributors, EMI collectors, and shop owners. Features secure authentication, role-based access, and SMS notifications.",
    features: [
      "Admin & Customer modules with secure role-based authentication",
      "Customer management, daily transaction entry & monthly bill generation",
      "SMS API integration for automated monthly billing notifications",
      "RESTful APIs with Spring Boot connected to React.js & MySQL",
      "Automated bill calculations reducing manual work significantly",
      "Responsive UI for efficient record management",
    ],
    tech: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs", "SMS API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Esakkiraja570/DailyManagementSystem",
    live: null,
  },
  {
    icon: "🛒",
    title: "E-Commerce Web Application",
    subtitle: "Full Stack Project",
    description:
      "A full-stack e-commerce platform that allows users to browse products, manage carts, and place orders through a secure and responsive interface with role-based admin and customer modules.",
    features: [
      "User authentication & authorization with secure login/registration",
      "Product management: add, update, delete, and search operations",
      "Shopping cart & order management systems",
      "RESTful APIs for seamless frontend-backend communication",
      "CRUD operations using Spring Data JPA and Hibernate",
      "Role-based access control for Admin and Customer",
      "MVC architecture with OOP principles for scalable code",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "Spring Data JPA", "Hibernate", "REST APIs", "Git", "GitHub"],
    github: "https://github.com/Esakkiraja570/Ecommers-Project",
    live: null,
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-wrapper">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Full-stack applications built with real-world business logic
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card animate-fade-in-up animate-delay-${index + 1}`}
          >
            {/* Header */}
            <div className="project-header">
              <div className="project-icon">{project.icon}</div>
              <div className="project-links-top">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    🐙 GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    🔗 Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Body */}
            <div className="project-body">
              <div style={{ marginBottom: '6px' }}>
                <span className="chip">{project.subtitle}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <ul className="project-features">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <div className="project-tech-stack">
                {project.tech.map((t) => (
                  <span key={t} className="project-tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
