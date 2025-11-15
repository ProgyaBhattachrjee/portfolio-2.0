import React from "react";
import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 8,
    title: "HomeStore",
    description: "E-commerce app with React, Redux, Node.js/Express and MongoDB.",
    websiteUrl: "https://cerulean-rugelach-2a9670.netlify.app/",
    imageUrl: "./homestore.png",
    githubUrl: "https://github.com/ProgyaBhattachrjee/HomeStore",
  },
  {
    id: 4,
    title: "Agrobrain",
    imageUrl: "./agro.png",
    description: "Smart agriculture platform with data analytics and crop planning support.",
    websiteUrl: "https://agro-brain-27up.vercel.app/",
    githubUrl: "https://github.com/ProgyaBhattachrjee/Agrobrain",
  },
  {
    id: 1,
    title: "SmartHire",
    imageUrl: "./smart.png",
    description: "Python/Flask & SQL-Powered Hiring Optimization Tool",
    websiteUrl:"https://smarthire-1-go8b.onrender.com/",
    githubUrl: "https://github.com/ProgyaBhattachrjee/SmartHire",
  },
  {
    id: 2,
    title: "Stock-Market-Prediction",
    description: "Stock Market Predictor using machine learning models in Python.",
    imageUrl: "./sm.png",
    githubUrl: "https://github.com/ProgyaBhattachrjee/Stock-Market-prediction",
  },
  {
    id: 6,
    title: "tweet-sentiment-analysis",
    description: "Interactive Streamlit app that performs sentiment analysis on tweets using TextBlob.",
    imageUrl: "./t.png",
    websiteUrl:"https://tweet-sentiment-analysis-rw5hkgbjzarzzqitwrvvrk.streamlit.app/",
    githubUrl: "https://github.com/ProgyaBhattachrjee/tweet-sentiment-analysis",
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            {project.imageUrl && (
              <img src={project.imageUrl} alt={project.title} className="project-img" />
            )}
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-links">
                {project.websiteUrl && (
                  <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                     <FiExternalLink className="icon" />
                  </a>
                )}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub/>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
