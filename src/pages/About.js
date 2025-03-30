// pages/About.js
import React from "react";
import "./About.css";

import Header from "../components/Header";

function About({ setCursorVariant }) {
  return (
    <div className="About">
      <Header setCursorVariant={setCursorVariant} />

      <div className="content">
        <h2>About</h2>
        <p>This is the About page.</p>
      </div>
    </div>
  );
}

export default About;
