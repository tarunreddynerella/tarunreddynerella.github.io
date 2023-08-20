import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Navbar/Navbar";
import CustomCursor from "./Components/CustomCursor/CustomCursor";

function App() {
  const [activeItem, setActiveItem] = useState("About");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "About",
        "Skills",
        "Education",
        "Projects",
        "Experience",
        "Contact",
      ];
      let currentSection = activeItem; // Use the current active item as the default

      for (const section of sections) {
        const element = document.getElementById(section);
        const rect = element.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = section;
          break;
        }
      }

      setActiveItem(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeItem]); // Add activeItem as a dependency

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    setActiveItem(sectionId);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <CustomCursor />

      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s12 m4 l4 ">
              <div className="pinned">
                <p className="flow-text">Hi, I'm</p>
                <h3 className="header">Tarun Reddy</h3>

                <ul className="collection">
                  {[
                    "About",
                    "Skills",
                    "Education",
                    "Projects",
                    "Experience",
                    "Contact",
                  ].map((item) => (
                    <li
                      key={item}
                      className={`collection-item ${
                        activeItem === item ? "active" : ""
                      }`}
                      onClick={() => scrollToSection(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col s12 m8 l8 right-section">
              <section id="About" className="custom-card">
                <About />
              </section>

              <section id="Skills" className="custom-card">
                <Skills />
              </section>

              <section id="Education">
                <Education />
              </section>

              <section id="Projects">
                <Projects />
              </section>

              <section id="Experience">
                <Experience />
              </section>

              <section id="Contact" className="custom-card">
                <Contact />
              </section>
            </div>
          </div>
        </div>
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large" href="#!" onClick={scrollToTop}>
            <i className="large material-icons">arrow_upward</i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
