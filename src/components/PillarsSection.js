import React from "react";
import "./PillarsSection.css";
import ScrollFadeText from "../effects/ScrollFadeText";

function PillarsSection({ setCursorVariant }) {
  return (
    <div className="pillars-section">
      <div className="icons-container">
        <div
          className="pillar-icon"
          onMouseEnter={() => setCursorVariant("link")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/marketing-icon.png"}
            alt="Marketing Icon"
          />
        </div>
        <div className="plus-sign">+</div>
        <div
          className="pillar-icon"
          onMouseEnter={() => setCursorVariant("link")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/design-icon.png"}
            alt="Design Icon"
          />
        </div>
        <div className="plus-sign">+</div>
        <div
          className="pillar-icon"
          onMouseEnter={() => setCursorVariant("link")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/tech-icon.png"}
            alt="Tech Icon"
          />
        </div>
      </div>

      <div className="text-container">
        <h2>
          <ScrollFadeText
            text="Hey, I'm Aaron Alcalde. I do Marketing + Design + Tech."
            highlightMapping={{
              marketing: "#FF6347", // Tomato
              design: "#4682B4", // Steel Blue
              tech: "#32CD32", // Lime Green
            }}
          />
        </h2>
        <p>
          I have experience and skills in Branding, Graphic Design, Frontend Web
          Development, Java, Python, Motion Design, and Media Post-production.{" "}
        </p>
      </div>
    </div>
  );
}

export default PillarsSection;
