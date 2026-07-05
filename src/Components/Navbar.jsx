import { useState, useEffect } from "react";
import "./Navbar.css";
import "../App.css";
import resume from "../Assets/images/Esakkiraja_Java_developer_Resume.pdf";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-brand">ER.</div>

      <ul className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={resume}
            className="navbar-cta"
            download="Esakkiraja_Java_developer_Resume.pdf"
          >
            Resume ↓
          </a>
        </li>
      </ul>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}
