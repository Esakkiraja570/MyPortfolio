import React from 'react';

const Aboutus = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        {/* Left */}
        <div className="animate-fade-in-left">
          <div className="about-label">
            <div className="about-label-line" />
            <span className="chip">About Me</span>
          </div>

          <h2 className="about-heading">
            Crafting Code,<br /> Designing Experiences
          </h2>

          <p className="about-para">
            Hello! I'm <strong style={{ color: '#f0f0f0' }}>Esakkiraja S</strong>, a passionate{' '}
            <strong style={{ color: '#a78bfa' }}>Java Full-Stack Developer &amp; UI/UX Designer</strong>{' '}
            (Fresher) from Kanyakumari, Tamil Nadu. I build responsive front-end
            interfaces and robust back-end systems using React.js, Java, and
            Spring Boot.
          </p>

          <p className="about-para">
            With additional expertise in UI/UX tools like Figma, Adobe Illustrator,
            Photoshop, and Canva, I combine clean design with efficient code to
            create applications that are visually appealing, intuitive, and
            highly functional.
          </p>

          <div className="about-goals">
            <h4>My Goals</h4>
            <ul>
              <li>Driven to become a senior full-stack developer</li>
              <li>Focused on mastering modern web technologies</li>
              <li>Aiming to create innovative, user-focused digital solutions</li>
              <li>Inspired to grow into a strong technical leader</li>
              <li>Striving to excel in both frontend and backend development</li>
            </ul>
          </div>

          <div className="about-cta-wrap" style={{ marginTop: '28px' }}>
            <a href="#projects" className="btn-primary">
              View My Projects →
            </a>
          </div>
        </div>

        {/* Right — Info Cards */}
        <div className="animate-fade-in-right">
          <div className="about-info-cards">
            <div className="about-info-card">
              <div className="about-info-icon">📧</div>
              <div className="about-info-label">Email</div>
              <div className="about-info-value">
                <a
                  href="mailto:esakkiraja0409@gmail.com"
                  style={{ color: '#a78bfa', wordBreak: 'break-all' }}
                >
                  esakkiraja0409@gmail.com
                </a>
              </div>
            </div>

            <div className="about-info-card">
              <div className="about-info-icon">📍</div>
              <div className="about-info-label">Location</div>
              <div className="about-info-value">Kanyakumari, Tamil Nadu</div>
            </div>

            <div className="about-info-card">
              <div className="about-info-icon">📱</div>
              <div className="about-info-label">Phone</div>
              <div className="about-info-value">
                <a href="tel:8300264732" style={{ color: '#a78bfa' }}>
                  +91 8300264732
                </a>
              </div>
            </div>

            <div className="about-info-card">
              <div className="about-info-icon">🎓</div>
              <div className="about-info-label">Degree</div>
              <div className="about-info-value">B.Sc CS (2022–2025)</div>
            </div>

            <div className="about-info-card">
              <div className="about-info-icon">💼</div>
              <div className="about-info-label">LinkedIn</div>
              <div className="about-info-value">
                <a
                  href="https://www.linkedin.com/in/esakki-raja-506b64200"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#a78bfa' }}
                >
                  esakki-raja
                </a>
              </div>
            </div>

            <div className="about-info-card">
              <div className="about-info-icon">🐙</div>
              <div className="about-info-label">GitHub</div>
              <div className="about-info-value">
                <a
                  href="https://github.com/Esakkiraja570"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#a78bfa' }}
                >
                  Esakkiraja570
                </a>
              </div>
            </div>

            <div className="about-info-card" style={{ gridColumn: '1 / -1' }}>
              <div className="about-info-icon">🧭</div>
              <div className="about-info-label">Status</div>
              <div className="about-info-value" style={{ color: '#22c55e' }}>
                Actively seeking entry-level Software Developer position
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;