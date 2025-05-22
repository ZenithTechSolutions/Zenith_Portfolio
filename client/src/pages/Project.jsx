import React from "react";
import "../styles/project.css";

const project = [
  {
    title: "Poshan Tracker",
    description:
      "A nutrition and health monitoring platform designed for children in Anganwadis. It tracks dietary intake, analyzes growth trends, and supports informed planning for improved well-being.",
  },
  {
    title: "SPARK'25",
    description:
      "An international tech symposium conducted with IEEE. It brings together experts, researchers, and students to showcase innovations and foster collaborative advancements in technology.",
  },
  {
    title: "Vishvash Uniforms",
    description:
      "A uniform manufacturing and retail solution offering customized, high-quality apparel. It serves schools, institutions, and businesses with efficient supply and design services.",
  },
];

function Project() {
  return (
    <section id="project">
      <div className="project-container">
        <h1>Projects</h1>
        <div className="project-grid">
          {project.map((project, index) => (
            <div className="project-card" key={index}>
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
