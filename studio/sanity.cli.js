import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "r6eczhfp",
    dataset: "production",
  },
  // Deployed to https://content-editor.sanity.studio
  studioHost: "content-editor",
  deployment: {
    appId: "f0ijnzx54s66zuh99l1kosvs",
    autoUpdates: true,
  },
});
