import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
   <>
      <div className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      

      </div>
      <div>
        <nav className="nav1" >
  <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
  <ul id="navMenu" className={menuOpen ? "show" : ""} style={{alignSelf:"center"}}>
     <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/contact">Contact</Link></li>
  </ul>
</nav>
      </div>
      
      </>
    
  );
}
