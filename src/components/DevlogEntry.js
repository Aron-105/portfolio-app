import React from "react";
import "./DevlogEntry.css";

// This function treats the date string as a local date.
function parseLocalDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function DevlogEntry({ author, date, title, children }) {
  const localDate = parseLocalDate(date);
  const formattedDate = localDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="devlog-entry">
      <div className="entry-header">
        <h3 className="entry-title">{title}</h3>
        <div className="entry-meta">
          <span className="entry-author">By {author}</span>
          <span className="entry-date"> | Published {formattedDate}</span>
        </div>
      </div>
      <div className="entry-content">{children}</div>
    </div>
  );
}

export default DevlogEntry;
