import React, { useState, useEffect } from "react";
import "./FrontPage.css";
import CarouselWithCustomCursor from "./CarouselWithCustomCursor";

function FrontPage({ setCursorVariant }) {
  const [scrollY, setScrollY] = useState(0);

  const splashImages = [
    "/assets/splash_images/titleimage.png",
    "/assets/splash_images/birds_splash.png",
    "/assets/splash_images/tavs_splash.jpg",
  ];

  const splashLinks = [
    "/About",
    "/projects/CourseProjects",
    "/projects/TAVS",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark overlay for the pinned front page
  const maxDark = 0.8;
  const alpha = Math.min(scrollY / 300, maxDark);

  // Thresholds for shrinking/translating the carousel only
  const thresholdStart = window.innerHeight * 0.5; // e.g. half the viewport
  const thresholdEnd = window.innerHeight * 0.75; // e.g. 3/4 the viewport

  let carouselScale = 1;
  let carouselTranslateY = 0;
  if (scrollY > thresholdStart) {
    const progress = Math.min(
      (scrollY - thresholdStart) / (thresholdEnd - thresholdStart),
      1
    );
    carouselScale = 1 - progress * 0.1; // shrink from 1 to 0.9
    carouselTranslateY = progress * 50; // translate upward up to 50px
  }

  const carouselTransformStyle = {
    transform: `translateY(-${carouselTranslateY}px) scale(${carouselScale})`,
  };

  return (
    <div className="front-page">
      {/* pinned-content holds the entire hero section (header + carousel) */}
      <div className="pinned-content" style={{ "--dark-overlay": alpha }}>
        <main className="splash">
          {/* Only the carousel is transformed (shrink + translate) */}
          <div className="carousel-wrapper" style={carouselTransformStyle}>
            <CarouselWithCustomCursor
              setCursorVariant={setCursorVariant}
              images={splashImages}
              links={splashLinks}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default FrontPage;
