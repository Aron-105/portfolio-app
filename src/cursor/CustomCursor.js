import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

function CustomCursor({ cursorVariant }) {
  const cursorRef = useRef(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const requestIdRef = useRef();

  useEffect(() => {
    const moveCursor = (e) => {
      lastPos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cancelAnimationFrame(requestIdRef.current);
        requestIdRef.current = requestAnimationFrame(() => {
          const { width, height } = cursorRef.current.getBoundingClientRect();
          cursorRef.current.style.transform = `translate3d(${e.clientX - width / 2}px, ${e.clientY - height / 2}px, 0)`;
        });
      }
    };

    const updateCursorOnScroll = () => {
      if (cursorRef.current) {
        const { x, y } = lastPos.current;
        cancelAnimationFrame(requestIdRef.current);
        requestIdRef.current = requestAnimationFrame(() => {
          const { width, height } = cursorRef.current.getBoundingClientRect();
          cursorRef.current.style.transform = `translate3d(${x - width / 2}px, ${y - height / 2}px, 0)`;
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("scroll", updateCursorOnScroll);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", updateCursorOnScroll);
      cancelAnimationFrame(requestIdRef.current);
    };
  }, []);

  return (
    <div ref={cursorRef} className={`custom-cursor ${cursorVariant}`}>
      {cursorVariant === "carousel-left" && <span className="arrow">&#129104;</span>}
      {cursorVariant === "carousel-right" && <span className="arrow">&#129106;</span>}
      {cursorVariant === "carousel-middle" && <span className="view-text"> [ view ]</span>}
      {cursorVariant === "project-item" && <span className="view-text"> open </span>}
    </div>
  );
}

export default CustomCursor;
