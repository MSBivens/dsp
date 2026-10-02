/**
 * Client-safe helpers for Sanity photos: URLs from Sanity's image CDN and
 * crop focus from the Studio hotspot.
 */
import { createImageUrlBuilder } from "@sanity/image-url";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "./sanity-config";

const builder = createImageUrlBuilder({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
});

// Focus used when a photo has no hotspot set in the Studio.
const DEFAULT_OBJECT_POSITION = "center 25%";

/** Base CDN URL for a photo, honoring any crop set in the Studio. */
export function photoSrc(photo) {
  return photo?.asset ? builder.image(photo).url() : null;
}

/**
 * next/image loader: Sanity's CDN resizes and picks the format, so Vercel's
 * image optimization isn't used.
 */
export function sanityLoader({ src, width, quality }) {
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality || 75));
  url.searchParams.set("auto", "format");
  return url.toString();
}

/** width/height props for next/image, after any Studio crop. */
export function photoDimensions(photo) {
  const { width = 800, height = 600 } = photo?.dimensions ?? {};
  const crop = photo?.crop ?? {};
  return {
    width: Math.round(width * (1 - (crop.left ?? 0) - (crop.right ?? 0))),
    height: Math.round(height * (1 - (crop.top ?? 0) - (crop.bottom ?? 0))),
  };
}

/** CSS object-position that keeps the Studio hotspot in view when cropping. */
export function photoObjectPosition(photo) {
  const { hotspot, crop } = photo ?? {};
  if (!hotspot) return DEFAULT_OBJECT_POSITION;
  // Hotspot coordinates are relative to the original image; convert them to
  // the cropped image the CDN returns.
  const left = crop?.left ?? 0;
  const right = crop?.right ?? 0;
  const top = crop?.top ?? 0;
  const bottom = crop?.bottom ?? 0;
  const clamp = (n) => Math.min(100, Math.max(0, n));
  const x = clamp(((hotspot.x - left) / (1 - left - right)) * 100);
  const y = clamp(((hotspot.y - top) / (1 - top - bottom)) * 100);
  return `${x.toFixed(1)}% ${y.toFixed(1)}%`;
}
