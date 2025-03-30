import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CarouselWithCustomCursor.css";

export default function CarouselWithCustomCursor({
  setCursorVariant,
  images,
  links,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const [animating, setAnimating] = useState(false);
  const navigate = useNavigate();

  const changeSlide = (newIndex) => {
    if (newIndex === currentSlide) return;
    setPrevSlide(currentSlide);
    setCurrentSlide(newIndex);
    setAnimating(true);
    // Duration (500ms) should match your CSS animation duration.
    setTimeout(() => {
      setPrevSlide(null);
      setAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    const newIndex = (currentSlide - 1 + images.length) % images.length;
    changeSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentSlide + 1) % images.length;
    changeSlide(newIndex);
  };

  const handleClick = (e) => {
    const carouselRect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - carouselRect.left;
    const oneThird = carouselRect.width / 3;
    const twoThirds = oneThird * 2;
    if (mouseX < oneThird) {
      handlePrev();
    } else if (mouseX >= oneThird && mouseX < twoThirds) {
      // Instead of a placeholder, navigate to the route corresponding to the current image.
      navigate(links[currentSlide]);
    } else {
      handleNext();
    }
  };

  const handleMouseMove = (e) => {
    const carouselRect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - carouselRect.left;
    const oneThird = carouselRect.width / 3;
    const twoThirds = oneThird * 2;
    if (mouseX < oneThird) {
      setCursorVariant("carousel-left");
    } else if (mouseX >= oneThird && mouseX < twoThirds) {
      setCursorVariant("carousel-middle");
    } else {
      setCursorVariant("carousel-right");
    }
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => setCursorVariant("carousel-middle")}
      onMouseLeave={() => setCursorVariant("default")}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {prevSlide !== null && (
        <img
          className="carousel-image fade-out"
          src={images[prevSlide]}
          alt={`Slide ${prevSlide + 1}`}
        />
      )}
      <img
        className={`carousel-image ${animating ? "fade-in" : ""}`}
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
      />

      <div className="carousel-indicators">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`indicator-pill ${idx === currentSlide ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              changeSlide(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
}
