import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import ScrollingMenu from "./Components/ScrollingMenu/ScrollingMenu";
import ProjectDescription from "./Components/Projects/ProjectDescription";
import M from "materialize-css";

function App() {
	const homeTableContents = ["About", "Skills", "Education", "Projects", "Experience", "Contact"];

	useEffect(() => {
        const scrollspyElements = document.querySelectorAll(".scrollspy");
        const instances = M.ScrollSpy.init(scrollspyElements, {scrollOffset: 64}); 
        
        instances.forEach(instance => instance.destroy());
        M.ScrollSpy.init(scrollspyElements, {scrollOffset: 64});
        
        return () => {
            instances.forEach(instance => instance.destroy());
        };
    }, []);
	const [projectId, SetProjectId] = useState(null);

	return (
		<>
			<CustomCursor></CustomCursor>
			<div className="App">
				<Navbar></Navbar>
				
				<div className="row">
					{projectId && (
						<>
							<ProjectDescription projectId={projectId} SetProjectId={SetProjectId} />

							<div className="fixed-action-btn">
								<a className="btn-floating btn-large red" href="#NavBar">
									<i className="large material-icons">arrow_upward</i>
								</a>
							</div>
						</>
					)}
					{!projectId && (
						<><ul className="sidenav" id="mobile-nav">
						<li>&nbsp;</li>
						<li>&nbsp;</li>
	
						{homeTableContents.map((content, index) => (
							<li key={index}>
								<a href={`#${content}`}>{content}</a>
							</li>
						))}
						</ul>
							<div className="col s12 m4 l4 left-section">
								<ScrollingMenu tableContents={homeTableContents}></ScrollingMenu>
								
							</div>
							<div className="col s12 m8 l8 right-section ">
								{/* <h3 className="mobile-header">Hi, I'm Tarun Reddy</h3> */}
								<div className="container">
									<section
										id="About"
										className="about custom-card section scrollspy">
										<About></About>
									</section>

									<section id="Skills" className="custom-card section scrollspy">
										<Skills></Skills>
									</section>

									<section
										id="Education"
										className="custom-card section scrollspy">
										<Education></Education>
									</section>

									<section
										id="Projects"
										className="custom-card section scrollspy">
										<Projects  SetProjectId={SetProjectId}></Projects>
									</section>

									<section
										id="Experience"
										className="custom-card section scrollspy">
										<Experience></Experience>
									</section>

									<section id="Contact" className="custom-card section scrollspy">
										<Contact></Contact>
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

export default App;
