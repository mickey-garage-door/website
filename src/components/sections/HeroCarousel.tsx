"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

interface HeroCarouselProps {
  images: string[];
  /** milliseconds between slides (default 5000) */
  interval?: number;
}


export default function HeroCarousel({ images, interval = 5000 }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const count = images.length;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + count) % count);
  }, [count]);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
  }, []);

  // Autoplay
  useEffect(() => {
    if (paused || count <= 1) return;
    timerRef.current = setTimeout(next, interval);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused, count, interval, next]);

  if (count === 0) return null;

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Hero images"
    >
      {/* Slides */}
      {images.map((src, idx) => (
        <div
          key={src}
          aria-roledescription="slide"
          aria-hidden={idx !== current}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: idx === current ? 1 : 0 }}
        >
          <Image
            src={`/hero-images/${src}`}
            alt={`Garage door service photo ${idx + 1}`}
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover"
          />
          {/* Gradient overlay so hero text stays readable */}
          <div className="absolute inset-0 bg-brand-gradient-hero opacity-45" />
        </div>
      ))}

      {/* Prev / Next arrows — only if more than one slide */}
      {count > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: idx === current ? "#ffffff" : "rgba(255,255,255,0.4)",
                  transform: idx === current ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
