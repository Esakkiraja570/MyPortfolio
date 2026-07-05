import React from 'react';
import image from "../Pages/images/profile.jpg";
import resume from "../../Assets/images/Esakkiraja_Java_developer_Resume.pdf";
import Aboutus from "../Pages/Aboutus";
import Skills from "../Pages/Skills";
import Education from "../Pages/Education";
import Project from "./Project";
import Contact from "./Contact";
import Footer from './images/Footer';

const Home = () => {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="hero-section" id="home">
        {/* Background orbs */}
        <div className="hero-bg-orb hero-bg-orb-1" />
        <div className="hero-bg-orb hero-bg-orb-2" />

        <div className="hero-inner">
          {/* Left — Text */}
          <div className="hero-text">
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-line" />
              <span>Java Full-Stack Developer &amp; UI/UX Designer</span>
            </div>

            <h1 className="hero-name">
              Hello, I'm <span className="accent">Esakkiraja S</span>
            </h1>

            <p className="hero-title">
              Building scalable apps &amp; crafting seamless digital experiences
            </p>

            <p className="hero-desc">
              Motivated and detail-oriented Full-Stack Developer with hands-on
              experience in Java, Spring Boot, React.js, MySQL, REST APIs, and
              UI/UX Design. Based in Kanyakumari, Tamil Nadu.
            </p>

            <div className="hero-actions">
              <a href={resume} download className="btn-primary">
                ↓ Download Resume
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects →
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat-num">2+</div>
                <div className="hero-stat-label">Full-Stack Projects</div>
              </div>
              <div>
                <div className="hero-stat-num">4+</div>
                <div className="hero-stat-label">Certifications</div>
              </div>
              <div>
                <div className="hero-stat-num">3+</div>
                <div className="hero-stat-label">Years Learning</div>
              </div>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="hero-image-wrap">
            <div className="hero-image-ring">
              <img src={image} alt="Esakkiraja S" className="hero-img" />
            </div>
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              Available for opportunities
            </div>
          </div>
        </div>
      </section>

      {/* ===== Other Sections ===== */}
      <Aboutus />
      <Skills />
      <Education />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;