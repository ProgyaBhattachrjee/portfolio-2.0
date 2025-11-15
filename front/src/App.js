import React from "react";
import Hello from "./component/Hello";
import "./styles/Hello.css";
import Education from "./component/Education";
import Experience from "./component/Experience";
import Skill from "./component/Skill";
import Projects from "./component/Projects";
import SoftSkills from "./component/SoftSkills";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Hello />
      
      <Education />
      <Experience />
      <Skill />
      <SoftSkills/>
      <Projects />
      <Footer />
      <footer className="footer">
  <div className="footer-content">
    <p>© 2025 Progya Bhattacharjee. All Rights Reserved.</p>
  </div>
</footer>

    </div>
  );
}

export default App;
