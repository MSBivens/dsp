import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Delta Sigma Phi – Gamma Iota",

  projectId: "r6eczhfp",
  dataset: "production",

  plugins: [
    structureTool(),
    // GROQ query playground, handy for checking content during development.
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
