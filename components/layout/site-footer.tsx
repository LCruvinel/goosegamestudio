import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#294336] bg-[#071912] text-[#edf0eb]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-3 lg:px-12">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-xl bg-transparent">
              <Image
                src="/logo-goose-footer.png"
                alt="Goose Game Studio logo"
                width={150}
                height={150}
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
            <div className="text-xl font-black tracking-tight text-white">Goose Game Studio</div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-7 text-[#c9d0c9]">
            Strategy games, bluffing duels, and ambitious tabletop experiences crafted to bring people together.
          </p>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d9b971]">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#dfe8df]">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/games" className="hover:text-white">
                Games
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d9b971]">Connect</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#dfe8df]">
            <li>
              <a href="https://x.com/goosegamestudio" target="_blank" rel="noreferrer" className="hover:text-white">
                X / Twitter
              </a>
            </li>
            <li>
              <a href="https://shop.goosegamestudio.com/" target="_blank" rel="noreferrer" className="hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="mailto:hello@goosegamestudio.com" className="hover:text-white">
                hello@goosegamestudio.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#1a3129] py-4 text-center text-xs text-[#9ba69d]">
        © 2026 Goose Game Studio. All rights reserved.
      </div>
    </footer>
  );
}
