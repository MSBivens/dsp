import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes, SINGLETONS } from "./schemaTypes";

const singletonTypes = new Set(SINGLETONS.map(({ type }) => type));
// Singletons can be edited and published, but not created, duplicated or deleted.
const SINGLETON_ACTIONS = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  name: "default",
  title: "Delta Sigma Phi – Gamma Iota",

  projectId: "r6eczhfp",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.documentTypeListItem("veteran").title("Veterans"),
            S.documentTypeListItem("event").title("Events"),
            S.documentTypeListItem("newsletter").title("Gamma Eye"),
            S.documentTypeListItem("timelineEntry").title("History Timeline"),
            S.documentTypeListItem("scrapbook").title("Scrapbooks"),
            S.divider(),
            ...SINGLETONS.map(({ type, title }) =>
              S.listItem()
                .title(title)
                .id(type)
                .schemaType(type)
                .child(S.document().schemaType(type).documentId(type).title(title)),
            ),
          ]),
    }),
    // GROQ query playground, handy for checking content during development.
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (actions, { schemaType }) =>
      singletonTypes.has(schemaType)
        ? actions.filter(({ action }) => action && SINGLETON_ACTIONS.has(action))
        : actions,
  },
});
