import React from "react";
import "./About.css";
import { AboutInfo } from "../StaticInfo/AboutInfo";
function About() {
  return (
    <section id="about">
      <div>
        <h1></h1>
        {AboutInfo.map((info, index) => (
          <div key={index} className="about-section">
            {/* <h3 style={{ color: "#CCD6F6" }}>{info.label}</h3> */}
            <p className="about-desc">{info.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
