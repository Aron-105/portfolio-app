// Devlog.js
import React, { useEffect } from "react";
import "./Devlog.css";
import Header from "../components/Header";
import DevlogEntry from "../components/DevlogEntry";

function Devlog({ setCursorVariant }) {
  useEffect(() => {
    setCursorVariant("default");
  }, [setCursorVariant]);

  // Dynamically import all compiled MDX files in the devlog folder.
  // This uses Webpack's require.context – adjust the path if needed.
  const req = require.context("./devlog", false, /\.mdx\.js$/);
  const posts = req.keys().map((key) => {
    const mod = req(key);
    const slug = key.replace("./", "").replace(".mdx.js", "");
    return { slug, Component: mod.default, meta: mod.meta };
  });

  // Sort posts in descending order by date (most recent first)
  posts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

  return (
    <div className="Devlog">
      <Header setCursorVariant={setCursorVariant} />
      <div className="content">
        <h1>Official Development Blog</h1>
        {posts.map(({ slug, Component, meta }) => (
          <DevlogEntry
            key={slug}
            author={meta.author}
            date={meta.date}
            title={meta.title}
          >
            <Component />
          </DevlogEntry>
        ))}
      </div>
    </div>
  );
}

export default Devlog;
