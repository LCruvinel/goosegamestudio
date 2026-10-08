import Link from "next/link";
import type { Game } from "@/lib/games";

type GameCardProps = {
  game: Game;
};

export function GameCard({ game }: GameCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.6rem] border border-[#2e4738] bg-[#0c1f1a] text-[#edf3ed] shadow-[0_18px_42px_rgba(10,19,17,0.25)] transition-transform duration-200 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden border-b border-[#2e4738] bg-cover bg-center" style={{ backgroundImage: `url(${game.heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f1a] via-[#0c1f1a]/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-[#d9b971]/40 bg-[#0b1a17]/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#f0d89c]">
          {game.releaseStatus}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#d9b971]">{game.gameType}</p>
          <span className="text-[10px] uppercase tracking-[0.12em] text-[#dfe8df]">{game.playerCount}</span>
        </div>

        <h3 className="mt-4 text-2xl font-black tracking-tight text-white">{game.name}</h3>
        <p className="mt-3 text-sm leading-7 text-[#dce7df]">{game.shortDescription}</p>

        <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.12em] text-[#dfe8df]">
          <span>{game.ageRange}</span>
          <span>{game.gameDuration}</span>
        </div>

        <Link
          href={`/games/${game.slug}`}
          className="mt-6 inline-flex text-sm font-semibold text-[#f0d89c] transition hover:text-[#f8e7b9]"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
