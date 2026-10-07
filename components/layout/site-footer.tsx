import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-3 lg:px-12">
        <div>
          <div className="text-xl font-black text-white">Goose Game Studio</div>
          <p className="mt-4 max-w-xs text-sm text-slate-400">
            Tabletop games built for memorable evenings, smart strategy, and shared storytelling.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
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
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Connect</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white">
                X / Twitter
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white">
                YouTube
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
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © 2026 Goose Game Studio. All rights reserved.
      </div>
    </footer>
  );
}
