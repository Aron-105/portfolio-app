import React, { useEffect } from "react";
import "./Yearbook.css";

import Header from "../../components/Header";

function Yearbook({ setCursorVariant }) {
  useEffect(() => {
    setCursorVariant("default");
  }, [setCursorVariant]);

  return (
    <div className="Yearbook">
      <Header setCursorVariant={setCursorVariant} />

      <div className="content">
        <h2>Yearbook</h2>
      </div>
    </div>
  );
}

export default Yearbook;
