"use client";

import { useState, useEffect, useCallback } from "react";
import Slide01Opening from "@/components/slides/Slide01Opening";
import Slide02Cover from "@/components/slides/Slide02Cover";
import Slide03Accel from "@/components/slides/Slide03Accel";
import Slide04Stats from "@/components/slides/Slide04Stats";
import Slide06Cases from "@/components/slides/Slide06Cases";
import Slide09Services from "@/components/slides/Slide09Services";
import Slide10Sectors from "@/components/slides/Slide10Sectors";
import Slide11Triad from "@/components/slides/Slide11Triad";
import Slide12Process from "@/components/slides/Slide12Process";
import Slide13Closing from "@/components/slides/Slide13Closing";

const TOTAL = 10;

// Outer background per slide (matches Reveal.js data-background-color)
const slideBgs: Record<number, string> = {
  3: "var(--dark)", // Slide 04 Stats — full dark
};

const slides = [
  Slide01Opening,
  Slide02Cover,
  Slide03Accel,
  Slide04Stats,
  Slide06Cases,
  Slide09Services,
  Slide10Sectors,
  Slide11Triad,
  Slide12Process,
  Slide13Closing,
];

export default function Presentation() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(TOTAL - 1, c + 1)), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const SlideComponent = slides[current];
  const progress = ((current + 1) / TOTAL) * 100;

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden" style={{ background: slideBgs[current] ?? "var(--bg)", transition: "background 0.3s ease" }}>
      {/* Progress bar */}
      <div className="w-full h-[2px] flex-shrink-0" style={{ background: "var(--g100)" }}>
        <div
          className="h-full transition-all duration-300"
          style={{ width: `${progress}%`, background: "var(--blue-mid)" }}
        />
      </div>

      {/* Slide area */}
      <div className="flex-1 relative overflow-hidden flex items-center justify-center">
        {/* Click zones */}
        <button
          onClick={prev}
          className="absolute left-0 top-0 h-full w-1/4 z-10 cursor-w-resize opacity-0"
          aria-label="Previous slide"
          disabled={current === 0}
        />
        <button
          onClick={next}
          className="absolute right-0 top-0 h-full w-3/4 z-10 cursor-e-resize opacity-0"
          aria-label="Next slide"
          disabled={current === TOTAL - 1}
        />

        {/* Slide frame — 16:9 aspect ratio, scales to viewport */}
        <div
          className="relative w-full"
          style={{ maxWidth: "min(100vw, calc(100vh * 16/9))", aspectRatio: "16/9" }}
        >
          <div className="absolute inset-0">
            <SlideComponent total={TOTAL} />
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex-shrink-0 flex items-center justify-center gap-3 py-2">
        <button
          onClick={prev}
          disabled={current === 0}
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
          style={{ background: current === 0 ? "transparent" : "var(--g100)", color: current === 0 ? "var(--g300)" : "var(--g700)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="flex gap-1">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all"
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                background: i === current ? "var(--blue-mid)" : "var(--g200)",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === TOTAL - 1}
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
          style={{ background: current === TOTAL - 1 ? "transparent" : "var(--g100)", color: current === TOTAL - 1 ? "var(--g300)" : "var(--g700)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
