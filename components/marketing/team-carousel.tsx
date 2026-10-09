"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const idleTimerRef = useRef<number | null>(null);

  if (members.length === 0) {
    return null;
  }

  const activeMember = members[activeIndex];
  const formattedBio = activeMember.bio.replace(/\\n/g, "\n");

  const restartAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);

    if (idleTimerRef.current) {
      window.clearTimeout(idleTimerRef.current);
    }

    idleTimerRef.current = window.setTimeout(() => {
      setIsAutoPlaying(true);
    }, 6000);
  }, []);

  const goToSlide = useCallback(
    (nextIndex: number) => {
      setActiveIndex((nextIndex + members.length) % members.length);
      restartAutoPlay();
    },
    [members.length, restartAutoPlay],
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

      restartAutoPlay();
    },
    [activeIndex, goToSlide, members.length, restartAutoPlay],
  );

  useEffect(() => {
    if (!isAutoPlaying) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % members.length);
    }, 6000);

    return () => {
      window.clearInterval(timer);
      if (idleTimerRef.current) {
        window.clearTimeout(idleTimerRef.current);
      }
    };
  }, [isAutoPlaying, members.length]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    restartAutoPlay();
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
            className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr]"
          >
            <div className="relative flex h-[309px] w-[220px] shrink-0 self-center items-center justify-center lg:justify-self-center">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-[7deg] rounded-[1.5rem] border border-slate-200 bg-slate-200/80 shadow-[0_10px_18px_rgba(17,24,39,0.06)]" />
              <div className="relative flex h-[309px] w-[220px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 shadow-[0_18px_32px_rgba(17,24,39,0.08)] ring-1 ring-white/80 rotate-[-4deg]">
                <Image
                  src={activeMember.image}
                  alt={`${activeMember.name}, ${activeMember.role}`}
                  fill
                  priority
                  sizes="220px"
                  className="h-full w-full object-cover object-center"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </div>

            <div className="flex h-[477.1305px] w-full flex-col justify-center overflow-hidden">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-amber-700">Team</p>

              <div className="mt-3 flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-sm ring-2 ring-white">
                  <Image
                    src={activeMember.image}
                    alt={`${activeMember.name} portrait`}
                    fill
                    priority
                    sizes="64px"
                    className="object-cover object-center"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                    {activeMember.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
                    {activeMember.role}
                  </p>
                </div>
              </div>

              <div className="mt-5 max-w-lg flex-1 overflow-hidden">
                <p className="whitespace-pre-line text-sm leading-7 text-slate-700 sm:text-[15px] sm:leading-8">
                  {formattedBio}
                </p>
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
