"use client";

import Image from "next/image";
import { useState } from "react";

type CandleSlide = {
  src: string;
  alt: string;
};

type CandleCarouselProps = {
  slides: CandleSlide[];
};

export function CandleCarousel({ slides }: CandleCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (slides.length === 0) {
    return null;
  }

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-ivory/80">
        <div className="relative aspect-[5/4] w-full">
          <Image
            src={slides[activeIndex].src}
            alt={slides[activeIndex].alt}
            fill
            sizes="(min-width: 1280px) 40vw, (min-width: 768px) 46vw, 100vw"
            className="object-cover"
          />
        </div>

        <button
          type="button"
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-gold/60 bg-plum/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-ivory transition hover:bg-plum/90"
          aria-label="Imagen anterior"
        >
          ←
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-gold/60 bg-plum/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-ivory transition hover:bg-plum/90"
          aria-label="Siguiente imagen"
        >
          →
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === activeIndex ? "bg-gold" : "bg-gold/35 hover:bg-gold/55"
            }`}
            aria-label={`Ir a imagen ${index + 1}: ${slide.alt}`}
          />
        ))}
      </div>
    </div>
  );
}
