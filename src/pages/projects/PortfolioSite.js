import React, { useEffect } from "react";
import "./PortfolioSite.css";

import Header from "../../components/Header";

function PortfolioSite({ setCursorVariant }) {
  useEffect(() => {
    setCursorVariant("default");
  }, [setCursorVariant]);

  return (
    <div className="Portfolio-Site">
      <Header setCursorVariant={setCursorVariant} />

      <div className="content">
        <h2>Portfolio Site</h2>
      </div>
    </div>
  );
}

export default PortfolioSite;
