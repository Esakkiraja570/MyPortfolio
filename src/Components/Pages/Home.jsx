import React from 'react';
import image from "../Pages/images/profile.jpg"
import design from "../../Assets/images/design1.png"
import resume from "../../Assets/images/erresume.docx"
import Aboutus from "../Pages/Aboutus"
import Skills from "../Pages/Skills"
import Education from "../Pages/Education"
import Project  from "./Project"
import Contact from "./Contact"
import Footer from './images/Footer';
const Home = () => {
  return (
    
    <div className="home">
    <div className='home1' > 
      <div><img src={design} alt="example" style={{position:"absolute" }}/><div style={{position:"relative",top:"290px",left:"50px" }} className="animate-fade-in-left">
        <h1 className="animate-fade-in-up">Hello, I'm <span>Esakkiraja</span></h1>
          <h2 className="animate-fade-in-up animate-delay-1">Java Full-Stack Developer & UI/UX Designer</h2>
          <p className="animate-fade-in-up animate-delay-2">
            Fullstack Developer & UI/UX Designer crafting seamless digital experiences.
          </p>
          <button className="homebtn animate-fade-in-up animate-delay-3"><a  href={resume} >Download CV</a></button>
          </div>
        </div>
    <div className="animate-fade-in-right" style={{ background: "#f8f8f8"}}><img src={image} alt="example" width={"670px"}/>
    </div>
</div>

    <Aboutus/>
<div><Skills/></div>
<div><Education/></div>
<div><Project/></div>
<div><Contact/></div>
<div><Footer/></div>
</div>

  )
}

export default Home