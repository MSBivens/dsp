/**
 * Date helpers. The chapter is in Moscow, Idaho, so "today" is Pacific time
 * regardless of where the visitor or server is.
 */
const pacificDateFormat = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Los_Angeles",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

/** Today's date in Pacific time as "YYYY-MM-DD", comparable with Sanity date fields. */
export function pacificToday() {
  return pacificDateFormat.format(new Date());
}

/** Parses a "YYYY-MM-DD" date as local midnight, avoiding a UTC day shift. */
export function parseDate(dateString) {
  return new Date(dateString.replace(/-/g, "/"));
}
