import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact</h3>
          <p>
            Email:{" "}
            <a href="mailto:aaronalcalde105@gmail.com">AaronAlcalde105@gmail.com</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/aaron-alcalde"
              target="_blank"
              rel="noopener noreferrer"
            >
              aaron-alcalde
            </a>
          </p>
        </div>
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form>
            <div className="form-columns">
              <div className="form-left">
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="text" name="subject" placeholder="Subject" />
                <button type="submit">Send</button>
              </div>
              <div className="form-right">
                <textarea name="message" placeholder="Message"></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
