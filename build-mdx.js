// build-mdx.js
import fs from "fs";
import path from "path";
import { compile } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";

const devlogFolder = path.join(process.cwd(), "src", "pages", "devlog");
const mdxFiles = fs
  .readdirSync(devlogFolder)
  .filter((file) => file.endsWith(".mdx"));

for (const file of mdxFiles) {
  const mdxFilePath = path.join(devlogFolder, file);
  const rawSource = fs.readFileSync(mdxFilePath, "utf8");
  const { data, content } = matter(rawSource);

  // Compile MDX using outputFormat "program" to get a complete module.
  const result = await compile(content, {
    outputFormat: "program",
    remarkPlugins: [remarkGfm],
  });

  // Get the generated code as a string.
  const compiledCode = String(result.value);

  // Extract all import lines.
  const importRegex = /^import .*;$/gm;
  const importLines = compiledCode.match(importRegex) || [];
  // Remove the extracted import lines from the compiled code.
  const nonImportCode = compiledCode.replace(importRegex, "").trim();

  // Build the module code: first, all imports, then our export.
  const componentCode = `
${importLines.join("\n")}
import * as React from "react";
//@jsxRuntime automatic @jsxImportSource react
export const meta = ${JSON.stringify(data)};

${nonImportCode}
  `;

  // Generate the output file name by replacing .mdx with .mdx.js.
  const outputFileName = file.replace(/\.mdx$/, ".mdx.js");
  const outputFilePath = path.join(devlogFolder, outputFileName);

  fs.writeFileSync(outputFilePath, componentCode);
  console.log(`Compiled: ${file} -> ${outputFileName}`);
}

console.log("All MDX files compiled successfully.");