"use client";
/**
 * ScrapbookZoom
 * Full-screen view of one scrapbook page for reading clippings and
 * handwriting. The page starts fitted to the screen; clicking it (or +/−)
 * zooms in around that spot, and a zoomed page pans by dragging, scrolling,
 * or the arrow keys. Escape or the close button returns to the viewer.
 * Used in: components/history/ScrapbookViewer
 */
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, LoaderCircle, X, ZoomIn, ZoomOut } from "lucide-react";
import { photoSrc, sanityLoader } from "@lib/sanity-image";

const ZOOM_LEVELS = [1, 1.5, 2, 3, 4];
// Level a click on a fitted page jumps to.
const CLICK_ZOOM = 2;
// Space kept around a fitted page (px on each side).
const FIT_MARGIN = 16;
// Pointer movement (px) that turns a click into a drag.
const DRAG_THRESHOLD = 5;
const ARROW_PAN = 120;

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

export default function ScrapbookZoom({ page, alt, pageNumber, pageCount, onPrev, onNext, onClose }) {
  const dialogRef = useRef(null);
  const scrollRef = useRef(null);
  const closeRef = useRef(null);
  const anchorRef = useRef(null);
  const panRef = useRef(null);
  const movedRef = useRef(false);
  const [size, setSize] = useState({ w: 0, h: 0 });

  // Zoom and loading state belong to one page; turning the page resets them.
  const [zoomState, setZoomState] = useState({ key: page.key, level: 1 });
  const zoom = zoomState.key === page.key ? zoomState.level : 1;
  const [loadedKey, setLoadedKey] = useState(null);
  const loaded = loadedKey === page.key;

  const { width: naturalW = 3, height: naturalH = 4 } = page.dimensions ?? {};
  const aspect = naturalW / naturalH;
  const fitW = Math.max(0, Math.min(size.w - FIT_MARGIN * 2, (size.h - FIT_MARGIN * 2) * aspect));
  const imgW = fitW * zoom;
  const imgH = imgW / aspect;
  const maxZoom = ZOOM_LEVELS[ZOOM_LEVELS.length - 1];

  // Lock page scrolling, move focus into the dialog, and restore both on close.
  useEffect(() => {
    const previous = document.activeElement;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      root.style.overflow = previousOverflow;
      previous?.focus?.();
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    const observer = new ResizeObserver(([entry]) => {
      setSize({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // After a zoom change, scroll so the spot that was clicked (or the centre)
  // stays under the pointer.
  useLayoutEffect(() => {
    const anchor = anchorRef.current;
    const el = scrollRef.current;
    if (!anchor || !el) return;
    anchorRef.current = null;
    const left = Math.max(0, (size.w - imgW) / 2);
    const top = Math.max(0, (size.h - imgH) / 2);
    el.scrollLeft = left + anchor.fx * imgW - anchor.cx;
    el.scrollTop = top + anchor.fy * imgH - anchor.cy;
  }, [zoom, imgW, imgH, size]);

  function zoomTo(level, clientX, clientY) {
    const el = scrollRef.current;
    const next = clamp(level, 1, maxZoom);
    if (!el || next === zoom) return;
    const rect = el.getBoundingClientRect();
    const cx = (clientX ?? rect.left + rect.width / 2) - rect.left;
    const cy = (clientY ?? rect.top + rect.height / 2) - rect.top;
    const imgLeft = Math.max(0, (size.w - imgW) / 2) - el.scrollLeft;
    const imgTop = Math.max(0, (size.h - imgH) / 2) - el.scrollTop;
    anchorRef.current = {
      fx: clamp((cx - imgLeft) / imgW, 0, 1),
      fy: clamp((cy - imgTop) / imgH, 0, 1),
      cx,
      cy,
    };
    setZoomState({ key: page.key, level: next });
  }

  const zoomIn = () => zoomTo(ZOOM_LEVELS.find((l) => l > zoom) ?? maxZoom);
  const zoomOut = () => zoomTo([...ZOOM_LEVELS].reverse().find((l) => l < zoom) ?? 1);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      // Keep keyboard focus inside the dialog.
      if (e.key === "Tab") {
        const focusable = [...dialogRef.current.querySelectorAll("button:not([disabled])")];
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        return;
      }
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        zoomIn();
      } else if (e.key === "-" || e.key === "_") {
        e.preventDefault();
        zoomOut();
      } else if (zoom > 1 && e.key.startsWith("Arrow")) {
        // Zoomed in: arrows pan around the page.
        e.preventDefault();
        const dx = e.key === "ArrowLeft" ? -ARROW_PAN : e.key === "ArrowRight" ? ARROW_PAN : 0;
        const dy = e.key === "ArrowUp" ? -ARROW_PAN : e.key === "ArrowDown" ? ARROW_PAN : 0;
        scrollRef.current?.scrollBy({ left: dx, top: dy });
      } else if (e.key === "ArrowLeft" && onPrev) {
        e.preventDefault();
        onPrev();
      } else if (e.key === "ArrowRight" && onNext) {
        e.preventDefault();
        onNext();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  // Mouse drag pans a zoomed page; touch uses native scrolling.
  function onPointerDown(e) {
    movedRef.current = false;
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const el = scrollRef.current;
    panRef.current = { x: e.clientX, y: e.clientY, left: el.scrollLeft, top: el.scrollTop };
  }

  function onPointerMove(e) {
    const pan = panRef.current;
    if (!pan) return;
    const dx = e.clientX - pan.x;
    const dy = e.clientY - pan.y;
    if (!movedRef.current && Math.abs(dx) + Math.abs(dy) < DRAG_THRESHOLD) return;
    movedRef.current = true;
    scrollRef.current.scrollLeft = pan.left - dx;
    scrollRef.current.scrollTop = pan.top - dy;
  }

  function endPan() {
    panRef.current = null;
  }

  function onClick(e) {
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    if (e.target.tagName === "IMG") {
      zoomTo(zoom === 1 ? CLICK_ZOOM : 1, e.clientX, e.clientY);
    } else if (zoom === 1) {
      onClose();
    }
  }

  const controlClass =
    "w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors disabled:opacity-30 disabled:pointer-events-none";
  const sideClass =
    "absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center backdrop-blur-sm";

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${alt}, zoomed`}
      className="fixed inset-0 z-[100] bg-gray-950 text-white flex flex-col"
    >
      {/* Toolbar */}
      <div className="flex-shrink-0 h-16 px-4 flex items-center justify-between gap-2 border-b border-white/10">
        <p className="text-sm text-white/80" aria-live="polite">
          Page {pageNumber} of {pageCount}
        </p>
        <div className="flex items-center gap-2">
          <button type="button" onClick={zoomOut} disabled={zoom === 1} aria-label="Zoom out" className={controlClass}>
            <ZoomOut className="w-5 h-5" />
          </button>
          <span className="w-12 text-center text-sm tabular-nums text-white/80">
            {zoom === 1 ? "Fit" : `${zoom}×`}
          </span>
          <button type="button" onClick={zoomIn} disabled={zoom === maxZoom} aria-label="Zoom in" className={controlClass}>
            <ZoomIn className="w-5 h-5" />
          </button>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close zoom" className={`${controlClass} ml-2`}>
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Page */}
      <div className="relative flex-1 min-h-0">
        <div
          ref={scrollRef}
          className="absolute inset-0 overflow-auto overscroll-contain"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endPan}
          onPointerLeave={endPan}
          onPointerCancel={endPan}
          onClick={onClick}
        >
          <div className="flex min-w-full min-h-full">
            {imgW > 0 && (
              <Image
                loader={sanityLoader}
                src={photoSrc(page)}
                alt={alt}
                width={naturalW}
                height={naturalH}
                sizes={`${Math.round(imgW)}px`}
                loading="eager"
                draggable={false}
                onLoad={() => setLoadedKey(page.key)}
                className={`m-auto flex-shrink-0 max-w-none select-none ${zoom === 1 ? "cursor-zoom-in" : "cursor-grab active:cursor-grabbing"}`}
                style={{ width: imgW, height: imgH }}
              />
            )}
          </div>
        </div>

        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <LoaderCircle className="w-8 h-8 animate-spin text-white/60" aria-label="Loading page" />
          </div>
        )}

        {onPrev && (
          <button type="button" onClick={onPrev} aria-label="Previous page" className={`${sideClass} left-2`}>
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        {onNext && (
          <button type="button" onClick={onNext} aria-label="Next page" className={`${sideClass} right-2`}>
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {page.caption && (
        <p className="flex-shrink-0 px-4 py-3 text-center text-sm text-white/90 border-t border-white/10 whitespace-pre-line">
          {page.caption}
        </p>
      )}
    </div>
  );
}
