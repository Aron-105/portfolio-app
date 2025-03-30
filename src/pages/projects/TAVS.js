import React, { useEffect } from "react";
import "./TAVS.css";

import Header from "../../components/Header";

function TAVS({ setCursorVariant }) {
  useEffect(() => {
    setCursorVariant("default");
  }, [setCursorVariant]);

  return (
    <div className="TAVS">
      <Header setCursorVariant={setCursorVariant} />

      <div className="content">
        <h2>TAVS</h2>
      </div>
    </div>
  );
}

export default TAVS;
