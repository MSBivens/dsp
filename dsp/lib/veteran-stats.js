/**
 * Figures for the Veteran Stories stats bar, calculated from veteran data.
 */

/** Number of distinct branches across all veterans. */
export function countBranches(veterans) {
  return new Set(veterans.flatMap((v) => v.branches ?? [])).size;
}

/**
 * Sum of every veteran's years of service, from each "YYYY-YYYY" range in
 * their years_of_service text (e.g. "1946-1948 (Navy); 1953-1974 (Army)" is
 * 2 + 21). "present" counts as the current year; text with no range adds 0.
 */
export function combinedYearsOfService(veterans) {
  const currentYear = new Date().getFullYear();
  let total = 0;
  for (const { years_of_service: text } of veterans) {
    for (const [, start, end] of (text ?? "").matchAll(
      /(\d{4})\s*[-–—]\s*(\d{4}|present)/gi,
    )) {
      const endYear = /present/i.test(end) ? currentYear : Number(end);
      total += Math.max(0, endYear - Number(start));
    }
  }
  return total;
}

/** Rounds down to the nearest ten with a "+", e.g. 218 → "210+". */
export function roundedDownLabel(n) {
  return n >= 10 ? `${Math.floor(n / 10) * 10}+` : String(n);
}
