import React from "react";
import "../styles/Skill.css";

const Skill = () => {
  const skills = [
    { name: "React", logo: "./react.png", progress: 90 },
      { name: "Node.js", logo: "./node.png", progress: 85 },
      { name: "Express Js", logo: "./express.jpeg", progress: 95 },
      { name: "MongoDB", logo: "./mongo.png", progress: 95 },
                { name: "SQL", logo: "./sql.png", progress: 95 },
      { name: "CSS", logo: "./css.png", progress: 95 },
      { name: "C", logo: "./download.png", progress: 75 },
      { name: "Java", logo: "./java.png", progress: 85 },
      { name: "Python", logo: "./python.png", progress: 75 },
      { name: "Figma", logo: "./figma.png", progress: 80 }
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-heading">Tech Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div
              className="circular-progress"
              style={{
                background: `conic-gradient(var(--accent-color) 0% ${skill.progress}%, rgba(0,0,0,0.1) ${skill.progress}% 100%)`,
              }}
            >
              <img src={skill.logo} alt={`${skill.name} Logo`} className="skill-logo" />
            </div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
