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
        <h2>Course Projects</h2>
      </div>
    </div>
  );
}

export default CourseProjects;
