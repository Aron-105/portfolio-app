import React from "react";
import { Link } from "react-router-dom";

import "./ProjectThumbnail.css";

function ProjectThumbnail({ setCursorVariant, src, src2, link, splash, variant }) {
  const splitSplashText = (text) => {
    if (!text) return ["", ""];
    const mid = Math.floor(text.length / 2);
    let leftSpace = text.lastIndexOf(" ", mid);
    let rightSpace = text.indexOf(" ", mid);
    let splitIndex;
    if (leftSpace === -1) {
      splitIndex = rightSpace;
    } else if (rightSpace === -1) {
      splitIndex = leftSpace;
    } else {
      splitIndex = mid - leftSpace <= rightSpace - mid ? leftSpace : rightSpace;
    }
    if (splitIndex === -1) {
      splitIndex = mid;
    }
    let leftText = text.substring(0, splitIndex).trim();
    let rightText = text.substring(splitIndex).trim();
    return [leftText, rightText];
  };

  const [leftSplash, rightSplash] = splitSplashText(splash);

  return (
    <div
      className={`project-item ${
        variant === "work" ? "work-style" : "recent-style"
      }`}
      onMouseEnter={() => setCursorVariant("project-item")}
      onMouseLeave={() => setCursorVariant("default")}
    >
      <Link to={link}>
        <img src={src} alt="Project Thumbnail" />
        {src2 && (
          <img
            src={src2}
            alt="Project Thumbnail Overlay"
            className="overlay-image"
          />
        )}
        {splash && (
          <>
            <div className="splash-text left">{leftSplash}</div>
            <div className="splash-text right">{rightSplash}</div>
          </>
        )}
      </Link>
    </div>
  );
}

export default ProjectThumbnail;
