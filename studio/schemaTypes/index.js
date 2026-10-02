import veteran from "./veteran";
import event from "./event";
import siteSettings from "./siteSettings";
import donatePage from "./donatePage";

export const schemaTypes = [veteran, event, siteSettings, donatePage];

// Edited as one fixed document each, not as a list.
export const SINGLETONS = [
  { type: "siteSettings", title: "Site Settings" },
  { type: "donatePage", title: "Donate Page" },
];
