"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/slideshow/14.jpg",
    game: "Caravela",
    href: "https://shop.goosegamestudio.com/",
  },
  {
    image: "/slideshow/4L2.jpg",
    game: "Plot",
    href: "https://shop.goosegamestudio.com/",
  },
  {
    image: "/slideshow/5L.jpg",
    game: "Plot",
    href: "https://shop.goosegamestudio.com/",
  },
  {
    image: "/slideshow/9L2.jpg",
    game: "Caravela",
    href: "https://shop.goosegamestudio.com/",
  },
];

export function HomeSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);

    const loadTimer = window.setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => {
      window.clearTimeout(loadTimer);
    };
  }, [activeIndex]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5500);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative border-b-[1px] border-[#d7c6a2] bg-[#061a15]">
      <div className="h-[1px] w-full bg-white" />
      <div className="relative mx-auto h-[360px] w-full overflow-hidden sm:h-[460px] lg:h-[620px]">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#081a15]/80 via-[#081a15]/25 to-[#081a15]/50" />
            {index === activeIndex && (
              <div
                className={`absolute inset-0 z-10 flex items-center justify-center px-6 transition-all duration-1000 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div className="flex max-w-xl flex-col items-center rounded-[1.75rem] border border-white/10 bg-[#081a15]/50 px-6 py-5 text-center backdrop-blur-[2px] sm:px-8 sm:py-7">
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f0d89c] sm:text-base lg:text-lg">
                    AVAILABLE NOW
                  </p>
                  <a
                    href={slide.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center rounded-full bg-[#1CB57E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1bcf88] sm:text-base"
                  >
                    Buy {slide.game} Now
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl justify-center gap-2 px-6 pb-5 pt-4 sm:px-8 lg:px-12">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              index === activeIndex ? "w-9 bg-[#1cb57e]" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
