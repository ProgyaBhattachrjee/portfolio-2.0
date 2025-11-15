import React from "react";
import "../styles/SoftSkills.css";

const softSkills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Adaptability",
  "Time Management",
  "Creativity",
  "Leadership",
  "Critical Thinking",
];

const SoftSkills = () => {
  return (
    <section className="softskills-section">
      <h2 className="softskills-heading">Soft Skills</h2>
      <div className="bubbles-container">
        {softSkills.map((skill, index) => (
          <div key={index} className="bubble">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;
