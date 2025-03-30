import React from "react";
import "./RecentProjects.css";
import ProjectThumbnail from "./ProjectThumbnail";

function RecentProjects({ setCursorVariant }) {
  const projects = [
    {
      link: "/projects/PortfolioSite",
      src: "/assets/thumbnails/portfolio-main.png",
      src2: "/assets/thumbnails/portfolio-overlay.png",
      splash: "Portfolio Website",
    },
    {
      link: "/projects/CourseProjects",
      src: "/assets/thumbnails/courseprojects-main.png",
      src2: "/assets/thumbnails/courseprojects-overlay.png",
      splash: "Course Projects",
    },
    {
      link: "/projects/TAVS",
      src: "/assets/thumbnails/tavs-main.png",
      src2: "/assets/thumbnails/tavs-overlay.png",
      splash: "Sandia Labs",
    },
    {
      link: "/projects/Yearbook",
      src: "/assets/thumbnails/yearbook-temp.png",
      src2: "/assets/thumbnails/yearbook-temp.png",
      splash: "Senior Yearbook",
    },
  ];

  return (
    <div className="recent-projects">
      <div className="project-description">
        <h2>Recent Projects</h2>
        <p>
          Here are a few projects that I've worked on recently.
          You can find more details about each project by clicking on them, or by visiting the full work page.
        </p>
        <div className="view-all">
          <a
            href="/work"
            className="view-all-button"
            onMouseEnter={() => setCursorVariant("link")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            View All Work
          </a>
        </div>
      </div>
      <div className="projects-content">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectThumbnail
              setCursorVariant={setCursorVariant}
              key={index}
              link={project.link}
              src={project.src}
              src2={project.src2}
              splash={project.splash}
              variant="recent"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;
