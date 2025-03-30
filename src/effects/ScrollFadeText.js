// ScrollFadeText.js
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

function ScrollFadeText({ text, className, highlightMapping }) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ whiteSpace: "normal", display: "inline" }}
    >
      {words.map((word, index) => {
        // Remove punctuation for matching
        const cleanWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
        const color = highlightMapping && highlightMapping[cleanWord];
        return (
          <motion.span
            key={index}
            variants={wordVariants}
            style={{
              display: "inline",
              marginRight: "8px",
              color: color || "inherit",
            }}
          >
            {word + " "}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

export default ScrollFadeText;
