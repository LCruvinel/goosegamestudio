"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Our Games" },
  { href: "https://shop.goosegamestudio.com/", label: "Shop" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const gameMenuItems = [
  { href: "/games/plot", label: "Plot" },
  { href: "/games/caravela", label: "Caravela" },
  { href: "/games/green-cycle", label: "Green Cycle" },
  { href: "/games/global-power", label: "Global Power" },
  { href: "/games/island-lords", label: "Island Lords" },
  { href: "/games/baltics", label: "Baltics" },
  { href: "/games/jovian-rising", label: "Jovian Rising" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isGamesOpen, setIsGamesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[1px] border-[#0f8a60] bg-[#1CB57E]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-[65px] w-[105px] overflow-hidden rounded-md bg-transparent">
            <Image
              src="https://goosegamestudio.com/wp-content/uploads/GGSNLogov2.png"
              alt="Goose Game Studio logo"
              fill
              priority
              className="object-contain"
              sizes="105px"
            />
          </div>
        </Link>

        <nav className="hidden items-center md:flex">
          {navItems.map((item, index) => {
            const isExternal = item.href.startsWith("http");
            const showDivider = index > 0;

            if (item.label === "Our Games") {
              return (
                <div key={item.href} className="group relative flex items-center">
                  {showDivider && <span className="mr-3 h-[72px] w-[1px] bg-white/95" aria-hidden="true" />}
                  <button
                    type="button"
                    className="flex items-center gap-2 px-2 text-[11px] font-semibold tracking-[0.2em] text-white/90 transition hover:text-[#d7f7ea]"
                    aria-label="Open games menu"
                  >
                    <span>Our Games</span>
                    <span aria-hidden="true" className="text-base leading-none">▾</span>
                  </button>

                  <div className="pointer-events-none absolute left-0 top-full pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                    <div className="min-w-[220px] rounded-md border border-white/30 bg-[#1CB57E] p-2 shadow-lg">
                      {gameMenuItems.map((game) => (
                        <Link
                          key={game.href}
                          href={game.href}
                          className="block rounded-sm px-3 py-2 text-left text-[11px] font-semibold tracking-[0.16em] text-white/90 transition hover:bg-white/10 hover:text-white"
                        >
                          {game.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={item.href} className="flex items-center">
                {showDivider && <span className="mr-3 h-[72px] w-[1px] bg-white/95" aria-hidden="true" />}
                {isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 text-[11px] font-semibold tracking-[0.2em] text-white/90 transition hover:text-[#d7f7ea]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className="px-2 text-[11px] font-semibold tracking-[0.2em] text-white/90 transition hover:text-[#d7f7ea]">
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/40 bg-white/10 text-white md:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-[2px] w-5 bg-white" />
            <span className="block h-[2px] w-5 bg-white" />
            <span className="block h-[2px] w-5 bg-white" />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/30 bg-[#1CB57E] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isExternal = item.href.startsWith("http");

              if (item.label === "Our Games") {
                return (
                  <div key={item.href} className="rounded-md border border-white/20 bg-white/5 p-2">
                    <button
                      type="button"
                      onClick={() => setIsGamesOpen((current) => !current)}
                      className="flex w-full items-center justify-between text-left text-[11px] font-semibold tracking-[0.2em] text-white/90"
                    >
                      <span>Our Games</span>
                      <span aria-hidden="true" className="text-base leading-none">{isGamesOpen ? "▴" : "▾"}</span>
                    </button>

                    {isGamesOpen && (
                      <div className="mt-3 flex flex-col gap-2 border-t border-white/20 pt-3 pl-2">
                        {gameMenuItems.map((game) => (
                          <Link
                            key={game.href}
                            href={game.href}
                            onClick={() => {
                              setIsOpen(false);
                              setIsGamesOpen(false);
                            }}
                            className="text-[11px] font-semibold tracking-[0.16em] text-white/90"
                          >
                            {game.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const content = isExternal ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-[11px] font-semibold tracking-[0.2em] text-white/90"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[11px] font-semibold tracking-[0.2em] text-white/90"
                >
                  {item.label}
                </Link>
              );

              return content;
            })}
          </div>
        </div>
      )}
    </header>
  );
}
