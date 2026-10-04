import veteran from "./veteran";
import event from "./event";
import newsletter from "./newsletter";
import timelineEntry from "./timelineEntry";
import scrapbook from "./scrapbook";
import siteSettings from "./siteSettings";
import donatePage from "./donatePage";

export const schemaTypes = [
  veteran,
  event,
  newsletter,
  timelineEntry,
  scrapbook,
  siteSettings,
  donatePage,
];

// Edited as one fixed document each, not as a list.
export const SINGLETONS = [
  { type: "siteSettings", title: "Site Settings" },
  { type: "donatePage", title: "Donate Page" },
];
