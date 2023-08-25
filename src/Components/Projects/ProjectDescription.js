import React, { useEffect } from "react";
import "./ProjectDescription.css";
import { ProjectsInfo } from "../StaticInfo/ProjectsInfo";
import ScrollingMenu from "../ScrollingMenu/ScrollingMenu";
import M from "materialize-css";

// import Navbar from "../Navbar/Navbar";
const ProjectDescription = (props) => {
	const { projectId, SetProjectId } = props;
	const projectDetails = ProjectsInfo[projectId];
	const toolsUsed = [];
	const handleOnBack = (event) => {
		// event.preventDefault();
		SetProjectId(null);
	};
	useEffect(() => {
        let sidenav = document.querySelector('#mobile-nav');
        let instance = M.Sidenav.init(sidenav, {});

        // Close sidenav on link click
        let links = document.querySelectorAll('.sidenav a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                instance.close();
            });
        });

    }, []);
	useEffect(() => {
		var scrollspy = document.querySelectorAll(".scrollspy");
		M.ScrollSpy.init(scrollspy, {});
	}, []);
	const ProjectTableContents = ["ProjectTitle", "ProjectOverview", "ProjectTools", "Links"];
	return (
		<><ul className="sidenav" id="mobile-nav">
		<li>&nbsp;</li>
		<li>&nbsp;</li>

		{ProjectTableContents.map((content, index) => (
			<li key={index}>
				<a href={`#${content}`}>{content}</a>
			</li>
		))}
	</ul>
			<div className="col s12 m4 l4 left-section">
				<ScrollingMenu tableContents={ProjectTableContents}></ScrollingMenu>
			</div>
			<div className="col s12 m8 l8 right-section ">
				{/* <h3 className="mobile-header">Hi, I'm Tarun Reddy</h3> */}
				<div className="container">
					<section id="ProjectTitle" className="about custom-card section scrollspy">
						<div className="profile-content">
							<h1 className="project-name">{projectDetails.title}</h1>
							<h5 className="project-intro">{projectDetails.description}</h5>
						</div>
						<div className="profile-switch">
							<a className="btn green" href={projectDetails.link}>
								Live
							</a>
						</div>
					</section>

					<section id="ProjectOverview" className="custom-card section scrollspy">
						<div className="container center">
							<img
								className=" responsive-img project-img"
								src={projectDetails.image}
								alt={projectDetails.title}
							/>
						</div>
						<h4 className="project-title">Project Overview:</h4>
						<h6 className="project-desc">{projectDetails.description}</h6>
					</section>

					<section id="ProjectTools" className="custom-card section scrollspy">
						<div className="container ">
							<h4 className="project-title">Tools Used:</h4>
							<div className="container ">
								<div className="row center skills"> {toolsUsed}</div>
							</div>
						</div>
					</section>

					<section id="Links" className="custom-card section scrollspy">
						<h4 className="project-title">Links:</h4>

						<div className=" row">
							<div className="col s12 m4 left">
								{projectDetails.link && (
									<div className="profile-switch">
										<a className="btn-large green" href={projectDetails.link}>
											Live
										</a>
									</div>
								)}
							</div>

							<div className="col s12 m4 center">
								{projectDetails.sourceCode && (
									<div className="profile-switch">
										<a
											className="btn-large green"
											href={projectDetails.sourceCode}>
											Code
										</a>
									</div>
								)}
							</div>
							<div className="col s12 m4 right">
								<div className="profile-switch">
									<button
										className="btn-large green"
										href=""
										onClick={handleOnBack}>
										Back
									</button>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default ProjectDescription;
