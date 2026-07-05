import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/Aboutus";
import Skills from "./Components/Pages/Skills";
import Projects from "./Components/Pages/Project";
import Contact from "./Components/Pages/Contact";
import Navbar from "./Components/Navbar";
import './App.css';
import Education from "./Components/Pages/Education";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
