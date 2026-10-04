"use client";
/**
 * ScrapbookViewer
 * Page-by-page reader for one scrapbook: the current page sized to the
 * screen, previous/next buttons, arrow keys and swipe, a thumbnail strip, an
 * "All pages" grid, and a full-screen zoom for reading clippings. The page
 * number is kept in the address (?page=12) so a page can be shared.
 * Used in: app/history/scrapbooks/[id]/page.js
 */
import React, { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, BookOpen, ChevronLeft, ChevronRight, LayoutGrid, ZoomIn } from "lucide-react";
import { photoSrc, sanityLoader } from "@lib/sanity-image";
import ScrapbookZoom from "@/components/history/ScrapbookZoom";

// Swipe distance (px) or speed (px/s) that turns the page.
const SWIPE_DISTANCE = 80;
const SWIPE_VELOCITY = 500;

// The page number lives in the URL. Changes made here use replaceState, so
// flipping through 100 pages doesn't fill the browser history; the Back
// button returns to the previous page of the site.
const PAGE_CHANGE_EVENT = "scrapbook-page-change";

function subscribeToPage(callback) {
  window.addEventListener("popstate", callback);
  window.addEventListener(PAGE_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(PAGE_CHANGE_EVENT, callback);
  };
}

function readPageParam() {
  const n = Number.parseInt(new URLSearchParams(window.location.search).get("page"), 10);
  return Number.isFinite(n) ? n : 1;
}

function writePageParam(pageNumber) {
  const url = new URL(window.location.href);
  if (pageNumber === 1) url.searchParams.delete("page");
  else url.searchParams.set("page", String(pageNumber));
  window.history.replaceState(null, "", url);
  window.dispatchEvent(new Event(PAGE_CHANGE_EVENT));
}

function aspectRatio(page) {
  const { width, height } = page?.dimensions ?? {};
  return width && height ? width / height : 3 / 4;
}

// Stage height: on phones and tablets about a portrait page's height at full
// width (so it fills the width without empty bands), capped to the screen; on
// desktops the screen height left after the title bar, counter and site header.
const STAGE_HEIGHT =
  "h-[min(calc(100svh-9rem),calc((100vw-2rem)*1.3))] lg:h-[calc(100svh-19rem)] min-h-[18rem]";

// Requests about the displayed width: full width on phones and tablets,
// otherwise the width of a page fitted to the stage height.
function stageSizes(page) {
  return `(min-width: 1024px) calc((100vh - 19rem) * ${aspectRatio(page).toFixed(3)}), calc(100vw - 2rem)`;
}

const pageAlt = (page, title, n) => page.alt || `${title}, page ${n}`;

