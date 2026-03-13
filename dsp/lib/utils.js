import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// This helps merge Tailwind classes safely
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Next.js-safe check for Iframe
export const isIframe = typeof window !== "undefined" && window.self !== window.top;