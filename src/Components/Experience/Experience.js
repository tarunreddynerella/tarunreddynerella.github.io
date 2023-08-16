import React, { useState } from 'react';
import './Experience.css';

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      title: "Student Ambassador | University of Colorado Denver",
      date: "JAN 2023 - PRESENT",
      description: "Representing the University and assisting with student outreach, events, and activities."
    },
    {
      title: "Intern | Rinex, Entrepreneurship Cell IIT Kharagpur",
      date: "JULY 2021 - SEPT 2021",
      description: "Worked on a variety of machine learning projects, exploring and evaluating the performance of different algorithms across diverse fields and applications."
    },
    {
      title: "Intern | IIIT Hyderabad",
      date: "AUG 2020 - SEP 2020",
      description: "Utilized HTML, CSS, JAVASCRIPT, JSON, REACT and PHP to create responsive and interactive websites."
    }
  ];

  const handleExperienceClick = (index) => {
    if (selectedExperience === index) {
      setSelectedExperience(null); // Hide the details if the same card is clicked again
    } else {
      setSelectedExperience(index); // Show the details for the clicked card
    }
  };

  return (
    <div>
    <h2 style={{ color: '#59E2C5' }}>Experience</h2>
    <div className="experience-container">
      {experiences.map((exp, index) => (
        <div key={index} className="card experience-card hoverable">
          <div className="card-content" onClick={() => handleExperienceClick(index)}>
            <span className="card-title">{exp.title}</span>
            <p>{exp.date}</p>
          </div>
          <div className={`card-action ${selectedExperience === index ? 'active' : ''}`}>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Experience;
