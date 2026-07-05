import React from "react";

const skillsData = [
  {
    icon: "🖥️",
    category: "Programming Languages",
    tags: ["Java", "JavaScript", "SQL", "C", "C++"],
  },
  {
    icon: "🎨",
    category: "Frontend",
    tags: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap 5"],
  },
  {
    icon: "⚙️",
    category: "Backend",
    tags: ["Java", "Spring Boot", "REST APIs", "MVC Architecture"],
  },
  {
    icon: "🗄️",
    category: "Database",
    tags: ["MySQL", "Spring Data JPA", "Hibernate", "CRUD Operations"],
  },
  {
    icon: "🎭",
    category: "UI / UX Design",
    tags: ["Figma", "Canva", "Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    icon: "🛠️",
    category: "Developer Tools",
    tags: ["Git", "GitHub", "VS Code", "Eclipse", "Postman"],
  },
  {
    icon: "🧠",
    category: "Concepts & Practices",
    tags: ["OOP", "Data Structures", "API Integration", "SDLC", "Responsive Design", "Debugging"],
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="section-wrapper">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with every day
        </p>
      </div>

      <div className="skills-grid">
        {skillsData.map((s, i) => (
          <div
            key={s.category}
            className={`skill-card animate-fade-in-up animate-delay-${Math.min(i + 1, 4)}`}
          >
            <div className="skill-card-header">
              <div className="skill-card-icon">{s.icon}</div>
              <h3>{s.category}</h3>
            </div>
            <div className="skill-tags">
              {s.tags.map((tag) => (
                <span key={tag} className="skill-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
