import React from 'react'
import react from '../Pages/images/react.png'
import  mysql from '../Pages/images/mysql.png'
import java from '../Pages/images/java.jpg'
const Aboutus = () => {
  return (
     <div id="about" style={{ padding: "60px 20px",}}className='about1'>
      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px", color: "#222" }}>
          About Me
        </h2>

        <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#444" }}>
          Hello! I'm <strong>S ESAKKIRAJA</strong>, a dedicated{" "}
          <strong>Full-Stack Developer</strong>  <small><strong>Fresher</strong></small>
          I am a passionate Full Stack Developer skilled in building responsive front-end interfaces and robust back-end systems using React, Java, and Spring Boot. With additional experience in UI/UX tools like Figma, Illustrator, Photoshop, and Canva, I combine clean design with efficient code. My goal is to create applications that are visually appealing, intuitive, and highly functional.
        </p>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            marginTop: "15px",
            color: "#444",
          }}
        >
          <strong>My Goals</strong>
       <br></br>
        Driven to become a senior full-stack developer.<br></br>
        Focused on mastering modern web technologies.<br></br>
        Aiming to create innovative and user-focused digital solutions.<br></br>
        Inspired to grow into a strong technical leader in the future.<br></br>
        Striving to excel in both frontend and backend development.<br></br>
       
        </p>
        <div style={{ marginTop: "25px" }}>
          <a
            href="#projects"
            style={{
              padding: "12px 24px",
              background: "#222",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "6px",
            }}
          >
            View My Projects
          </a>
        </div>
       
      </div>
     
    </div>
  );
}
export default Aboutus