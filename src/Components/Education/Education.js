import React from 'react';
import './Education.css';

function Education() {
  return (
    <div>
      <h2 style={{ color: '#59E2C5' }}>Education</h2>
      <div className="education-container">
        {/* First Card */}
        <div className="card education-card">
          <div className="card-content">
            <span className="card-title">Master of Science | Computer Science</span>
            <p>University of Colorado Denver | Denver</p>
            <p>AUG 2022 - PRESENT</p>
          </div>
          <div className="card-action">
            <p>Course Works: Big Data Systems, Artificial Intelligence, Deep Learning, Algorithms</p>
          </div>
        </div>

        {/* Second Card */}
        <div className="card education-card">
          <div className="card-content">
            <span className="card-title">Bachelor of Technology | Computer Science and Engineering</span>
            <p>JB Institute of Engineering and Technology | Hyderabad</p>
            <p>AUG 2018 - JUNE 2022</p>
          </div>
          <div className="card-action">
            <p>Cumulative GPA: 8.31/10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
