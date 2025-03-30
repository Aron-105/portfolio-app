// pages/Contact.js
import React from "react";
import "./Contact.css";

import Header from "../components/Header";

function Contact({ setCursorVariant }) {
  return (
    <div className="Contact">
      <Header setCursorVariant={setCursorVariant} />

      <div className="content">
        <h2>Contact</h2>
        <p>This is the Contact page.</p>
      </div>
    </div>
  );
}

export default Contact;
