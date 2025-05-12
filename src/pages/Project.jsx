import React from 'react';
import '../styles/project.css';

const project = [{
  title: "Poshan Tracker", description: "A diet and nutrition tracker website designed for children in Anganwadis. It helps monitor nutritional intake, track progress, and provide insights for better health planning.", img: null
}, {
  title: "SPARK'25", description: "An international technical conference organized in collaboration with IEEE, bringing together researchers, engineers, and students to discuss groundbreaking innovations and advancements in technology.", img: null
}, {
  title: "VishvashUniforms", description: "Uniforms Manufacturing and Sales.", img: null
}]
function Project() {
  return (
    <section id="project">
      <div className="project-container">
        <h1>Projects</h1>
        <div className="project-grid">
            {project.map((project,index)=>(
          <div className="project-card"  key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
      ))}
      </div>
      </div>
    </section>
  );
}

export default Project;
