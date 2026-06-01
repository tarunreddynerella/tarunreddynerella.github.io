import React, { useEffect, useState } from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import CustomCursor from "../CustomCursor/CustomCursor";
import ScrollingMenu from "../ScrollingMenu/ScrollingMenu";
import ProjectDescription from "../Projects/ProjectDescription";
import M from "materialize-css";

function V1Portfolio() {
  const homeTableContents = [
    "About",
    "Skills",
    "Education",
    "Projects",
    "Experience",
    "Contact",
  ];

  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    const scrollspyElements = document.querySelectorAll(".scrollspy");
    const instances = M.ScrollSpy.init(scrollspyElements, { scrollOffset: 64 });

    return () => {
      instances.forEach((instance) => instance.destroy());
    };
  }, [projectId]);

  return (
    <>
      <CustomCursor />
      <div className="v1-page App">
        <Navbar />

        <div className="row">
          {projectId && (
            <ProjectDescription
              projectId={projectId}
              SetProjectId={setProjectId}
            />
          )}
          <div className="fixed-action-btn">
            <button
              className="btn-floating btn-large green"
              onClick={() => window.scrollTo(0, 0)}
              type="button"
              aria-label="Scroll to top"
            >
              <i className="large material-icons">arrow_upward</i>
            </button>
          </div>
          {!projectId && (
            <>
              <ul className="sidenav" id="mobile-nav">
                <li>&nbsp;</li>
                <li>&nbsp;</li>

                {homeTableContents.map((content, index) => (
                  <li key={index}>
                    <a href={`#${content}`}>{content}</a>
                  </li>
                ))}
              </ul>
              <div className="col s12 m4 l4 left-section">
                <ScrollingMenu tableContents={homeTableContents} />
              </div>
              <div className="col s12 m8 l8 right-section ">
                <div className="container">
                  <section
                    id="About"
                    className="about custom-card section scrollspy"
                  >
                    <About />
                  </section>

                  <section
                    id="Skills"
                    className="custom-card section scrollspy"
                  >
                    <Skills />
                  </section>

                  <section
                    id="Education"
                    className="custom-card section scrollspy"
                  >
                    <Education />
                  </section>

                  <section
                    id="Projects"
                    className="custom-card section scrollspy"
                  >
                    <Projects SetProjectId={setProjectId} />
                  </section>

                  <section
                    id="Experience"
                    className="custom-card section scrollspy"
                  >
                    <Experience />
                  </section>

                  <section
                    id="Contact"
                    className="custom-card section scrollspy"
                  >
                    <Contact />
                  </section>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default V1Portfolio;
