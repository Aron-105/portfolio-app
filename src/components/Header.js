// Header.js
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import useScrollPosition from "../hooks/useScrollPosition";

function Header({ setCursorVariant }) {
  const scrollY = useScrollPosition();

  // Scroll thresholds for shrinking
  const shrinkStart = 100;
  const shrinkEnd = 250;
  const minScale = 0.5;

  function getLogoScale() {
    if (scrollY <= shrinkStart) {
      return 1;
    } else if (scrollY >= shrinkEnd) {
      return minScale;
    } else {
      const progress = (scrollY - shrinkStart) / (shrinkEnd - shrinkStart);
      return 1 - progress * (1 - minScale);
    }
  }
  const logoScale = getLogoScale();

  const basePillHeight = 100;
  const minPillHeight = 51;
  const pillHeight = Math.max(basePillHeight * logoScale, minPillHeight);

  return (
    <header className="header">
      <div
        className="pill logo-pill"
        onMouseEnter={() => setCursorVariant("link")}
        onMouseLeave={() => setCursorVariant("default")}
        style={{ height: `${pillHeight}px` }}
      >
        <Link to="/">
          <img
            className="logo-img"
            src="/assets/branding/wordmark_white.png"
            alt="Logo"
            style={{ transform: `scale(${logoScale})` }}
          />
        </Link>
        <span className="brand-name">Marketing | Design | Tech</span>
      </div>

      <div
        className="pill nav-pill"
        onMouseEnter={() => setCursorVariant("link")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        <nav className="nav-links">
          <Link to="/" className="nav-link-wrapper">Home</Link>
          <Link to="/about" className="nav-link-wrapper">About</Link>
          <Link to="/work" className="nav-link-wrapper">Work</Link>
          <Link to="/contact" className="nav-link-wrapper">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
