import React, { useState } from 'react';
import './Project.css';
import { ProjectsInfo } from '../StaticInfo/ProjectsInfo';
function Project() {
  const [activeProject, setActiveProject] = useState(null);

  

  return (
    <div>
      <h2 style={{ color: '#59E2C5' }}>Projects</h2>
      <div className="projects-container">
        {ProjectsInfo.map((project, index) => (
          <div key={index} className="card project-box">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="card-content">
              {project.title} - {project.date}
            </div>
            <div className="card-action">{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
