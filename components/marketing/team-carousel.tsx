"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

type TeamCarouselProps = {
  members: TeamMember[];
};

export function TeamCarousel({ members }: TeamCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  if (members.length === 0) {
    return null;
  }

  const activeMember = members[activeIndex];

  const goToSlide = useCallback(
    (nextIndex: number) => {
      setActiveIndex((nextIndex + members.length) % members.length);
    },
    [members.length],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          goToSlide(activeIndex + 1);
          break;
        case "ArrowLeft":
          event.preventDefault();
          goToSlide(activeIndex - 1);
          break;
        case "Home":
          event.preventDefault();
          goToSlide(0);
          break;
        case "End":
          event.preventDefault();
          goToSlide(members.length - 1);
          break;
        default:
          break;
      }
    },
    [activeIndex, goToSlide, members.length],
  );

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        goToSlide(activeIndex + 1);
      } else {
        goToSlide(activeIndex - 1);
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      aria-label="Team members carousel"
      aria-roledescription="carousel"
      aria-live="polite"
      className="w-full"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div
        className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f9f4ec] p-4 shadow-[0_20px_40px_rgba(32,22,17,0.08)] sm:p-6"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMember.id}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] bg-slate-100">
              <Image
                src={activeMember.image}
                alt={`${activeMember.name}, ${activeMember.role}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-700">Team</p>
              <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                {activeMember.name}
              </h3>
              <p className="mt-2 text-base font-semibold uppercase tracking-[0.18em] text-slate-600">
                {activeMember.role}
              </p>
              <p className="mt-5 max-w-lg text-base leading-8 text-slate-700">{activeMember.bio}</p>

              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => goToSlide(activeIndex - 1)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-lg text-slate-700 transition hover:border-amber-400 hover:text-amber-700"
                  aria-label="Previous team member"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => goToSlide(activeIndex + 1)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-lg text-slate-700 transition hover:border-amber-400 hover:text-amber-700"
                  aria-label="Next team member"
                >
                  →
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3" role="tablist" aria-label="Select team member">
        {members.map((member, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={member.id}
              type="button"
              role="tab"
              aria-label={`View ${member.name}`}
              aria-selected={isActive}
              aria-controls={`team-slide-${member.id}`}
              className={[
                "h-3 w-3 rounded-full transition-all",
                isActive ? "w-8 bg-slate-900" : "bg-slate-300 hover:bg-slate-400",
              ].join(" ")}
              onClick={() => goToSlide(index)}
              tabIndex={isActive ? 0 : -1}
              id={`team-slide-${member.id}`}
            />
          );
        })}
      </div>
    </section>
  );
}
