import React, { useState } from "react";
import "./Education.css";
import { EducationInfo } from "../StaticInfo/EducationInfo";

function Education() {
  const [selectedEducation, setSelectedEducation] = useState(null);

  const handleEducationClick = (index) => {
    if (selectedEducation === index) {
      setSelectedEducation(null);
    } else {
      setSelectedEducation(index);
    }
  };

  return (
    <div>
      <h2 style={{ color: "#59E2C5" }}>Education</h2>
      <div className="education-container">
        {EducationInfo.map((edu, index) => (
          <div key={index} className="card education-card hoverable">
            <div
              className="card-content"
              onClick={() => handleEducationClick(index)}
            >
              <span className="card-title">{edu.title}</span>
              <p>{edu.institution}</p>
              <p>{edu.date}</p>
            </div>
            <div
              className={`card-action ${
                selectedEducation === index ? "active" : ""
              }`}
            >
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
