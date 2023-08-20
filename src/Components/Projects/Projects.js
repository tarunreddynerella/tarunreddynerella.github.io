import React, { useState } from 'react';
import './Project.css';
import { ProjectsInfo } from '../StaticInfo/ProjectsInfo';

function Project() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div>
      <div className="projects-container">
        {ProjectsInfo.map((project, index) => (
          <div key={index} className="card project-box">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="card-content">
              <div className="project-title">{project.title}</div>
              <div className="project-date">{project.date}</div>
              <div className="card-action project-description">{project.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
