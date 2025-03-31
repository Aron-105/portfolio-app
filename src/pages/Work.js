// pages/Work.js
import React, { useEffect } from "react";
import "./Work.css";

import Header from "../components/Header";

import ProjectThumbnail from "../components/ProjectThumbnail";

function Work({ setCursorVariant }) {
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
    }
  ];

  return (
    <div className="Work">
      <Header setCursorVariant={setCursorVariant} />

      <div className="hero">
        <div className="title">
          <h3 class="side-text">Digital</h3>
          <h1>projects</h1>
          <h3 class="side-text">Portfolio</h3>
        </div>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <ProjectThumbnail
            setCursorVariant={setCursorVariant}
            key={index}
            link={project.link}
            src={project.src}
            src2={project.src2}
            splash={project.splash}
            variant="work"
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
