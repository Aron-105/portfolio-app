// pages/Home.js
import React from "react";
import "./Home.css";

import Header from "../components/Header";

import FrontPage from "../components/FrontPage";
import PillarsSection from "../components/PillarsSection";
import RecentProjects from "../components/RecentProjects";
import VideoGameShowcase from "../components/VideoGameShowcase";
import Footer from "../components/Footer";

function Home({ setCursorVariant }) {
  return (
    <div className="Home">
      <Header setCursorVariant={setCursorVariant} />

      <FrontPage setCursorVariant={setCursorVariant} />

      <div className="rest-of-site">
        <PillarsSection setCursorVariant={setCursorVariant} />

        <RecentProjects setCursorVariant={setCursorVariant} />

        <VideoGameShowcase setCursorVariant={setCursorVariant} />

        <Footer />

      </div>
    </div>
  );
}

export default Home;
