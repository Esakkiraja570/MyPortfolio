import React from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Education = () => {
  return (
    <div style={{ padding: "60px 20px", color: "#222", minHeight: "100vh" }}>
      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <h1 className="animate-fade-in-up" style={{ fontSize: "36px", textAlign: "center", marginBottom: "50px", color: "#222" }}>Education & Certifications</h1>
 
       
        <div className="timeline">
          <div className="timeline-item animate-fade-in-left">
            <div className="timeline-icon">
              <FaGraduationCap size={30} color="#222" />
            </div>
            <div className="timeline-content">
              <h3>HSC</h3>
              <p>Government Hr Sec School, Sundapattivilai, Nagercoil.</p>
            </div>
          </div>
          <div className="timeline-item animate-fade-in-right">
            <div className="timeline-icon">
              <FaGraduationCap size={30} color="#222" />
            </div>
            <div className="timeline-content">
              <h3>College</h3>
              <p>Government Arts & Science, Konam, Nagercoil (MSU University).</p>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <h2 className="animate-fade-in-up" style={{ fontSize: "28px", textAlign: "center", margin: "60px 0 30px", color: "#222" }}>Certificates</h2>
        <div className="certificates-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          <div className="certificate-item animate-fade-in-up animate-delay-1" style={{ background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
            <FaCertificate size={40} color="#222" style={{ marginBottom: "10px" }} />
            <h4>Diploma in Computer Science (DCA)</h4>
            <p>2021-2022</p>
          </div>
          <div className="certificate-item animate-fade-in-up animate-delay-2" style={{ background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
            <FaCertificate size={40} color="#222" style={{ marginBottom: "10px" }} />
            <h4>HP AI Basics</h4>
            <p>Online Course</p>
          </div>
          <div className="certificate-item animate-fade-in-up animate-delay-3" style={{ background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
            <FaCertificate size={40} color="#222" style={{ marginBottom: "10px" }} />
            <h4>Java Full-Stack Developer</h4>
            <p>ALO Info-tech (June 2025 - Dec 2025)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;