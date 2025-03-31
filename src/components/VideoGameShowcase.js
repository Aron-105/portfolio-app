import React from "react";
import "./VideoGameShowcase.css";
import { Link } from "react-router-dom";

function VideoGameShowcase({ setCursorVariant }) {
  return (
    <div className="video-game-showcase">
      <div className="video-description">
        <h2>Gamedev Journey</h2>
        <p>
          Recently, I set a goal for myself to make a video game. As I make progress, I'll be documenting my journey through a devlog series. Stay tuned for updates!
        </p>
        <div className="view-devlog">
          <Link
            to="/devlog"
            className="devlog-button"
            onMouseEnter={() => setCursorVariant("link")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Read the Devlog
          </Link>
        </div>
      </div>
      <div className="video-content">
        <video
          className="showcase-video"
          src={process.env.PUBLIC_URL + "/assets/video-game-showcase.mp4"}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
}

export default VideoGameShowcase;
