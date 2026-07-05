import React from 'react';

const education = [
  {
    icon: '🏫',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Government Higher Secondary School, Sundapattivilai, Nagercoil',
    period: '2020 – 2022',
  },
  {
    icon: '🎓',
    degree: 'Bachelor of Science in Computer Science (B.Sc CS)',
    institution: 'Government Arts and Science College, Konam, Nagercoil',
    period: '2022 – 2025',
  },
];

const certifications = [
  {
    icon: '🖥️',
    name: 'Diploma in Computer Applications (DCA)',
    org: 'CSC, Tirunelveli',
    period: 'Aug 2020 – Feb 2021',
  },
  {
    icon: '🤖',
    name: 'HP AI Basics Online Certification',
    org: 'HP / Online',
    period: '2025',
  },
  {
    icon: '🚀',
    name: 'Full Stack Development & UI/UX Design',
    org: 'Alo Info-Tech, Nagercoil',
    period: 'Jun 2025 – Jan 2026',
  },
  {
    icon: '💼',
    name: 'Internship – Java Full-Stack',
    org: 'Intriad Innovations (P) Ltd, Technopark, Trivandrum',
    period: 'Feb 2026 – May 2026',
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="section-wrapper">
        <h2 className="section-title">Education & Certifications</h2>
        <p className="section-subtitle">
          My academic background and professional training
        </p>
      </div>

      <div className="edu-grid">
        {/* Education Timeline */}
        <div>
          <div className="edu-col-title">🎓 Academic</div>
          <div className="edu-timeline">
            {education.map((e, i) => (
              <div key={i} className={`edu-item animate-fade-in-left animate-delay-${i + 1}`}>
                <div className="edu-dot">{e.icon}</div>
                <div className="edu-content">
                  <h3>{e.degree}</h3>
                  <p>{e.institution}</p>
                  <span className="edu-badge">{e.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="edu-col-title">📜 Certifications & Training</div>
          <div className="cert-list">
            {certifications.map((c, i) => (
              <div key={i} className={`cert-item animate-fade-in-right animate-delay-${i + 1}`}>
                <div className="cert-icon">{c.icon}</div>
                <div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-date">{c.org} · {c.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;