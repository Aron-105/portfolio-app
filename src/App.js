import "./App.css";

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import CustomCursor from "./cursor/CustomCursor";
import ScrollToTop from "./hooks/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

import Devlog from "./pages/Devlog";


import PortfolioSite from "./pages/projects/PortfolioSite";
import CourseProjects from "./pages/projects/CourseProjects";
import TAVS from "./pages/projects/TAVS";
import Yearbook from "./pages/projects/Yearbook";

function App() {
  const [cursorVariant, setCursorVariant] = useState("default");

  return (
    <div className="App">

      <ScrollToTop />

      <CustomCursor cursorVariant={cursorVariant} />

      <Routes>
        {/* MAIN PAGES */}
        <Route
          path="/"
          element={<Home setCursorVariant={setCursorVariant} />}
        />
        <Route
          path="/about"
          element={<About setCursorVariant={setCursorVariant} />}
        />
        <Route
          path="/work"
          element={<Work setCursorVariant={setCursorVariant} />}
        />
        <Route
          path="/contact"
          element={<Contact setCursorVariant={setCursorVariant} />}
        />

        {/* DEVLOG PAGE */}
        <Route
          path="/devlog"
          element={<Devlog setCursorVariant={setCursorVariant}/>}
        />

        {/* PROJECT PAGES */}
        <Route
          path="/projects/PortfolioSite"
          element={<PortfolioSite setCursorVariant={setCursorVariant} />}
        />
        <Route
          path="/projects/CourseProjects"
          element={<CourseProjects setCursorVariant={setCursorVariant} />}
        />
        <Route
          path="/projects/TAVS"
          element={<TAVS setCursorVariant={setCursorVariant} />}
        />
        <Route
          path="/projects/Yearbook"
          element={<Yearbook setCursorVariant={setCursorVariant} />}
        />
      </Routes>
    </div>
  );
}

export default App;
