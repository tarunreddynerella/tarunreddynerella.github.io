import React, { useState } from "react";
import "./Experience.css";
import { ExperiencesInfo } from "../StaticInfo/ExperienceInfo";
function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleExperienceClick = (index) => {
    if (selectedExperience === index) {
      setSelectedExperience(null); // Hide the details if the same card is clicked again
    } else {
      setSelectedExperience(index); // Show the details for the clicked card
    }
  };

  return (
    <div>
      <h2 style={{ color: "#59E2C5" }}>Experience</h2>
      <div className="experience-container">
        {ExperiencesInfo.map((exp, index) => (
          <div key={index} className="card experience-card hoverable">
            <div
              className="card-content"
              onClick={() => handleExperienceClick(index)}
            >
              <span className="card-title">{exp.title}</span>
              <p>{exp.date}</p>
            </div>
            <div
              className={`card-action ${
                selectedExperience === index ? "active" : ""
              }`}
            >
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
