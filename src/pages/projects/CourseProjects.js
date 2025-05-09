import React, { useEffect } from "react";
import "./CourseProjects.css";

import Header from "../../components/Header";

function CourseProjects({ setCursorVariant }) {
  useEffect(() => {
    setCursorVariant("default");
  }, [setCursorVariant]);

  return (
    <div className="Course-Projects">
      <Header setCursorVariant={setCursorVariant} />
      <div className="content">
        <h1>Course Projects</h1>
      </div>
      <h3 className="project-header">Float</h3>
      <p className="project-description">
      I worked with my team on float, a location-based social media platform with the goal of getting users more engaged with their comminities and their environment. Our main pitch deck - "Social Media just met the Real World" - aims to explain the product, what it does, as well as the validation steps we took to prove that the concept is worth pursuing. My main contribution was much of the early product ideation as well as consolidating the data we gathered into actionable insights, both on the qualitative and quantitative side. The experience I gained while working on this project shaped my skills in social media marketing and product development if we decide to pursue this further.
      </p>
      <div className="responsiveContainer">
        <iframe
          loading="lazy"
          src="https://www.canva.com/design/DAGlaTsBXJw/0CRMT9qk49jfY_IK3x3PiQ/view?embed"
          allowFullScreen
        />
      </div>
      <a
        href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGlaTsBXJw&#x2F;0CRMT9qk49jfY_IK3x3PiQ&#x2F;view?utm_content=DAGlaTsBXJw&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
        target="_blank"
        rel="noopener"
      >
        Float Pitch Deck V2
      </a>
    </div>
  );
}

export default CourseProjects;