export default function ScrapbookViewer({ scrapbook }) {
  const pages = scrapbook.pages ?? [];
  const count = pages.length;
  const requested = useSyncExternalStore(subscribeToPage, readPageParam, () => 1);
  const index = Math.min(Math.max(requested, 1), count) - 1;
  const page = pages[index];
  const pageNumber = index + 1;

  const [direction, setDirection] = useState(1);
  const [view, setView] = useState("page");
  const [zoomOpen, setZoomOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const draggedRef = useRef(false);
  const stripRef = useRef(null);
  const stageRef = useRef(null);

  const goTo = useCallback(
    (target) => {
      const clamped = Math.min(Math.max(target, 0), count - 1);
      if (clamped === index) return;
      setDirection(clamped > index ? 1 : -1);
      writePageParam(clamped + 1);
    },
    [count, index],
  );
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  // Arrow keys turn pages (the zoom view handles its own keys).
  useEffect(() => {
    if (zoomOpen || view !== "page") return undefined;
    function onKeyDown(e) {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || e.target?.isContentEditable) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(count - 1);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [zoomOpen, view, goPrev, goNext, goTo, count]);

  // Keep the current page's thumbnail centred in the strip, without
  // scrolling the window.
  useEffect(() => {
    const strip = stripRef.current;
    const thumb = strip?.querySelector(`[data-index="${index}"]`);
    if (!strip || !thumb) return;
    strip.scrollTo({
      left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [index, view, reduceMotion]);

  function chooseFromGrid(i) {
    goTo(i);
    setView("page");
    stageRef.current?.scrollIntoView({ block: "start", behavior: reduceMotion ? "auto" : "smooth" });
  }

  if (!page) return null;

  const offset = reduceMotion ? 0 : 60;
  const neighbours = [pages[index - 1], pages[index + 1]].filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Title bar */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <Link
              href="/history#scrapbooks"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to History
            </Link>
            <h1 className="text-2xl lg:text-3xl font-bold">{scrapbook.title}</h1>
            {(scrapbook.years || scrapbook.description) && (
              <p className="mt-1 text-sm lg:text-base text-white/70 max-w-3xl line-clamp-2">
                {[scrapbook.years, scrapbook.description].filter(Boolean).join(" · ")}
              </p>
            )}
          </div>
          <div className="flex flex-shrink-0 items-center gap-2" role="group" aria-label="View">
            <button
              type="button"
              onClick={() => setView("page")}
              aria-pressed={view === "page"}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                view === "page" ? "bg-nile-green text-white" : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Page by page
            </button>
            <button
              type="button"
              onClick={() => setView("grid")}
              aria-pressed={view === "grid"}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                view === "grid" ? "bg-nile-green text-white" : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              All pages
            </button>
          </div>
        </div>
      </section>

      <div ref={stageRef} className="scroll-mt-20">
        {view === "page" ? (
          <section aria-roledescription="carousel" aria-label={scrapbook.title}>
            {/* Stage */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
              <div className={`relative overflow-hidden ${STAGE_HEIGHT}`}>
                {/* Preload the neighbouring pages at the same size. */}
                {neighbours.map((p) => (
                  <Image
                    key={`preload-${p.key}`}
                    loader={sanityLoader}
                    src={photoSrc(p)}
                    alt=""
                    aria-hidden
                    fill
                    loading="eager"
                    className="object-contain opacity-0 pointer-events-none"
                    sizes={stageSizes(p)}
                  />
                ))}

                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={page.key}
                    custom={direction}
                    variants={{
                      enter: (dir) => ({ x: dir * offset, opacity: 0 }),
                      center: { x: 0, opacity: 1 },
                      exit: (dir) => ({ x: -dir * offset, opacity: 0 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    drag={count > 1 ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.5}
                    onPointerDown={() => {
                      draggedRef.current = false;
                    }}
                    onDragStart={() => {
                      draggedRef.current = true;
                    }}
                    onDragEnd={(e, { offset: o, velocity }) => {
                      if (o.x < -SWIPE_DISTANCE || velocity.x < -SWIPE_VELOCITY) goNext();
                      else if (o.x > SWIPE_DISTANCE || velocity.x > SWIPE_VELOCITY) goPrev();
                    }}
                    onClick={() => {
                      if (!draggedRef.current) setZoomOpen(true);
                    }}
                    className="absolute inset-0 cursor-zoom-in"
                  >
                    <Image
                      loader={sanityLoader}
                      src={photoSrc(page)}
                      alt={pageAlt(page, scrapbook.title, pageNumber)}
                      fill
                      loading="eager"
                      draggable={false}
                      className="object-contain select-none"
                      sizes={stageSizes(page)}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Previous / next */}
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={index === 0}
                  aria-label="Previous page"
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center backdrop-blur-sm transition-opacity disabled:opacity-0 disabled:pointer-events-none"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={index === count - 1}
                  aria-label="Next page"
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center backdrop-blur-sm transition-opacity disabled:opacity-0 disabled:pointer-events-none"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Counter, caption and zoom */}
              <div className="flex flex-col items-center gap-2 py-4 text-center">
                <div className="flex items-center gap-3">
                  <p className="text-sm text-white/80" aria-live="polite">
                    Page {pageNumber} of {count}
                  </p>
                  <button
                    type="button"
                    onClick={() => setZoomOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-sm transition-colors"
                  >
                    <ZoomIn className="w-4 h-4" />
                    Zoom
                  </button>
                </div>
                {page.caption && (
                  <p className="text-white/90 max-w-2xl whitespace-pre-line">{page.caption}</p>
                )}
              </div>
            </div>

            {/* Thumbnail strip */}
            {count > 1 && (
              <div className="border-t border-white/10">
                <div
                  ref={stripRef}
                  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex gap-2 overflow-x-auto"
                >
                  {pages.map((p, i) => (
                    <button
                      key={p.key}
                      type="button"
                      data-index={i}
                      onClick={() => goTo(i)}
                      aria-label={`Go to page ${i + 1}`}
                      aria-current={i === index ? "page" : undefined}
                      className={`relative flex-shrink-0 w-14 h-20 rounded overflow-hidden bg-white/5 ring-2 transition-all ${
                        i === index ? "ring-nile-green opacity-100" : "ring-transparent opacity-50 hover:opacity-90"
                      }`}
                    >
                      <Image
                        loader={sanityLoader}
                        src={photoSrc(p)}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </section>
        ) : (
          /* All pages */
          <section aria-label={`All pages of ${scrapbook.title}`} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {pages.map((p, i) => (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => chooseFromGrid(i)}
                  aria-label={`Open page ${i + 1}`}
                  aria-current={i === index ? "page" : undefined}
                  className={`group text-left rounded-lg overflow-hidden ring-2 transition-all ${
                    i === index ? "ring-nile-green" : "ring-transparent hover:ring-white/40"
                  }`}
                >
                  <div className="relative aspect-[3/4] bg-white/5">
                    <Image
                      loader={sanityLoader}
                      src={photoSrc(p)}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 17vw, 160px"
                    />
                  </div>
                  <p className="py-1.5 text-center text-xs text-white/70 group-hover:text-white">
                    {i + 1}
                  </p>
                </button>
              ))}
            </div>
          </section>
        )}
      </div>

      {zoomOpen && (
        <ScrapbookZoom
          page={page}
          alt={pageAlt(page, scrapbook.title, pageNumber)}
          pageNumber={pageNumber}
          pageCount={count}
          onPrev={index > 0 ? goPrev : undefined}
          onNext={index < count - 1 ? goNext : undefined}
          onClose={() => setZoomOpen(false)}
        />
      )}
    </div>
  );
}
